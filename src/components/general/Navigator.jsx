import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigator.css'


export default class Navigator extends Component {
    render() {
        return (
        <div className="Header">
            <nav>
                <NavLink className="MainContainerA" to="/tests" activeClassName="selected">Tests</NavLink>
                <NavLink className="MainContainerA" to="/members" activeClassName="selected">Members</NavLink>
                <NavLink className="MainTitle" to="/" activeClassName="selected"> <strong>MEET &nbsp;
                    <img href="/" className="Logo1" src={require("../../logo.png")} alt="img-logo" />&nbsp; EXO</strong> 
                </NavLink>
                <NavLink className="MainContainerA" to="/discography" activeClassName="selected">Discography</NavLink>
                <NavLink className="MainContainerA" to="/info" activeClassName="selected">Info</NavLink>
                <NavLink to="/contact" className="MainContainerA"  activeClassName="selected">Contact</NavLink>
            </nav>
        </div>
        )
    }
}


