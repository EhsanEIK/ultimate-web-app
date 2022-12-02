import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo/ultimate hrm logo.png';

const Attendance = () => {
    const [loader, setLoader] = useState(true);

    const [attendanceInfo, setAttendanceInfo] = useState([]);
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            headers: {
                authorization: `bearer ${localStorage.getItem('ultimateAccessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAttendanceInfo(data);
                setLoader(false);
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

    // loader/spinner
    if (loader) {
        return <div class="text-center mt-48">
            <div role="status">
                <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    }

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <img src={logo} alt="logo" className=' w-40 h-14' />
            </div>
            <div className='md:mx-0 mx-3'>
                <h1 className='md:w-[480px] w-full mx-auto bg-blue-600 text-white md:text-4xl text-2xl text-center font-semibold rounded-md mt-5 mb-12 py-4 px-10'>Attendance Information</h1>
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