import React from 'react'

const projects = [{
   img:'/p1.jpg'
},{
    img:'/p2.jpg'
},{
    img:'/p3.jpg'
},{
    img:'/p4.jpg'
},{
    img:'/p5.png'
},{
    img:'/p6.png'
},{
    img:'/p7.png'
},{
    img:'/p8.png'
},{
    img:'/p9.png'
},]
const Projects = () => {
  return (
    <div className=' md:px-20 flex flex-col gap-10 items-center px-4 py-16 max-w-screen-2xl mx-auto'>
         
         <div className=' text-center my-8'>
         <h2 className=' text-3xl md:text-4xl text-black font-semibold mb-2'>
                  Our Latest Work
              </h2>
              <div className=' h-1 w-20 rounded-full bg-blue-500 mx-auto'>
                  
              </div>
         </div>
         <div className=' text-center mb-2'>
             <h1 className=' text-2xl font-semibold'>An eye for detail makes our works excellent</h1>
               </div>
         <div className='  grid grid-cols-1 gap-10  md:grid-cols-3 md:gap-24'>
             
          {
              projects.map((val , index)=>{
                  return (
                      <div className='  h-52 w-96  object-cover border-2 border-black  rounded-md'>
                            <img src={val.img} alt="" className=' h-[205px] rounded-md w-full object-cover' />
                      </div>

              ) })
              
            }
            </div>



         

    </div>
  )
}

export default Projects