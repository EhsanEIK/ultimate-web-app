import React from 'react';
import logo from '../../../assets/logo/ultimate hrm logo.png';

const Attendance = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <img src={logo} alt="logo" className=' w-40 h-14' />
            </div>
            <div className='md:w-[480px] w-[400px] mx-auto bg-blue-600 text-white md:text-4xl text-2xl text-center font-semibold rounded-md mt-5 mb-12 py-4 px-10'>
                <h1>Attendance Information</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Employeer Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th>1</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Attendance;