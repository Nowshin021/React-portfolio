import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import header from './images/header.jpg';


function Header() {
  return (
    <Container>
    <Row className='mt-5'>
      <Col className='d-flex justify-content-center align-items-center'>
        <div>
        <h1><span className='text-info'>Nazia</span> Afrin</h1>
        <h1>Web <span className='text-info'>Developer</span></h1>
        <p className='text-start mt-5'>I'm Nazia Afrin. I am a fresher and looking to land mycareer in the IT industry. My love for programming and passion for learning is what drives me to take on challenges. I'm a quick learner with excellent English communication skills. I also have experience in competitive programming. 
          I have done several front-end and back-end React-JS ,Django-python, Data-science projects hosted on my GitHub</p>
        </div>
      </Col>  
      <Col className='d-flex justify-content-center align-items-center'>
        <Image className='img-fluid' src={header} alt="horse" />
      </Col>
    </Row>
  </Container>
  )
}

export default Header