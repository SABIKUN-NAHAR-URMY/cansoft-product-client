import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ResetPassword = () => {
    const { resetPass } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const handelResetPassSubmit = data => {

        const userPass = {
            password: data.password,
        }

        fetch(`https://cansoft-product-server.vercel.app/resetPass/${resetPass._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userPass)
        })
            .then(data => {
                alert("Password Updated!");
                navigate('/login');
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='bg-[#764432a5] w-full h-screen'>
            <div className='w-96 mx-auto pt-48'>
                <form className='bg-white border rounded-lg p-10' onSubmit={handleSubmit(handelResetPassSubmit)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-xl">New Password</span></label>
                        <input placeholder='Type New Password' type="password"
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
            </div>
        </div>
    );
};

export default ResetPassword;