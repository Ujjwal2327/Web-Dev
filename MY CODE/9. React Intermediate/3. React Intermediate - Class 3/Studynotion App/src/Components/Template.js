import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({setIsLoggedIn, formType, title, img1, img2}) => {

    return (

        <div className='flex md:justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0   justify-center'>
            <div className='w-11/12 max-w-[450px]'>
                <p className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' >
                    {title}
                </p>

                <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                    Build skills for today, tomorrow, and beyond.
                </p>

                <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                    Education to future-proof your career.
                </p>

                {
                    formType==="login" ?
                    (
                        <LoginForm setIsLoggedIn={setIsLoggedIn} />
                    )
                    :
                    (
                        <SignupForm setIsLoggedIn={setIsLoggedIn} />
                    )
                }

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                    <p className='text-richblack-700 font-medium leading[1.375rem]'>
                        OR
                    </p>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                    <FcGoogle />
                    <p>
                        Sign in with Google
                    </p>
                </button>
            </div>

            <div className='relative w-11/12 max-w-[450px] md:block   hidden'>
                <img src ={img1} alt="Pattern" width={558} height={504} loading="lazy"/>
                <img src ={img2} alt="Students" width={558} height={490} loading="lazy" className='absolute -top-4 right-4'/>

            </div>
        </div>
    )
}

export default Template