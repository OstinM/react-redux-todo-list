
import { Todo } from "../Todo/Todo";
import { TodoFormCreate } from "../TodoFormCreate/TodoFormCreate";
import "./TodoList.css";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const USER_ID = 1;

export const TodoList = () => {
  const todos = useAppSelector(state => state.todos);

  return (
    <div className="todos-block">
      <h2 className="todo-title">Todo</h2>
      <TodoFormCreate />
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo 
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};
