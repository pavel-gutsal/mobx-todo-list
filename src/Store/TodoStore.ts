import { action, makeObservable, observable } from "mobx";
import { ITodo } from "../type/ITodo";

export class Todo {
  todos: ITodo[] = [];
  constructor() {
    makeObservable(this, {
      todos: observable,

      getTodos: action,
      addTodo: action,
      deleteTodo: action,
      toggleComplete: action,
    });
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  deleteTodo(id: string) {
    console.log(id);
    this.todos = this.todos.filter((el) => el.id !== id);
  }

  toggleComplete(id: string) {
    this.todos = this.todos.map((el) => {
      if (el.id !== id) {
        return el;
      }

      return { ...el, completed: !el.completed };
    });
  }
}
