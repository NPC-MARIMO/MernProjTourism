import React, { useState } from 'react';
import Select from 'react-select';
import './ByFlightPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const places = [
  {
    name: 'New Delhi, India',
    image: 'https://swarajya.gumlet.io/swarajya%2F2023-03%2Ffbe3ce93-dbbe-4956-a0c0-88969d749353%2F122__1_.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100',
    description: 'Indira Gandhi International Airport, New Delhi.',
    route: 'From: Mumbai -> Delhi',
  },
  {
    name: 'Paris, France',
    image: 'https://loveandparis.co/wp-content/uploads/Screenshot-2024-03-29-at-15.36.16.png',
    description: 'Charles de Gaulle Airport, Paris.',
    route: 'From: New York -> Paris',
  },
  {
    name: 'Tokyo, Japan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpMYCp-_qO4nf_mhfcvTU2hN7Z_fkFJPwbg&s',
    description: 'Narita International Airport, Tokyo.',
    route: 'From: Los Angeles -> Tokyo',
  },
];

const classOptions = [
  { value: 'economy', label: 'Economy Class' },
  { value: 'business', label: 'Business Class' },
  { value: 'first', label: 'First Class' },
];

const ByFlightPage = () => {
  const [distance, setDistance] = useState('');
  const [ticketCost, setTicketCost] = useState(500); // Average cost per km
  const [selectedClass, setSelectedClass] = useState(null);
  const [totalFare, setTotalFare] = useState(null);

  // Calculate fare based on class and distance
  const calculateFare = () => {
    let classMultiplier = 1;
    switch (selectedClass?.value) {
      case 'business':
        classMultiplier = 2;
        break;
      case 'first':
        classMultiplier = 3;
        break;
      default:
        classMultiplier = 1; // Economy class
        break;
    }
    const fare = distance * (ticketCost / 100) * classMultiplier;
    setTotalFare(fare.toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="by-flight-page">
      {/* Header Section */}
      <header className="header">
        <h1>By Flight: How to Reach</h1>
        <p>Find popular flight destinations and calculate your travel costs.</p>
      </header>

      {/* Places Section */}
      <section className="places-section">
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.image} alt={place.name} />
            <h2>{place.name}</h2>
            <p>{place.description}</p>
            <h4>Flight Route: {place.route}</h4>
            <button className="explore-button">Explore</button>
          </div>
        ))}
      </section>

      {/* Fare Calculator Section */}
      <section className="fare-calculator-section">
        <h2>Fare Calculator</h2>
        <div className="fare-calculator">
          <input
            type="number"
            placeholder="Distance (in km)"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
          <Select
            options={classOptions}
            placeholder="Select Flight Class"
            value={selectedClass}
            onChange={setSelectedClass}
          />
          <input
            type="number"
            placeholder="Cost per 100 km"
            value={ticketCost}
            onChange={(e) => setTicketCost(e.target.value)}
          />
          <button onClick={calculateFare}>Calculate Fare</button>
          {totalFare && <p>Total Fare: ₹{totalFare}</p>}
        </div>
      </section>

      {/* Flight Route Section */}
      <section className="route-section">
        <h2>Flight Route Information</h2>
        <div className="route-images">
          <img src="https://pngair.com.pg/wp-content/uploads/2021/03/PNG-Air-Updated-Map-2020-2.png" alt="Flight Route Map" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Ready to take off? Plan your flight journey today!</p>
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default ByFlightPage;
