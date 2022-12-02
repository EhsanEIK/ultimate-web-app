import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm3 = () => {
    return (
        <div>
            <div className='md:h-[630px] h-full shadow-xl shadow-slate-400 p-20 mt-2'>
                <h1 className='text-xl font-bold text-center mb-24'>SignUp Form</h1>
                <form>
                    <div className='mt-20'>
                        <input type="password" id='password' placeholder="Write Password" className="block w-full border-b-2 outline-0 pl-5 pb-1 mt-10" />
                        <label htmlFor="password" className='text-xs text-gray-400 ml-5'>Your password must be 8 character</label>
                    </div>
                    <div className='flex justify-center items-center mt-20'>
                        <Link to='/signUpForm2'>
                            <button className='font-semibold md:mr-28 mr-10'>Back</button>
                        </Link>
                        <button className='btn capitalize bg-blue-500 border-blue-500 text-white rounded-2xl shadow-2xl hover:bg-white hover:text-blue-700 hover:border-blue-700 px-7 py-3'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm3;