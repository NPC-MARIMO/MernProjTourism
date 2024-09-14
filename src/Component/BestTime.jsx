import React from 'react';
import './BestTime.css';
import Navbar from './Navbar';
import Footer from './Footer';

const BestTime = () => {
  return (
    <>
    <Navbar/>
    <div className="best-time-page ">
      <header className="header  ">
        <h1 className=''>Best Time to Visit</h1>
        <p>Plan your trip with the perfect timing for the best experience!</p>
      </header>

      <section className="seasons">
        <div className="season-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWn01fO7s8o_Kkdx3udyk82N-cOY2ccgUATg&s" alt="Spring" />
          <h2>Spring</h2>
          <p>March - May</p>
          <p>Experience the beautiful bloom of flowers and mild temperatures.</p>
        </div>
        <div className="season-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimYld4VladfBQ5Vo9ug8geDRiTEUBtO9M3A&s" alt="Summer" />
          <h2>Summer</h2>
          <p>June - August</p>
          <p>Enjoy sunny days, beaches, and outdoor activities.</p>
        </div>
        <div className="season-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Tk8ce9ZECLaISu2zjV0oo-CSV7WKxPD_Dg&s" alt="Autumn" />
          <h2>Autumn</h2>
          <p>September - November</p>
          <p>Perfect for hiking and experiencing the colorful foliage.</p>
        </div>
        <div className="season-card">
          <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-christmas-background-illustration-on-winter-png-image_10257470.png" alt="Winter" />
          <h2>Winter</h2>
          <p>December - February</p>
          <p>Great for snow activities and enjoying the festive season.</p>
        </div>
      </section>

      <footer className="footer">
        <p>Plan your next adventure based on the best season for you!</p>
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default BestTime;
