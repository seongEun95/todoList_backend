import { todoService } from '../service';

// 조회
export const getTodos = async (req, res, next) => {
	try {
		console.log(req.user);

		const result = await todoService.getTodos(req, next);
		res.status(200).json({ message: 'SUCCESS', result });
	} catch (err) {
		console.error('/todo get 에러 발생');
		next(err);
	}
};

// 생성
export const postTodos = async (req, res, next) => {
	try {
		const result = await todoService.postTodos(req, next);
		res.status(200).json({ message: 'SUCCESS', result });
	} catch (err) {
		console.error('/todo post 에러 발생');
		next(err);
	}
};

// 수정
export const patchTodos = async (req, res, next) => {
	try {
		const result = await todoService.patchTodos(req, next);
		res.status(200).json({ message: 'SUCCESS', result });
	} catch (err) {
		console.error('/todo patch 에러 발생');
		next(err);
	}
};

// 삭제
export const deleteTodos = async (req, res, next) => {
	try {
		await todoService.deleteTodos(req, next);
		res.status(200).json({ message: 'SUCCESS' });
	} catch (err) {
		console.error('/todo delete 에러 발생');
		next(err);
	}
};
