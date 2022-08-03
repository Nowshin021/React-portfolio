import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import mail from './images/mail.webp';
import Image from 'react-bootstrap/esm/Image';
function Contact() {
  return (

     
        <Container className='bg-info mt-5 d-flex justify-content-center align-items-center mt-5 mb-5 rounded-3'>
            <div>
                <Row>
                    <Col className='col-lg-6 col-md-12 col-sm-12'>
                    <Image className='img-fluid' src={mail} alt="mail" />
                    </Col>  
                    <Col className='col-lg-6 col-md-12 col-sm-12  mt-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-white text-lg'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='text-white text-lg'>Say Something !</Form.Label>
                        <Form.Control as="textarea" />
                        </Form.Group>
                        <Button variant="outline-light">Send</Button>
                    </Form>
                    </Col>
                </Row>
            </div>
      </Container>
      
    
  )
}

export default Contact
