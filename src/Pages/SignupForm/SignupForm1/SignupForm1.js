import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const SignUpForm1 = () => {
    return (
        <div>
            <div className='shadow-xl shadow-slate-400 p-20'>
                <h1 className='text-xl font-bold text-center mb-24'>SignUp Form</h1>
                <form>
                    <div className='mt-20'>
                        <input type="text" placeholder="Write First Name" className="w-full border-b-2 outline-0 pl-5 pb-1" />
                        <input type="text" placeholder="Write Last Name" className="block w-full border-b-2 outline-0 pl-5 pb-1 mt-10" />
                    </div>
                    <div className='flex justify-center mt-16'>
                        <button className='btn bg-blue-700 border-blue-700 rounded-2xl shadow-2xl hover:bg-blue-600 hover:border-blue-700'>
                            <span className='mr-3'>Next Step</span>
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </div>
                </form>
                <div className='flex md:flex-row flex-col items-center justify-center mt-10'>
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