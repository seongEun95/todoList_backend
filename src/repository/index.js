import { deleteTodos, getTodos, patchTodos, postTodos, deleteAllTodos } from './todo.repo';

export const todoRepository = {
	getTodos,
	postTodos,
	patchTodos,
	deleteTodos,
	deleteAllTodos,
};
