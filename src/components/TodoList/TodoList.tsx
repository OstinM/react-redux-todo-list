import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { Todo } from "../Todo/Todo";
import { TodoFormCreate } from "../TodoFormCreate/TodoFormCreate";
import "./TodoList.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setTodos } from "../../features/TodoReducer";

export const USER_ID = 1;

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch()
  console.log(todos);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    const reorderedTodos = Array.from(todos);
    const [removed] = reorderedTodos.splice(source.index, 1);
    reorderedTodos.splice(destination.index, 0, removed);

    dispatch(setTodos(reorderedTodos));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="todos-block">
        <h2 className="todo-title">Todo</h2>
        <TodoFormCreate />
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="todo-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <li>
                        <Todo todo={todo} />
                      </li>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
