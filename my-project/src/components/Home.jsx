import { Carousel } from 'flowbite-react'
import React from 'react'

const Home = () => {
  return (
    <div className='  bg-white border-b-2'>
        <div className=' px-4 lg:px-14 max-w-screen-2xl mx-auto h-[70vh]'>

        
         <Carousel className=' w-full mx-auto'>
        <div className="flex  gap-12 flex-col md:flex-row-reverse my-8 md:my-8 py-12 h-full items-center md:justify-center ">
            {/* <h1> 
                  BrightMinds IT Innovation 
            </h1>
            <p> 
                  Better IT For Better Business
            </p> */}
              <div className=' '>
                  <img className=' h-64 md:h-96 ' src="/undraw.png" alt="" />
              </div>

        <div className='text-center md:text-left'>
           <h1 className=' text-3xl md:text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug'>
               BrightMinds IT Innovation
           </h1>
         <p className=' text-blue-500 text-xl font-semibold mb-8 '> 
            Better IT For Better Business
         </p>
        </div>
        </div>
        <div className="flex  gap-12 flex-col md:flex-row-reverse my-8 md:my-8 py-12 h-full items-center md:justify-center ">
            {/* <h1> 
                  BrightMinds IT Innovation 
            </h1>
            <p> 
                  Better IT For Better Business
            </p> */}
              <div className='  '>
                  <img className=' h-64 md:h-96 w-full md:mr-24 ' src="/undraw_Finance_re_gnv2 (1).png" alt="" />
              </div>

        <div className=' text-center md:text-left  md:ml-10'>
           <h1 className= ' text-2xl md:text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug'>
           WE PROVIDE AN INTELLIGENT DESIGN 
           <h1 className=' text-2xl md:text-5xl font-semibold mb-4 text-blue-500 md:w-3/4 '>COMPLETELY TAILORED FOR YOUR BUSINESS
           </h1>
           </h1>
        
        </div>
        </div>


      
        
      </Carousel>
        </div>
    </div>
  )
}

export default Home