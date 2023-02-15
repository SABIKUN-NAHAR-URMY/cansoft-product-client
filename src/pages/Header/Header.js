import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import logo from '../images/Cansoft_logo.jpg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelLogOut = () =>{
    logOut();
    navigate('/login');
  }

  return (
    <div className="navbar bg-[#cb937f] fixed top-0 z-30">
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
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#cb937f] border border-white text-white rounded-box w-52">
            <li><Link to='/userProfile'>Profile</Link></li>
            <li><button onClick={handelLogOut}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;