import React from "react";
import OwlCarousel from "react-owl-carousel";
const Review = () => {
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
      {/* <!-- testimonial-section --> */}
      <section class="testimonial-section bg-color-1 sec-pad centred">
        <div class="auto-container">
          <div class="sec-title centred">
            <p>Review & Testimonials</p>
            <h2>Top Reviews for Lev</h2>
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
            class="three-item-carousel owl-carousel owl-theme owl-nav-none"
          >
            <div class="testimonial-block-one">
              <div class="inner-box">
                <ul class="rating-box clearfix">
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                </ul>
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
                <ul class="rating-box clearfix">
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                </ul>
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
                <ul class="rating-box clearfix">
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                </ul>
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
                <ul class="rating-box clearfix">
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                </ul>
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
                <ul class="rating-box clearfix">
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                </ul>
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
                <ul class="rating-box clearfix">
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                </ul>
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
                <ul class="rating-box clearfix">
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                </ul>
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
                <ul class="rating-box clearfix">
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                </ul>
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
                <ul class="rating-box clearfix">
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                  <li>
                    <i class="icon-Star"></i>
                  </li>
                </ul>
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
    </>
  );
};

export default Review;
