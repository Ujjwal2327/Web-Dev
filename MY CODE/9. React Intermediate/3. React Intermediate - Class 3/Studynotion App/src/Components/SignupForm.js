import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

  const [formData, setFormData] = useState({
    profession:'student',
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const changeHandler = (event)=>{
    setFormData((prev)=>(
      {
        ...prev, [event.target.name] : event.target.value
      }
    ))
  }

  const [showPassword, SetShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function passwordVisibilityHandler(){
    SetShowPassword(!showPassword);
  }

  function confirmPasswordVisibilityHandler(){
    setShowConfirmPassword(!showConfirmPassword);
  }

  const navigate = useNavigate();

  function submitHandler(event){
    event.preventDefault();
    if(formData.password!=formData.confirmPassword){
      toast.error('Passwords Do Not Match')
      return;
    }
    else{
      setIsLoggedIn(true);
      toast.success('Account Created');
      navigate('/dashboard')
      console.log(formData);
    }

  }


  return (
    <form onSubmit={submitHandler} >

      {/* .profession type */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

        <label className={`${formData.profession === "student" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"}
                            py-2 px-5 rounded-full transition-all duration-200`}>
          <p>Student</p>

          <input type='radio' onChange={changeHandler} name='profession' value={'student'}
                  checked={formData.profession==='student'} className='hidden' />
        </label>
       
        <label className={`${formData.profession === "instructor" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"}
                            py-2 px-5 rounded-full transition-all duration-200`}>
          <p>Instructor</p>

          <input onChange={changeHandler} type='radio' name='profession' value={'instructor'}
                  checked={formData.profession==='instructor'} className='hidden' />
        </label>
      </div>

      {/* first name and last name */}
      <div className='flex gap-x-4 mt-[20px]'>
        <label className='w-full'>

          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            First Name<sup className='text-pink-200'>*</sup>
          </p>

          <input type='text' placeholder='Enter first name' name='firstName' value={formData.firstName}
                  onChange={changeHandler} required 
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
        </label>

        <label className='w-full'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Last Name<sup className='text-pink-200'>*</sup>
          </p>
          <input type='text' placeholder='Enter last name' name='lastName' value={formData.lastName}
                  onChange={changeHandler} required 
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
        </label>
      </div>

      {/* email */}
      <label className=' w-full mt-[20px] '>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-pink-200'>*</sup>
          </p>
          <input type='email' placeholder='Enter email address' name='email' value={formData.email}
                  onChange={changeHandler} required 
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
      </label>

      {/* create password and complete password */}
      <div className='w-full flex gap-x-4 mt-[20px]'>
        <label className='w-full relative'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Create Password<sup className='text-pink-200'>*</sup>
          </p>

          <div>
            <input type={showPassword===true ? 'text' : 'password'} placeholder='Enter Password'
                    name='password' value={formData.password} onChange={changeHandler} required
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
            
            <span className='absolute right-3 top-[38px] cursor-pointer' >
              {
                showPassword ? 
                (
                  <AiFillEye onClick={passwordVisibilityHandler}  fontSize={24} fill='#AFB2BF'/>
                )
                :
                (
                  <AiFillEyeInvisible onClick={passwordVisibilityHandler}  fontSize={24} fill='#AFB2BF'/>
                )
              }
            </span>
          </div>
        </label>

        <label className='w-full relative'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Confirm Password<sup className='text-pink-200'>*</sup>
          </p>

          <div>
            <input type={showConfirmPassword===true ? 'text' : 'password'} placeholder='Enter Password'
                    name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler} required
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
            
            <span className='absolute right-3 top-[38px] cursor-pointer'>
              {
                showConfirmPassword ? 
                (
                  <AiFillEye onClick={confirmPasswordVisibilityHandler} fontSize={24} fill='#AFB2BF' />
                )
                :
                (
                  <AiFillEyeInvisible onClick={confirmPasswordVisibilityHandler}  fontSize={24} fill='#AFB2BF'/>
                )
              }
            </span>
          </div>
        </label>
      </div>

      <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
        Create Account
      </button>

    </form>
  )
}

export default SignupForm