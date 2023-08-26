export enum Priority {
  High = 1,
  Medium = 2,
  Low = 3,
}

export type Todo = {
  id: string;
  title: string;
  priority: Priority; // Notice the change here.
  description: string;
  createdAt: number;
};

export type TodoState = Todo[];

// Since todo is the root state, it should be of type TodoState directly.
export type AppState = { todos: TodoState };
