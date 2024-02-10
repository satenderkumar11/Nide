import React from 'react'
import NavLinks from './NavLinks'

const NavBar = () => {
  return (
    <div className='flex '>
        <div className='grow'> <img src="https://media.licdn.com/dms/image/D4D0BAQGg4DHMmT78ig/company-logo_200_200/0/1666935868924/nide_india_pvt_ltd_logo?e=2147483647&v=beta&t=mbUCd5jA7uVwgUbpulTrMarZx7ULM5NhxPWWyYOe0tE" alt="Logo" className='w-20 p-2' /></div>
        <NavLinks/>
    </div>
  )
}

export default NavBar