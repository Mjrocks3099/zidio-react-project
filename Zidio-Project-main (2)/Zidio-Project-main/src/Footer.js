import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <div className="footer-area style-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo">
              <a href="index.html">
                <img
                  style={{ height: '50px' }}
                  src={require('./assets/images/home-2/zidio.png')}
                  alt="Zidio Logo"
                />
              </a>
            </div>
            <div className="footer-widget-desc">
              <p>
                At Zidio Development, we specialize in innovative software solutions. 
                Our team is dedicated to delivering high-quality projects, fostering professional growth, 
                and driving technological advancement. 
              </p>
            </div>
            <div className="toptech-button inner-style">
              <a href="about-1.html">
                Discover More<i className="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Company</h4>
              </div>
              <div className="footer-widget-menu">
                <ul>
                  <li>
                    <a href="about-1.html">
                      <i className="bi bi-arrow-right-circle"></i>About
                    </a>
                  </li>
                  <li>
                    <a href="team.html">
                      <i className="bi bi-arrow-right-circle"></i>Our Team
                    </a>
                  </li>
                  {/* Uncomment if needed
                  <li>
                    <a href="pricing.html">
                      <i className="bi bi-arrow-right-circle"></i>Pricing Plan
                    </a>
                  </li>
                  */}
                  <li>
                    <a href="contact.html">
                      <i className="bi bi-arrow-right-circle"></i>Contact
                    </a>
                  </li>
                  <li>
                    <a href="careers.html">
                      <i className="bi bi-arrow-right-circle"></i>Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Our Services</h4>
              </div>
              <div className="footer-widget-menu">
                <ul>
                  <li>
                    <a href="service.html">
                      <i className="bi bi-arrow-right-circle"></i>IT Solutions
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <i className="bi bi-arrow-right-circle"></i>Cyber Security
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <i className="bi bi-arrow-right-circle"></i>Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <i className="bi bi-arrow-right-circle"></i>Machine Learning
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <i className="bi bi-arrow-right-circle"></i>Cloud Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Newsletter</h4>
              </div>
              <p className="f-desc-2">Subscribe to Latest Newsletter</p>
              <form action="#">
                <div className="footer-newslatter-box">
                  <input
                    type="text"
                    name="Email"
                    placeholder="Enter Your E-Mail"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="footer-bottom-area">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="footer-bottom-content">
                  <p>© 2024 @ Zidio Development. Designed by Team ZIDIO.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="footer-botton-social-icon">
                  <ul>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
