import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';

import {GoBook}  from 'react-icons/go';
import {BiLinkAlt}  from 'react-icons/bi';
function Publications(props) {
  return (
    <div>
        <Container fluid className='mb-5 pb-5'>
            <Row className='m-5'>
                <Col className='col-lg-6 col-md-12 col-sm-12'>
                <Card style={{ width: 'auto' }} className='mt-2'>
                    <Card.Body className='d-flex justify-content-around align-items-center'>
                    <Row>
                        <Col className='col-lg-4 col-md-12 col-sm-12'>
                        <span className='icon-span m-3'><GoBook/></span>
                        </Col>
                        <Col  className='col-lg-8 col-md-12 col-sm-12 col-12'>
                            <Card.Title style={{color:"#1e5566"}}>
                            MIET –  Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (LNICST).
                            </Card.Title>
                            <Card.Text>
                            Transformer-based Text Clustering for Newspaper Articles
                            </Card.Text>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
                </Col>
                <Col className='col-lg-6 col-md-12 col-sm-12'>
                <Card style={{ width: 'auto' }} className='mt-2'>
                <Card.Body className='d-flex justify-content-around align-items-center'>
                    <Row>
                        <Col className='col-lg-4 col-md-12 col-sm-12'>
                        <span className='icon-span m-3'><GoBook/></span>
                        </Col>
                        <Col  className='col-lg-8 col-md-12 col-sm-12 col-12'>
                            <Card.Title style={{color:"#1e5566"}}>
                            DATA 2022 – 11th International Conference on Data Science, Technology and Applications.
                            </Card.Title>
                            <Card.Text>
                            Paper Title: Development of a Text Classification Framework using Transformer-based Embeddings   <br></br>
                            <Card.Link href={props.mypublication.data} className='text-lg text-success'><BiLinkAlt/>view publications</Card.Link>
                            </Card.Text>
                           
                        </Col>
                    </Row>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Publications