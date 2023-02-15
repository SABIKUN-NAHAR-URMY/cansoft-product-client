import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ForgetPass = () => {
    const {resetPassword} = useContext(AuthContext);
    const navigate = useNavigate();

    const handelEmailSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        const userEmail = {
            email: email,
        }

        fetch('https://cansoft-product-server.vercel.app/forgot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userEmail)
        })
            .then(res => res.json())
            .then(data => {
                if(!data.acknowledged){
                    alert("User with this email does not exist")
                }
                else{
                    navigate('/resetPass');
                    resetPassword(data.userEmail[0]);
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='bg-[#764432a5] w-full h-screen'>
            <div className='w-96 mx-auto pt-48'>
            <form onSubmit={handelEmailSubmit} className='bg-white border rounded-lg p-10'>
                <label className='text-xl font-bold' htmlFor="">Email</label>
                <input type="text" name='email'  placeholder='Email' className="input input-bordered w-full mb-8" />
                <input className='btn bg-[#7b5141] w-full' type="submit" value="Submit" />
            </form>
            </div>
        </div>
    );
};

export default ForgetPass;