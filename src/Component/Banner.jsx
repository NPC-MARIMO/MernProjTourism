import React from 'react'
import banner from '../assets/banner.avif'

const Banner = () => {
  return (
    <>
    <div className=' flex mt-[5vh]'>
        <div className="left w-full  md:w-1/2 h-[50vh]  flex justify-end">
            <img src={banner} alt=""  className='h-[50vh] rounded-xl'/>
        </div>
        <div className="right left w-1/2 h-[50vh] flex justify-center items-center"> <h1 className='text-7xl'>Shoot My  <br /> Pic !!</h1></div>
    </div>
       <div className=' flex mt-[5vh]'>
       <div className="left w-full  md:w-1/2 h-[50vh]  flex justify-end">
           <img src={banner} alt=""  className='h-[50vh] rounded-xl'/>
       </div>
       <div className="right left w-1/2 h-[50vh] flex justify-center items-center"> <h1 className='text-7xl'>Shoot My  <br /> Pic !!</h1></div>
   </div>
      <div className=' flex mt-[5vh]'>
      <div className="left w-full  md:w-1/2 h-[50vh]  flex justify-end">
          <img src={banner} alt=""  className='h-[50vh] rounded-xl'/>
      </div>
      <div className="right left w-1/2 h-[50vh] flex justify-center items-center"> <h1 className='text-7xl'>Shoot My  <br /> Pic !!</h1></div>
  </div>
     <div className=' flex mt-[5vh]'>
     <div className="left w-full  md:w-1/2 h-[50vh]  flex justify-end">
         <img src={banner} alt=""  className='h-[50vh] rounded-xl'/>
     </div>
     <div className="right left w-1/2 h-[50vh] flex justify-center items-center"> <h1 className='text-7xl'>Shoot My  <br /> Pic !!</h1></div>
 </div>
 </>
  )
}

export default Banner