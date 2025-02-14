import { useEffect, useState } from "react";
import { dummyData } from "../Data/Todos";
// import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
// import { arrayMove } from "@dnd-kit/sortable";

export default function useTodo() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos") || "[");
        return savedTodos.length > 0 ? savedTodos : dummyData;
    });

    const [isOpenColor, setIsOpenColo] = useState(false);

    const [theme, setTheme] = useState(() =>
        // ?? (Nullish Coalescing): kiểm tra nếu giá trị bên trái là null hoặc undefined, nó sẽ dùng giá trị bên phải thay thế.
        // window.matchMedia("(prefers-color-scheme: dark)"): kiểm tra xem hệ điều hành của người dùng có đặt dark mode hay không.
        localStorage.getItem("theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
    
    const [selectedColor, setSelectedColor] = useState(" ");

    useEffect(() => {
        setSelectedColor(selectedColor);
    }, [selectedColor]);

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
        setIsOpenColo(!isOpenColor);
    }

    const toggleTheme = (e) => {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    function toggleDarkMode(e) {
        e.preventDefault();
        setIsDarkMode(!isDarkMode);
    }

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
      

    // function handleDragEnd(e: DragEndEvent) {
    //     const { active, over } = e;

    //     if (!over || active.id === over.id) return; // Nếu không có điểm đích hoặc không thay đổi, thoát ra

    //     if (todos.length < 2) return;

    //     const oldIndex = todos.findIndex((todo) => todo.id === active.id);
    //     const newIndex = todos.findIndex((todo) => todo.id === over.id);

    //     if (oldIndex !== -1 && newIndex !== -1) {
    //         setTodos((prevTodos) => arrayMove(prevTodos, oldIndex, newIndex));
    //     }
    // };

    

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
        // handleDragEnd,
        // DndContext,
        // closestCenter,
    };
};