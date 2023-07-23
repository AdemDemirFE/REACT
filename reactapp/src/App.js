import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';
import Users from './components/Users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
class App extends Component() {
  state = {
    users: [
      {
        id: 1,
        name : "Adem Demir",
        salary: "10000",
        department: "Yazılım"
      },
      {
        id: 2,
        name : "Adem fe",
        salary: "102000",
        department: "Yazılım"
      }
    ]
  }
  render () {
    return (
    
      <div className='container'>
        <Navbar title="User App" />
        <hr />
        <Users users= {this.state.users}/>
  
          
      </div>
  
    );
  }
  
}

export default App;
