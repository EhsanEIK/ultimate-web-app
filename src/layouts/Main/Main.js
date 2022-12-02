import React from 'react';
import { Outlet } from 'react-router-dom';
import signUpBgImage from '../../assets/signUpBGImage/signUpBGImage.png';
import logo from '../../assets/logo/ultimate hrm logo.png';

const Main = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex md:flex-row flex-col gap-2 mx-3 md:mx-0">
                    <div className="w-full mt-12">
                        <img src={logo} alt="logo" className=' w-40 h-14' />
                        <img src={signUpBgImage} alt="" className="w-full" />
                    </div>
                    <div className='md:w-3/5 w-full mt-5 md:mt-0 md:mb-0 mb-5'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Main;