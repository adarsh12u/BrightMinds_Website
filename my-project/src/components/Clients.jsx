import React from 'react'
import { MdComputer } from "react-icons/md"; 
import { CiMobile1 } from "react-icons/ci"; 
import { FaTrain } from "react-icons/fa"; 
import { FaSuitcaseRolling } from "react-icons/fa"; 
import { PiNotebookFill } from "react-icons/pi";    
import { FaRegSmile } from "react-icons/fa";   
import { MdRealEstateAgent } from "react-icons/md";   
import { FaUserDoctor } from "react-icons/fa6";  
import { GiBallerinaShoes } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadein } from './varients';
const Clients = () => {
    const  industries = [{
          icon:<MdComputer size={25}  className=' text-blue-400  md:text-blue-500 ' />,
          text:"Technology"
    },
    {
        icon:<CiMobile1 size={25} className=' text-blue-400  md:text-blue-500 '/>,
        text:"E-commerce"
  },
  {
    icon:<FaTrain size={25} className=' text-blue-400  md:text-blue-500 '/>,
    text:"Travel"
},
{
    icon:<FaSuitcaseRolling size={25} className=' text-blue-400  md:text-blue-500 '/>,
    text:"Business"
},
{
    icon:<PiNotebookFill size={25} className=' text-blue-400  md:text-blue-500 '/>,
    text:"Education"
},
{
    icon:<FaRegSmile size={25} className=' text-blue-400  md:text-blue-500 '/>,
    text:"Cosmetic"
},
{
    icon:<FaUserDoctor size={25}  className='  text-blue-400  md:text-blue-500 '/>,
    text:"Health care"
},
{
    icon:<MdRealEstateAgent size={25} className=' text-blue-400  md:text-blue-500 '/>,
    text:"Real state"
},
{
    icon:<GiBallerinaShoes size={25} className=' text-blue-400  md:text-blue-500 '/>,
    text:"Footwares"
},
{
    icon:<FaPaintBrush size={25} className=' text-blue-400  md:text-blue-500 '/>,
    text:"Art"
}
]
  return (
    <div id='clients' className=' md:px-20 flex flex-col gap-10 items-center px-4 py-16 max-w-screen-2xl mx-auto border-b-2  '>
         <div variants={fadein("right",0.1)} initial="hidden" whileInView={"show"} viewport={{once : false , amount : 0.7}} className=' text-center my-8'>
              <h2 className=' text-3xl md:text-4xl text-black font-semibold mb-2'>
                  Industries We've Worked with!
              </h2>
              <div className=' h-1 w-20 rounded-full bg-blue-500 mx-auto'>
                  
                  </div>
         </div>
         <div variants={fadein("up",0.1)} initial="hidden" whileInView={"show"} viewport={{once : false , amount : 0.7}} className='  grid grid-cols-2 gap-6  md:grid-cols-5 md:gap-24'>
                {
                      industries.map((value , index)=>{
                            return <div className=' flex flex-col items-center gap-5'>
                                    {
                                           value.icon
                                    }
                                    <h1 className=' text-base font-semibold'>{value.text}</h1>
                            </div>
                             
                      })
                }
         </div>
    </div>
  )
}

export default Clients