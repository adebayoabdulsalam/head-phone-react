import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import Cards from '../../images/credit-cards.webp'



const Footer = () => {
  return (
    <>
      <footer className='bg-primary pt-12 pb-8 text-white'>
        <div className='grid grid-cols-1 grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='space-y-6'>
                <h1 className='text-3xl font-bold uppercase'>Playing</h1>
                <p className='text-sm max-w-[300px]'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ipsa dolorum ex impedit labore beatae! Ipsum fuga corporis quia. Dolor cumque blanditiis, eius omnis voluptatibus tenetur aut consequuntur sapiente quidem!
                </p>
                 <diiv>
                    <p className='flex items-center gap-2'>
                        <FaPhone />
                        =1 (123) 456-7890
                    </p>
                    <p className='flex items-center gap-2 mt-2'>
                        {" "}
                        <FaMapLocation/> Noida, Uttar Pradesh
                    </p>
                 </diiv>
            </div>
            <div className='space-y-6'>
                <h1 className='text-3xl font-bold'>Quick Links</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <div>
                    <ul className='space-y-2'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-2'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='space-y-6'>
                <h1 className='text-3xl font-bold'>Follow Us</h1>
                <div className='flex items-center gap-3'>
                    <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                    <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                    <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                    <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                </div>
            </div>
            <p>Payment Methods</p>
            <img src={Cards} alt="" className='w-[80%]'/>
        </div>
      </footer>
    </>
  )
}

export default Footer
