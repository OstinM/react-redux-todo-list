import { TodoType } from "../../types/TodoType";
import "./Todo.css";
import { useAppDispatch } from "../../hooks";
import { removeTodo } from "../../features/TodoReducer";
import { useState } from "react";

type Props = {
  todo: TodoType;
};

export const Todo: React.FC<Props> = ({ todo }) => {
  const [isRemoved, setIsRemoved] = useState(false);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = () => {
    setIsRemoved(true);
    setTimeout(() => {
      dispatch(removeTodo(todo.id));
      setIsRemoved(false);
    }, 1000);
  };

  return (
    <div
      className={
        isRemoved ? "todo-element todo-element--removed" : "todo-element"
      }
    >
      <div className="checkbox-wrapper-23">
        <input
          className="todo-check"
          type="checkbox"
          id={`check-${todo.id}`}
          value={todo.id}
          onClick={handleRemoveTodo}
        />
        <label htmlFor={`check-${todo.id}`}>
          <svg viewBox="0,0,50,50">
            <path d="M5 30 L 20 45 L 45 5"></path>
          </svg>
        </label>
      </div>
      {todo.title}
    </div>
  );
};
