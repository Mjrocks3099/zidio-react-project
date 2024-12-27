import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './about.css'; // Ensure this path is correct
import logo from './assets/logo.png'; // Ensure this path is correct
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Quote from './Quote';
import './Footer.css'; // Ensure this path is correct

// Navbar Component
const Navbar = () => {
  return (
    <div className="top-header-area"> {/* Changed from class to className */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="header-info">
              <ul>
                <li>
                  <i className="bi bi-geo-alt-fill"></i>Bengaluru, Karnataka, India
                </li>
                <li><i className="bi bi-envelope"></i>support@zidio.in</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="top-header-social-icon">
              <ul>
                <li className="time-line">
                  <i className="bi bi-alarm"></i>9.00 am - 5.30 pm
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61556709391417">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/zidioDev">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/99369340/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BKrK2QpadSEmtS4%2Fy5IVZww%3D%3D">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCvxJRddqZowVyN6AXjylnMg">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Zidio Development Logo" style={{ height: '50px' }} />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link className="quote-btn" to="/quote">Get A Quote</Link>
      </nav>
    </div>
  );
};

// Footer Component with Scroll-to-Top functionality
const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200); // Show button after scrolling down 200px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo">
          <img alt="Company Logo" src={logo} />
        </div>
        <div className="description">
          <p>
            At Zidio Development, we specialize in innovative software solutions. Our team is dedicated to delivering high-quality projects, fostering professional growth, and driving technological advancement.
          </p>
        </div>
        <div className="footer-columns">
          <div className="column">
            <h2>Company</h2>
            <ul>
              <li><a href="#"><i className="fas fa-arrow-right"></i> About</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Our Team</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Contact</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Careers</a></li>
            </ul>
          </div>
          <div className="column">
            <h2>Our Services</h2>
            <ul>
              <li><a href="#"><i className="fas fa-arrow-right"></i> IT Solutions</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Cyber Security</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Digital Marketing</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Machine Learning</a></li>
              <li><a href="#"><i className="fas fa-arrow-right"></i> Cloud Services</a></li>
            </ul>
          </div>
          <div className="column newsletter">
            <h2>Newsletter</h2>
            <p>Subscribe to Latest Newsletter</p>
            <input placeholder="Enter Your E-Mail" type="email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <p>© 2024 @ Zidio Development. Designed by Team ZIDIO.</p>
        </div>
      </div>
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
