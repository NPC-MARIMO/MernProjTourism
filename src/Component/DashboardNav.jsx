import React from 'react'
import {Link} from 'react-router-dom'

const DashboardNav = () => {
    return (
        <div>
            <ul className="menu bg-base-200 rounded-box w-[22vw] h-screen px-10 pt-[10vh] dark:bg-slate-100 dark:text-black">
                <li className='text-center text-5xl my-10'>Dashboard</li>
                <li >
                    <Link to="/dashboard" className='text-lg text-[#ddd] dark:text-black'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/contactmgmt" className='text-lg text-[#ddd] dark:text-black'>
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                       Contact Management
                    </Link>
                </li>
                <li>
                    <Link to="/bookingmgmt" className='text-lg text-[#ddd] dark:text-black'>
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                       Booking Management
                    </Link>
                </li>
               
              
             
                <li>
                <details>
                    
                <summary className='text-lg text-[#ddd]  dark:text-black'>
        
                    Settings</summary>
                
                <ul className="p-2 z-9">
                    <li><Link to='/changepass' className='text-lg text-[#ddd] dark:text-black'>Change Password</Link></li>
                </ul>  
                 
            </details>
                </li>
                <li>
                <Link to='/' className='text-lg text-[#ddd] dark:text-black'>Log Out </Link>
                </li>
            </ul>
        </div>
    )
}

export default DashboardNav