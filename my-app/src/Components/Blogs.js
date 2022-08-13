import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import w1 from './images/w1.png';
import web2 from './images/web2.png';
import web3 from './images/web3.png';
import web4 from './images/web4.png';
import { FaPython } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import { SiBootstrap } from "react-icons/si";
import ButtonComponent from './ButtonComponent';


function Blogs(props) {
   
  return (
    <Container fluid className='mt-2 mb-5 pb-5'>
        <Row className='align-items-center m-5'>
        <Col className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <Card border="dark" style={{ height: 'auto' }}>
                <Card.Img variant="cover" src={w1} alt="blog" />
                <Card.Body className='overlay' style={{ backgroundColor: "#1e5566" }}>
                    <Container className='d-flex justify-content-center align-items-center mt-2 '>
                        <div>
                        <h1 className='text-center' style={{fontSize:"2vw"}}><BiAtom/></h1>
                        <Card.Title style={{fontSize:"1.5vw"}}>React Food App with Food API</Card.Title>
                        <Container className='d-flex justify-content-between mt-0'>
                        <Card.Link className='text-white' href={props.myprojects.reactproject}> <Button style={{fontSize:"1vw"}} variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href={props.myprojects.reactprojectlive}> <Button variant="outline-light" style={{fontSize:"1vw"}} size="sm">Live</Button></Card.Link>
                        </Container>
                        </div>

                    </Container>
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <Card border="dark" style={{ width: 'auto' }}>
                <Card.Img variant="cover" src={web2} alt="blog" />
                <Card.Body className='overlay ' style={{ backgroundColor: "#1e5566" }}>
                    <Container className='d-flex justify-content-center align-items-center mt-2 '>
                    <div>
                        <h1 className='text-center' style={{fontSize:"2vw"}}><FaPython/></h1>
                        <Card.Title style={{fontSize:"1.5vw"}}>Django Blogsite with CRUD oparations</Card.Title>
                        <Container className='d-flex justify-content-between mt-0'>
                        <Card.Link className='text-white' href={props.myprojects.djangoproject}> <Button style={{fontSize:"1vw"}} variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href="#"> <Button variant="outline-light" style={{fontSize:"1vw"}} size="sm">Live</Button></Card.Link>
                        </Container>
                    </div>

                    </Container>
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <Card border="dark" style={{ width: 'auto' }}>
                <Card.Img variant="cover" src={web4} alt="blog"  />
                <Card.Body variant='cover' className='overlay' style={{ backgroundColor: "#1e5566" }}>
                    <Container className='d-flex justify-content-center align-items-center mt-2 '>
                    <div>
                        <h1 className='text-center' style={{fontSize:"2vw"}}><FaPython/></h1>
                        <Card.Title style={{fontSize:"1.5vw"}}>Exploratory Data Analysis with Numpy and Pandas</Card.Title>
                        <Container className='d-flex justify-content-between mt-0'>
                        <Card.Link className='text-white' href={props.myprojects.dsproject}> <Button style={{fontSize:"1vw"}} variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href="#"> <Button variant="outline-light" style={{fontSize:"1vw"}} size="sm">Live</Button></Card.Link>
                        </Container>
                    </div>

                    </Container>
                </Card.Body>
                </Card>
            </Col>
       
            
        </Row>
    
    </Container>
  )
}

export default Blogs
