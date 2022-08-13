import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import ButtonComponent from './ButtonComponent';
function ViewMore(props) {
  return (
    <div>
      <Container className='d-flex justify-content-center align-items-center mb-5 pb-5'>
    <a href={props.mylinks.git}><ButtonComponent name={'View More Projects'}/></a>
    </Container>
    </div>
  )
}

export default ViewMore
