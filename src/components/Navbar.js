import React, {useState} from 'react';

import { navLinks } from '../constants';

const Navbar = () => {
    // Toggler
    const [toggle, setToggle] = useState(false)

    return (
        <div className='text-white w-full flex p-6'> 
            <div className='absolute z-[0] md:w-[20%] w-[50%] h-[60%] white__gradient'/>      
            
            {/* Desktop Navbar */}
            <ul className='flex flex-1 flex-row list-none md:flex hidden'>
                {/* Text - Logo */}
                <button href='#' className='font-bold w-[200px] pt-1'> GPT-3 </button>


                <nav className='w-full flex mt-3 ml-3'>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className='cursor-pointer mt-2'>
                            <a href={`#${nav.id}`} className='p-5 font-bold hover:text-red-500'>
                                {nav.title}
                            </a>
                        </li>
                    ))}

                    <div className='flex flex-1 justify-end mr-7'>
                        <button className='mr-6 p-3 font-bold rounded hover:border hover:text-red-600 '>
                            Sign In
                        </button>

                        <button className='bg-red-600 p-3 rounded font-bold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50'>
                            Sign Up
                        </button>
                    </div>
                </nav>

            </ul>

            {/* Tablet and Mobile Navbar */}
            <div className='md:hidden flex flex-1'>
                {/* Text - Logo */}
                <button href='#' className='font-bold absolute'> GPT-3 </button>

                {/* Toggler */}
                <div className='my-toggler cursor-pointer top-5 right-10 absolute'
                    onClick={() => setToggle((prev) => !prev)}>
                    { toggle ? 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 top-0 right-0 absolute">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    : 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                        </svg>
                    }
                    {/* Menu Items */}
                    
                    <div className={`${toggle ? 'block' : 'hidden'} `}>
                        
                        <ul className='flex flex-1 flex-row list-none bg-black-gradient mt-10 pl-4 pr-2 rounded'>

                            <nav className='mt-1'>
                                {navLinks.map((nav, index) => (
                                    <li key={nav.id} className='cursor-pointer mt-2 pb-2'>
                                        <a href={`#${nav.id}`} className='font-bold hover:text-red-500'>
                                            {nav.title}
                                        </a>
                                    </li>
                                ))}

                                <div className='p-0'>
                                    <button className='block p-3 -ml-3 font-bold rounded hover:border hover:text-red-600 '>
                                        Sign In
                                    </button>

                                    <button className='block mt-2 bg-red-600 p-3 rounded font-bold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50'>
                                        Sign Up
                                    </button>
                                </div>
                            </nav>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;
