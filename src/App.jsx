import React from 'react';

import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trusted from './components/Trusted';



const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <Trusted />
    </div>
)}

export default App
