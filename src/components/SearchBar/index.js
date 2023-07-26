import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Busca = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <>
        <Container>
            <Form className="ms-auto mb-2 mb-lg-0">
              <Row>
                <Col lg={9}>
                  <Form.Control
                    type="text"
                    placeholder="Digite o termo de busca..."
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col lg={3} className="mt-2 mt-lg-0">
                  <Button variant="primary" onClick={handleSearch}>
                    Buscar
                  </Button>
                </Col>
              </Row>
            </Form>
        </Container>
{/*   

          <Form>
            <Col xs={12} className="d-lg-none">
              <Form.Control
                type="text"
                placeholder="Digite o termo de busca..."
                value={searchTerm}
                onChange={handleInputChange}
              />
            </Col>
            <Col xs={12} className="d-lg-none mt-2">
              <Button variant="primary" onClick={handleSearch} block>
                Buscar
              </Button>
            </Col>
        </Form> */}
    </>
  );
};

export default Busca;