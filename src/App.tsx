import "./App.css";
import { TodoList } from "./components/TodoList/TodoList";

export const App = () => {
  return (
    <div className="page-container">
      <TodoList />
    </div>
  );
};
