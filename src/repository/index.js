import { deleteAllTodos, deleteTodos, getTodos, patchTodos, postTodos } from './todo.repo';

export const todoRepository = {
	getTodos,
	postTodos,
	patchTodos,
	deleteTodos,
	deleteAllTodos,
};
