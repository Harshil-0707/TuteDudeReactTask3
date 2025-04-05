import { useTodoContext } from "../context/TodoContext";
import { Button } from "react-bootstrap";

const ClearAllButton = () => {
  const { todos, clearAllTodos } = useTodoContext();

  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="text-center">
      <Button variant="outline-danger" onClick={clearAllTodos}>
        Clear All Todos
      </Button>
    </div>
  );
};

export default ClearAllButton;
