import React from 'react';
import './About.css'; // Ensure CSS is updated with styles for images

// Images
import visionImage from './assets/banner.avif';
import testimonialImage from './assets/banner.avif';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Kawadiwala</h1>
      </header>

      <section className="about-section">
        <div className="about-card">
          <img src={visionImage} alt="Vision" className="about-image" />
          <h2>Our Vision</h2>
          <p>
            To be a leading eco-friendly waste management company, empowering individuals and businesses to recycle and reuse in a sustainable manner.
          </p>
        </div>

        <div className="about-card">
          <img src={visionImage} alt="Mission" className="about-image" />
          <h2>Our Mission</h2>
          <p>
            To revolutionize the waste management industry by providing innovative recycling services, promoting environmental awareness, and encouraging sustainable living.
          </p>
        </div>

        <div className="about-card">
          <img src={visionImage} alt="Goal" className="about-image" />
          <h2>Our Goal</h2>
          <p>
            Our goal is to reduce waste going to landfills by 50% in the next 5 years through effective recycling and upcycling initiatives.
          </p>
        </div>
      </section>

      <section className="testimonial-section" style={{ backgroundImage: `url(${testimonialImage})` }}>
        <h2>Testimonials</h2>
        <div className="testimonial-card">
          <p>"Kawadiwala made recycling so easy for us! Their pickup service is efficient, and their mission is inspiring." - John Doe</p>
        </div>
        <div className="testimonial-card">
          <p>"We love how Kawadiwala is committed to making the world a cleaner place. We feel great contributing to their cause!" - Jane Smith</p>
        </div>
      </section>
    </div>
  );
};

export default About;
