import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-gray'>
      <div className='border-b-2 '>
      <div className='flex justify-between w-3/4 mx-auto my-12'>
        <h1 className='text-3xl text-accent'>TechHub</h1>
        <div className='flex gap-5 text-accents'>
          <Link>HOME</Link>
          <Link>ABOUT</Link>
          <Link>SHOP</Link>
          <Link>CONTACT</Link>
        </div>
        <div className='flex text-xl gap-5 my-2 text-accent'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
      </div>

      <div className='flex justify-between w-3/4 mx-auto my-8'>
        <p>Copyright © 2024</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;