import React from 'react';
import Info from './component/info';
import About from './component/about';
import Interest from './component/interest';
import Footer from './component/footer';
import './style.css';

export default function App() {
  return (
    <div className='body'>
      <Info />
      <About/>
      <Interest/>
      <Footer />
    </div>
    );
}

