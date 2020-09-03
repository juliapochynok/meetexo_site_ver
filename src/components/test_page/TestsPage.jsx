import React, { Component } from 'react'
import './TestsPage.css';
import Navigator from '../general/Navigator';
import Footer from '../general/Footer';
import Tests from './Tests';


export default class TestsPage extends Component {
    render() {
        return (
        <div className='TestsPage'>
            <Navigator />
            <div className='ContentTests'>
            <br/><br/><br/><br/><br/>
            <Tests />
            <br/><br/><br/><br/><br/>
            </div>
            <Footer />
          </div>
        )
    }
}
