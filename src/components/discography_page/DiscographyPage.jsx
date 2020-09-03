import React, { Component } from 'react'
import './DiscographyPage.css';
import Navigator from '../general/Navigator';
import Footer from '../general/Footer';
import Albums from './Albums';


export default class DiscographyPage extends Component {
    render() {
        return (
        <div className='DiscographyPage'>
            <Navigator />
            <br/><br/><br/>
            <div className='ContentMem'>
            <Albums />
            </div>
            <Footer />
          </div>
        )
    }
}

