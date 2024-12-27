import React from 'react';
import './Home.css';
import icon1 from './assets/about-icon1.png'; // Importing images
import icon2 from './assets/about-icon2.png';
import icon3 from './assets/about-icon3.png';
import icon4 from './assets/about-icon4.png';
import aboutThumb from './assets/about-thumb.png';
import service1 from './assets/service-1.png';
import service2 from './assets/service-2.png';
import service3 from './assets/service-3.png';
import service4 from './assets/service-4.png';
import service5 from './assets/service-5.png';
import service6 from './assets/service-6.png';
import serviceBg from './assets/service-bg.png';
import process1 from './assets/process-1.png';
import process2 from './assets/process-2.png';
import process3 from './assets/process-3.png';
import testiImg1 from './assets/pintu.jpeg';
import testiImg2 from './assets/SaveInsta.App_452075928_18239507287281300_4779034483683661459_n.jpg';
import testiImg3 from './assets/Dave_s_Music_400x400.jpg';
import testiImg4 from './assets/JnZPX-PG_400x400.jpg';
// Corrected path // Corrected path

const AboutArea = () => (
  <div className="about-area style-two">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-right">
            <div className="section-title left style-two">
              <h1>Software Development & Services</h1>
              <h2>Your Reliable Partner for IT Services</h2>
              <h2>Dedicated to Your Success</h2>
              <p>
                At Zidio, we're your trusted IT services partner, ensuring your success with reliable
                solutions tailored to your business needs. Count on us for robust software development,
                comprehensive IT support, and cutting-edge technology solutions that empower your business
                to thrive.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single-about-icon-box">
                  <div className="about-icon">
                    <img src={icon1} alt="Cost Effective Solutions" />
                  </div>
                  <div className="about-icon-box-content">
                    <h4>Cost Effective Solutions</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-about-icon-box">
                  <div className="about-icon">
                    <img src={icon2} alt="Expert & Dedicated Team Members" />
                  </div>
                  <div className="about-icon-box-content">
                    <h4>Expert & Dedicated Team Members</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-about-icon-box">
                  <div className="about-icon">
                    <img src={icon3} alt="24/7 Free Technical Support" />
                  </div>
                  <div className="about-icon-box-content">
                    <h4>24/7 Free Technical Support</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-about-icon-box">
                  <div className="about-icon">
                    <img src={icon4} alt="100% Customer Satisfaction" />
                  </div>
                  <div className="about-icon-box-content">
                    <h4>100% Customer Satisfaction</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="toptech-button style-one">
              <a href="about-1.html">
                About More<i className="bi bi-arrow-right-circle-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-left">
            <div className="about-thumb">
              <img src={aboutThumb} alt="About Us Thumbnail" />
            </div>
            <div className="about-counter-box">
              <div className="about-counter-title">
                <h1>6500+</h1>
                <span>Projects Completed</span>
                <p>
                  Over the past decade, we've successfully completed over 6500 projects across industries,
                  helping businesses achieve their goals and streamline operations.
                </p>
              </div>
            </div>
            <div className="about-shape">
              <img src="./assets/about-shape2.png" alt="About Us Shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServiceArea = () => (
  <div
    className="service-area"
    style={{ backgroundImage: `url(${serviceBg})`, backgroundSize: 'cover' }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="section-title center style-two">
            <h4>IT Support For Business</h4>
            <h1>What We Are Offering</h1>
          </div>
        </div>
      </div>
      <div className="row">
        {[
          {
            image: service1,
            number: '01',
            title: 'Graphic Design',
            description: 'Creative designs that communicate your brand effectively.'
          },
          {
            image: service2,
            number: '02',
            title: 'Cloud Solutions',
            description:
              'Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.'
          },
          {
            image: service3,
            number: '03',
            title: 'Web Development',
            description:
              'Design and build responsive, high-performance websites using the latest web technologies.'
          },
          {
            image: service4,
            number: '04',
            title: 'Digital Marketing',
            description:
              'Boost your online presence with tailored digital marketing strategies that drive engagement and growth.'
          },
          {
            image: service5,
            number: '05',
            title: '3D Vector Illustration',
            description: 'Create stunning 3D illustrations that captivate your audience.'
          },
          {
            image: service6,
            number: '06',
            title: 'Data Science Solutions',
            description:
              'Leverage the power of data to make informed business decisions and uncover insights.'
          }
        ].map((service, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="single-services-box">
              <div className="service-icon">
                <img src={service.image} alt={`${service.title} Icon`} />
              </div>
              <div className="service-number">
                <h1>{service.number}</h1>
              </div>
              <div className="service-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <a href="service.html">
                  Read More<i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const Container = () => (
  <div className="container">
    <div className="stats">
      <div>
        <span>1K+</span>
        <p>HAPPY CUSTOMERS</p>
      </div>
      <div>
        <span>2K+</span>
        <p>WORKS COMPLETED</p>
      </div>
      <div>
        <span>99+</span>
        <p>EXPERT MEMBERS</p>
      </div>
      <div>
        <span>100%</span>
        <p>SATISFACTION RATES</p>
      </div>
    </div>
    <div className="working-process">
      <h2>Working Process</h2>
      <p>We Follow the Easy Working Steps</p>
      <div className="step">
      <img src={process1} alt="Start a project" />
        <h3>01 Start A Project</h3>
        <p>
          Kick off your project with a clear understanding of your goals and requirements, setting the foundation for
          success.
        </p>
      </div>
      <div className="step">
      <img src={process2} alt="Project analysis" />
        <h3>02 Project Analysis</h3>
        <p>
          Conduct a thorough analysis to create a tailored strategy, ensuring all aspects align with your business
          objectives.
        </p>
      </div>
      <div className="step">
      <img src={process3} alt="Deliver to success" />
        <h3>03 Deliver to Success</h3>
        <p>
          Execute and deliver the project with precision, ensuring it meets your expectations and drives your success.
        </p>
      </div>
    </div>
  </div>
);
const TestimonialArea = () => (
  <div className="testimonial-area style-one">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="section-title center style-two">
            <h4>Testimonial</h4>
            <h1>Customer’s Awesome Feedback</h1>
            <h1>About Our Services</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="testi-list-1 owl-carousel">
          <div className="col-lg-12 text-center">
            <div className="single-testimonial-box">
              <div className="testi-desc">
                <p>
                  Zidio exceeded our expectations. Their team was professional, responsive, and delivered a high-quality solution that perfectly aligned with our needs. We couldn’t be happier with the results.
                </p>
              </div>
              <div className="testi-rating">
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                </ul>
              </div>
              <div className="testi-author">
                <img src={testiImg1} alt="Ranjan Kumar Senapati" />
                <h4>Mr. Ranjan Kumar Senapati</h4>
                <p>Data Science & Analytics</p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 text-center">
            <div className="single-testimonial-box">
              <div className="testi-desc">
                <p>
                  Working with Zidio was a game-changer for our business. Their expertise and attention to detail ensured that our project was not only completed on time but also surpassed our initial vision.
                </p>
              </div>
              <div className="testi-rating">
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                </ul>
              </div>
              <div className="testi-author">
                <img src={testiImg2} alt="Suraj Adhikari" />
                <h4>Mr. Suraj Adhikari</h4>
                <p>Web Development</p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 text-center">
            <div className="single-testimonial-box">
              <div className="testi-desc">
                <p>
                  The team at Zidio is exceptional. From start to finish, they demonstrated a deep understanding of our goals and provided invaluable guidance throughout the process. We highly recommend their services.
                </p>
              </div>
              <div className="testi-rating">
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                </ul>
              </div>
              <div className="testi-author">
                <img src={testiImg3} alt="David" />
                <h4>David</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-12 text-center">
            <div className="single-testimonial-box">
              <div className="testi-desc">
                <p>
                  Zidio’s commitment to excellence is unmatched. Their seamless working process and expert leadership delivered a final product that truly sets our business apart. We’re thrilled with the outcome.
                </p>
              </div>
              <div className="testi-rating">
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                </ul>
              </div>
              <div className="testi-author">
                <img src={testiImg4} alt="Andy Tessa" />
                <h4>Andy Tessa</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const VideoArea = () => (
  <div className="video-area style-two">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="section-title center style-two">
            <h4>Watch Now</h4>
            <h1>Our Best Working Process System</h1>
            <h1>with Team Expert Leaders</h1>
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <div className="center video-button">
            <a
              className="video-vemo-icon venobox vbox-item"
              data-vbtype="youtube"
              data-autoplay="true"
              href="https://youtu.be/JnSk6BlZEBk"
            >
              <i className="bi bi-play-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactInfoArea = () => (
  <div className="contact-info-area style-two">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-box">
            <div className="contact-info-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="contact-info-content">
              <h4>Call us Any time</h4>
              <p>+918455807965</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-box">
            <div className="contact-info-icon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="contact-info-content">
              <h4>Send E-Mail</h4>
              <p>support@zidio.in</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-box">
            <div className="contact-info-icon">
              <i className="fa-regular fa-clock"></i>
            </div>
            <div className="contact-info-content">
              <h4>Opening Hours</h4>
              <p>Mon - Fri (9.00 - 5.30)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => (
  <div>
    <AboutArea />
    <ServiceArea />
    <Container />
    <TestimonialArea />
    <VideoArea />
    <ContactInfoArea />
    
  </div>
);

export default Home;
