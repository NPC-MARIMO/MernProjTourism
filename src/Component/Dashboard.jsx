import React from 'react'
import DashboardNav from './DashboardNav'
import DashHome from './DashHome'

const Dashboard = () => {
  return (
    <div className='h-screen w- full flex'>
    <DashboardNav/>
    <DashHome/>
    </div>
  )
}

export default Dashboard