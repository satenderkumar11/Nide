import React from 'react'
import { FaYoutube, FaTwitter, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa"



const Footer = () => {
  return (
    <div className='mt-auto bg-black text-white'>
      <div className = 'flex pt-3 w-4/5 mx-auto justify-between' >
        <ul className='p-5 text-neutral-500 text-sm'>
          <li className='text-neutral-50 text-base font-semibold'>Email</li>
          <li>info@nideindia.com</li>
          <li>email2nide@gmail.com</li>
          <li>email3nide@gmail.com</li>
          <li>email4nide@gmail.com</li>
        </ul>
        <ul className='p-5 text-neutral-500 text-sm'>
          <li className='text-neutral-50 text-base font-semibold'>Phone</li>
          <li>+91 1002002000</li>
          <li>+91 8438432789</li>
          <li>+91 8748934782</li>
          <li>+91 8374932874</li>
        </ul>
        <ul className='p-5 text-neutral-500 text-sm' >
        <li className='text-neutral-50 text-base font-semibold'>Office Address</li>
          <li>NIDE INDIA PVT LTD</li>
          <li>46/4, Novel Tech Park,</li>
          <li>Hosur Rd, Kudlu Gate, Garvebhavi Palya,</li>
          <li>Bengaluru, Karnataka 560068</li>
        </ul>
        <ul className='p-5 text-sm text-neutral-500' >
          <li>Home</li>
          <li>Products</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Careers</li>
        </ul>
      </div>
      <ul className='flex list-none p-5 gap-6 text-xl items-center w-4/5 mx-auto'>
        <li className='text-base'>Follow us on</li>
        <li><FaWhatsapp /></li>
        <li><FaFacebook /> </li>
        <li><FaLinkedin/></li>
        <li><FaTwitter /></li>
        <li><FaYoutube /></li>
      </ul>
      <div className='text-center bg-white text-black flex items-center justify-center py-2 text-xs'>  Copyright 2007-2023 &copy; Ningbo Nide Mechanical Equipment Co., Ltd. </div>
    </div>
  )
}

export default Footer;
