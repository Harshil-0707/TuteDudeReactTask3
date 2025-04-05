import { useTodoContext } from "../context/TodoContext";
import { ListGroup, Button, Form } from "react-bootstrap";
import { Trash } from "lucide-react";

const ListComponent = () => {
  const { todos, deleteTodo, toggleTodo } = useTodoContext();

  if (todos.length === 0) {
    return (
      <p className="text-center text-muted my-4">
        No todos yet. Add one above!
      </p>
    );
  }

  return (
    <ListGroup className="mb-4">
      {todos.map((todo) => (
        <ListGroup.Item
          key={todo.id}
          className="d-flex justify-content-between align-items-center"
        >
          <Form.Check
            type="checkbox"
            id={`todo-${todo.id}`}
            label={
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#6c757d" : "inherit",
                }}
              >
                {todo.text}
              </span>
            }
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <Button
            variant="danger"
            size="sm"
            onClick={() => deleteTodo(todo.id)}
          >
            <Trash size={16} />
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListComponent;
