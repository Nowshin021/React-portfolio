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
                <Card border="dark" >
                <Card.Img variant="cover" src={w1} alt="blog" />
                <Card.Body className='overlay' style={{ backgroundColor: "#1e5566" }}>
                    
                        <h1 className='text-center  card-button' ><BiAtom/></h1>
                        <h5 className='text-center' >React Food App with Food API</h5>
                        <Container className='d-flex justify-content-between mt-0'>
                        <Card.Link className='text-white' href={props.myprojects.reactproject}> <Button className='card-button'  variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href={props.myprojects.reactprojectlive}> <Button className='card-button' variant="outline-light"  size="sm">Live</Button></Card.Link>
                        </Container>
                       
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-3 '>
                <Card border="dark" style={{ width: 'auto' }}>
                <Card.Img variant="cover" src={web2} alt="blog" />
                <Card.Body className='overlay' style={{ backgroundColor: "#1e5566" }}>
                    
                        <h1 className='text-center card-button' ><FaPython/></h1>
                        <h5 className='text-center' >Django Blogsite with CRUD oparations</h5>
                        <Container className='d-flex justify-content-between mt-0'>
                        <Card.Link className='text-white' href={props.myprojects.djangoproject}> <Button className='card-button'  variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href="#"> <Button variant="outline-light" className='card-button'  size="sm">Live</Button></Card.Link>
                        </Container>
                   
                </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-3 '>
                <Card border="dark" style={{ width: 'auto' }}>
                <Card.Img variant="cover" src={web4} alt="blog"  />
                <Card.Body variant='cover' className='overlay' style={{ backgroundColor: "#1e5566" }}>
                    
                        <h1 className='text-center card-button' ><FaPython/></h1>
                        <h5 className='text-center' >Exploratory Data Analysis with Numpy and Pandas</h5>
                        <Container className='d-flex justify-content-between mt-0'>
                        <Card.Link className='text-white ' href={props.myprojects.dsproject}> <Button className='card-button' variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white ' href="#"> <Button variant="outline-light" className='card-button' size="sm">Live</Button></Card.Link>
                        </Container>
                   

                    
                </Card.Body>
                </Card>
            </Col>
       
            
        </Row>
    
    </Container>
  )
}

export default Blogs
