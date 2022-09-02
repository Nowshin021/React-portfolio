import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/esm/Image';
import badge from './images/badge.png';
import {BsFillStarFill,BsStar,BsStarHalf,BsInfoCircle} from 'react-icons/bs';

function Achievements() {
  return (
    <div>
        <Container fluid className='d-flex justify-content-center align-items-center mt-5 mb-5 pb-5 gy-5' >
            <Row>
                <Col className='col-lg-6 col-md-6 col-6-align-items-center col-sm-12 col-12'>
                <Image className='img-fluid' src={badge} alt="mail" />
                </Col>
                <Col className='col-lg-6 col-md-6 col-sm-12 col-12'>
                    <Card border=""  style={{ width: 'auto'}} className='customcard mt-2'>
                        <Card.Body>
                       
                        <p className='text-lg text-center text-warning'>   <BsFillStarFill/> <BsFillStarFill/> <BsFillStarFill/> <BsFillStarFill/>   <BsStar/></p>
                        <p className='text-sm text-center'>Python  Gold level </p>
                        </Card.Body>
                    </Card>
                    <Card border=""  style={{ width: 'auto'}} className=' customcard mt-2'>
                        <Card.Body>
                        <p className='text-lg text-center text-warning'>   <BsFillStarFill/> <BsFillStarFill/> <BsFillStarFill/> <BsStar/>  <BsStar/></p>
                        <p className='text-sm text-center'>problem Solving Bronze level </p>
                        </Card.Body>
                    </Card>
                    <Card border=""  style={{ width: 'auto'}} className=' customcard mt-2'>
                        <Card.Body>
                        <p className='text-lg text-center text-warning'>   <BsFillStarFill/> <BsFillStarFill/> <BsStarHalf/> <BsStar/>  <BsStar/></p>
                        <p className='text-sm text-center'>Sql Silver level </p>
                        <a className="text-right position-absolute top-0 end-0"><BsInfoCircle/></a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Achievements