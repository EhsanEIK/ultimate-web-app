import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUpForm1 = () => {
    return (
        <div>
            <div className='md:h-[630px] h-full shadow-xl shadow-slate-400 p-20 mt-2'>
                <h1 className='text-xl font-bold text-center mb-24'>SignUp Form</h1>
                <form>
                    <div className='mt-20'>
                        <input type="text" placeholder="Write First Name" className="w-full border-b-2 outline-0 pl-5 pb-1" />
                        <input type="text" placeholder="Write Last Name" className="block w-full border-b-2 outline-0 pl-5 pb-1 mt-10" />
                    </div>
                    <div className='flex justify-center mt-20'>
                        <Link to='/signUpForm2'>
                            <button className='btn capitalize bg-blue-500 border-blue-500 text-white rounded-2xl shadow-2xl hover:bg-white hover:text-blue-700 hover:border-blue-700 px-5 py-3'>
                                <span className='mr-3'>Next Step</span>
                                <FaArrowRight></FaArrowRight>
                            </button>
                        </Link>
                    </div>
                </form>
                <div className='flex md:flex-row flex-col items-center justify-center mt-28'>
                    <p>Already have an account?</p>
                    <button className='underline uppercase hover:cursor-pointer md:ml-2' style={{ color: "#1678CB", fontWeight: "700" }}>
                        Login Here!
                    </button>
                </div>
            </div>
        </div >
    );
};

export default SignUpForm1;