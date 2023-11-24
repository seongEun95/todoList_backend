import { Router } from 'express';
import prisma from './prisma';

const router = Router();

// 데이터베이스 조회
router //
	.route('/todos')
	.get(async (req, res, next) => {
		try {
			const result = await prisma.todos.findMany();
			res.status(200).json({ result: result });
		} catch (err) {
			console.error('/todos get 에러 발생');
			next(err);
		}
	});

// 데이터베이스 생성
router //
	.route('/todos')
	.post(async (req, res, next) => {
		try {
			await prisma.todos.create({ data: { text: req.body.text } });
			res.status(200).json({ result: '투두리스트 추가 완료' });
		} catch (err) {
			console.error('/todos	post 에러 발생');
			next(err);
		}
	});

// 데이터베이스 수정
router //
	.route('/todos/:id')
	.patch(async (req, res, next) => {
		try {
			const target = req.params;
			await prisma.todos.update({ where: { id: +target.id }, data: { text: req.body.text } });
			res.status(200).json({ result: '투두리스트 수정 완료' });
		} catch (err) {
			console.error('/todos patch 에러 발생');
			next(err);
		}
	});

// 데이터베이스 삭제
router //
	.route('/todos/:id')
	.delete(async (req, res, next) => {
		try {
			const target = req.params;
			await prisma.todos.delete({ where: { id: +target.id } });
			res.status(200).json({ result: '투두리스트 삭제 완료' });
		} catch (err) {
			console.error('/todos delete 에러 발생');
			next(err);
		}
	});

export default router;
