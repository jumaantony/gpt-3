import React from 'react'

import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'
import blog5 from '../assets/blog5.png'

const Blog = () => {
  return (
    <section className='container-xl mx-auto mt-10  pt-5 mx-10'>
      <div className='mx-5 p-10'>
        <h1 className='text-gradient font-bold text-3xl mb-10'>
            A lot is happening <br/>
            We are blogging about it.
        </h1>

        <div className='flex flex-1 flex-col sm:flex-row sm:space-x-3 space-x-0 sm:space-y-0  space-y-3'>
            <div className='blog1 flex flex-1 flex-col'>
                <img src={blog1} alt="blog" className='flex' />

                <div className='blog-cont text-white flex flex-col p-4' >
                    <p> Sep 26, 2021</p>
                    <h2 className='font-bold text-2xl mt-3'>
                        GPT-3 and Open AI is the future. Let us explore how it is.
                    </h2>

                    <p className='sm:mt-[187px] mt-[11px] mb-3'> Read Full Article</p>
                </div>
            </div>

            <div className='flex flex-1 flex-row flex-wrap space-y-3'>

                <div className='flex sm:flex-row flex-col sm:space-x-3 space-x-0 space-y-3 sm:space-y-0'>

                    <div className='blog1 flex flex-1 flex-col'>
                        <img src={blog2} alt="blog" className='flex' />

                        <div className='blog-cont text-white flex flex-col p-4' >
                            <p> Sep 26, 2021</p>
                            <h2 className='font-bold text-2xl mt-3'>
                                GPT-3 and Open AI is the future. Let us explore how it is.
                            </h2>

                            <p className='mt-[11px] mb-3'> Read Full Article</p>
                        </div>
                    </div>

                    <div className='blog1 flex flex-1 flex-col'>
                        <img src={blog3} alt="blog" className='flex' />

                        <div className='blog-cont text-white flex flex-col p-4' >
                            <p> Sep 26, 2021</p>
                            <h2 className='font-bold text-2xl mt-3'>
                                GPT-3 and Open AI is the future. Let us explore how it is.
                            </h2>

                            <p className='mt-[11px] mb-3'> Read Full Article</p>
                        </div>
                    </div>
                </div>

                <div className='flex sm:flex-row flex-col sm:space-x-3 space-x-0 space-y-3 sm:space-y-0'>

                    <div className='blog1 flex flex-1 flex-col'>
                        <img src={blog4} alt="blog" className='flex' />

                        <div className='blog-cont text-white flex flex-col p-4' >
                            <p> Sep 26, 2021</p>
                            <h2 className='font-bold text-2xl mt-3'>
                                GPT-3 and Open AI is the future. Let us explore how it is.
                            </h2>

                            <p className='mt-[11px] mb-3'> Read Full Article</p>
                        </div>
                    </div>

                    <div className='blog1 flex flex-1 flex-col'>
                        <img src={blog5} alt="blog" className='flex' />

                        <div className='blog-cont text-white flex flex-col p-4' >
                            <p> Sep 26, 2021</p>
                            <h2 className='font-bold text-2xl mt-3'>
                                GPT-3 and Open AI is the future. Let us explore how it is.
                            </h2>

                            <p className='mt-[11px] mb-3'> Read Full Article</p>
                        </div>
                    </div>
                </div>

                


                
            </div>
        </div>

      </div>
    </section>
  )
}

export default Blog
