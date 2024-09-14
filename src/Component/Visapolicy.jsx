import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './VisaPolicy.css';

const Visapolicy = () => {
    const visaInfo = [
        { country: 'United States', visaRequired: 'Yes', duration: '90 days', notes: 'Must apply before arrival.' },
        { country: 'Canada', visaRequired: 'No', duration: '180 days', notes: 'Visa-free for tourism purposes.' },
        { country: 'Japan', visaRequired: 'Yes', duration: '90 days', notes: 'Electronic visa available.' },
        { country: 'Germany', visaRequired: 'No', duration: '90 days', notes: 'Schengen visa applies.' },
    ];
  return (
    <>
        <Navbar/>
        <div className="visa-policy">
            <h1>Visa Policy Information</h1>
            <p className="intro-text">Find out if you need a visa to travel to your next destination.</p>

            <div className="visa-info-container">
                {visaInfo.map((info, index) => (
                    <div key={index} className="visa-card">
                        <h2>{info.country}</h2>
                        <p><strong>Visa Required:</strong> {info.visaRequired}</p>
                        <p><strong>Duration:</strong> {info.duration}</p>
                        <p><strong>Notes:</strong> {info.notes}</p>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Visapolicy