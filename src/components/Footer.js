import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-5'>
      <h1 className='text-gradient font-bold text-3xl text-center pt-10 mx-10'>
      Do you want to step into the <br/> future before others
      </h1>

      <div className='flex justify-center mt-8'>
        <button className='p-2 border border-white text-white text-sm'>
            Request Early Access
        </button>
      </div>

      <div className='flex flex-1 sm:flex-row flex-col mt-10 mx-24 space-y-10 sm:space-y-0 space-x-0 sm:space-x-5' >

        <div className='text-white flex-1 flex flex-col mt-2'>
            
            <h1 className='font-bold'>
                GPT-3 
            </h1>
            <p className='text-white'>
            Crechterwoord K12 182 DK <br/> Alknjkcb, All Rights Reserved
            </p>
        </div>

        <div className='flex flex-1 flex-col text-white mt-2'>
            <h1 className='font-bold'> Links</h1>
            <p className='pt-2'>Overons </p>
            <p className='pt-2'>Social Media </p>
            <p className='pt-2'>Counters </p>
            <p className='pt-2'>Contac </p>

        </div>

        <div className='flex flex-1 flex-col text-white mt-2'>
            <h1 className='font-bold'> Company</h1>
            <p className='pt-2'>Terms & Conditions</p>
            <p className='pt-2'>Privacy Policy </p>
            <p className='pt-2'>Contact </p>

        </div>

        <div className='flex flex-1 flex-col text-white mt-2'>
            <h1 className='font-bold'> Get in touch</h1>
            <p className='pt-2'>Crechterwoord k12 <br/> 182 DK Alknjkcb </p>
            <p className='pt-2'>085=132567 </p>
            <p className='pt-2'>info@payme.net </p>

        </div>

      </div>

      <p className='text-center text-white mt-20 pb-10'> © 2021 GPT-3. All rights reserved.</p>

    </footer>
  )
}

export default Footer
