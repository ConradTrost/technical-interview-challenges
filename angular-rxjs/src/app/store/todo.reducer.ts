import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, reset } from './todo.actions';
import { initialState } from './todo.contants';

const _todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(removeTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(reset, () => [])
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
