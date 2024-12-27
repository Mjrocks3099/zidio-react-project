// src/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import background from './assets/background.png';
import aboutbg from './assets/about-bg.jpg';
import person from './assets/person.png';
import teamWorking from './assets/team-working.png';
import './about.css';

// Header Component
const Header = () => {
  return (
    <div
      className="breadcumb-area"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '211px 0 200px',
        marginTop: '-100px',
        position: 'relative',
      }}
    >
      <div className="breadcumb-content">
        <h4>About Us</h4>
        <ul>
          <li>
            <Link to="/">Home</Link> &gt; <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

// AboutSection Component
const AboutSection = () => {
  return (
    <>
      {/* Empty Div for Cards */}
      <div className="card-container">
        {/* Future card content can be added here */}
      </div>

      {/* Main Who We Are Section */}
      <section className="who-we-container" style={{ backgroundImage: `url(${aboutbg})` }}>
        <div className="who-we-left-section">
          <img src={teamWorking} alt="Team working on a project" className="team-working-image" />
          
          {/* Circular Statistics */}
          <div className="who-we-stats">
            <div className="who-we-circle">
              <div className="who-we-text">1000+</div>
              <div className="who-we-subtext">Completed Projects</div>
            </div>
          </div>
          
          <div className="who-we-award">
            <i className="fas fa-award"></i>
            Award Winning Best Services
          </div>
        </div>
        <div className="who-we-right-section">
          <h1>Software Development &amp; Consultancy</h1>
          <h2>Who we are and What we do?</h2>
          <p>
            Welcome to Zidio Development Pvt. Ltd. We are a trailblazing software development company where innovation meets expertise.
            Our team of skilled developers and creative thinkers specializes in turning complex ideas into user-friendly digital solutions.
            From custom software to cutting-edge mobile apps, we're dedicated to engineering excellence and pushing the boundaries of technology.
            At Zidio, we believe in the power of collaboration, continuous learning, and adapting to the ever-evolving digital landscape.
            We're not just developers; we're visionaries committed to delivering impactful software solutions that drive success for businesses globally.
            Stay connected with us for insights into our groundbreaking projects, tech trends, career opportunities, and our journey in shaping the future of technology.
          </p>
          <div className="who-we-features">
            <div className="who-we-feature">
              <i className="fas fa-check-circle"></i>
              Company and Research
            </div>
            <div className="who-we-feature">
              <i className="fas fa-check-circle"></i>
              Business and Research
            </div>
          </div>
          <div className="who-we-stats">
            <div className="who-we-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <div className="who-we-text">100%</div>
              <div className="who-we-subtext">Business Solution Level is High</div>
            </div>
          </div>
          <div className="who-we-quote">
            The true sign of intelligence is not knowledge but imagination —Albert Einstein
          </div>
          <Link className="who-we-more-button" to="/more-about">
            More About <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

// About Component
const About = () => {
  return (
    <>
      <Header />
      <AboutSection />
    </>
  );
};

export default About;
