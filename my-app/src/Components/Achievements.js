import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import python from './images/python.png';
import ps from './images/ps.jpg';

function Achievements() {
  return (
    <div>
        <Container fluid className='d-flex justify-content-center align-items-center mt-5 mb-5 pb-5 gy-5' >
            <Row>
                <Col className='col-lg-6 col-md-6 col-sm-12'>
                    <Card border="dark" style={{ width: '20rem'}} className='mt-3'>
                        <Card.Img variant="top" src={python} />
                        <Card.Body>
                        <p className='text-sm text-center'>Gold level </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-lg-6 col-md-6 col-sm-12'>
                    <Card border="dark"  style={{ width: '20rem'}} className='mt-3'>
                        <Card.Img variant="top" src={ps} />
                        <Card.Body>
                        <p className='text-sm text-center'>Bronze level </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Achievements