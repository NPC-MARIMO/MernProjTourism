import React from 'react'
import Booking from './Booking'

const Visiting = (val) => {

    const imgdata = [
        { imgsrc: 'https://c.myholidays.com/blog/blog/content/images/2020/11/Places-To-Visit-In-India.webp', name: 'Gateway of India' },
        { imgsrc: 'https://hblimg.mmtcdn.com/content/hubble/img/amritsar/mmt/activities/m_activities_amritsar_golden_temple_l_427_639.jpg', name: 'Golden Temple' },
        { imgsrc: 'https://miro.medium.com/v2/resize:fit:640/1*b0yJXvlG5Phoa6NBiOaC5g.jpeg', name: 'India Gate' },
        { imgsrc: 'https://static.toiimg.com/photo/54422629.cms', name: 'Gateway of India' },
        { imgsrc: 'https://c.myholidays.com/blog/blog/content/images/2021/04/Madurai.webp', name: 'Chattarpur' },
        { imgsrc: 'https://assets-news.housing.com/news/wp-content/uploads/2022/08/05095206/Top-15-tourist-places-in-northern-India-09.jpg', name: 'Prem Mandir' },
    ]

    return (
        <div className='dark:text-black mb-[15vh] pt-[20vh]'>
            <h1 style={{ fontSize: '3rem', textAlign: 'center',  fontWeight: '700'  }} className='dark:text-black text-[#ddd] font-[100]'>{val.h1} </h1>
            <h4 className='dark:text-black text-[#ddd]' style={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: '400', marginBottom: '5vh' }}>From historical cities to natural splendours, come see the best of India</h4>
            <div className='flex flex-wrap justify-center'>
                
                {
                    
                    imgdata.map((val) => {
                        return(
                        <div className="card bg-base-100 w-96 shadow-xl m-5 hover:shadow-xl hover:shadow-gray-700 dark:text-black dark:bg-slate-100">
                            <figure className="px-10 pt-10">
                                <img
                                    src={val.imgsrc}
                                    alt="Shoes"
                                    className="rounded-xl h-[20vh]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-3xl">{val.name} </h2>
                                <div className="card-actions">
                                    <button className="btn btn-primary mt-2" onClick={()=>document.getElementById('booking').showModal()}>Book Now <Booking/></button>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Visiting