import React from 'react';

import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trusted from './components/Trusted';
import WhatisGpt from './components/WhatisGpt';



const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <Trusted />
      <WhatisGpt />
    </div>
)}

export default App
