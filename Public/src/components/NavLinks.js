import React from 'react'
import {Link} from 'react-router-dom'
const link_names = [{name: "Home", path:'/home'}, {name : "Products", path: '/products'}, {name: "About Us", path: '/about'}, {name: "Contact us", path: '/contact'}, {name: "Jobs", path: '/jobs'} , {name: "Login", path: '/login'}];
const NavLinks = () => {

  return (
    <ul className='flex list-none  me-auto  justify-between items-center p-6'>
        {link_names.map(link => <li className='mx-4'> <Link to={link.path}>{link.name}</Link></li>)}
    </ul>
  )
}

export default NavLinks