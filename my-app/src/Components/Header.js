import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/esm/Button';
import h3 from './images/h3.gif';
function Header(props) {
  return (
    <Container fluid  className="header-container " >
    <Row className='m-5'>
      <Col className='d-flex justify-content-center align-items-center col-lg-6 col-md-12 col-sm-12'>
        <div>
        <h1><span className='text-lg header-span'>Nazia</span> Afrin</h1>
        <h1>Web <span className='text-lg header-span'> Developer</span></h1>
        <p className='text-start mt-5'>I'm Nazia Afrin. I am a fresher and looking to land mycareer in the IT industry.
        My love for programming and passion for learning is what drives me to take on challenges. I'm a quick learner with excellent English communication skills. I also have experience in competitive programming. 
        </p>
        <a href={props.mylinks.git}><Button variant="outline-dark m-2" className='hover-button' ><span>Hire Me</span></Button></a>
        <a href ='#'><Button variant="outline-dark m-2" className='hover-button' ><span>Download CV</span></Button></a>
        </div>
      </Col>  
      <Col className='d-flex justify-content-center align-items-center col-lg-6 col-md-12 col-sm-12'>
        <Image className='img-fluid' src={h3} style={{ width: '100%' }} alt="nothing" />
      </Col>
    </Row>
  </Container>
  )
}

export default Header