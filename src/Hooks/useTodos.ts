import { useEffect, useState } from "react";
import { dummyData } from "../Data/Todos";

export default function useTodo() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos") || "[");
        return savedTodos.length > 0 ? savedTodos : dummyData;
    });

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])


    function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
        prevTodos.map((todo) => 
        (todo.id === id ? {...todo, completed} : todo)))
    }


    // Thêm nội dung vào list 
    function addTodo(title: string) {
    setTodos((prevTodos) => [
        {
        id: Date.now(),
        title,
        completed: false,
        },
        ...prevTodos,
    ])
    };


    // Xóa nội dung khỏi list
    function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    // Xóa tất cả các nội dung đã hoàn thành
    function deleteAllCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    };
      
    return {
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompletedTodos,
    };
};