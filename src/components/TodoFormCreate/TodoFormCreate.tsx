import { useState } from 'react';
import './TodoFormCreate.css'
import { TodoType } from "../../types/TodoType";
import { USER_ID } from '../TodoList/TodoList';
import { useAppDispatch } from '../../hooks';
import { addTodo } from '../../features/TodoReducer';


export const TodoFormCreate: React.FC = () => {
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');

  const dispatch = useAppDispatch();

  const  handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: TodoType = {
      id: Date.now(),
      title: newTodoTitle,
      completed: false,
      userId: USER_ID,
    }

    await dispatch(addTodo(newTodo));

    setNewTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input 
        className="create-form" 
        type="text"
        placeholder='Enter Title'
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
    </form>
  );
}