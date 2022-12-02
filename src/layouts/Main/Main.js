import React from 'react';
import signUpBgImage from '../../assets/SignUpBGImage/SignUpBGImage.png';

const Main = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src={signUpBgImage} alt="" className="rounded-lg" />
                    <div>
                        <h1>Signup Form</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;