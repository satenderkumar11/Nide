import React from 'react'
import NavLinks from './NavLinks'
import nide_logo from '../assets/img/nide_logo.png'
import { Link } from 'react-router-dom'
import { LiaUserCircle } from "react-icons/lia";
import { useContext } from 'react';
import UserContext from '../utils/userContext';
import { logOut } from '../utils/authHelper';

const NavBar = () => {

  const {user, setUser} = useContext(UserContext);

  const logoutHandler = async () => {
    await logOut();
  }


  return (
    <div className="grid grid-cols-9 bg-black text-neutral-50 p-2">
      <div className="col-span-2">
        <img src={nide_logo} alt="Logo" className="w-20" />
      </div>
      <NavLinks />
      {user.name !== ""? 
      <button onClick={logoutHandler} className="col-span-1">Logout</button>
      :
      <button className='col-span-1'><Link className='border-2 hover:bg-neutral-900 border-neutral-900 py-2 px-8 rounded-lg' to={"/login"}>Login</Link>
      </button>}
      
      <span className="text-3xl flex justify-center items-center">
          <h6 className='text-xs font-semibold'>{user.name.slice(0,8)}</h6>
          <Link><LiaUserCircle /></Link>
      </span>
      
    </div>
  );
}

export default NavBar