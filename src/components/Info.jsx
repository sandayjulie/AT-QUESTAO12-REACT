import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';

function Info() {
  return (
    <div>
      <div className="container">
        <InputGroup className="mb-3">
          <InputGroup.Text  id="inputGroup-sizing-default" className="INFO">Nome Completo:</InputGroup.Text>
          <Form.Control aria-label="First name" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" className="INFO">
            E-mail:
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3" >
          <InputGroup.Text id="inputGroup-sizing-default" className="INFO">
            Numero de Telefone:
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <FloatingLabel controlId="floatingTextarea2" label="Deixe sua opinião aqui..." className="text">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "75px" }}
          />
        </FloatingLabel>
        <br />
        <Button className="bott">Enviar</Button>
      </div>
    </div>
  );
}

export default Info;
