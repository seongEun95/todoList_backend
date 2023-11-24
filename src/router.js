import { Router } from 'express';
import prisma from './prisma';

const router = Router();

router //
	.route('/todos')
	.get((req, res, next) => {
		try {
			res.status(200).json({ result: 'ddd' });
		} catch (err) {
			console.error('/todos에서 에러 발생');
			next(err);
		}
	});

export default router;
