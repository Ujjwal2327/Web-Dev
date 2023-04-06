import React, { useState } from 'react'
import { Navigate, NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';

const Navbar = ({isLoggedIn, setIsLoggedIn, setFormType}) => {

  const navigate = useNavigate();
  
  const loginHandler = ()=>{
    setFormType("login");
    navigate('/login');
  }
  
  const signupHandler = ()=>{
    setFormType("signup");
    navigate('/signup');
  }
  
  const logoutHandler = ()=>{
    setIsLoggedIn(false);
    navigate('/');
    toast.success('Logged Out')
  }
  
  const dashboardHandler = ()=>{
    // return <Navigate to='dashboard'/>  // this is not working
    navigate('/dashboard');
  }

  


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to='/'>
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <div className='text-richblack-100 flex gap-x-6'>
        <NavLink to='/'>
          Home
        </NavLink>

        <NavLink>
          About
        </NavLink>

        <NavLink>
          Contact
        </NavLink>
      </div>

      <div className='flex items-center gap-x-4'>
      {
        !isLoggedIn && 
        <button onClick={loginHandler}
                className='bg-richblack-800 text-richblack-100 py-[8px] 
                          px-[12px] rounded-[8px] border border-richblack-700'>
          Log in
        </button>
      }
      
      {
        !isLoggedIn && 
        <button onClick={signupHandler}
                className='bg-richblack-800 text-richblack-100 py-[8px] 
                          px-[12px] rounded-[8px] border border-richblack-700'>
          Sign up
        </button>
      }

      {
        isLoggedIn && 
        <button onClick={logoutHandler}
                className='bg-richblack-800 text-richblack-100 py-[8px] 
                          px-[12px] rounded-[8px] border border-richblack-700'>
          Log out
        </button>
      }

      {
        isLoggedIn && 
        <button onClick={dashboardHandler}
                className='bg-richblack-800 text-richblack-100 py-[8px] 
                          px-[12px] rounded-[8px] border border-richblack-700'>
          Dashboard
        </button>
      }
      </div>

    </div>
  )
}

export default Navbar