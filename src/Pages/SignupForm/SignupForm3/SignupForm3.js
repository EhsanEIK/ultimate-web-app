import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm3 = () => {
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();

        const user = {
            first_name: "First Name",
            last_Name: "Last Name",
            phone_number: "0000000000",
            email: "abc@example.com",
            password: "SuperSecretPassword"
        };

        fetch('https://test.nexisltd.com/signup', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('ultimateAccessToken', data.access_token)
                navigate('/attendance');
            })
    }

    return (
        <div>
            <div className='md:h-[630px] h-full shadow-xl shadow-slate-400 p-20 mt-2'>
                <h1 className='text-xl font-bold text-center mb-24'>SignUp Form</h1>
                <form onSubmit={handleSignUp}>
                    <div className='mt-20'>
                        <input type="password" id='password' placeholder="Write Password" className="block w-full border-b-2 outline-0 pl-5 pb-1 mt-10" />
                        <label htmlFor="password" className='text-xs text-gray-400 ml-5'>Your password must be 8 character</label>
                    </div>
                    <div className='flex justify-center items-center mt-20'>
                        <Link to='/signUpForm2'>
                            <button className='font-semibold md:mr-28 mr-10'>Back</button>
                        </Link>
                        <button type='submit' className='btn capitalize bg-blue-500 border-blue-500 text-white rounded-2xl shadow-2xl hover:bg-white hover:text-blue-700 hover:border-blue-700 px-7 py-3'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm3;