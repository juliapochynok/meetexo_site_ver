import React, { Component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MembersPage from './components/members_page/MembersPage';
import HomePage from './components/home_page/HomePage';
import TestsPage from './components/test_page/TestsPage';
import DiscographyPage from './components/discography_page/DiscographyPage';
import InfoPage from './components/info_page/InfoPage';
import ContactPage from './components/contact_page/ContactPage';


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/members' component={MembersPage} />
        <Route path='/tests' component={TestsPage} />
        <Route path='/discography' component={DiscographyPage} />
        <Route path='/info' component={InfoPage} />        
        <Route path='/contact' component={ContactPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
