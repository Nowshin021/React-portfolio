import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Welcome() {
  return (
    <div id='projects'>
      <Container>
        <Row className='mt-5'>
            <Col className='d-flex justify-content-center align-item-center'>
                <div>
               
                <h2 className='mt-2 text-lg text-center'> Projects I have done </h2>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Welcome