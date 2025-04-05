import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { Form, Button, InputGroup } from "react-bootstrap";

const InputComponent = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </InputGroup>
    </Form>
  );
};

export default InputComponent;
