import React from 'react';

import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';



const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Hero />
    </div>
)}

export default App
