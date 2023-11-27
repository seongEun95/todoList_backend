import { todoRepository } from '../repository';

// 조회
export const getTodos = async (req, next) => {
	try {
		const id = req.query.id;
		const todo = await todoRepository.getTodos(id);
		return todo;
	} catch (err) {
		console.error('/todo get 에러 발생');
		next(err);
	}
};

// 생성
export const postTodos = async req => {
	try {
		const todo = await todoRepository.postTodos(req);
		return todo;
	} catch (err) {
		console.error('/todo post 에러 발생');
		next(err);
	}
};

// 수정
export const patchTodos = async (req, next) => {
	try {
		const todo = await todoRepository.patchTodos(req);
		return todo;
	} catch (err) {
		console.error('/todo patch 에러 발생');
		next(err);
	}
};

// 삭제
export const deleteTodos = async (req, next) => {
	try {
		const todo = await todoRepository.deleteTodos(req);
		return todo;
	} catch (err) {
		console.error('/todo delete 에러 발생');
		next(err);
	}
};
