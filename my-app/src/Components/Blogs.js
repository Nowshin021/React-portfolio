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


function Blogs(props) {
   
  return (
    <Container fluid className='mt-2 mb-5 pb-5'>
        <Row className='align-items-center m-5'>
        <Col className='col-lg-6 col-md-6 col-sm-12 mt-3'>
                <Card border="light" style={{ height: 'auto' }}>
                <Card.Img variant="cover" src={w1} alt="blog" style={{ height: '20rem' }}/>
                <Card.ImgOverlay className='overlay' style={{ backgroundColor: "#1e5566" }}>
                    <Container className='d-flex justify-content-center align-items-center mt-2 '>
                        <div>
                        <h1 className=''><BiAtom/></h1>
                        <Card.Title >React Food App with Food API</Card.Title>
                        <Card.Text className='mt-2'>
                        Beginner Friendly React Food Recipie App with Api fetching and valina CSS
                        </Card.Text>
                        <Container className='d-flex justify-content-between mt-2'>
                        
                        <Card.Link className='text-white' href={props.myprojects.reactapp}> <Button variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href="#"> <Button variant="outline-light" size="sm">Live</Button></Card.Link>
                        </Container>
                        </div>

                    </Container>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col className='col-lg-6 col-md-6 col-sm-12 mt-3'>
                <Card border="light" style={{ width: 'auto' }}>
                <Card.Img variant="cover" src={web2} alt="blog" style={{ height: '20rem' }}/>
                <Card.ImgOverlay className='overlay ' style={{ backgroundColor: "#1e5566" }}>
                    <Container className='d-flex justify-content-center align-items-center mt-2 '>
                        <div>
                        <h1 className=''><FaPython/></h1>
                        <Card.Title >Django-Blogsite</Card.Title>
                        <Card.Text className='mt-2'>
                         Django Blogsite with CRUD oparation and Beautifull UI
                        </Card.Text>
                        <Container className='d-flex justify-content-between mt-2'>
                            
                        <Card.Link className='text-white' href={props.myprojects.djangoproject}> <Button variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href="#"> <Button variant="outline-light" size="sm">Live</Button></Card.Link>
                        </Container>
                        </div>

                    </Container>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col className='col-lg-6 col-md-6 col-sm-12 mt-3'>
                <Card border="light" style={{ width: 'auto' }}>
                <Card.Img variant="cover" src={web4} alt="blog" style={{ height: '20rem' }} />
                <Card.ImgOverlay className='overlay' style={{ backgroundColor: "#1e5566" }}>
                    <Container className='d-flex justify-content-center align-items-center mt-2 '>
                        <div>
                        <h1 className=''><FaPython/></h1>
                        <Card.Title className='text-sm' >Exploratory Data Analysis on Large Dataset</Card.Title>
                        <Card.Text className='mt-2'>
                        A Data scrience related project : EDA Data science jobs across USA
                        </Card.Text>
                        <Container className='d-flex justify-content-between mt-2'>
                        <Card.Link className='text-white' href={props.myprojects.dsproject}> <Button variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href={props.myprojects.dsproject}> <Button variant="outline-light" size="sm">Live</Button></Card.Link>
                        </Container>
                        </div>

                    </Container>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col className='col-lg-6 col-md-6 col-sm-12 mt-3'>
                <Card border="light" style={{ width: 'auto' }}>
                <Card.Img variant="cover" src={web3} alt="blog" style={{ height: '20rem' }} />
                <Card.ImgOverlay className='overlay' style={{ backgroundColor: "#1e5566" }}>
                    <Container className='d-flex justify-content-center align-items-center mt-2 '>
                        <div>
                        <h1 className=''><SiBootstrap/></h1>
                        <Card.Title className='text-sm' >bootstrap Responisve website</Card.Title>
                        <Card.Text className='mt-2'>
                        Fully responsive bootstrap website using HTML5, CSS, Bootstrap5
                        </Card.Text>
                        <Container className='d-flex justify-content-between mt-2'>
                        <Card.Link className='text-white' href={props.myprojects.frontendproject}> <Button variant="outline-light" size="sm">Code</Button></Card.Link>
                        <Card.Link className='text-white' href={props.myprojects.frontendprojectlive}> <Button variant="outline-light" size="sm">Live</Button></Card.Link>
                        </Container>
                        </div>

                    </Container>
                </Card.ImgOverlay>
                </Card>
            </Col>
            
        </Row>
    <Container className='d-flex justify-content-center align-items-center mt-2 mb-5'>
    <Button  className='hover-button'variant='outline-light' size="lg"><span>View More Prjects </span></Button>
    </Container>
    </Container>
  )
}

export default Blogs
