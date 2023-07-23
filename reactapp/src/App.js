import React from 'react';
import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    
    <div className='container'>
      <Navbar title="User App" />
      <hr />
      <User
        name="Adem Demir"
        department="Yazılım"
        salary="10000" />
      <User
        name="2Adem Demir"
        department="2Yazılım"
        salary="120000" />

        
    </div>

  );
}

export default App;
