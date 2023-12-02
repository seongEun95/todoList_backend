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
export const postTodos = async (text, next) => {
	try {
		const result = await prisma.todos.create({ data: { text } });
		return result;
	} catch (err) {
		console.error('/todo post 에러 발생');
		next(err);
	}
};

// 수정
export const patchTodos = async (req, next) => {
	try {
		const newData = {};

		if ('text' in req.body) newData.text = req.body.text;
		if ('done' in req.body) newData.done = req.body.done;

		const target = +req.params.id;
		const result = await prisma.todos.update({ where: { id: target }, data: newData });
		return result;
	} catch (err) {
		console.error('/todo patch 에러 발생');
		next(err);
	}
};

// 삭제
export const deleteTodos = async (target, next) => {
	try {
		await prisma.todos.delete({ where: { id: +target } });
	} catch (err) {
		console.error('/todo delete 에러 발생');
		next(err);
	}
};

export const deleteAllTodos = async next => {
	try {
		await prisma.todos.deleteMany();
	} catch (err) {
		console.error(err);
		next(err);
	}
};
