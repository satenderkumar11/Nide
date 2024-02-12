import React from 'react'
import NavLinks from './NavLinks'
import nide_logo from '../assets/img/nide_logo.png'
import { Link } from 'react-router-dom'
import { LiaUserCircle } from "react-icons/lia";

const NavBar = () => {
  return (
    <div className="grid grid-cols-9 bg-black text-neutral-50 p-2">
      <div className="col-span-2">
        <img src={nide_logo} alt="Logo" className="w-20" />
      </div>
      <NavLinks />
      <button className="col-span-1">
        <Link className='border-2 hover:bg-neutral-900 border-neutral-900 py-2 px-8 rounded-lg' to={"/login"}>Login</Link>
      </button>
      <span className="text-3xl flex justify-center items-center">
        <Link to={'/'}>
          <LiaUserCircle />
        </Link>
      </span>
    </div>
  );
}

export default NavBar