import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import News from './News';
import Movies from './Movies';


export default class Home extends Component {
    render() {
        return (
        <Container> 
            <Row className=" text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <News />
            </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Movies />
            </Col>
        </Row>
        
        </Container>
        )
    }
}