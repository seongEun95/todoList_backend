import { todoService } from '../service';

// 조회
export const getTodos = async (req, res, next) => {
	try {
		const result = await todoService.getTodos(req);
		res.status(200).json({ result });
	} catch (err) {
		console.error('/todo get 에러 발생');
		next(err);
	}
};

// 생성
export const postTodos = async (req, res, next) => {
	try {
		await todoService.postTodos(req);
		res.status(200).json({ result: '투두리스트 생성 완료' });
	} catch (err) {
		console.error('/todo post 에러 발생');
		next(err);
	}
};

// 수정
export const patchTodos = async (req, res, next) => {
	try {
		await todoService.patchTodos(req);
		res.status(200).json({ result: '투두리스트 수정 완료' });
	} catch (err) {
		console.error('/todo patch 에러 발생');
		next(err);
	}
};

// 삭제
export const deleteTodos = async (req, res, next) => {
	try {
		await todoService.deleteTodos(req);
		res.status(200).json({ result: '투두리스트 삭제 완료' });
	} catch (err) {
		console.error('/todo delete 에러 발생');
		next(err);
	}
};
