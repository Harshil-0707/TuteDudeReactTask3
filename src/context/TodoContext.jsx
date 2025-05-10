import { createContext, useState, useEffect, useContext } from "react";

// Create context
const TodoContext = createContext();

// Custom hook to use the todo context
export const useTodoContext = () => useContext(TodoContext);

// Load todos safely from localStorage
const loadTodosFromLocalStorage = () => {
  try {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error("Failed to parse todos from localStorage:", error);
    return [];
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(loadTodosFromLocalStorage);
  const [searchTerm, setSearchTerm] = useState("");

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos to localStorage:", error);
    }
  }, [todos]);

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
    }
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Clear all todos
  const clearAllTodos = () => {
    setTodos([]);
  };

  // Update search term
  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  // Filtered todos (do not affect what's stored in localStorage)
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const value = {
    todos: filteredTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    clearAllTodos,
    searchTerm,
    updateSearchTerm,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
