import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import {FaXmark } from 'react-icons/fa6'
import { FaBars} from 'react-icons/fa'
const Navbar = () => {
const [ismenu , setismenu] = useState(false);
const [sticky , setsticky]  = useState(false);

const settoggle = () =>{
      setismenu(!ismenu);
}
useEffect(()=>{
      const handleScrolll = () =>{
          if(window.scrollY > 100){
              setsticky(true);
          }else{
             setsticky(false);
          }
      }

      window.addEventListener('scroll' , handleScrolll);
  return ()=>{
     window.addEventListener('scroll' , handleScrolll);
  }
    })

const navlinks = [{
      link : "Home" , path : "#home"
} , {
    link : "Services" , path : "#services"
},{
    link : "About" , path : "#about"
},{
    link : "Products" , path : "#products"
},{
    link : "Clients" , path : "#clients"
},{
    link : "Technologies" , path : "#technologies"
}]

  return (
    <header className=' w-full    bg-white md:bg-transparent  border-b-2 '>
          <nav className={` py-4 md:py-7 lg:px-14 px-4 `}>
                 <div className=' flex justify-between items-center text-base gap-8'>
                      <a href="" className=' text-2xl font-semibold'>BrightMinds IT </a>
                

                 <ul className=' md:flex space-x-12 hidden'>
                      {
                        navlinks.map(({link , path})=> <a className=' hover:text-blue-400' href={path}>{link}</a>
                               
                       )
                      }
                 </ul>

                 <div className=' md:hidden '>
                       <button className=' focus:outline-none text-black' onClick={settoggle}>
                            {
                                 ismenu ? (
                                     <FaXmark className='h-6 w-6'/>
                                 ) : (<FaBars className=' h-6 w-6'/>)
                            }
                       </button>
                 </div>
                 </div>

                 <div className={` space-y-4 flex flex-col justify-center items-center px-4  mt-16 py-7 bg-blue-500  ${ismenu ? "block fixed top-0 right-0 left-0 z-50" :"hidden" }`}>
                 {
                        navlinks.map(({link , path})=> <a className=' hover:text-blue-400' href={path}>{link}</a>
                               
                       )
                      }
                 </div>
          </nav>
    </header>
  )
}

export default Navbar