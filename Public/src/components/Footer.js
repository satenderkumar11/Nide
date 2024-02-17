import React from 'react'
import { FaYoutube, FaTwitter, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa"
import { mail_links, contact_links, nav_links } from '../constants';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className="mt-auto bg-black p-4">
      <div className="flex pt-3 w-4/5 mx-auto justify-between">
        <div>
          <h6 className="text-neutral-400  font-semibold mb-2">
            Email
          </h6>
          <ul className=" text-neutral-100 list-none">
            {mail_links.map((mail) => (
              <li className="hover:text-blue-500 cursor-pointer">{mail}</li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-neutral-400 font-semibold mb-2">
            Phone
          </h6>
          <ul className=" text-neutral-100 list-none">
            {contact_links.map((contact) => (
              <li className="hover:text-blue-500 cursor-pointer">{contact}</li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-neutral-400 font-semibold mb-2">
            Office Address
          </h6>
          <p className="text-neutral-100">
            NIDE INDIA PVT LTD<br></br>
            46/4, Novel Tech Park,<br></br>
            Hosur Rd, Kudlu Gate, Garvebhavi Palya,<br></br>
            Bengaluru, Karnataka 560068
          </p>
        </div>

        <ul className=" text-neutral-100 list-none">
          {nav_links.map((link) => (
            <li className="hover:text-blue-500 cursor-pointer">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex list-none my-8 gap-6 text-lg  items-center w-4/5 mx-auto text-neutral-100">
        <li className='text-base'>Follow us on</li>
        <li>
          <FaWhatsapp />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaYoutube />
        </li>
      </ul>
      <div className="text-center bg-white text-black flex items-center justify-center py-2 text-xs">
        {" "}
        Copyright 2007-2023 &copy; Ningbo Nide Mechanical Equipment Co., Ltd.{" "}
      </div>
    </div>
  );
}

export default Footer;
