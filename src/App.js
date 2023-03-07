
import './App.css';
import React from 'react'
import Navbar from './myComponent/Navbar';
import News from './myComponent/News';
import Footer from './myComponent/Footer';

const App=()=> {
  
    return (
      <div>
        <Navbar/>
        <News/>
        <Footer/>
      </div>
    )
 
}
export default App;
