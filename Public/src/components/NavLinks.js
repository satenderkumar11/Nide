import React from 'react'
import {Link} from 'react-router-dom'
const link_names = [{name: "Home", path:'/home'}, {name : "Products", path: '/products'}, {name: "About Us", path: '/about'}, {name: "Contact us", path: '/contact'}, {name: "Careers", path: '/Careers'}];
const NavLinks = () => {

  return (
    <ul className='col-span-5 flex list-none justify-center gap-12 items-center'>
        {link_names.map(link => <li className=''> <Link to={link.path}>{link.name}</Link></li>)}
    </ul>
  )
}

export default NavLinks