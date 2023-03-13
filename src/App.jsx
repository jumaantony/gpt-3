import React from 'react';

import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trusted from './components/Trusted';
import WhatisGpt from './components/WhatisGpt';
import Feature from './components/Feature';
import Blog from './components/Blog';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='mx-10'>
        <Navbar />
        <Hero />
        <Trusted />
        <WhatisGpt />
        <Feature />
        <Blog />
      </div>
      <Footer />
    </div>
)}

export default App
