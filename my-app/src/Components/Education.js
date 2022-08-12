import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import Card from 'react-bootstrap/Card';
import education from '../Components/images/education.png'
import Image from 'react-bootstrap/esm/Image';
import {FaSchool} from  'react-icons/fa';
import{FaGraduationCap} from  'react-icons/fa';
function Education() {
  return (
    <div>
        <Container fluid className='d-flex align-items-center justify-content-center pb-5'>
            <Row className='m-5'>
                <Col className='col-lg-4 col-md-6 col-sm-12 col-12'>
                <Image className='img-fluid mt-0' src={education} alt="mail" />
                </Col>
                <Col className='col-lg-8 col-md-6 col-sm-12 col-12'>
                <Card border='light' className='mb-3'>
                    <Card.Body><span style={{color :"#356676"}}><h1><FaGraduationCap/></h1> 2018 – 2022 </span><br></br>
                    B.Sc. in Computer Science and Engineering, East-West University. CGPA 3.40/4.00</Card.Body>
                </Card>
                <Card border='light' className='mb-3'>
                    <Card.Body><span style={{color :"#356676"}}><h1><FaSchool/></h1>2018 – 2022 </span><br></br>
                    Higher Secondary Certificate (HSC), Motijhil Ideal School and College, Dhaka. Science. GPA 5.00/5.00</Card.Body>
                </Card>
                <Card border='light' className='mb-3'>
                    <Card.Body><span style={{color :"#356676"}}><h1><FaSchool/></h1>2018 – 2022 </span> <br></br>
                    Secondary School Certificate (SSC),Motijhil Ideal School and College, Dhaka. Science. GPA 5.00/5.00.</Card.Body>
                </Card>
                </Col>
            </Row>

        </Container>

    </div>
  )
}

export default Education