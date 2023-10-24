import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';

function App() {
  const[mode,setMode] = useState('light');
  const[mode2,setMode2] = useState('dark');
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      setMode2('dark');
      document.body.style.backgroundColor = '#212529';
      document.querySelector('.navbar').style.borderBottom = '1px solid #f5f5f7';
      //dark krne hain text and buttons idhar
      
    }
    else{
      setMode('dark');
      setMode2('light');
      document.body.style.backgroundColor = 'white';
      document.querySelector('.navbar').style.borderBottom = '1px solid #212529';
      //idhar light krna h
    }
  }
  return (
    <>
    <Navbar title = "Text Formatter" mode = {mode} mode2 = {mode2} toggleMode = {toggleMode}/>
    <TextForm mode = {mode}/>
    <Footer mode = {mode}/>
    </>
  );
}

export default App;
