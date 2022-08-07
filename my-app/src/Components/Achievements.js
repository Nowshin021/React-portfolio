import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import python from './images/python.png';
import ps from './images/ps.jpg';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
function Achievements() {
  return (
    <div>
        <Container  className='d-flex justify-content-center align-items-center mt-5 mb-5'>
            <Row>
                <Col className='col-lg-6 col-md-6 col-sm-12'>
                    <Card border="info" style={{ width: '20rem' }} className='mt-3'>
                        <Card.Img variant="top" src={python} />
                        <Card.Body>
                            <Card.Title  className='text-sm text-center text-info'>
                                <Card.Link className='text-info' href="#">Gold Level in Python</Card.Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-lg-6 col-md-6 col-sm-12'>
                    <Card border="info"  style={{ width: '20rem' }} className='mt-3'>
                        <Card.Img variant="top" src={ps} />
                        <Card.Body>
                            <Card.Title  className='text-sm text-center text-info'>
                                <Card.Link className='text-info' href="#">Bronze Level in Problem Solving</Card.Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Achievements