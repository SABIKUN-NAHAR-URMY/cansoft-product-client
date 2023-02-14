import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Cansoft_logo.jpg';
import linkedIn from '../images/linkedin.png';
import facebook from '../images/facebook.png';

const Footer = () => {
    return (
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <img className='w-36' src={logo} alt="" />
        <p>Copyright © 2023 - All right reserved</p>
      </div> 
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        
      <Link to='https://www.facebook.com/cansoft.canada' className='w-8 bg-white rounded-full'><img src={facebook} alt="" /></Link>
        <Link to='https://www.linkedin.com/company/cansoft-technologies/' className='w-9 bg-white rounded-full'><img src={linkedIn} alt="" /></Link>
      </div>
    </footer>
    );
};

export default Footer;