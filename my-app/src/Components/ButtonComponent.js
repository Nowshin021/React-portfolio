import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function ButtonComponent(props) {
  return (
    <Button variant="outline-dark m-2" className='hover-button' ><span>{props.name}</span></Button>
  )
}

export default ButtonComponent
