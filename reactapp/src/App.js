import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';
import Test from './components/Test';
//import User from './components/User';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
class App extends React.Component {
 
 
  render () {
    return (
    
      <div className='container'>
        <Test test = "deneme" />
        <Navbar title="User App" />
        <hr />
        <AddUser/>
        <Users />
  
          
      </div>
  
    );
  }
  
}

export default App;
