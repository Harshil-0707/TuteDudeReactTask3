import { TodoProvider } from "./context/TodoContext";
import InputComponent from "./components/InputComponent";
import ListComponent from "./components/ListComponent";
import SearchComponent from "./components/SearchComponent";
import ClearAllButton from "./components/ClearAllButton";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <TodoProvider>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow">
              <Card.Header className="bg-primary text-white">
                <h1 className="text-center mb-0 fs-4">Todo List App</h1>
              </Card.Header>
              <Card.Body>
                <InputComponent />
                <SearchComponent />
                <ListComponent />
                <ClearAllButton />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </TodoProvider>
  );
}

export default App;
