import { Card } from 'flowbite-react'
import React from 'react'
const technologies = [{
      path:"/html.jpeg",
      
},{
    path:"/css.png",
    
},{
    path:"/ex.jpeg",
    
},{
    path:"/figma.png",
    
},{
    path:"/js.png",
    
},{
    path:"/mongo.jpeg",
    
},{
    path:"/node.jpeg",
    
},{
    path:"/php.jpeg",
    
},{
    path:"/react.png",
    
},{
    path:"/tail.jpeg",
    
},{
    path:"/boot.jpeg",
    
},{
    path:"/aws.jpeg",
    
},]
const Technologies = () => {
  return (
    <div id='technologies' className=' md:px-20 flex flex-col gap-10 items-center px-4 py-16 max-w-screen-2xl mx-auto'>
         
         <div  className=' text-center my-8'>
         <h2 className=' text-3xl md:text-4xl text-black font-semibold mb-2'>
                  Technologies 
              </h2>
              <div className=' h-1 w-20 rounded-full bg-blue-500 mx-auto'>
                  
              </div>
         </div>
         <div className=' text-center mb-2'>
             <h1 className=' text-2xl font-semibold'>We are experts in numerous Open-source technologies.</h1>
             <p className=' text-md mt-5'>Our proficient team of Expert Developers and Designers leverages a vast array of skills to deliver services and solutions that will surely meet your needs and expectations</p>
         </div>
         <div className='  grid grid-cols-2 gap-6  md:grid-cols-4 md:gap-24'>
             
          {
              technologies.map((val , index)=>{
                  return (
                      <Card href="#" key={index} className="max-w-sm  duration-300  hover:scale-110">
                        {
                             val.path.includes('react') ?                    <img src={val.path} className=' h-[90px] md:h-32 w-32 animate-spin' alt="" />
 :                    <img src={val.path} className=' h-24 w-24 md:h-32 md:w-32' alt="" />
  
                        }
                    
                    </Card>
              ) })
              
            }
            </div>



         

    </div>
  )
}

export default Technologies