import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react';
import './services.css'

import img from './assets/img2.png'
import Card from './Card';
const Services = () => {
  return (
    <>
      <Container-fluid>
        <img className='w-100' src={img} alt="" />
        <Card/>
        <div className="footer">
                <Container className="footer">
                    <Row>
                        <Col>
                            <div className="txt">
                                <h2><b>Get Latest Update from ZIDIO<br></br>
                                Stay Connect with Us</b></h2>
                            </div>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3 bg-transparent">
                                <Form.Control className='p-3'
                                    placeholder="Enter Your Mail"
                                />
                                <Button variant="outline-dark bg-light" id="button-addon2">
                                   Subscribe
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
      </Container-fluid>
    </>
  );
};

export default Services;
