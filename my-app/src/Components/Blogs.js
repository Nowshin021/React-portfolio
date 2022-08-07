import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import w1 from './images/w1.png';
import web2 from './images/web2.png';
import web3 from './images/web3.png';
import { FaPython } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import { SiBootstrap } from "react-icons/si";

function Blogs() {
  return (
    <Container className='mt-5 mb-5'>
        <Row className='align-items-center'>
        <Col className='col-lg-4 col-md-6 col-sm-12 mt-2'>
                <Card border="info" style={{ height: 'auto' }}>
                <Card.Img variant="cover" src={w1} alt="blog" />
                <Card.ImgOverlay className='overlay'>
                    <Container className='d-flex justify-content-center align-items-center mt-5 '>
                        <div>
                        <h1 className='text-lg'><BiAtom/></h1>
                        <Card.Title >React Food App with Food API</Card.Title>
                        <Card.Text className='mt-2'>
                        Beginner Friendly React Food Recipie App with Api fetching and valina CSS
                        </Card.Text>
                        <Container className='d-flex justify-content-between'>
                        <Card.Link className='text-white' href="#">Code</Card.Link>
                        <Card.Link className='text-white' href="#">Watch live</Card.Link>
                        </Container>
                        </div>

                    </Container>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-2'>
                <Card border="info" style={{ height: 'auto' }}>
                <Card.Img variant="cover" src={web2} alt="blog" />
                <Card.ImgOverlay className='overlay'>
                    <Container className='d-flex justify-content-center align-items-center mt-5 '>
                        <div>
                        <h1 className='text-lg'><FaPython/></h1>
                        <Card.Title >Django-Blogsite</Card.Title>
                        <Card.Text className='mt-2'>
                         Django Blogsite with CRUD oparation and Beautifull UI
                        </Card.Text>
                        <Container className='d-flex justify-content-between'>
                        <Card.Link className='text-white' href="#">Code</Card.Link>
                        <Card.Link className='text-white' href="#">Watch live</Card.Link>
                        </Container>
                        </div>

                    </Container>
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col className='col-lg-4 col-md-6 col-sm-12 mt-2'>
                <Card border="info" style={{ height: 'auto' }}>
                <Card.Img variant="cover" src={web3} alt="blog" />
                <Card.ImgOverlay className='overlay'>
                    <Container className='d-flex justify-content-center align-items-center mt-5 '>
                        <div>
                        <h1 className='text-lg'><SiBootstrap/></h1>
                        <Card.Title >bootstrap Responisve website</Card.Title>
                        <Card.Text className='mt-2'>
                        Fully responsive bootstrap website using HTML5, CSS, Bootstrap5
                        </Card.Text>
                        <Container className='d-flex justify-content-between'>
                        <Card.Link className='text-white' href="#">Code</Card.Link>
                        <Card.Link className='text-white' href="#">Watch live</Card.Link>
                        </Container>
                        </div>

                    </Container>
                </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>

    </Container>
  )
}

export default Blogs
