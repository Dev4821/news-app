
import './App.css';
import React, { Component } from 'react'
import Navbar from './myComponent/Navbar';
import News from './myComponent/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

