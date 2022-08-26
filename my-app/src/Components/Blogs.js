import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import w1 from './images/w1.png';
import web1 from './images/web1.webp';
import web2 from './images/web2.webp';
import web6 from './images/web6.webp';
import web4 from './images/web4.webp';

import web7 from './images/web7.webp'

import { FaPython } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import { SiBootstrap } from "react-icons/si";
import ButtonComponent from './ButtonComponent';


function Blogs(props) {
   
  return (
    <Container fluid className='mt-2 mb-5 pb-5'>
        <Row className='align-items-center m-5'>
        <Col className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                <Card border="" style={{ width: '18rem' }}>
                <Card.Img src={web7} className='img-fluid'></Card.Img>
                <Card.Body className='overlay' style={{ backgroundColor: "#470d7b" }}>
                    
                        <h1 className='text-center  card-button' ><BiAtom/></h1>
                        <p className='text-center' >React Food App with Food API</p>
                        <Container className='d-flex justify-content-between mt-0'>
                        <Card.Link className='text-white' href={props.myprojects.reactproject}> <Button className='card-button'  variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href={props.myprojects.reactprojectlive}> <Button className='card-button' variant="outline-light"  size="sm">Live</Button></Card.Link>
                        </Container>
                       
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-3 col-md-6 col-sm-12 mt-3 '>
                <Card border="" style={{ width: '18rem' }}>
                <Card.Img src={web2} className='img-fluid'></Card.Img>
                <Card.Body className='overlay' style={{ backgroundColor: "#470d7b" }}>
                    
                        <h1 className='text-center card-button' ><FaPython/></h1>
                        <p className='text-center' >Django Blogsite </p>
                        <Container className='d-flex justify-content-between mt-0'>
                        <Card.Link className='text-white' href={props.myprojects.djangoproject}> <Button className='card-button'  variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href="#"> <Button variant="outline-light" className='card-button'  size="sm">Live</Button></Card.Link>
                        </Container>
                   
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-3 col-md-6 col-sm-12 mt-3 '>
                <Card border="" style={{ width: '18rem' }}>
                <Card.Img src={web6} className='img-fluid'></Card.Img>
                <Card.Body variant='cover' className='overlay' style={{ backgroundColor: "#470d7b" }}>
                    
                        <h1 className='text-center card-button' ><FaPython/></h1>
                        <p className='text-center' >Exploratory Data Analysis</p>
                        <Container className='d-flex justify-content-between mt-0'>
                        <Card.Link className='text-white ' href={props.myprojects.dsproject}> <Button className='card-button' variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white ' href="#"> <Button variant="outline-light" className='card-button' size="sm">Live</Button></Card.Link>
                        </Container>
                   

                    
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-3 col-md-6 col-sm-12 mt-3 '>
                <Card border="" style={{ width: '18rem' }}>
                <Card.Img src={web4} className='img-fluid'></Card.Img>
                <Card.Body variant='cover' className='overlay' style={{ backgroundColor: "#470d7b" }}>
                    
                        <h1 className='text-center card-button' ><FaPython/></h1>
                        <p className='text-center' >Statistical Analysis on Real-State Data</p>
                        <Container className='d-flex justify-content-between mt-0'>
                        <Card.Link className='text-white ' href={props.myprojects.dsproject2}> <Button className='card-button' variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white ' href={props.myprojects.dsproject2_live }> <Button variant="outline-light" className='card-button' size="sm">Live</Button></Card.Link>
                        </Container>
                   

                    
                </Card.Body>
                </Card>
            </Col>
       
            
        </Row>
    
    </Container>
  )
}

export default Blogs
