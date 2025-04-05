import { createContext, useState, useEffect, useContext } from "react";

// Create context
const TodoContext = createContext();

// Custom hook to use the todo context
export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
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

  // Get filtered todos based on search term
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Context value
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
