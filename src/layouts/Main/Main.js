import React from 'react';
import { Outlet } from 'react-router-dom';
import signUpBgImage from '../../assets/SignUpBGImage/SignUpBGImage.png';

const Main = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src={signUpBgImage} alt="" className="rounded-lg" />
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;