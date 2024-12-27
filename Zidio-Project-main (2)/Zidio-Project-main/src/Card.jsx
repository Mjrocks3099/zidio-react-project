import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCloudSunRain } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { SiJirasoftware } from "react-icons/si";
import { GiHiveMind } from "react-icons/gi";
import { SiWebmoney } from "react-icons/si";
import { SiCyberdefenders } from "react-icons/si";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { RiTvFill } from "react-icons/ri";
import './Card.css'
export default function Card() {
    return (
        <>
            <Container className='car'>
                <Row>
                    <div className="text mt-5">
                        <h4><b>What We Provide ?</b></h4>
                    </div>
                    <div className="heading">
                        <h2><b>Provide Interective IT Solution & <br />
                            Business Services</b></h2>
                    </div>
                    <Col>
                        <div className="card">
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <div className="fa">                                    <FaCloudSunRain />
                                            <h5>Cloud Services</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>
                                        Cloud Services
                                    </h3>
                                    <p>Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <div className="fa">
                                            <GrTechnology />
                                            <h5>IT Management</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>
                                        IT Management
                                    </h3>
                                    <p>Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <div className="fa">
                                            <SiJirasoftware />
                                            <h5>Software Renew</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>
                                        Software Renew
                                    </h3>
                                    <p>Manage and streamline software renewals, ensuring your systems are always up-to-date and secure.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <div className="fa">
                                            <GiHiveMind />
                                            <h5>Machine Learning</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3> Machine Learning
                                    </h3>
                                    <p>Develop and implement machine learning models to automate processes and drive intelligent decision-making.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="card">
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <div className="fa">
                                            <RiTvFill />
                                            <h5>Digitel Marketing</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>
                                        Digital Marketing
                                    </h3>
                                    <p>Boost your online presence with tailored digital marketing strategies that drive engagement and growth.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <div className="fa">
                                            <SiWebmoney />
                                            <h5>Web Development</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>
                                        Web Development
                                    </h3>
                                    <p>Design and build responsive, high-performance websites using the latest web technologies.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <div className="fa">
                                            <SiCyberdefenders />
                                            <h5>Cyber Security</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>
                                        Cyber Security
                                    </h3>
                                    <p>Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <div className="fa">
                                            <TbDeviceDesktopAnalytics />
                                            <h5>Data Analytics</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>
                                        Data Analytic
                                    </h3>
                                    <p>Transform raw data into valuable insights, enabling informed and strategic business decisions.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
