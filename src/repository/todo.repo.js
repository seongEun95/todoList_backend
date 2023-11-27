import prisma from '../prisma';

// 조회
export const getTodos = async (id, next) => {
	try {
		if (id) {
			const result = await prisma.todos.findMany({ where: { id: +id } });
			return result;
		} else {
			const result = await prisma.todos.findMany();
			return result;
		}
	} catch (err) {
		console.error('/todo get 에러 발생');
		next(err);
	}
};

// 생성
export const postTodos = async (req, next) => {
	try {
		const result = await prisma.todos.create({ data: { text: req.body.text } });
		return result;
	} catch (err) {
		console.error('/todo post 에러 발생');
		next(err);
	}
};

// 수정
export const patchTodos = async (req, next) => {
	try {
		const target = req.params;
		const result = await prisma.todos.update({ where: { id: +target.id }, data: { text: req.body.text } });
		return result;
	} catch (err) {
		console.error('/todo patch 에러 발생');
		next(err);
	}
};

// 삭제
export const deleteTodos = async (req, next) => {
	try {
		const target = req.params;
		const result = await prisma.todos.delete({ where: { id: +target.id } });
		return result;
	} catch (err) {
		console.error('/todo delete 에러 발생');
		next(err);
	}
};
