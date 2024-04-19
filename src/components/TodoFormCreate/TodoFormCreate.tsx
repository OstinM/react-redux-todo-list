import { useState } from 'react';
import './TodoFormCreate.css'
import { TodoType } from "../../types/TodoType";
import { USER_ID } from '../TodoList/TodoList';
import { useAppDispatch } from '../../hooks';
import { addTodo } from '../../features/TodoReducer';


export const TodoFormCreate: React.FC = () => {
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');

  const dispatch = useAppDispatch();

  const  handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: TodoType = {
      id: Date.now(),
      title: newTodoTitle,
      completed: false,
      userId: USER_ID,
    }

    if (newTodoTitle.length > 0) {
      dispatch(addTodo(newTodo));
    }

    setNewTodoTitle('');
  }

  const handleClearInput = () => {
    setNewTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo} className='create-form'>
      <input 
        className="create-input" 
        type="text"
        placeholder='Enter Title'
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
     {newTodoTitle && (
       <span 
        className='clear-button' 
        onClick={handleClearInput}
      >
       </span>
     )}
    </form>
  );
}