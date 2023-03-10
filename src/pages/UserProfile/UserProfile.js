import React from 'react';
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const userData = (JSON.parse(localStorage.getItem('userInfo')));
    const navigate = useNavigate();
    const handelEditProfile = id =>{
        navigate(`/editUserProfile/${id}`)
    }
    return (
        <div>
            <div className='h-64 relative bg-gradient-to-r from-[#b67962] to-[#c9b1a9] mb-32'>

                <div className='pt-32 pl-40 lg:pl-0 text-4xl font-bold'>
                    <p data-aos="fade-up"
     data-aos-duration="1000">{userData.firstName + ' ' + userData.lastName}</p>
                    <p data-aos="fade-up"
     data-aos-duration="1000" className='text-xl'>{userData.email}</p>
                </div>

                <div className='absolute top-40 lg:left-28'>
                    <div className='border bg-white bottom-0 w-52 p-6 border-orange-400'>
                        <FaUser className='w-40 h-40 border-2 bg-slate-300 rounded-full mx-auto'></FaUser>
                    </div>
                </div>


            </div>

            <div className="card bg-[#eccdc2] mx-8 lg:w-1/2 shadow-xl lg:mx-auto my-10 text-left" data-aos="fade-up"
     data-aos-duration="1000">
                <div className="card-body">
                    <h2 className="text-3xl font-bold pb-4" data-aos="fade-up"
     data-aos-duration="2000">Profile Information</h2>
                    <div className='text-xl font-semibold' data-aos="fade-up"
     data-aos-duration="2000">
                        <p>First Name: {userData.firstName}</p>
                        <p>Last Name: {userData.lastName}</p>
                        <p>Phone: {userData.phone}</p>
                    </div>
                    <div className="card-actions justify-end" data-aos="fade-up"
     data-aos-duration="2000">
                        <button onClick={()=>handelEditProfile(userData._id)} className="btn bg-[#795548]">Edit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;