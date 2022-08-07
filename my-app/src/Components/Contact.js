import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import mail from './images/mail.webp';
import Image from 'react-bootstrap/esm/Image';
import emailjs from 'emailjs-com';
import InputGroup from 'react-bootstrap/InputGroup';
import{ useRef } from 'react';
import h2 from './images/h2.gif';

function Contact() {
    const form = useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_ggocuhq', 
    'template_u4ror98',
    form.current,
    'jNRI8GWXiEHAr7d3s').then(res=>{    
        
    })
    e.target.reset();
  }
  return (
        <Container className='container-lg h-100  mt-5 d-flex justify-content-center align-items-center mt-5 mb-5 rounded-3'>
            <div>
                <Row>
                    <Col className='col-lg-6 col-md-12 col-sm-12'>
                    <Image className='img-fluid mt-5 w-100 mr-5' src={h2} alt="mail" />
                    </Col>  
                    <Col className='col-lg-6 col-md-12 col-sm-12  mt-5 mb-5'>
                    <Form  ref={form} onSubmit={sendEmail}>
                        <InputGroup className="mb-3">
                        <Form.Control placeholder="Enter your name" name="name" type="text" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <Form.Control placeholder="Enter your email"  name="email" type="email" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <Form.Control as="textarea" style={{ height: 200 }}  placeholder="Enter your Message"  name="message" type="text" />
                        </InputGroup>
                        <InputGroup className='mb-3'><Button variant="outline-light" type="submit">Send Message</Button></InputGroup>
                    </Form>
                    </Col>
                </Row>
            </div>
      </Container>
      
    
  )
}

export default Contact
