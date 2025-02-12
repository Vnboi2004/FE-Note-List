import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../Types/Todos'

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
};

const TodoList = ({todos, onCompletedChange, onDelete}: TodoListProps) => {

    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) return b.id - a.id;

        return a.completed ? 1 : -1;
    })

    return (
        <>
            <div className='space-y-2'>
                {todosSorted.map((todo) => (
                <p key={todo.id} className='text-lg'>
                    <TodoItem todo={todo} onCompletedChange={onCompletedChange} onDelete={onDelete}/>
                </p>
                ))}
            </div>
            {todos.length === 0 && (
                <p className='font-family text-center text-sm bg-amber-300 mx-10 rounded-md py-1'>
                    No todos found. Add some by clicking the "Add Todo" button above!
                </p>
            )}
        </>
    )
}

export default TodoList
