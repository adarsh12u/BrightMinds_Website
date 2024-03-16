import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className=' mt-32 mb-32 p-5 lg:p-1'>
        
        <div className=' w-full text-center'>
              
              <h1 className=' text-white text-4xl font-semibold'><span className=' text-blue-500'>Contact Us</span>  </h1>
            <form action="https://getform.io/f/nadeopwb" method='POST'>
              <div className='w-full lg:w-1/2 m-auto mt-12  lg:mt-20 flex flex-col  gap-5'>
            
             
                  <input type="text" name="name" id="" className=' rounded-lg  text-lg font-normal p-2 text-black ' placeholder='Enter your name' />
                  <input type="email" name="email" id="" className=' rounded-lg  text-lg font-normal p-2 text-black  ' placeholder='Enter your email' />

<textarea name="message" id="" cols="5" rows="5" placeholder='Enter your Message' className=' rounded-lg text-lg font-normal focus:outline-none p-3'></textarea>
                  <button  type='submit'  className=' p-2 rounded-lg duration-500 transition-all hover:text-blue-500 border  text-lg font-semibold hover:border-sky-400 hover:bg-slate-900   bg-sky-500 from-sky-400 to-sky-800 '>submit</button>
              </div>
            </form>
          </div>

    </div>
  )
}

export default Contact