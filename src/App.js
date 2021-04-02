import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import Nav from './Components/Nav'
import Header from './Components/Header'


function App() {
  return (
    <div className="App">
    <header>
      <Header/>     
     <Nav/>
      </header>
      {/* <ul className='dropdown' >
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul> */}
      


    <div className='body'>
    <h1>GRAYSCALE</h1>
    <p>A free, responsive, one page Bootstrap <br></br> theme created by Start Bootstrap.</p>
    <button className='started'>GET STARTED</button></div>
    <footer>
      <h2>Built with Bootstrap 4</h2>
      <h4>Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right <br></br>now, simply download the template on <a className='link' href="https://startbootstrap.com/theme/grayscale/">the preview page</a>. The theme is open source,<br></br> and you can use it for any purpose, personal or commercial.</h4>
    </footer>
    
    </div>
  );
}

export default App;
