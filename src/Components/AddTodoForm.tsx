import React, { useState } from 'react';

const AddTodoForm = ({onSubmit, selectedColor}: AddTodoFormProps) => {
    const [input, setInput] = useState("");
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);    
        setInput("");
    };

    return (
        <form className='bg-white flex' onSubmit={handleSubmit}>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            placeholder='What needs to be done?' 
            className={`font-family rounded-s-md grow border border-gray-400 p-2 ${`text-${selectedColor}`}`}/>
            <button 
            type='submit' 
            className='font-family w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800'>
                Add
            </button>
        </form>
    )
}

export default AddTodoForm

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
    selectedColor: string;
}
