import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import c1 from './images/c1.png';
import c2 from './images/c2.png';
function Publications(props) {
  return (
    <div>
        <Container fluid>
            <Row className='m-5'>
                <Col className='col-lg-6 col-md-12 col-sm-12'>
                <Card style={{ width: 'auto' }} className='mt-2'>
                    <Card.Img variant="top" src={c1}/>
                    <Card.Body>
                    <Card.Title style={{color:"#1e5566"}}>DATA 2022 – 11th International Conference on Data Science, Technology and Applications.</Card.Title>
                    <Card.Text>
                    Paper Title: Development of a Text Classification Framework using Transformer-based Embeddings
                    </Card.Text>
                    <Card.Link href={props.mypublication.data} class='text-start text-info'>view publication</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col className='col-lg-6 col-md-12 col-sm-12'>
                <Card style={{ width: 'auto' }} className='mt-2'>
                    <Card.Img variant="top" src={c2}/>
                    <Card.Body>
                    <Card.Title style={{color:"#1e5566"}}>MIET –  Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (LNICST).</Card.Title>
                    <Card.Text>
                    Paper Title: Transformer-based Text Clustering for Newspaper Articles
                    </Card.Text>
                   
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Publications