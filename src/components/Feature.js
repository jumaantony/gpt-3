import React from 'react';

import featureimg from '../assets/feature-img.png';

const Feature = () => {
  return (
    <section className='container-xl mx-auto mt-10  pt-5 mx-10'>
      <div className='p-10 flex flex-1 md:flex-row flex-col justify-center'>

        <div className='flex flex-1'>
            <img src={featureimg} alt='feature img' className='w-[70%] mx-auto'/>
        </div>

        <div className='flex flex-1 flex-col text-white mt-10 md:mt-[200px]'>
            <p className='text-blue-300'> Request Early Access to Get Started </p>

            <h1 className='text-gradient text-3xl font-bold leading-8 mb-5 mt-5'>
                The possibilities are <br/>
                beyond your imagination
            </h1>

            <p className='leading-8 text-justify'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  
            </p>

            <p className='text-red-300 mt-5'>
                Request Early Access to get Started
            </p>
        </div>
      </div>

      <div className='text-black line p-10 mx-14 my-5 rounded'>
        <p className='text-sm'>
            Register Early to Get Started
        </p>

        <h1 className='font-bold text-2xl'>
            Register today & start exploring the endless possibilities.
        </h1>
      </div>


    </section>
  )
}

export default Feature
