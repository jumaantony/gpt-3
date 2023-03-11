import React from 'react';

import people from '../assets/people1.png';
import people1 from '../assets/people2.JPG';

const People = () => {
  return (
    <section>
        <img src={people} alt='people' className='w-[50px] h-[50px] rounded-full border-4 border-white-500 inline'/>
        <img src={people1} alt='people' className='w-[50px] h-[50px] rounded-full border-4 border-white-500 inline -ml-3'/>
        <img src={people} alt='people' className='w-[50px] h-[50px] rounded-full border-4 border-white-500 inline -ml-3'/>
        <img src={people1} alt='people' className='w-[50px] h-[50px] rounded-full border-4 border-white-500 inline -ml-3'/>
        <img src={people} alt='people' className='w-[50px] h-[50px] rounded-full border-4 border-white-500 inline -ml-3'/>
        <img src={people1} alt='people' className='w-[50px] h-[50px] rounded-full border-4 border-white-500 inline -ml-3'/>
        <p className='inline text-white ml-3'> 1,600 people requested access in the last 24 hours</p>
        
    </section>
  )
}

export default People
