import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { FcMindMap } from "react-icons/fc";
function SkillName() {
  return (
    <Container className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <div>
        <h1 className='text-center text-lg header-logo'><FcMindMap/></h1>
        <h3 className='mt-2'>Skills And Technologies</h3>
        </div>
    </Container>
  )
}

export default SkillName
