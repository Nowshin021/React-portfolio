import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
function Blogs() {
  return (
    <Container className='mt-5'>
        <Row className='align-items-center'>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-2'>
                <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-2'>
                <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-2'>
                <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>

    </Container>
  )
}

export default Blogs
