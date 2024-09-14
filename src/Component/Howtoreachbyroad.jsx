import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Select from 'react-select';
import './Howtoreachbyroad.css';
import Footer from './Footer';
import Navbar from './Navbar';

const places = [
  {
    name: 'Manali, Himachal Pradesh',
    image: 'https://www.manalitourandtravel.in/wp-content/uploads/2022/03/Untitled-design-2-1024x576.png',
    description: 'A serene hill station in Himachal Pradesh.',
    coordinates: { lat: 32.2432, lng: 77.1892 },
  },
  {
    name: 'Goa',
    image: 'https://www.carnationtravels.com/carnation-images/goa-banner.jpg',
    description: 'A coastal paradise known for its beaches and vibrant nightlife.',
    coordinates: { lat: 15.2993, lng: 74.1240 },
  },
  {
    name: 'Jaipur, Rajasthan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKutnLNDjaAKuhqcSbdfstKMRiTbUDAZl0A&s',
    description: 'The Pink City of India, known for its royal palaces.',
    coordinates: { lat: 26.9124, lng: 75.7873 },
  },
];

const vehicleOptions = [
  { value: 'car', label: 'Car (Petrol)' },
  { value: 'diesel-car', label: 'Car (Diesel)' },
  { value: 'bike', label: 'Bike' },
];

const Howtoreachbyroad = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your Google Maps API Key
  });

  // States for Fare Calculator
  const [distance, setDistance] = useState('');
  const [fuelCost, setFuelCost] = useState(100);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [totalFare, setTotalFare] = useState(null);

  // Fare calculation based on vehicle type and fuel cost
  const calculateFare = () => {
    const vehicleEfficiency = selectedVehicle?.value === 'car' ? 15 : selectedVehicle?.value === 'diesel-car' ? 18 : 30; // Km per liter
    if (distance && selectedVehicle) {
      const fuelRequired = distance / vehicleEfficiency;
      const fare = fuelRequired * fuelCost;
      setTotalFare(fare.toFixed(2));
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
    <Navbar/>
    <div className="by-road-page">
      {/* Header */}
      <header className="header">
        <h1>By Road: How to Reach</h1>
        <p>Explore exciting destinations and plan your road trip easily.</p>
      </header>

      {/* Places Section */}
      <section className="places-section">
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.image} alt={place.name} />
            <h2>{place.name}</h2>
            <p>{place.description}</p>
          </div>
        ))}
      </section>

      {/* Google Maps Section */}
      {/* <section className="map-section">
        <h2>Explore the Routes on Map</h2>
        <div className="map-container">
          <GoogleMap
            zoom={5}
            center={{ lat: 22.5726, lng: 77.0293 }} // Center of India
            mapContainerStyle={{ width: '100%', height: '400px' }}
          >
            {places.map((place, index) => (
              <Marker key={index} position={place.coordinates} />
            ))}
          </GoogleMap>
        </div>
      </section> */}

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
            options={vehicleOptions}
            placeholder="Select Vehicle Type"
            value={selectedVehicle}
            onChange={setSelectedVehicle}
          />
          <input
            type="number"
            placeholder="Fuel Cost per Liter"
            value={fuelCost}
            onChange={(e) => setFuelCost(e.target.value)}
          />
          <button onClick={calculateFare}>Calculate Fare</button>
          {totalFare && <p>Total Fare: ₹{totalFare}</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Start your journey today and explore the beauty of the road!</p>
      </footer>
    </div>
    <Footer/>
    </>

  );
};

export default Howtoreachbyroad;
