import { useTodoContext } from "../context/TodoContext";
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "lucide-react";

const SearchComponent = () => {
  const { searchTerm, updateSearchTerm } = useTodoContext();

  return (
    <Form className="mb-4">
      <InputGroup>
        <InputGroup.Text>
          <Search size={16} />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={(e) => updateSearchTerm(e.target.value)}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchComponent;
