import React from 'react'
import { Routes ,Route } from "react-router-dom";
import Home from './Component/Home.jsx'
import Contact from './Component/Contact.jsx';
import Dashboard from './Component/Dashboard.jsx';
import Visapolicy from './Component/Visapolicy.jsx';
import HowToReachByRoad from './Component/Howtoreachbyroad.jsx';
import ChangePass from './Component/ChangePass.jsx';
import Contactmgmt from './Component/Contactmgmt.jsx';
import Bookingmgmt from './Component/Bookingmgmt.jsx';
import BestTime from './Component/BestTime.jsx';
import ForeignDestinations from './Component/Foreigndestination.jsx';
import Region from './Component/Region.jsx';
import ByTrainPage from './Component/Bytrainpage.jsx';
import ByFlightPage from './Component/Byflightpage.jsx';

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/byflight' element={<ByFlightPage/>} />
        <Route path='/region' element={<Region  />} />
        <Route path='/foreign' element={<ForeignDestinations/>} />
        <Route path='/besttime' element={<BestTime/>} />
        <Route path='/contactmgmt' element={<Contactmgmt/>} />
        <Route path='/bookingmgmt' element={<Bookingmgmt/>} />
        <Route path='/changepass' element={<ChangePass/>} />
        <Route path='/byroad' element={<HowToReachByRoad/>} />
        <Route path='/bytrain' element={<ByTrainPage/>} />
        <Route path='/visapolicy' element={<Visapolicy/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default AllRoute