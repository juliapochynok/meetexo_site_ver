import React, { Component } from 'react'
import './MembersPage.css';
import Navigator from '../general/Navigator';
import Footer from '../general/Footer';
import Members from './Members';


export default class MembersPage extends Component {
    render() {
        return (
            <div className='MembersPage'>
            <Navigator />
            <br/><br/><br/>
            <div className='ContentMem'>
            <Members />
            </div>
            <Footer />
          </div>
        )
    }
}



