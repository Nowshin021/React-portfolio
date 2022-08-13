import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import h3 from './images/h3.gif';
import bg from './images/bg.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from 'react-bootstrap/esm/Button';
function Header(props) {
  return (
    <Container fluid  className="header-container gy-5" >
    <Container className="d-flex justify-content-center align-items-center mr-5 ml-5 text-white">
      <Container className='mt-5'>
        <h1 className='text-center mt-5 text-lg larger'>Nazia Afrin</h1>
        <h3 className='text-center text-lg'>Web Developer</h3>
        <p className='text-center m-5 text-lg'>Hi ! I'm Nazia Afrin.
        My love for programming and passion for learning is what drives me to take on challenges. <br></br>
        I'm a quick learner with excellent English communication skills. I also have experience in competitive programming. 
        Welcome to my portfolio web-app made with React-JS. Happy visiting !</p>
        <Container className="d-flex justify-content-center align-items-center mb-5">
        <a href={props.mylinks.linkedin}><Button variant="outline-light m-2" className='button'><span>Hire Me</span></Button></a>
        <Button variant="outline-light m-2" className='button'>Download CV</Button>
        </Container>
        <Container className="d-flex justify-content-center align-items-center mb-5">
        <h2 className='m-3 text-center'> <a className='m-3 text-center' href="https://www.linkedin.com/in/naziaafrin/"><FaLinkedin/></a>
          <a className='m-3 text-center' href="#"><FaFacebook/></a>
          <a className='m-3 text-center' href="https://github.com/Nowshin021"><FaGithub/></a>
        </h2>
        </Container>
      </Container>

    </Container>
  </Container>
  )
}

export default Header

