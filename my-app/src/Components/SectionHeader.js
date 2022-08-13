import React from 'react'
import Container from 'react-bootstrap/esm/Container';
function SectionHeader(props) {
  return (
    <div id={props.data.id}>
    <Container className='d-flex justify-content-center align-items-center mt-5 mb-5 gy-5'>
      <div>
      <h3>{props.data.headername}</h3>
      </div>
  </Container>
  </div>
  )
}

export default SectionHeader