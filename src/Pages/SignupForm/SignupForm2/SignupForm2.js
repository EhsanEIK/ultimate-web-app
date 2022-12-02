import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignupForm2 = () => {
    return (
        <div>
            <div className='md:h-[630px] h-full shadow-xl shadow-slate-400 p-20 mt-2'>
                <h1 className='text-xl font-bold text-center mb-24'>SignUp Form</h1>
                <form>
                    <div className='mt-20'>
                        <div className='flex'>
                            <input type="text" placeholder="+880" className="w-2/5 border-b-2 outline-0 pl-5 pb-1" />
                            <input type="text" placeholder="1xxxxxxx" className="w-full border-b-2 outline-0 ml-3 pl-5 pb-1" />
                        </div>
                        <input type="email" placeholder="Write Email Address" className="block w-full border-b-2 outline-0 pl-5 pb-1 mt-10" />
                    </div>
                    <div className='flex justify-center items-center mt-20'>
                        <Link to='/'>
                            <button className='font-semibold md:mr-28 mr-10'>Back</button>
                        </Link>
                        <Link to='/signUpForm3'>
                            <button className='btn capitalize bg-blue-500 border-blue-500 text-white rounded-2xl shadow-2xl hover:bg-white hover:text-blue-700 hover:border-blue-700 md:px-5 md:py-3'>
                                <span className='mr-3'>Next Step</span>
                                <FaArrowRight></FaArrowRight>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm2;