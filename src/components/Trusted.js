import React from 'react'

import slack from '../assets/slack.png';
import atlassian from '../assets/atlassian.png';
import dropbox from '../assets/dropbox.png'
import shopify from '../assets/shopify.png'
import google from '../assets/google.png'

const Trusted = () => {
  return (
    <div className='flex flex-1 flex-wrap space-y-5 justify-center text-center text-white font-bold space-x-10 '>
      
        <span className='flex space-x-2 pt-5 justify-center'>
            <img src={google} alt='trusted-img' className='mr-2 h-[25px] h-[25px] -mt-1' /> 
            Google
        </span>

        <span className='flex space-x-2 justify-center '>
            <img src={slack} alt='trusted-img' className='mr-2 h-[25px] h-[25px] -mt-1' />  
            Slack 
        </span>

        <span className='flex space-x-2 justify-center '>
            <img src={atlassian} alt='trusted-img' className='mr-2 h-[25px] h-[25px] -mt-1' /> 
            Atlassian
        </span>

        <span className='flex space-x-2 justify-center ' >
            <img src={dropbox} alt='trusted-img' className='mr-2 h-[25px] h-[25px] -mt-1' /> 
            Dropbox
        </span>

        <span className='flex space-x-2 justify-center '>
            <img src={shopify} alt='trusted-img' className='mr-2 h-[25px] h-[25px] -mt-1' /> 
            Shopify
        </span>
      
    </div>
  )
}

export default Trusted
