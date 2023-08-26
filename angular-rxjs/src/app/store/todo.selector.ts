import { createSelector } from '@ngrx/store';
import { AppState, TodoState } from './todo.model'; // Adjust the path accordingly

export const selectTodosState = (state: AppState) => state.todos;

export const selectSortedTodosByPriority = createSelector(
  selectTodosState,
  (todos: TodoState) => [...todos].sort((a, b) => a.priority - b.priority)
);

export const selectSortedTodosByDate = createSelector(
  selectTodosState,
  (todos: TodoState) => [...todos].sort((a, b) => b.createdAt - a.createdAt)
);
