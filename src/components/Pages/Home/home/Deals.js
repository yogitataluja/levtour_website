import React from "react";
import OwlCarousel from "react-owl-carousel";

const Deals = () => {
  const respon = {
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  };
  return (
    <>
      {/* <!-- offer-section --> */}
      <section className="offer-section home-5 sec-pad">
        <div className="auto-container">
          <div className="sec-title">
            <p>Deals & Offers</p>
            <h2>Last Minute Amazing Deals</h2>
          </div>

          <OwlCarousel
            items={3}
            loop={true}
            nav={true}
            margin={30}
            smartSpeed={1000}
            autoplay={500}
            navText={[
              '<span class="far fa-long-arrow-alt-left"></span>',
              '<span class="far fa-long-arrow-alt-right"></span>',
            ]}
            responsive={respon.responsive}
            className="three-item-carousel owl-carousel owl-theme owl-nav-none"
          >
            <div className="offer-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/resource/offer-1.jpg" alt="" />
                </figure>
                <div className="content-box">
                  <span>Get 50% Off</span>
                  <h3>
                    <a href="destination-details.html">Kyiv</a>
                  </h3>
                  <h4>$1500</h4>
                </div>
              </div>
            </div>
            <div className="offer-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/resource/offer-2.jpg" alt="" />
                </figure>
                <div className="content-box">
                  <span>Get 50% Off</span>
                  <h3>
                    <a href="destination-details.html">Odessa</a>
                  </h3>
                  <h4>$1170</h4>
                </div>
              </div>
            </div>
            <div className="offer-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/resource/offer-3.jpg" alt="" />
                </figure>
                <div className="content-box">
                  <span>Get 50% Off</span>
                  <h3>
                    <a href="destination-details.html">Lviv</a>
                  </h3>
                  <h4>$1099</h4>
                </div>
              </div>
            </div>
            <div class="offer-block-one">
              <div class="inner-box">
                <figure class="image-box">
                  <img src="assets/images/resource/offer-1.jpg" alt="" />
                </figure>
                <div class="content-box">
                  <span>Get 50% Off</span>
                  <h3>
                    <a href="destination-details.html">Kharkiv</a>
                  </h3>
                  <h4>$1250</h4>
                </div>
              </div>
            </div>
            <div class="offer-block-one">
              <div class="inner-box">
                <figure class="image-box">
                  <img src="assets/images/resource/offer-2.jpg" alt="" />
                </figure>
                <div class="content-box">
                  <span>Get 50% Off</span>
                  <h3>
                    <a href="destination-details.html">Vinnytsia</a>
                  </h3>
                  <h4>$1000</h4>
                </div>
              </div>
            </div>
            <div class="offer-block-one">
              <div class="inner-box">
                <figure class="image-box">
                  <img src="assets/images/resource/offer-3.jpg" alt="" />
                </figure>
                <div class="content-box">
                  <span>Get 50% Off</span>
                  <h3>
                    <a href="destination-details.html">Dnipro</a>
                  </h3>
                  <h4>$2000</h4>
                </div>
              </div>
            </div>
            <div class="offer-block-one">
              <div class="inner-box">
                <figure class="image-box">
                  <img src="assets/images/resource/offer-1.jpg" alt="" />
                </figure>
                <div class="content-box">
                  <span>Get 50% Off</span>
                  <h3>
                    <a href="destination-details.html">Mykolaiv</a>
                  </h3>
                  <h4>$1500</h4>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      {/* <!-- offer-section end --> */}
    </>
  );
};

export default Deals;
