// src/Contact.js
import React, { useState } from "react";
import './Contact.css'; // Ensure you have this CSS file
import axios from "axios";

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      // Log the response for debugging
      console.log('Response:', response);

      if (response.status === 200) {
        alert('Your message has been sent successfully!'); // Success message
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Clear form after submission
      }
    } catch (error) {
      console.error('Error while submitting the form:', error); // Log the error
      alert('Failed to send the message. Please try again later.'); // Error message
    }
  };

  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="contact-breadcumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-breadcumb-content">
                <h4>Contact Us</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-area style-three inner">
        <div className="container">
          <div className="row add-white-bg align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="single-contact-box">
                <div className="contact-content">
                  <h4>Write to Us Anytime</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-input-box">
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your Name" 
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-box">
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Enter E-Mail" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-box">
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="Phone Number" 
                          value={formData.phone}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-box">
                        <select 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Subject</option>
                          <option value="web">Web Development</option>
                          <option value="app">App Development</option>
                          <option value="uiux">UI/UX</option>
                          <option value="data">Data Science</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input-box">
                        <textarea 
                          name="message" 
                          placeholder="Write Message" 
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="message-sent-button">
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="single-contact-info-box">
                <div className="info-content">
                  <h4>Don’t Forget to Contact Us</h4>
                </div>
                <div className="contact-info-box">
                  <div className="contact-info-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="contact-info-content">
                    <p>Call Us</p>
                    <h4>+918455807965</h4>
                  </div>
                </div>
                <div className="contact-info-box">
                  <div className="contact-info-icon">
                    <i className="bi bi-envelope-open-fill"></i>
                  </div>
                  <div className="contact-info-content">
                    <p>Send E-Mail</p>
                    <h4>support@zidio.in</h4>
                  </div>
                </div>
                <div className="contact-info-box">
                  <div className="contact-info-icon">
                    <i className="bi bi-alarm"></i>
                  </div>
                  <div className="contact-info-content">
                    <p>Office Hours</p>
                    <h4>9.00 AM to 5.00 PM</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="google-map">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772.1099258362381!2d77.62869122686807!3d12.76613984330768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84179333b909112d%3A0x99b7aa8200259bb9!2sZidio%20Development%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1723539051372!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                title="Zidio Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
