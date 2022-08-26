import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function ButtonComponent(props) {
  return (
    <Button variant="outline-light m-2"  ><span>{props.name}</span></Button>
  )
}

export default ButtonComponent
