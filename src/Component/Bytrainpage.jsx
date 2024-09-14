import React, { useState } from 'react';
import Select from 'react-select';
import './ByTrainPage.css';
import Footer from './Footer';
import Navbar from './Navbar';

const places = [
  {
    name: 'Shimla, Himachal Pradesh',
    image: 'https://png.pngtree.com/background/20230310/original/pngtree-christ-church-in-shimla-is-the-second-oldest-church-in-north-picture-image_2117287.jpg',
    description: 'The scenic toy train ride through the hills.',
    route: 'Delhi -> Kalka -> Shimla',
  },
  {
    name: 'Darjeeling, West Bengal',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*veC95kdYnLX4auFNmPyP8Q.png',
    description: 'The world-famous Darjeeling Himalayan Railway.',
    route: 'New Jalpaiguri -> Darjeeling',
  },
  {
    name: 'Ooty, Tamil Nadu',
    image: 'https://i0.wp.com/www.traveldiaryparnashree.com/wp-content/uploads/2016/10/Doddabetta-Peak-2.jpg?ssl=1',
    description: 'A breathtaking train journey on the Nilgiri Mountain Railway.',
    route: 'Mettupalayam -> Coonoor -> Ooty',
  },
];

const classOptions = [
  { value: 'sleeper', label: 'Sleeper Class' },
  { value: '3ac', label: 'AC 3 Tier' },
  { value: '2ac', label: 'AC 2 Tier' },
  { value: '1ac', label: 'AC 1 Tier' },
];

const ByTrainPage = () => {
  const [distance, setDistance] = useState('');
  const [ticketCost, setTicketCost] = useState(500); // Base fare per 100 km
  const [selectedClass, setSelectedClass] = useState(null);
  const [totalFare, setTotalFare] = useState(null);

  // Fare calculation based on class and distance
  const calculateFare = () => {
    let classMultiplier = 1;
    switch (selectedClass?.value) {
      case '3ac':
        classMultiplier = 1.5;
        break;
      case '2ac':
        classMultiplier = 2;
        break;
      case '1ac':
        classMultiplier = 3;
        break;
      default:
        classMultiplier = 1; // Sleeper class
        break;
    }
    const fare = distance * (ticketCost / 100) * classMultiplier;
    setTotalFare(fare.toFixed(2));
  };

  return (
    <>
   <Navbar/>
    <div className="by-train-page">
      {/* Header Section */}
      <header className="header">
        <h1>By Train: How to Reach</h1>
        <p>Explore famous train destinations and plan your journey.</p>
      </header>

      {/* Places Section */}
      <section className="places-section">
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.image} alt={place.name} />
            <h2>{place.name}</h2>
            <p>{place.description}</p>
            <h4>Route: {place.route}</h4>
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
            placeholder="Select Train Class"
            value={selectedClass}
            onChange={setSelectedClass}
          />
          <input
            type="number"
            placeholder="Ticket Cost per 100 km"
            value={ticketCost}
            onChange={(e) => setTicketCost(e.target.value)}
          />
          <button onClick={calculateFare}>Calculate Fare</button>
          {totalFare && <p>Total Fare: ₹{totalFare}</p>}
        </div>
      </section>

      {/* Train Route Section */}
      {/* <section className="route-section">
        <h2>Route Information</h2>
        <div className="route-images">
          <img src="https://lh6.googleusercontent.com/proxy/SP3c8EYVWLJdHbJPsDSk-fJs2tT4j3-8GTJVfSh74_ZsT9_ixN4g_tLTRZtamKEKO8CEwlEhJ1nagiahWUDx8oZbLVYjBHGLgSjQ3CkfhjbWMA" alt="Train Route Map" />
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className="footer">
        <p>Start your train journey today and experience the magic of Indian Railways!</p>
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default ByTrainPage;
