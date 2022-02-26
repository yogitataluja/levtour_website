import React from "react";

const Bookings = () => {
  return (
    <>
      {/* Page Title */}
      <section
        className="page-title centred"
        style={{
          backgroundImage: "url(assets/images/background/page-title-2.jpg)",
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <h1>Booking</h1>
            <p>Discover your next great adventure</p>
          </div>
        </div>
      </section>
      {/* End Page Title */}
      {/* booking-section */}
      <section className="booking-section booking-process-1">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="booking-process-content mr-20">
                <ul className="process-label clearfix">
                  <li className="current">
                    <span>1.</span>Personal Info
                  </li>
                  <li>
                    <span>2.</span>Payment Info
                  </li>
                  <li>
                    <span>3.</span>Confirm
                  </li>
                </ul>
                <div className="inner-box">
                  <h3>Personal Info</h3>
                  <form action="#" method="post" className="processing-form">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" name="fname" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" name="lname" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="form-group">
                          <label>Address 1</label>
                          <input type="text" name="address1" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="form-group">
                          <label>Address 2</label>
                          <input type="text" name="address2" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="form-group">
                          <label>City</label>
                          <input type="text" name="city" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="form-group">
                          <label>Zip Code</label>
                          <input type="text" name="zip" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="form-group">
                          <label>State</label>
                          <input type="text" name="state" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="form-group">
                          <label>Country</label>
                          <input type="text" name="country" required />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 column">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea name="message" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 column">
                        <div className="form-group message-btn text-right">
                          <button type="submit" className="theme-btn">
                            Next
                            <i className="far fa-angle-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="process-sidebar ml-20">
                <div className="content-box">
                  <h3>Tour Summary</h3>
                  <figure className="image-box">
                    <img src="assets/images/resource/sidebar-1.jpg" alt="" />
                  </figure>
                  <h4>Highlights of Ukraine Trip</h4>
                  <ul className="info clearfix">
                    <li>
                      <i className="far fa-calendar-alt" />
                      From: <span>25 Jul, 2021</span>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      To: <span>29 Jul, 2021</span>
                    </li>
                    <li>
                      <i className="far fa-user-alt" />
                      Guests: <span>2 Adults, 1 Child</span>
                    </li>
                  </ul>
                  <div className="price">
                    <h4>Total: $170.00</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* booking-section end */} 
    </>
  );
};

export default Bookings;
