import React, { useState } from 'react';
import { toast } from 'react-hot-toast'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const [showPassword, SetShowPassword] = useState(false);

    function changeHandler(event){
        setFormData((prev)=> (
            {
                ...prev,
                [event.target.name] : event.target.value
            }
        ))
    }

    const passwordVisibilityHandler = ()=>{
        SetShowPassword(!showPassword);
    }

    const navigate = useNavigate();

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        navigate('/dashboard')
        toast.success('Logged In');
        console.log(formData);
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">

            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>

                <input type='text' placeholder='Enter email address' name='email'
                        value={formData.email} onChange={changeHandler} required
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>

                <div>
                    <input type={showPassword===true ? 'text' : 'password'} placeholder='Enter Password'
                            name='password' value={formData.password} onChange={changeHandler} required
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                    
                    <span className='absolute right-3 top-[38px] cursor-pointer'>
                        {
                            showPassword ? 
                            (
                                <AiFillEye onClick={passwordVisibilityHandler} />
                            )
                            :
                            (
                                <AiFillEyeInvisible onClick={passwordVisibilityHandler} />
                            )
                        }
                    </span>

                    <Link className='text-xs mt-1 text-blue-100 block max-w-max ml-auto '>
                        Forget Password
                    </Link>
                </div>
            </label>

            
            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Sign In
            </button>


        </form>
    )
}

export default LoginForm