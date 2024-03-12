

import { Footer } from 'flowbite-react';
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import React from 'react'

const Footers = () => {
  return (
    <Footer container  bgDark  >
      <div className="  w-full py-8" >
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className=" flex items-center justify-center md:ml-28">
          
            <h1 className=" text-gray-500 text-2xl mb-6 md:mb-0 md:text-4xl text-center">
              BrightMinds IT Innovation.
            </h1>


          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.instagram.com/brightmindsitinnovations?igsh=MXI3ODMzaW52ODZqeA%3D%3D">Instagram</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/brightminds-it-innovation-a597592b2/">Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link>Privacy Policy</Footer.Link>
                <Footer.Link >Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="All right reserved" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.instagram.com/brightmindsitinnovations?igsh=MXI3ODMzaW52ODZqeA%3D%3D" icon={IoLogoInstagram} />
            <Footer.Icon href="https://www.facebook.com/people/BrighmindsIt-Innovations/pfbid02Mh6uLjjmZVewLSMeugZj8cWJrXDWPBbzugHgmaJGNqSuaFF6zM2k1C7GbdgRhADbl/?sfnsn=wiwspwa&mibextid=RUbZ1f" icon={CiFacebook} />
            
            <Footer.Icon href="https://www.linkedin.com/in/brightminds-it-innovation-a597592b2/" icon={FaLinkedin} />
            <Footer.Icon href="https://twitter.com/i/flow/login?redirect_after_login=%2FBrightmindsIT" icon={BsTwitterX} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Footers

