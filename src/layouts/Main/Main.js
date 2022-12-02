import React from 'react';
import { Outlet } from 'react-router-dom';
import signUpBgImage from '../../assets/SignUpBGImage/SignUpBGImage.png';

const Main = () => {
    return (
        <div>
            <div className="container mx-auto mt-14">
                <div className="flex md:flex-row flex-col gap-2 mx-3 md:mx-0">
                    <img src={signUpBgImage} alt="" className="w-full" />
                    <div className='w-full mt-5 md:mt-0'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;