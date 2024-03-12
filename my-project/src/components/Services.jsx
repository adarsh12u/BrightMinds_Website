import { Card } from 'flowbite-react'
import React from 'react'
import {motion} from 'framer-motion'
import {fadein} from './varients'
const services = [{
      tech : "Website Design",
      data:"Our website design services give you a unique & elegant digital platform to meet your each & every individual client’s needs. Build audience trust with a world-class website with all latest and assured standards."
},
{
     tech:"Mobile App",
     data:"We work with our clients to create highly performance-driven mobile apps for Android and iOS platforms with the best approach to fulfilling all your business needs. We are adept with the latest trends & technologies to create robust & secure apps."
},
{
    tech:"Website Development",
    data:"We develop custom websites with a highly skilled team of developers by applying best-in-class technology which perfectly represents the client specifications and under the budget. All our deliverables engage with customers on all devices and run smooth across all platforms."
},{
    tech:"Online Shops",
    data:"We provide an effective user interface from brilliant home page design, clear product pages with a quick search and various dynamic filters, attractive offers and wishlist to one-page checkout, which delivers your product and services in their hand with the ultimate online shopping experience."
},{
    tech:"UI/UX ",
    data:"Crafting user-friendly digital experiences that are easy to use and visually appealing. We design interfaces that make navigating websites and apps a breeze for everyone"
},{
    tech:"Api Development",
    data:"Building bridges between software systems, APIs (Application Programming Interfaces) enable smooth communication and interaction. We create APIs that allow different apps and services to seamlessly share data and functionalities."
}]

const Services = () => {
  return (
    <div id='services' className=' md:px-20 flex flex-col gap-10 items-center px-4 py-16 max-w-screen-2xl mx-auto'>
         
         <motion.div variants={fadein("up",0.0)} initial="hidden" whileInView={"show"} viewport={{once : false , amount : 0.7}} className=' text-center my-8'>
         <h2 className=' text-3xl md:text-4xl text-black font-semibold mb-2'>
                  Our Services 
              </h2>
              <div className=' h-1 w-20 rounded-full bg-blue-500 mx-auto'>
                  
              </div>
         </motion.div>
         <div variants={fadein("left",0.0)} initial="hidden" whileInView={"show"} whileFocus={"show"} viewport={{once : false , amount : 0.7}} className=' text-center mb-2'>
             <h1 className=' text-2xl font-semibold'>WE HELP CLIENTS BUILD AMAZING WEBSITES</h1>
             <p className=' text-md mt-5'>BrightMinds IT Innovation is a technology solution company based in India providing a wide range of software services across various industries. Leveraging from years of experience we have implemented best practice and developed reusable functions which enable us to deliver high-quality systems at affordable prices.Our Custom Software Development service gives you the freedom to choose the perfect solution to bridge the gap between technology and business.We work together with our clients to define requirements, scope projects, design architectures, develop, deliver and maintain software.</p>
         </div>
         <div  className='  grid grid-cols-1 gap-6  md:grid-cols-3 md:gap-24'>
             
          {
              services.map((val , index)=>{
                  return (
                      <Card  href="#" key={index} className="max-w-sm  duration-300  hover:scale-110">
                      <h5 className="text-2xl font-semibold tracking-tight  text-blue-500 ">
                       {
                           val.tech
                        }
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {val.data}</p>
                    </Card>
              ) })
              
            }
            </div>



         

    </div>
  )
}

export default Services