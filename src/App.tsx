import React, { useState } from 'react';
import { dummyData } from './Data/Todos';
import TodoItem from './Components/TodoItem';
import AddTodoForm from './Components/AddTodoForm';

const App = () => {
  const [todos, setTodos] = useState(dummyData);
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        (todo.id === id ? {...todo, completed} : todo)))
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos
    ])
  }

  return (
    <main className='py-10 h-screen space-y-5'>
      <h1 className='font-bold text-3xl text-center font-family'>Your Todos</h1>
      <div className='max-w-lg mx-auto bg-slate-100 p-5 rounded-md space-y-6'>
        <AddTodoForm onSubmit={addTodo}/>
        <div className='space-y-2'>
          {todos.map((todo) => (
            <p key={todo.id} className='text-lg'>
              <TodoItem todo={todo} onCompletedChange={setTodoCompleted}/>
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
