import React from "react";

const Signup = () => {
  return (
    <>
      {/* <!-- Page Title --> */}
      <section
        class="page-title centred"
        style={{
          backgroundImage: "url(assets/images/background/page-title-5.jpg)",
        }}
      >
        <div class="auto-container">
          <div class="content-box">
            <h1>Sign In</h1>
            <p>Discover your next great adventure</p>
          </div>
        </div>
      </section>
      {/* <!-- End Page Title --> */}

      {/* <!-- register-section --> */}
      <section class="register-section sec-pad">
        <div class="anim-icon">
          <div
            class="icon anim-icon-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}
          ></div>
          <div
            class="icon anim-icon-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}
          ></div>
        </div>
        <div class="auto-container">
          <div class="inner-box">
            <div class="sec-title centred">
              <p>Sign in</p>
              <h2>Connect with us for Better Tour</h2>
            </div>
            <div class="form-inner">
              <h3>Sign In with</h3>
              <ul class="social-links clearfix">
                <li>
                  <a href="signup.html">
                    <span>Sign In with Facebook</span>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="signup.html">
                    <span>Sign In with Google</span>
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="signup.html">
                    <span>Sign In with Twitter</span>
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <div class="text">
                <span>or</span>
              </div>
              <form
                action="http://azim.commonsupport.com/Travio/login.html"
                method="post"
                class="register-form"
              >
                <div class="row clearfix">
                  <div class="col-lg-12 col-md-12 col-sm-12 column">
                    <div class="form-group">
                      <label>Your Name</label>
                      <input type="text" name="name" required="" />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 column">
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" name="password" required="" />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 column">
                    <div class="form-group">
                      <div class="forgor-password text-right">
                        <a href="login.html">Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 column">
                    <div class="form-group message-btn">
                      <button type="submit" class="theme-btn">
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div class="other-text">
                Already have an account? <a href="signup.html">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- register-section end -->  */}
    </>
  );
};

export default Signup;
