// import React from 'react';
import { Todo } from '../Types/Todos';
import { RiDeleteBinLine } from "react-icons/ri";
interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
    selectedColor: string;
}
const TodoItem = ({todo, onCompletedChange, onDelete, selectedColor}: TodoItemProps) => {
  return (
    <div className='flex items-center gap-2'>
        <label htmlFor="" className='flex items-center gap-2 border border-gray-400 rounded-md p-2 bg-white hover:bg-slate-50 grow'>
            <input 
            type="checkbox" 
            className='scale-125'
            checked={todo.completed}
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
            />
            <span className={`font-family ${todo.completed ? "line-through text-gray-400" : `text-${selectedColor}`}`}>{todo.title}</span>
        </label>
        <button onClick={() => onDelete(todo.id)}>
          <RiDeleteBinLine/>
        </button>
    </div>
  )
}

export default TodoItem
