import React from 'react';
import './ForeignDestinations.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Booking from './Booking';

const destinations = [
  {
    name: 'Paris, France',
    image: 'https://www.riotgames.com/darkroom/1440/fc8fa58e6fa9f6a700e559b2fa77a6b5:ec35063e6ce89a1e7619585db51c5845/paris-adobestock-327345878.png',
    description: 'Experience the romantic city of lights, known for the Eiffel Tower and exquisite cuisine.',
  },
  {
    name: 'Tokyo, Japan',
    image: 'https://cdn.kyushuandtokyo.org/front_assets/images_other/route_header/sp/keyv_main_nagasaki_top.png',
    description: 'A perfect blend of modern skyscrapers and historic temples, Tokyo is a city like no other.',
  },
  {
    name: 'Sydney, Australia',
    image: 'https://img.lovepik.com/free-png/20210922/lovepik-style-creative-hand-painting-of-sydney-opera-house-png-image_401074332_wh1200.png',
    description: 'Explore the iconic Sydney Opera House and relax on beautiful beaches.',
  },
  {
    name: 'New York, USA',
    image: 'https://i.insider.com/5ab2a71c5851aebb008b46da?width=700',
    description: 'The city that never sleeps, offering endless attractions, from Times Square to Central Park.',
  },
];

const ForeignDestinations = () => {
  return (
    <>
    <Navbar/>
    <div className="foreign-destinations-page">
      <header className="header">
        <h1>Explore Foreign Destinations</h1>
        <p>Discover the world's most exciting places to visit.</p>
      </header>

      <section className="destinations">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <button className="explore-button" onClick={()=>document.getElementById('booking').showModal()}>Book Now <Booking/></button>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>Plan your next trip with us today!</p>
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default ForeignDestinations;
