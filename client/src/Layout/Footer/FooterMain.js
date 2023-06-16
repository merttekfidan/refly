<
function FooterMain() {
  return (
    <>
      <section className="footer-area bg-gradient-gray pattern-bg-2 padding-top-30px padding-bottom-30px">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <ul className="social-profile social-profile-styled">
                <li>
                  <a href="#" className="facebook-bg" title="Facebook">
                    <i className="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter-bg" title="Twitter">
                    <i className="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram-bg" title="Instagram">
                    <i className="lab la-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="youtube-bg" title="Youtube">
                    <i className="lab la-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <ul className="list-items term-list text-right">
                <li>
                  <a href="terms-and-conditions.html">Terms & Conditions</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="section-block-2 margin-top-30px margin-bottom-30px"></div>
          <div className="row">
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <div className="footer-logo">
                  <a href="index.html" className="foot-logo">
                    <img src="theme/assets/images/logo-black.png" alt="logo" />
                  </a>
                </div>
                <ul className="list-items contact-links pt-3">
                  <li>
                    <span className="d-block text-color mb-1">
                      <i className="la la-map mr-1 text-color-2"></i>Address:
                    </span>{" "}
                    12345 Little Baker St, Melbourne
                  </li>
                  <li>
                    <span className="d-block text-color mb-1">
                      <i className="la la-phone mr-1 text-color-2"></i>Phone:
                    </span>
                    <a href="#">+ 61 23 8093 3400</a>
                  </li>
                  <li>
                    <span className="d-block text-color mb-1">
                      <i className="la la-envelope mr-1 text-color-2"></i>Email:
                    </span>
                    <a href="#">listhub@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4 className="footer__title">Company</h4>
                <div className="stroke-shape mb-3"></div>
                <ul className="list-items">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="career.html">Careers</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Press</a>
                  </li>
                  <li>
                    <a href="#">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#">Content Guidelines</a>
                  </li>
                  <li>
                    <a href="#">Ad Choices</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4 className="footer__title">Discover</h4>
                <div className="stroke-shape mb-3"></div>
                <ul className="list-items">
                  <li>
                    <a href="#">Listhub Project Cost Guides</a>
                  </li>
                  <li>
                    <a href="#">The Local Listhub</a>
                  </li>
                  <li>
                    <a href="#">Collections</a>
                  </li>
                  <li>
                    <a href="#">Listhub Mobile</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Listhub Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4 className="footer__title">Listhub for Business</h4>
                <div className="stroke-shape mb-3"></div>
                <ul className="list-items">
                  <li>
                    <a href="#">Claim your Business</a>
                  </li>
                  <li>
                    <a href="#">Advertise on Dirto</a>
                  </li>
                  <li>
                    <a href="#">Add Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Business Support</a>
                  </li>
                  <li>
                    <a href="#">Products for Businesses</a>
                  </li>
                  <li>
                    <a href="#">Business Success Stories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-12">
              <div className="cta-content d-flex align-items-center justify-content-between p-0">
                <div className="section-heading">
                  <h2 className="sec__title mb-0 font-size-24 line-height-30">
                    Dont't miss your monthly offer
                  </h2>
                  <p className="sec__desc font-size-16">
                    Subscribe to get latest updates and information.
                  </p>
                </div>
                <form method="post" className="form-box">
                  <div className="form-group mb-0">
                    <span className="la la-envelope-o form-icon"></span>
                    <input
                      className="form-control form-control-styled form-control-long"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <p className="font-size-12 font-weight-medium pt-1">
                      <i className="la la-lock mr-1"></i>Your are 100% protected
                    </p>
                    <button
                      className="theme-btn gradient-btn subscribe-btn input-btn-append border-0"
                      type="submit"
                    >
                      Subscribe <i className="la la-arrow-right ml-1"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="section-block-2 margin-top-30px margin-bottom-30px"></div>
          <div className="row">
            <div className="col-lg-12">
              <div className="copy-right d-flex align-items-center justify-content-between">
                <p className="copy__desc">
                  &copy; Copyright Listhub{" "}
                  <script> document.write(new Date().getFullYear()); </script>.
                  Made with
                  <span className="la la-heart-o"></span> by{" "}
                  <a href="https://themeforest.net/user/techydevs/portfolio">
                    TechyDevs
                  </a>
                </p>
                <div className="footer-chosen-container user-chosen-select-container d-flex align-items-center justify-content-end">
                  <div className="mr-2">
                    <select className="user-chosen-select">
                      <option value="1">English</option>
                      <option value="2">Espanol</option>
                      <option value="3">Deutsch</option>
                      <option value="4">Türkçe</option>
                      <option value="5">Polski</option>
                      <option value="6">Português</option>
                      <option value="7">Italiano</option>
                      <option value="8">Dansk</option>
                      <option value="9">French</option>
                      <option value="10">German</option>
                    </select>
                  </div>
                  <div>
                    <select className="user-chosen-select">
                      <option value="1">Argentina</option>
                      <option value="2">Australia</option>
                      <option value="3">Canada</option>
                      <option value="4">Chile</option>
                      <option value="5">Czech Republic</option>
                      <option value="6">France</option>
                      <option value="7">Germany</option>
                      <option value="8">Italy</option>
                      <option value="9">Japan</option>
                      <option value="10">Mexico</option>
                      <option value="11">New Zealand</option>
                      <option value="12">Spain</option>
                      <option value="13">Turkey</option>
                      <option value="14">United Kingdom</option>
                      <option value="15">United States</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterMain;
