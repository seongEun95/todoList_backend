import { deleteTodos, getTodos, patchTodos, postTodos } from './todo.serv';

export const todoService = {
	getTodos,
	postTodos,
	patchTodos,
	deleteTodos,
};
