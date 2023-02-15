import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { createUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const [signupError, setSignupError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handelLogin = data => {
        setSignupError('');

        const users = {
            email: data.email,
            password: data.password,
        }

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    navigate('/productList');
                    createUser(data?.userInfo[0]);
                    localStorage.setItem('userInfo', JSON.stringify(data?.userInfo[0]));
                }
                else {
                    alert('Email or Password Error!');
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='lg:grid grid-cols-2 gap-0'>
            <div className='bgOverlay flex justify-center items-center'>
                <div className='text-left mx-10'>
                    <p className='text-7xl font-bold mb-10' data-aos="fade-up"
     data-aos-duration="1000">Welcome back!!</p>
                    <p className='text-3xl' data-aos="fade-up"
     data-aos-duration="1000">We are glad to see you again! Get access to show your Products List.</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-2/3'>
                    <p className='text-4xl text-left mb-4 font-bold' data-aos="fade-up"
     data-aos-duration="1000">Log In</p>
                    <form data-aos="fade-up"
     data-aos-duration="1000" onSubmit={handleSubmit(handelLogin)}>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text text-xl">Email Address</span></label>
                            <input placeholder='Email Address' type="email"
                                {...register("email",
                                    { required: "Email Address is required" })} className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text text-xl">Password</span></label>
                            <input placeholder='Password' type="password"
                                {...register("password",
                                    {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                                    })} className="input input-bordered w-full" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>

                        <Link to='/forgetPass'><p className='text-left'>Forget Password?</p></Link>

                        <input className='btn bg-[#795548] hover:bg-[#512d1f] w-full mt-5' value='Login' type="submit" />
                        {
                            signupError && <p className='text-red-600'>{signupError}</p>
                        }
                    </form>
                    <p  className='text-sm text-center my-6'>Are you New? <Link className='text-[#41281f] font-bold' to='/'>Create New Account</Link></p>
                    
                </div>

            </div>
        </div>
    );
};

export default Login;