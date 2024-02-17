import React from 'react'
import {Link} from 'react-router-dom'
import { nav_links } from '../constants'
const NavLinks = () => {

  return (
    <ul className='col-span-5 flex list-none justify-center gap-12 items-center'>
        {nav_links.map(link => <li className=''> <Link to={link.path}>{link.name}</Link></li>)}
    </ul>
  )
}

export default NavLinks