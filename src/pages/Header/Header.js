import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import logo from '../images/Cansoft_logo.jpg';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img className='w-40' src={logo} alt="" />
      </div>
      <div className="flex-none gap-2">
        <ul tabIndex={0} className="menu menu-compact bg-base-100">
        <li><Link to='/productList' className='text-xl font-semibold'>Product List</Link></li>
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div >
              <FaUser className="w-8 h-8"></FaUser>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><Link>Profile</Link></li>
            <li><Link>Settings</Link></li>
            <li><Link>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;