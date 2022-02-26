import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API } from "../../../API";
// for google map

// import { GoogleApiWrapper } from "google-maps-react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const TourDetails = () => {
  const [tourdetails, setTourDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    async function getToursDetail() {
      let TourDetails = await axios.get(`${API}/api/product/${id}`);
      console.log(TourDetails);
      setTourDetails(TourDetails.data);
    }
    getToursDetail();
  }, []);

  return (
    <>
      {/* Page Title */}
      <section
        className="page-title style-three"
        style={{
          backgroundImage: `url(${tourdetails.images})`,
        }}
      >
        <div className="auto-container">
          <div className="inner-box">
            <h2>{tourdetails.title}</h2>
            <h3>
              ${tourdetails.price}
              <span> / Per person</span>
            </h3>
          </div>
        </div>
      </section>
      {/* End Page Title */}
      {/* tour-details */}
      <section className="tour-details">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="tour-details-content">
                <div className="inner-box">
                  <div className="text">
                    <h2>Overview</h2>
                    <p>{tourdetails.description}</p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <ul className="info-list clearfix">
                      <li>
                        <i className="far fa-clock" />5 Days
                      </li>
                      <li>
                        <i className="far fa-user" />
                        Age 15+
                      </li>
                      <li>
                        <i className="far fa-map" />
                        1234, Ukraine
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="overview-inner">
                  <ul className="overview-list clearfix">
                    <li>
                      <span>Destination:</span>Kyiv City
                    </li>
                    <li>
                      <span>Departure:</span>Yes Required
                    </li>
                    <li>
                      <span>Departure Time:</span>9:00 a.m.
                    </li>
                    <li>
                      <span>Return Time:</span>9:00 p.m.
                    </li>
                    <li className="clearfix">
                      <span>Included:</span>
                      <ul className="included-list clearfix">
                        <li>Air fares</li>
                        <li>4 Nights Hotel Accomodation</li>
                        <li>Entrance Fees</li>
                        <li>Tour Guide</li>
                      </ul>
                    </li>
                    <li className="clearfix">
                      <span>Excluded:</span>
                      <ul className="excluded-list clearfix">
                        <li>Air fares</li>
                        <li>Air fares</li>
                        <li>Air fares</li>
                        <li>Air fares</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="tour-plan">
                  <div className="text">
                    <h2>Tour Plan</h2>
                    <p>
                      Aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="content-box">
                    <div className="single-box">
                      <span>01</span>
                      <h4>8:00 am to 10:00 am</h4>
                      <h3>Day 1: Arrive at Forest</h3>
                      <p>
                        Aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </p>
                      <ul className="list clearfix">
                        <li>Air fares</li>
                        <li>4 Nights Hotel Accomodation</li>
                        <li>Entrance Fees</li>
                      </ul>
                    </div>
                    <div className="single-box">
                      <span>02</span>
                      <h4>8:00 am to 10:00 am</h4>
                      <h3>Day 2: Arrive South of City</h3>
                      <p>
                        Aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </p>
                      <ul className="list clearfix">
                        <li>Air fares</li>
                        <li>4 Nights Hotel Accomodation</li>
                        <li>Entrance Fees</li>
                      </ul>
                    </div>
                    <div className="single-box">
                      <span>03</span>
                      <h4>8:00 am to 10:00 am</h4>
                      <h3>Day 3: Arrive Noth of City</h3>
                      <p>
                        Aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </p>
                      <ul className="list clearfix">
                        <li>Air fares</li>
                        <li>4 Nights Hotel Accomodation</li>
                        <li>Entrance Fees</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="location-map">
                  <div className="text">
                    <h2>View On Map</h2>
                    <p>
                      Enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex commodo consequat duis aute
                      irure dolor.
                    </p>
                  </div>
                  <div className="map-inner">
                    {/* <Map google={this.props.google} zoom={14}>
                      <Marker
                        onClick={this.onMarkerClick}
                        name={"Current location"}
                      />

                      <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                          <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map> */}

                    <div
                      className="google-map"
                      id="contact-google-map"
                      data-map-lat="40.712776"
                      data-map-lng="-74.005974"
                      data-icon-path="assets/images/icons/map-marker.png"
                      data-map-title="Brooklyn, New York, United Kingdom"
                      data-map-zoom={12}
                      data-markers='{
                                            "marker-1": [40.712776, -74.005974, "<h4>Branch Office</h4><p>77/99 New York</p>","assets/images/icons/map-marker.png"]
                                        }'
                    ></div>
                  </div>
                </div>
                <div className="photo-gallery">
                  <div className="text">
                    <h2>Photo Gallery</h2>
                    <p>
                      Enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="image-box clearfix">
                    <figure className="image">
                      <img src={tourdetails.images} alt="" />
                      <a
                        href={tourdetails.images}
                        className="view-btn lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="icon-Plus" />
                      </a>
                    </figure>
                    <figure className="image">
                      <img src={tourdetails.images} alt="" />
                      <a
                        href={tourdetails.images}
                        className="view-btn lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="icon-Plus" />
                      </a>
                    </figure>
                    <figure className="image">
                      <img src={tourdetails.images} alt="" />
                      <a
                        href={tourdetails.images}
                        className="view-btn lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="icon-Plus" />
                      </a>
                    </figure>
                    <figure className="image">
                      <img src={tourdetails.images} alt="" />
                      <a
                        href={tourdetails.images}
                        className="view-btn lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="icon-Plus" />
                      </a>
                    </figure>
                    <figure className="image">
                      <img
                        src="assets/images/resource/destination-8.jpg"
                        alt=""
                      />
                      <a
                        href="assets/images/resource/destination-8.jpg"
                        className="view-btn lightbox-image"
                        data-fancybox="gallery"
                      >
                        <i className="icon-Plus" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="default-sidebar tour-sidebar ml-20">
                <div className="form-widget">
                  <div className="widget-title">
                    <h3>Book This Tour</h3>
                  </div>
                  <form action="#" method="post" className="tour-form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div className="form-group message-btn">
                      <button type="submit" className="theme-btn">
                        <Link to="/bookings">Book Tour</Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tour-details end */}
    </>
  );
};

export default TourDetails;
