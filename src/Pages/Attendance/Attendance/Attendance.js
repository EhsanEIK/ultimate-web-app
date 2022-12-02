import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo/ultimate hrm logo.png';

const Attendance = () => {
    const [attendanceInfo, setAttendanceInfo] = useState([]);
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            headers: {
                authorization: `bearer ${localStorage.getItem('ultimateAccessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAttendanceInfo(data)
            })
    }, [])

    let attendanceInfoArray = [];

    for (const key in attendanceInfo) {
        let attendanceArrayStatusList = [];
        let attendanceArrayDateList = [];

        const value = attendanceInfo[key];
        const attendanceList = value.attendance;

        // get the attendance date list of a person and set them into attendanceArrayDateList
        attendanceArrayDateList = Object.keys(value.attendance);

        // get the attendance status list of a person and set them into attendanceArrayStatusList
        for (const key2 in attendanceList) {
            attendanceArrayStatusList.push(attendanceList[key2]);
        }

        // set a new property in attendanceInfoArray for attendance date list and attendance status
        value.attendanceArrayList = attendanceArrayStatusList;
        value.attendanceArrayDateList = attendanceArrayDateList
        attendanceInfoArray.push(value)
    }

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
                            <th>Position</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            attendanceInfoArray.map((info, idx) =>
                                <tr key={info.id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>{info?.attendanceArrayDateList[25]}</td>
                                    <td>{info?.name}</td>
                                    <td>{info?.position}</td>
                                    <td className='capitalize'>{info?.attendanceArrayList[25]?.status}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Attendance;