import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col } from 'react-bootstrap';

const Solucao = ({ text, imageUrl }) => {
  return (
    <Container>
      <Row>

        <Col md={6} className="image-container d-flex align-items-start justify-content-start">
        <img
            src={imageUrl}
            className="img-fluid"
          />
            
        </Col>
        <Col md={6} className="text-container">
        <h1 style={{ fontSize: '50px' }} className="contato">Nossa Proposta</h1><br/>
            <p style={{ fontSize: '30px', marginLeft:'5px' }}>{text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Solucao;
