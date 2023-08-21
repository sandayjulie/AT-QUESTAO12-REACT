import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../IMG/LOGO.png'

function Projeto() {
  return (
    <>
      <Navbar className="cor">
        <Container>

          <Navbar.Brand href="/"><img
          className="d-block w-100"
          height={45}
          width={45}
          src={img}
          alt="First slide"
      /></Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='link' href="/">Home</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link className='link' href="/Sobre">Sobre Nós</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link className='link' href="/Contato">Contato</Nav.Link>&nbsp;&nbsp;&nbsp;
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <Button className='butt' >Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </>
  );
}

export default Projeto;
