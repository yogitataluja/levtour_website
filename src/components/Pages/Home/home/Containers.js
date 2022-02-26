import React from "react";
import Deals from "./Deals";
import Reviews from "./Reviews";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Containers = () => {
  return (
    <>
      {/* <!-- banner-section --> */}
      <section className="banner-style-five" style={{paddingTop:"0px"}}>
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <h2>Where do You Want to Go?</h2>
                <p>Discover your next great adventure.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image-box">
                <img src="assets/images/banner/banner-img-1.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- banner-section end --> */}

      {/* <!-- feature-section --> */}
      <section className="feature-section centred sec-pad">
        <div className="auto-container">
          <div className="sec-title centred">
            <p>Lev Tours Specials</p>
            <h2>Why Travel with Lev Tours?</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/resource/feature-1.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <i className="icon-1"></i>
                    </div>
                    <h4>200+ Our Guides in Ukraine</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/resource/feature-2.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <i className="icon-2"></i>
                    </div>
                    <h4>100% Trusted Tour Agency</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/resource/feature-3.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <i className="icon-3"></i>
                    </div>
                    <h4>12+ Years of Travel Experience</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div
                className="feature-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/resource/feature-4.jpg" alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box">
                      <i className="icon-4"></i>
                    </div>
                    <h4>98% of Our Travelers are Happy</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- feature-section end --> */}

      <Deals />

      {/* <!-- tour-section --> */}
      <section class="tour-section home-5 sec-pad">
        <div
          class="pattern-layer-2"
          style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}
        ></div>
        <div class="auto-container">
          <div class="sec-title text-center">
            <p>Modern & Beautiful</p>
            <h2>Our Most Popular Adventures</h2>
          </div>
          <div class="row clearfix">
            <div class="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                class="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="assets/images/tour/tour-1.jpg" alt="" />
                    <a href="tour-details.html">
                      <i class="fas fa-link"></i>
                    </a>
                  </figure>
                  <div class="lower-content">
                    <h3>
                      <a href="tour-details.html">Trekking in Kyiv</a>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul class="info clearfix">
                      <li>
                        <i class="far fa-clock"></i>5 Days
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div class="btn-box">
                      <a href="/tour_details">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                class="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="assets/images/tour/tour-2.jpg" alt="" />
                    <a href="tour-details.html">
                      <i class="fas fa-link"></i>
                    </a>
                  </figure>
                  <div class="lower-content">
                    <h3>
                      <a href="tour-details.html">Sightseeing</a>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul class="info clearfix">
                      <li>
                        <i class="far fa-clock"></i>5 Days
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div class="btn-box">
                      <a href="/tour_details">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 tour-block">
              <div
                class="tour-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <img src="assets/images/tour/tour-3.jpg" alt="" />
                    <a href="tour-details.html">
                      <i class="fas fa-link"></i>
                    </a>
                  </figure>
                  <div class="lower-content">
                    <h3>
                      <a href="tour-details.html">Group Excursion</a>
                    </h3>
                    <h4>
                      $170.00<span> / Per person</span>
                    </h4>
                    <ul class="info clearfix">
                      <li>
                        <i class="far fa-clock"></i>5 Days
                      </li>
                    </ul>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed.</p>
                    <div class="btn-box">
                      <a href="/tour_details">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- tour-section end --> */}

      <Reviews />

      {/* <!-- news-section --> */}
      <section class="news-section sec-pad home-4">
        <div class="auto-container">
          <div class="sec-title">
            <p>News & Articles</p>
            <h2>Stay Update with Travio Tips</h2>
            <a href="blog.html" class="theme-btn-two">
              All Blog Posts
            </a>
          </div>
          <div class="row clearfix">
            <div class="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                class="news-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <a href="blog-details.html">
                      <img src="assets/images/news/news-1.jpg" alt="" />
                    </a>
                    <span class="post-date">
                      <i class="icon-Calendar"></i>5 Mar, 2021
                    </span>
                  </figure>
                  <div class="lower-content">
                    <div class="category">
                      <a href="blog-details.html">Lifestyle</a>
                    </div>
                    <h3>
                      <a href="blog-details.html">
                        Lorem Ipsum is the dummy text
                      </a>
                    </h3>
                    <ul class="post-info clearfix">
                      <li>
                        <span>By</span> <a href="index.html">Eva Green</a>
                      </li>
                      <li> - March 05, 2021</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectur adip icing sed do
                      eiusmod tempor incididunt labore dolore magna aliqua enim.
                    </p>
                    <div class="btn-box">
                      <a href="/blog_details" class="theme-btn-two">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                class="news-block-one wow fadeInUp animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <a href="blog-details.html">
                      <img src="assets/images/news/news-2.jpg" alt="" />
                    </a>
                    <span class="post-date">
                      <i class="icon-Calendar"></i>4 Jun, 2021
                    </span>
                  </figure>
                  <div class="lower-content">
                    <div class="category">
                      <a href="blog-details.html">Lifestyle</a>
                    </div>
                    <h3>
                      <a href="#">Lorem Ipsum is dummy text</a>
                    </h3>
                    <ul class="post-info clearfix">
                      <li>
                        <span>By</span> <a href="index.html">Eva Green</a>
                      </li>
                      <li> - Jun 4, 2021</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectur adip icing sed do
                      eiusmod tempor incididunt labore dolore magna aliqua enim.
                    </p>
                    <div class="btn-box">
                      <a href="/blog_details" class="theme-btn-two">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                class="news-block-one wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div class="inner-box">
                  <figure class="image-box">
                    <a href="blog-details.html">
                      <img src="assets/images/news/news-3.jpg" alt="" />
                    </a>
                    <span class="post-date">
                      <i class="icon-Calendar"></i>30 Jun, 2021
                    </span>
                  </figure>
                  <div class="lower-content">
                    <div class="category">
                      <a href="blog-details.html">Lifestyle</a>
                    </div>
                    <h3>
                      <a href="#">Lorem Ipsum is dummy text</a>
                    </h3>
                    <ul class="post-info clearfix">
                      <li>
                        <span>By</span> <a href="index.html">Eva Green</a>
                      </li>
                      <li> - Jun 30, 2021</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet consectur adip icing sed do
                      eiusmod tempor incididunt labore dolore magna aliqua enim.
                    </p>
                    <div class="btn-box">
                      <a href="/blog_details" class="theme-btn-two">
                        See Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- news-section end --> */}
    </>
  );
};

export default Containers;
