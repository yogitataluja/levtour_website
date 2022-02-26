import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../API";
import axios from "axios";

const Footer = () => {
  const [config, setConfig] = useState("");
  // const token = localStorage.getItem("token");
  useEffect(() => {
    async function getConfiguration() {
      const configuration = await axios.get(`${API}/api/config`);
      setConfig(configuration.data);
    }
    getConfiguration();
  }, []);
  return (
    <>
      {/* <!-- main-footer --> */}

      <footer className="main-footer bg-color-2">
        <div className="footer-top pt-130">
          <div
            className="vector-bg"
            style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}
          ></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <a href="/">
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </figure>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor amet consetetur adi pisicing elit sed
                      eiusm tempor in cididunt ut labore dolore magna aliqua
                      enim.
                    </p>
                  </div>
                  <ul className="social-links clearfix">
                    <li>
                      <a href={config[0]?.socialMedia[0].facebook}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={config[0]?.socialMedia[0].twitter}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={config[0]?.socialMedia[0].instagram}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <Link to="index.html">
                        <i className="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                    <li>
                      <a href={config[0]?.socialMedia[0].linkedin}>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Services</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <a href="/aboutus">About Us</a>
                      </li>
                      <li>
                        <a href="/tours">Tours</a>
                      </li>
                      <li>
                        <Link to="index.html">Film Services</Link>
                      </li>
                      <li>
                        <Link to="index.html">Boats and Yachts</Link>
                      </li>
                      <li>
                        <a href="/blogs">Our Blog</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget gallery-widget">
                  <div className="widget-title">
                    <h3>Gallery</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="image-list clearfix">
                      <li>
                        <figure className="image-box">
                          <Link to="gallery-1.html">
                            <img
                              src="assets/images/resource/footer-gallery-1.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <Link to="gallery-1.html">
                            <img
                              src="assets/images/resource/footer-gallery-2.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <Link to="gallery-1.html">
                            <img
                              src="assets/images/resource/footer-gallery-3.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <Link to="gallery-1.html">
                            <img
                              src="assets/images/resource/footer-gallery-4.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <Link to="gallery-1.html">
                            <img
                              src="assets/images/resource/footer-gallery-5.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                      <li>
                        <figure className="image-box">
                          <Link to="gallery-1.html">
                            <img
                              src="assets/images/resource/footer-gallery-6.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Contacts</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list clearfix">
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        {`${config[0]?.address[0].address}, ${config[0]?.address[0].city}, ${config[0]?.address[0].state}, ${config[0]?.address[0].country}`}
                      </li>
                      <li>
                        <i className="fas fa-microphone"></i>
                        <span >
                          {config[0]?.address[0].contact}
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <span>{config[0]?.address[0].email}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner clearfix">
              <div className="copyright pull-left">
                <p>
                  <Link to="/home">Lev Tours</Link> &copy; 2021 All Right
                  Reserved
                </p>
              </div>
              <ul className="footer-nav pull-right">
                <li>
                  <Link to="index.html">Terms of Service</Link>
                </li>
                <li>
                  <Link to="index.html">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- main-footer end --> */}
    </>
  );
};

export default Footer;
