import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Welcome() {
  return (
    <Container>
        <Row className='mt-5'>
            <Col className='d-flex justify-content-center align-item-center'>
                <h>Trending Blogs</h>
            </Col>
        </Row>
    </Container>
  )
}

export default Welcome