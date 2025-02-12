import React, { useEffect, useState } from 'react';
import { dummyData } from './Data/Todos';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import TodoSummary from './Components/TodoSummary';
import useTodo from './Hooks/useTodos';
import Snowfall from './Styles/Snowfall';

const App = () => {
  
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodo();

  return (
    
    <main className='py-10 h-screen space-y-5 overflow-y-auto bg-gray-500'>
      <Snowfall/>
      <h1 className='font-bold text-3xl text-center font-family'>Your Todos</h1>
      <div className='max-w-lg mx-auto bg-slate-100 p-5 rounded-md space-y-6'>
        <AddTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo}/>
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos}/>
    </main>
  )
}

export default App
