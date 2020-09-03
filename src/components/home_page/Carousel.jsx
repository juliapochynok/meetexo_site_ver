import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'


export default class MainCarousel extends Component {
    render() {
        return (
        
        <Carousel className="Carousel1" >
          <Carousel.Item className="ItemCar">
          <Link className="ItemCar" to="/members">
            <img
              className="d-block"
              src="assets/exo_main.jpg"
              alt="First slide"
            />

            <Carousel.Caption>
              <h1 className="SlideTitle Slide1">MEMBERS</h1>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>

          <Carousel.Item className="ItemCar">
          <Link className="ItemCar" to="/info">
            <img
              className="d-block1"
              src="assets/exo_back.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 className="SlideTitle Slide2">INTRODUCTION TO EXO</h1>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>

          <Carousel.Item className="ItemCar">
          <Link className="ItemCar" to="/discography">
            <img
              className="d-block1"
              src="assets/lightsticks.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1 className="SlideTitle Slide3">DISCOGRAPHY</h1>
            </Carousel.Caption>
            </Link>
            </Carousel.Item >

            <Carousel.Item className="ItemCar">
            <Link className="ItemCar" to="/tests">
            <img
              className="d-block"
              src="assets/exo_dream.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h1 className="SlideTitle Slide4">TESTS</h1>
            </Carousel.Caption>
            </Link>
            </Carousel.Item >

        </Carousel>

  
        )
    }
}

