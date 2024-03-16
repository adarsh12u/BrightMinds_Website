import React from 'react'
import { AiOutlineAim } from "react-icons/ai";
import { FaPlantWilt } from "react-icons/fa6";   
import { IoIosBrush } from "react-icons/io";   
import { MdDeveloperMode } from "react-icons/md";   
import { GrTest } from "react-icons/gr";  
import { MdRocketLaunch } from "react-icons/md";
import {motion } from 'framer-motion'
import { fadein } from './varients';
const workflow = [{
     text:"Analysis",
     logo:<AiOutlineAim className='  text-blue-500   h-16 w-16 '/>
},{
  text:"Plan"  ,
  logo:<FaPlantWilt className='  text-blue-500   h-16 w-16 '/> 
},{
    text:"Design",
    logo:<IoIosBrush className='  text-blue-500  h-16 w-16  '/>
},{
    text:"Develop",
    logo:<MdDeveloperMode className='  text-blue-500   h-16 w-16 '/>
},{
    text:"Testing",
    logo:<GrTest className='  text-blue-500  h-16 w-16  '/>
},{
    text:"Deployment",
    logo:<MdRocketLaunch className='  text-blue-500  h-16 w-16  '/>
}]
const AboutUs = () => {
  return (
    <div id='about' className=' md:px-20 flex flex-col gap-10 items-center px-4 py-16 max-w-screen-2xl mx-auto border-b-2'>
         
    <motion.div variants={fadein("left",0.1)} initial="hidden" whileInView={"show"} viewport={{once : false , amount : 0.7}} className=' text-center my-8'>
    <h2 className=' text-3xl md:text-4xl text-black font-semibold mb-2'>
             About Us 
         </h2>
         <div className=' h-1 w-20 rounded-full bg-blue-500 mx-auto'>
             
         </div>
    </motion.div>
    <div variants={fadein("right",0.1)} initial="hidden" whileInView={"show"} viewport={{once : false , amount : 0.7}} className=' text-center mb-2'>
        <h1 className=' text-2xl font-semibold'>Know whom you are working with</h1>
        <p className=' text-md mt-5'>BrigntMinds IT Innovation is a  leading India based web design & development company providing services in India, was founded in 2023 with the goal of providing businesses the clearest way to create Worldwide existence through the web. Our focus on Online applications includes web design, web development, CMS websites, eCommerce websites, Multi-vendor platforms, custom web applications, Portals for Large-scale Enterprises. Although we’re an India-based web design and development firm, we help businesses worldwide with their online needs and help them to create their unique presence.

Since our commencement,BrigntMinds IT Innovation  has built an exceptional hand-picked elite team of interactive Web professionals.
We maintain our focus on providing best quality work within stringent timelines under the budget and driving demand and enhancing campaign effectiveness for each and every client we work with.</p>
    </div>

    <div className=' text-center mb-2'>
        <h1 className=' text-2xl font-semibold'>How We Works</h1>
    </div>
    <div variants={fadein("left",0.1)} initial="hidden" whileInView={"show"} viewport={{once : false , amount : 0.7}} className='  grid grid-cols-1 gap-10 md:gap-20  md:grid-cols-6 '>
        
     {
        workflow.map((val , index)=>{
             return (
                 <div key={index} className=' group '>
                     <div className=' border-2  border-gray-200 rounded-full p-6 '>

                      {
                         val.logo
                      }
                     </div>

                      
                      <h1 className=' text-center mt-5'>
                         {
                             val.text
                         }
                      </h1>
                 </div>
             )
        })
         
       }
       </div>



    

</div>
  )
}

export default AboutUs