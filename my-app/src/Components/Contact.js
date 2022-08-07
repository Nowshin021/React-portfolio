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

function Contact() {
  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_ggocuhq', 
    'template_u4ror98',
    e.target,
    'jNRI8GWXiEHAr7d3s').then(res=>{
        console.log(res);
        console.log("OK")
    })
  }
  return (

     
        <Container className='container-lg h-100 bg-info mt-5 d-flex justify-content-center align-items-center mt-5 mb-5 rounded-3'>
            <div>
                <Row>
                    <Col className='col-lg-6 col-md-12 col-sm-12'>
                    <Image className='img-fluid mt-5 w-100 mr-5' src={mail} alt="mail" />
                    </Col>  
                    <Col className='col-lg-6 col-md-12 col-sm-12  mt-5'>
                    <Form onSubmit={sendEmail}>
                        <Form.Group className="mb-5" name='name'>
                            <Form.Label className='text-white text-lg'>Your Name</Form.Label>
                            <Form.Control type="text"  placeholder="Enter Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-5" name='email'>
                            <Form.Label className='text-white text-lg'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-5" message='message' >
                        <Form.Label className='text-white text-lg'>Say Something !</Form.Label>
                        <Form.Control as="textarea" /><br></br>
                        <InputGroup type='submit'><Button variant="outline-light">Send Message</Button></InputGroup>
                        </Form.Group>
                       
                    </Form>
                    </Col>
                </Row>
            </div>
      </Container>
      
    
  )
}

export default Contact
