import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FcOrgUnit } from "react-icons/fc";
function Welcome() {
  return (
    <Container>
        <Row className='mt-5'>
            <Col className='d-flex justify-content-center align-item-center'>
                <div>
                <h1 className='mt-5 text-lg text-center header-logo'><FcOrgUnit/></h1>
                <h2 className='mt-2 text-lg text-center'> Projects I have done </h2>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Welcome