import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();

        const user = {
            email: "abc@example.com",
            password: "SuperSecretPassword"
        };

        fetch('https://test.nexisltd.com/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('ultimateAccessToken', data.access_token);
                navigate('/attendance');
            })
    }

    return (
        <div>
            <div className='md:h-[630px] h-full shadow-xl shadow-slate-400 p-20 mt-2'>
                <h1 className='text-xl font-bold text-center mb-24'>Log in Form</h1>
                <form onSubmit={handleLogin}>
                    <div className='mt-20'>
                        <input type="email" name='email' placeholder="Write Email Address" className="w-full border-b-2 outline-0 pl-5 pb-1" required />
                        <input type="password" id='password' name='password' placeholder="Write Password" className="block w-full border-b-2 outline-0 pl-5 pb-1 mt-10" required />
                        <label htmlFor="password" className='text-xs text-gray-400 ml-5'>Your password must be 8 character</label>
                    </div>
                    <div className='flex justify-center items-center mt-16'>
                        <button type='submit' className='btn capitalize bg-blue-500 border-blue-500 text-white rounded-2xl shadow-2xl hover:bg-white hover:text-blue-700 hover:border-blue-700 px-7 py-3'>
                            Log In
                        </button>
                    </div>
                </form>
                <div className='flex md:flex-row flex-col items-center justify-center mt-28'>
                    <p>Don't have an account?</p>
                    <Link to='/'>
                        <button className='underline uppercase hover:cursor-pointer md:ml-2' style={{ color: "#1678CB", fontWeight: "700" }}>
                            Signup Here!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;