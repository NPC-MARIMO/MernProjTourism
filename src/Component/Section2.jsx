import React from 'react'
import '../index.css'

const Section2 = () => {
    const textstyle = {
       
    }
  return (
    <>
        <div className='section2 h-[70vh] w-full mt-[10vh] px-[20vh]'>
            <h3 className='text-6xl text-white font-serif dark:text-black'><i>Explore</i></h3>
            <h1 className='font-mono font-bold ml-[20vh] '>
              <i>
                <span className="hover:scale-200 hover:drop-shadow-md bg-[url('https://c.myholidays.com/blog/blog/content/images/2020/11/Places-To-Visit-In-India.webp')]">I</span>
                <span className="hover:scale-200 hover:drop-shadow-md bg-[url('https://hblimg.mmtcdn.com/content/hubble/img/amritsar/mmt/activities/m_activities_amritsar_golden_temple_l_427_639.jpg')]">N</span>
                <span className="hover:scale-200 hover:drop-shadow-md bg-[url('https://miro.medium.com/v2/resize:fit:640/1*b0yJXvlG5Phoa6NBiOaC5g.jpeg')]">D</span>
                <span className="hover:scale-200 hover:drop-shadow-md bg-[url('https://static.toiimg.com/photo/54422629.cms')]">I</span>
                <span className="hover:scale-200 hover:drop-shadow-md bg-[url('https://c.myholidays.com/blog/blog/content/images/2021/04/Madurai.webp')]">A</span>
                </i>
            </h1>
            <h5 className='text-3xl font-semibold top-[-25vh] ml-[40vw] mb-[20vh] relative'><i>India nhi dekha, to kya dekha</i></h5>
        </div>
    </>
  )
}

export default Section2