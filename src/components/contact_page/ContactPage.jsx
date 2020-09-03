import React, { Component } from 'react'
import './ContactPage.css';
import Navigator from '../general/Navigator';
import Footer from '../general/Footer';
import Form from './Form';
import { createStore } from "redux";
import { Provider } from "react-redux";



const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
}

function reducer(state = initialState, action) {
switch(action.type) {
    case "SUBMIT":
        return {... state}
    case "RESET":
        return initialState; 
    case "EMAIL":
        return {
          ... state,
          email: action.arg
        };
    case "MESS":
        return {
          ... state,
          message: action.arg
        };  
    case "SUBJECT":
        return {
          ... state,
          subject: action.arg
        };  
    case "NAME":
        return {
          ... state,
          name: action.arg
        };     
    default:
        return state;
};
}

const store = createStore(reducer);



export default class ContactPage extends Component {
    render() {
        return (
        <Provider store={store}>
        <div className='InfoPage'>
         <video className="video2" loop autoPlay>
                <source src='assets/videoplayback.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Navigator />
            <Form />
            <Footer />
          </div>
          </Provider>
        )
    }
}