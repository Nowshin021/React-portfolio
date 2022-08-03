import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';

function Skills() {
  return (
    <Container className='d-flex justify-content-center align-items-center mt-5 mb-5'>
    <div>
        <Row>
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg bg-info mt-2' >
                <Card.Body className='text-white text-center text-lg'>Python</Card.Body>
            </Card>
            </Col>
            
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg bg-info mt-2' >
                <Card.Body className='text-white text-center text-lg'>Django</Card.Body>
            </Card>
            </Col>
                 
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg bg-info mt-2' >
                <Card.Body className='text-white text-center text-lg'>JavaScript</Card.Body>
            </Card>
            </Col>
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg bg-info mt-2' >
                <Card.Body className='text-white text-center text-lg'>React</Card.Body>
            </Card>
            </Col>
            
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg bg-info mt-2' >
                <Card.Body className='text-white text-center text-lg'>CSS</Card.Body>
            </Card>
            </Col>
                 
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg bg-info mt-2' >
                <Card.Body className='text-white text-center text-lg'>Bootstrap</Card.Body>
            </Card>
            </Col>
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg bg-info mt-2' >
                <Card.Body className='text-white text-center text-lg'>ML</Card.Body>
            </Card>
            </Col>
            <Col className='col-lg-3 col-md-3 col-sm-6'>
            <Card className='card-lg bg-info mt-2' >
                <Card.Body className='text-white text-center text-lg'>AI</Card.Body>
            </Card>
            </Col>
        </Row>
    </div>
    </Container>
  )
}

export default Skills