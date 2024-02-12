import React from 'react'
import { FaYoutube, FaTwitter, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa"



const Footer = () => {
  return (
    <div className='mt-auto bg-black text-white'>
      <div className = 'flex pt-3 w-4/5 mx-auto justify-between' >
        <ul className='p-5 text-neutral-500 text-sm'>
          <li className='text-neutral-50 text-base font-semibold'>Email</li>
          <li>satenderkumar@gmail.com</li>
          <li>utkarshtripathi@gmail.com</li>
          <li>rohitkumar@gmail.com</li>
          <li> manishhks@gmail.com</li>
        </ul>
        <ul className='p-5 text-neutral-500 text-sm'>
          <li className='text-neutral-50 text-base font-semibold'>Phone</li>
          <li>+91 1002002000</li>
          <li>+91 8438432789</li>
          <li>+91 8748934782</li>
          <li>+91 8374932874</li>
        </ul>
        <ul className='p-5 text-neutral-500 text-sm' >
        <li className='text-neutral-50 text-base font-semibold'>Address</li>
          <li>SDF No. E - 17 & C - 2, Noida SEZ, Noida Dadri Road, Phase II</li>
          <li>Noida - 201 305</li>
          <li>Uttar Pradesh, India</li>
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
    </div>
  )
}

export default Footer;
