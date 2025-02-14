import { useEffect, useState } from "react";
import { dummyData } from "../Data/Todos";

export default function useTodo() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos : dummyData;
    });

    const [isOpenColor, setIsOpenColor] = useState(false);

    const [theme, setTheme] = useState(() =>
        localStorage.getItem("theme") ?? 
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
    
    const [selectedColor, setSelectedColor] = useState("");

    useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleOpenColor = (e) => {
        e.preventDefault();
        setIsOpenColor(!isOpenColor);
    }

    const toggleTheme = (e) => {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            localStorage.setItem("todos", JSON.stringify(todos));
        }, 300);
        return () => clearTimeout(timeout);
    }, [todos]);

    function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => 
                todo.id === id ? {...todo, completed} : todo
            )
        );
    }

    function addTodo(title: string) {
        setTodos((prevTodos) => [
            {
                id: Date.now(),
                title,
                completed: false,
            },
            ...prevTodos,
        ]);
    }

    function deleteTodo(id: number) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    function deleteAllCompletedTodos() {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    }

    return {
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
    };
};
