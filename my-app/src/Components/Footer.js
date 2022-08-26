import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div>
      <Container fluid className='mt-5 pt-5 text-white pb-5 pb-5' style={{ backgroundColor: "#470d7b" }}>
        <Container>
            <Row>
                <Col className='d-flex justify-content-center align-items-center col-lg-4 col-md-6 col-sm-12 mt-5'>
                    <div>
                        <h5>Nazia Afrin</h5>
                        <p>Block G, Banasree</p>
                        <p>Rampura, Dhaka-1219</p>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center col-lg-4 col-md-6 col-sm-12 mt-5'>
                    <div>
                        <h5>Important Links</h5>
                        <h2 className='mr-2 ml-2 text-center'> <a href="https://www.linkedin.com/in/naziaafrin/"><FaLinkedin/></a>
                        <a href="#"><FaFacebook/></a>
                        <a href="https://github.com/Nowshin021"><FaGithub/></a>
                        
                        </h2>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center col-lg-4 col-md-6 col-sm-12 mt-5'>
                    <div>
                        <h5>About this page</h5>
                        <p>Thsi one page portfolio app was developed with React</p>
                    </div>
                </Col>
            </Row>
            <Container className ='d-flex justify-content-center align-items-center mt-5 b-5 text-white'>
                <div>
                    <p className='text-center'>Copyright @2022 , Made with love </p>
                </div>
            </Container>
        </Container>
      </Container>
    </div>
  )
}

export default Footer
