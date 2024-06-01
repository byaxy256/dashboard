import React from 'react'
import './app.css';
import Navbar from './components/Navbar/navbar';
import Footer  from './components/Footer/footer';
import Home from './components/Home/home';
import Main from './components/Main/main';
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}; 
export default App;
