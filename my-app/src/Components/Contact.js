import React from 'react'
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/esm/Image';
import emailjs from 'emailjs-com';
import InputGroup from 'react-bootstrap/InputGroup';
import{ useRef } from 'react';
import edu from './images/edu.jpg';
import phone2 from './images/phone2.png';

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
    <div>
      <h5 className='text-center '>Send me a mail if you have any suggestions. Thank you !</h5>
        <Container fluid className='mb-5 text-white' >
            <div className=''>
                <Row className='d-flex justify-content-center align-items-center' >
                    <Col className='col-lg-4 col-md-12 col-sm-12 col-12 '>
                    <Image className='img-fluid' src={phone2} alt="mail" />
                    </Col>  
                    
                    <Col className='col-lg-8 col-md-12  col-sm-12 col-12 mt-5 mb-5 text-white'>
                    <Form  ref={form} onSubmit={sendEmail}className='mt-5'>
                        <InputGroup className="mb-3 input-form">
                        <Form.Control  placeholder="Enter your name" name="name" type="text" className='custom-contact' required/>
                        </InputGroup>
                        <InputGroup className="mb-3 input-form">
                        <Form.Control placeholder="Enter your email"  name="email" type="email" className='custom-contact' required />
                        </InputGroup>
                        <InputGroup className="mb-3 input-form">
                        <Form.Control as="textarea" style={{ height: 200 }}  placeholder="Enter your Message" className='custom-contact' name="message" type="text" required />
                        </InputGroup>
                        <InputGroup className='mb-3 input-form'><Button variant="outline-light btn-sm" type="submit">Send Message</Button></InputGroup>
                    </Form>
                    </Col>
                </Row>
            </div>
      </Container>

    </div>
      
    
  )
}

export default Contact
