import React, { useEffect, useState } from 'react';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import TodoSummary from './Components/TodoSummary';
import useTodo from './Hooks/useTodos';
import Snowfall from './Styles/Snowfall';
import Settings from './Settings/Settings';

const App = () => {
  
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
    theme, 
    toggleTheme,
    isOpenColor,
    toggleOpenColor,
    selectedColor,
    setSelectedColor,
    // handleDragEnd,
    // DndContext,
    // closestCenter,
  } = useTodo();
  
  return (
    
    <main className='relative py-10 h-screen space-y-5 overflow-y-auto bg-white dark:bg-gray-500'>
      <Snowfall theme={theme}/>
      <h1 className='font-bold text-3xl text-center font-family'>Your Todos</h1>
      <Settings theme={theme} toggleTheme={toggleTheme} isOpenColor={isOpenColor} toggleOpenColor={toggleOpenColor} setSelectedColor={setSelectedColor}/>
      <div className='max-w-lg mx-auto bg-slate-100 p-5 rounded-md space-y-6'>
        <AddTodoForm onSubmit={addTodo} selectedColor={selectedColor}/>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo} selectedColor={selectedColor}/>
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos}/>
    </main>
  )
}

export default App
