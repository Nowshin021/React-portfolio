import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import w1 from './images/w1.jpg';
import eda from './images/eda.webp';
import django from './images/django.jpg';

function Blogs() {
  return (
    <Container className='mt-5 mb-5'>
        <Row className='align-items-center'>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-2'>
                <Card border="info" style={{ width: '22rem' }}>
                <Card.Img variant="top" src={django} alt="blog" />
                <Card.Body>
                <Card.Title className='text-start text-info'>Responsive Bootstrap Website</Card.Title>
                <Card.Text>
                Fully resposive website using HTML5, CSS and Bootstrap
                </Card.Text>
                <Container className='d-flex justify-content-between'>
                <Card.Link className='text-info' href="#">Code</Card.Link>
                <Card.Link className='text-info' href="#">Watch live</Card.Link>
                </Container>
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-2'>
                <Card border="info" style={{ width: '22rem' }}>
                <Card.Img variant="top" src={w1} alt="blog" />
                <Card.Body>
                <Card.Title className='text-start text-info'>Responsive Bootstrap Website</Card.Title>
                <Card.Text>
                Fully resposive website using HTML5, CSS and Bootstrap
                </Card.Text>
                <Container className='d-flex justify-content-between'>
                <Card.Link className='text-info' href="#">Code</Card.Link>
                <Card.Link className='text-info' href="#">Watch live</Card.Link>
                </Container>
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-2'>
                <Card border="info" style={{ width: '22rem' }}>
                <Card.Img variant="top" src={eda} alt="blog" />
                <Card.Body>
                <Card.Title className='text-start text-info'>Responsive Bootstrap Website</Card.Title>
                <Card.Text>
                Fully resposive website using HTML5, CSS and Bootstrap
                </Card.Text>
                <Container className='d-flex justify-content-between'>
                <Card.Link className='text-info' href="#">Code</Card.Link>
                <Card.Link className='text-info' href="#">Watch live</Card.Link>
                </Container>
                </Card.Body>
                </Card>
            </Col>
        </Row>

    </Container>
  )
}

export default Blogs
