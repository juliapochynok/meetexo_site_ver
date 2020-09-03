import React, { Component, useState } from 'react';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from "react-transition-group";
import Home from './Home';
import Navigator from '../general/Navigator';
import MainCarousel from './Carousel';
import Footer from '../general/Footer';


class HomePage extends Component {
  
  render() {
    return (
      <div className='HomePage'>
      <Navigator />
      <div className='ContentHome'>
      <br/><br/><br/><br/><br/>
      <MainCarousel />
      <br/><br/><br/><br/><br/>
      <Home />
      <br/><br/><br/><br/><br/>
      </div>
      <Footer />
    </div>
    );
  }
}

export default HomePage;
