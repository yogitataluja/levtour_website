import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
const AboutUs = () => {
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
      {/* <!-- Page Title --> */}
      <section
        class="page-title centred"
        style={{
          backgroundImage: "url(assets/images/background/page-title.jpg)",
        }}
      >
        <div class="auto-container">
          <div class="content-box">
            <h1>About Us</h1>
            <p>Discover your next great adventure</p>
          </div>
        </div>
      </section>
      {/* <!-- End Page Title --> */}

      {/* <!-- about-style-two --> */}
      <section class="about-style-two">
        <div
          class="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
        ></div>
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
              <div class="content_block_1">
                <div class="content-box">
                  <div class="sec-title">
                    <p>About Lev</p>
                    <h2>Ukraine's Best Travel Agency Since 2011.</h2>
                  </div>
                  <div class="text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      do eiu smod tempor incididunt ut labore eiu dolore magna
                      aliqua.Quis ipsum suspen disse ultrices gravida Risus
                      commodo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
              <div class="image_block_2">
                <div class="image-box">
                  <div class="shape">
                    <div
                      class="shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-13.png)",
                      }}
                    ></div>
                    <div
                      class="shape-2"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-12.png)",
                      }}
                    ></div>
                    <div
                      class="shape-3"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-12.png)",
                      }}
                    ></div>
                  </div>
                  <figure class="image">
                    <img src="assets/images/resource/about-3.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about-style-two end --> */}

      {/* <!-- testimonial-section --> */}
      <section class="testimonial-section sec-pad centred">
        <div class="auto-container">
          <div class="sec-title centred">
            <h2>Testimonials</h2>
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
          class="three-item-carousel owl-carousel owl-theme owl-nav-none">
            <div class="testimonial-block-one">
              <div class="inner-box">
                <div class="text">
                  <div
                    class="icon"
                    style={{
                      backgroundImage: "url(assets/images/icons/quote-1.png)",
                    }}
                  ></div>
                  <p>
                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                    disse ultrices gravida Risus
                  </p>
                </div>
                <div class="author-box">
                  <h4>Mike Hardson</h4>
                  <span class="designation">Traveler</span>
                  <figure class="thumb-box">
                    <img
                      src="assets/images/resource/testimonial-1.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="testimonial-block-one">
              <div class="inner-box">
                <div class="text">
                  <div
                    class="icon"
                    style={{
                      backgroundImage: "url(assets/images/icons/quote-1.png)",
                    }}
                  ></div>
                  <p>
                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                    disse ultrices gravida Risus
                  </p>
                </div>
                <div class="author-box">
                  <h4>Amy Johnson</h4>
                  <span class="designation">Traveler</span>
                  <figure class="thumb-box">
                    <img
                      src="assets/images/resource/testimonial-2.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="testimonial-block-one">
              <div class="inner-box">
                <div class="text">
                  <div
                    class="icon"
                    style={{
                      backgroundImage: "url(assets/images/icons/quote-1.png)",
                    }}
                  ></div>
                  <p>
                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                    disse ultrices gravida Risus
                  </p>
                </div>
                <div class="author-box">
                  <h4>Luaka Smith</h4>
                  <span class="designation">Traveler</span>
                  <figure class="thumb-box">
                    <img
                      src="assets/images/resource/testimonial-3.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="testimonial-block-one">
              <div class="inner-box">
                <div class="text">
                  <div
                    class="icon"
                    style={{
                      backgroundImage: "url(assets/images/icons/quote-1.png)",
                    }}
                  ></div>
                  <p>
                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                    disse ultrices gravida Risus
                  </p>
                </div>
                <div class="author-box">
                  <h4>Mike Hardson</h4>
                  <span class="designation">Traveler</span>
                  <figure class="thumb-box">
                    <img
                      src="assets/images/resource/testimonial-1.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="testimonial-block-one">
              <div class="inner-box">
                <div class="text">
                  <div
                    class="icon"
                    style={{
                      backgroundImage: "url(assets/images/icons/quote-1.png)",
                    }}
                  ></div>
                  <p>
                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                    disse ultrices gravida Risus
                  </p>
                </div>
                <div class="author-box">
                  <h4>Amy Johnson</h4>
                  <span class="designation">Traveler</span>
                  <figure class="thumb-box">
                    <img
                      src="assets/images/resource/testimonial-2.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="testimonial-block-one">
              <div class="inner-box">
                <div class="text">
                  <div
                    class="icon"
                    style={{
                      backgroundImage: "url(assets/images/icons/quote-1.png)",
                    }}
                  ></div>
                  <p>
                    Lorem ipsum dolor amet consectet adipiscing sed do eiusmod
                    tempor incididunt labore et dolore magna aliqua ipsum suspen
                    disse ultrices gravida Risus
                  </p>
                </div>
                <div class="author-box">
                  <h4>Luaka Smith</h4>
                  <span class="designation">Traveler</span>
                  <figure class="thumb-box">
                    <img
                      src="assets/images/resource/testimonial-3.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      {/* <!-- testimonial-section end --> */}

      {/* <!-- team-section --> */}
      <section class="team-section sec-pad bg-color-1 centred">
        <div class="anim-icon">
          <div
            class="icon anim-icon-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
          ></div>
          <div
            class="icon anim-icon-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
          ></div>
        </div>
        <div class="auto-container">
          <div class="sec-title">
            <h2>Expert Tour Guides</h2>
          </div>
          <div class="row clearfix">
            <div class="col-lg-4 col-md-6 col-sm-12 team-block">
              <div
                class="team-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="assets/images/team/team-1.jpg" alt="" />
                  </figure>
                  <div class="lower-content">
                    <h3>Merrie Lewis</h3>
                    <span class="designation">Tour Guide</span>
                    <ul class="social-links clearfix">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 team-block">
              <div
                class="team-block-one wow fadeInUp animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="assets/images/team/team-2.jpg" alt="" />
                  </figure>
                  <div class="lower-content">
                    <h3>
                      <a href="#">Parks Missie</a>
                    </h3>
                    <span class="designation">Tour Guide</span>
                    <ul class="social-links clearfix">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 team-block">
              <div
                class="team-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="assets/images/team/team-3.jpg" alt="" />
                  </figure>
                  <div class="lower-content">
                    <h3>
                      <a href="#">Mariana Buenos</a>
                    </h3>
                    <span class="designation">Tour Guide</span>
                    <ul class="social-links clearfix">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- team-section end -->
       */}
    </>
  );
};

export default AboutUs;
