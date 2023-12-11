import { Router } from 'express';
import { todoController } from './controller';
import * as bcrypt from 'bcryptjs';
import prisma from './prisma';
import jwt from 'jsonwebtoken';
import checkLogin from './middleware/checkLogin';

const router = Router();

// 회원가입
router //
	.route('/signup')
	.post(async (req, res, next) => {
		try {
			const { email, password } = req.body;
			const found = await prisma.user.findFirst({ where: { email } });
			if (found) return res.status(400).json({ result: { message: 'EMAIL_EXISTS' } });

			const hashed = await bcrypt.hash(password, 10);
			await prisma.user.create({ data: { email, password: hashed } });

			return res.status(200).json({ result: { message: 'SUCCESS' } });
		} catch (err) {
			console.error(err);
			next(err);
		}
	});

router //
	.route('/signin')
	.post(async (req, res, next) => {
		try {
			const { email, password } = req.body;
			console.log('비밀번호 : ' + req.body.password);

			const found = await prisma.user.findFirst({ where: { email } });
			if (!found) return res.status(400).json({ result: { message: 'EMAIL_NOT_FOUND' } });

			const result = await bcrypt.compare(password, found.password);
			if (!result) return res.status(400).json({ result: { message: 'INVALID_PASSWORD' } });

			const payload = { email };
			const secretKey = process.env.SECRET_KEY;
			const accessToken = jwt.sign(payload, secretKey, { expiresIn: '10m' });

			return res.status(200).json({ result: { message: 'SUCCESS', accessToken } });
		} catch (err) {
			console.error(err);
			next(err);
		}
	});

// 회원조회
router //
	.route('/members')
	.get(async (req, res, next) => {
		try {
			const result = await prisma.user.findMany();
			return res.status(200).json({ result });
		} catch (err) {
			console.error(err);
			next(err);
		}
	});

// 데이터베이스 조회
router //
	.route('/todo')
	.get(checkLogin, todoController.getTodos);

// 데이터베이스 생성
router //
	.route('/todo')
	.post(checkLogin, todoController.postTodos);

// 데이터베이스 수정
router //
	.route('/todo/:id')
	.patch(checkLogin, todoController.patchTodos);

// 데이터베이스 삭제
router //
	.route('/todo/:id')
	.delete(checkLogin, todoController.deleteTodos);

export default router;
