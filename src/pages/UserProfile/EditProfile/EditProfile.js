import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const userData = useLoaderData();
    console.log(userData);
    const navigate = useNavigate();

    const handelEditProfile = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;

        const editProfile = {
            firstName,
            lastName,
            phone
        }

        fetch(`http://localhost:5000/editUserProfile/${userData._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editProfile)
        })
            .then(data => {
                console.log(data);
                if (data.statusText === 'OK') {
                    const editData = {
                        _id: userData._id,
                        firstName: firstName,
                        lastName: lastName,
                        phone: phone,
                        email: userData.email
                    }
                    localStorage.setItem('userInfo', JSON.stringify(editData));
                    console.log()
                }
                alert("Profile Updated!");
                navigate('/userProfile');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='bg-[#764432a5] w-full h-screen'>
            <div className='lg:w-1/2 pt-20 mx-auto border shadow-xl rounded-lg p-5 m-10'>
                <form onSubmit={handelEditProfile} className='m-10 '>
                    <input data-aos="fade-up"
                        data-aos-duration="1000" type="text" name='firstName' defaultValue={userData.firstName} placeholder='First Name' className="input input-bordered w-full mb-8" />
                    <input data-aos="fade-up"
     data-aos-duration="1000" type="text" name='lastName' defaultValue={userData.lastName} placeholder='Last Name' className="input input-bordered w-full mb-8" />
                    <input data-aos="fade-up"
     data-aos-duration="1000" type="text" name='phone' defaultValue={userData.phone} placeholder='Phone' className="input input-bordered w-full mb-8" />
                    <input data-aos="fade-up"
     data-aos-duration="1000" type="text" name='email' disabled defaultValue={userData.email} placeholder='Email' className="input input-bordered w-full mb-8" />
                    <input data-aos="fade-up"
     data-aos-duration="1000" className='btn bg-[#795548] w-full' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default EditProfile;