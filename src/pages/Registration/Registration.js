import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    const [signupError, setSignupError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handelSignUp = data => {
        console.log(data);
        setSignupError('');
        const users = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            password: data.password,
            userName: data.email
        }

        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                // localStorage.setItem('token', data.token);
                console.log(data);
                if(data.acknowledged){
                    alert('User Sign Up done!');
                    navigate('/login');
                }
                else {
                    alert('Already Sign Up please Login!');
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='lg:grid grid-cols-2 gap-0'>
            <div className='bgOverlay flex justify-center items-center'>
                <div className='text-left mx-10'>
                    <p className='text-7xl font-bold mb-10' data-aos="fade-up"
     data-aos-duration="1000">Looks like you're new here!</p>
                    <p className='text-3xl' data-aos="fade-up"
     data-aos-duration="1000">Join with us! Sign up with your details to get started!</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-2/3'>
                    <p className='text-4xl text-left mb-4 font-bold' data-aos="fade-up"
     data-aos-duration="1000">Sing Up</p>
                    <form data-aos="fade-up"
     data-aos-duration="1000"  onSubmit={handleSubmit(handelSignUp)}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text text-xl">First Name</span></label>
                            <input placeholder='First Name' type="text"
                                {...register("firstName",
                                    { required: "First Name is required" })} className="input input-bordered w-full" />
                            {errors.firstName && <p className='text-red-600'>{errors.firstName?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text text-xl">Last Name</span></label>
                            <input placeholder='Last Name' type="text"
                                {...register("lastName",
                                    { required: "Last Name is required" })} className="input input-bordered w-full" />
                            {errors.lastName && <p className='text-red-600'>{errors.lastName?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text text-xl">Email Address</span></label>
                            <input placeholder='Email Address' type="email"
                                {...register("email",
                                    { required: "Email Address is required" })} className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text text-xl">Phone Number</span></label>
                            <input placeholder='Phone Number' type="text"
                                {...register("phone",
                                    { required: "Phone Number is required" })} className="input input-bordered w-full" />
                            {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
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

                        <input className='btn bg-[#795548] hover:bg-[#512d1f] w-full mt-5' value='Registration' type="submit" />
                        {
                            signupError && <p className='text-red-600'>{signupError}</p>
                        }
                    </form>
                    <p className='text-sm text-center my-6'>Already have an account? <Link className='text-[#41281f] font-bold' to='/login'>Please Login</Link></p>
                    
                </div>

            </div>
        </div>
    );
};

export default Registration;