import { Router } from 'express';
import { todoController } from './controller';

const router = Router();

// 데이터베이스 조회
router //
	.route('/todo')
	.get(todoController.getTodos);

// 데이터베이스 생성
router //
	.route('/todo')
	.post(todoController.postTodos);

// 데이터베이스 수정
router //
	.route('/todo/:id')
	.patch(todoController.patchTodos);

// 데이터베이스 삭제
router //
	.route('/todo/:id')
	.delete(todoController.deleteTodos);

export default router;
