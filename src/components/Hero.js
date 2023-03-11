import React from 'react';

import People from './People';
import headerimg from '../assets/header.png';

const Hero = () => {
  return (
    <section className='container-xl mx-auto'>

      <div className='flex md:flex-row flex-col justify-center space-x-10 px-10 mx-5' >
        <div className='flex flex-1 flex-col justify-center'>
          <h1 className='font-bold ss:text-[45px] text-[42px] text-gradient'>
              Lets Build Something <br/> amazing with GPT-3 <br/> OpenAI
          </h1>

          <p className='text-white text-justify'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>

          <div className='flex w-full mt-5'>
            <input type='text'  className='rounded-l p-3 w-[75%]'/>

            <input type="button" value="Get Started" className='text-white rounded-r bg-red-600 p-3 rounded font-bold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50'/>

          </div>

          <div className='mt-5'>
            <People />
          </div>

        </div>

        <div className='flex flex-1 flex-col justify-center'>
          <img src={headerimg}  alt='header-img' className='w-[100%] h-[100%] mx-auto'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
