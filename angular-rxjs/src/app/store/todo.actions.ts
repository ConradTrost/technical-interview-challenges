import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const addTodo = createAction(
  '[Todo Component] Add Todo',
  props<{ todo: Todo }>()
);
export const removeTodo = createAction(
  '[Todo Component] Remove Todo',
  props<{ id: string }>()
);
export const reset = createAction('[Todo Component] Reset');
