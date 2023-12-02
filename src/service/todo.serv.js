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
export const postTodos = async (req, next) => {
	try {
		const text = req.body.text;
		const todo = await todoRepository.postTodos(text, next);
		return todo;
	} catch (err) {
		console.error('/todo post 에러 발생');
		next(err);
	}
};

// 수정
export const patchTodos = async (req, next) => {
	try {
		const todo = await todoRepository.patchTodos(req, next);
		return todo;
	} catch (err) {
		console.error('/todo patch 에러 발생');
		next(err);
	}
};

// 삭제
export const deleteTodos = async (req, next) => {
	try {
		const target = req.params.id;
		if (target === 'all') {
			await todoRepository.deleteAllTodos(next);
		} else {
			await todoRepository.deleteTodos(target, next);
		}
	} catch (err) {
		console.error('/todo delete 에러 발생');
		next(err);
	}
};
