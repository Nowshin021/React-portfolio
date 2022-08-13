import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';

function Skills() {
  return (
<div >
    <Container fluid className='d-flex justify-content-center align-items-center mb-5 pb-5'>
    <div>
        <Row className='mt-2 mr-5 ml-5'>
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg mt-2' style={{ backgroundColor: "#1e5566" }} >
                <Card.Body  className='text-white text-center text-lg'>Python</Card.Body>
            </Card>
            </Col>
            
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg mt-2' style={{ backgroundColor: "#1e5566" }} >
                <Card.Body  className='text-white text-center text-lg'>Django</Card.Body>
            </Card>
            </Col>
                 
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg  mt-2' style={{ backgroundColor: "#1e5566" }}>
                <Card.Body  className='text-white text-center text-lg'>JavaScript</Card.Body>
            </Card>
            </Col>
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg  mt-2' style={{ backgroundColor: "#1e5566" }}>
                <Card.Body  className='text-white text-center text-lg'>React</Card.Body>
            </Card>
            </Col>
            
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg  mt-2' style={{ backgroundColor: "#1e5566" }} >
                <Card.Body  className='text-white text-center text-lg'>CSS</Card.Body>
            </Card>
            </Col>
                 
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg  mt-2'style={{ backgroundColor: "#1e5566" }} >
                <Card.Body  className='text-white text-center text-lg'>Bootstrap</Card.Body>
            </Card>
            </Col>
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg  mt-2' style={{ backgroundColor: "#1e5566" }}>
                <Card.Body  className='text-white text-center text-lg'>Flask</Card.Body>
            </Card>
            </Col>
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg  mt-2' style={{ backgroundColor: "#1e5566" }}>
                <Card.Body  className='text-white text-center text-lg'>MySQL</Card.Body>
            </Card>
            </Col>
        </Row>
    </div>
    </Container>
    </div>
  )
}

export default Skills