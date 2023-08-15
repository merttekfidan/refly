import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginModal from "./../../Sections/LoginModal";

function HeaderMenu() {
  const [isLoggedin, setIsLoggeding] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const { isSuccess } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isSuccess) {
      setIsLoggeding(isSuccess);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="header-menu-wrapper padding-right-30px padding-left-30px">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-12">
              <div className="menu-full-width">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="./theme/assets/images/logo-white.png"
                      alt="logo"
                    />
                  </Link>
                  <div className="d-flex align-items-center">
                    <Link
                      to="/add-listing"
                      className="btn-gray add-listing-btn-show font-size-24 mr-2 flex-shrink-0"
                      title="Add Listing"
                    >
                      <i className="la la-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="main-menu-content main-menu-content-2">
                  <nav className="main-menu">
                    <ul>
                      <li>
                        <a href="#">
                          home <span className="la la-angle-down"></span>
                        </a>
                        <ul className="dropdown-menu-item">
                          <li>
                            <a href="index.html">home one</a>
                          </li>
                          <li>
                            <a href="index2.html">home two</a>
                          </li>
                          <li>
                            <a href="index3.html">home three</a>
                          </li>
                          <li>
                            <a href="index4.html">home four</a>
                          </li>
                          <li>
                            <a href="index5.html">home five</a>
                          </li>
                          <li>
                            <a href="index6.html">home six</a>
                          </li>
                          <li>
                            <a href="index7.html">home seven</a>
                          </li>
                          <li>
                            <a href="#">
                              home (Airbnd){" "}
                              <span className="ribbon">Coming</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              home (Vrbo) <span className="ribbon">Coming</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          listings <span className="la la-angle-down"></span>
                        </a>
                        <ul className="dropdown-menu-item">
                          <li>
                            <a href="listing-grid.html">listing grid</a>
                          </li>
                          <li>
                            <a href="listing-list.html">listing list</a>
                          </li>
                          <li>
                            <a href="listing-fullwidth-map.html">
                              fullwidth map
                            </a>
                          </li>
                          <li>
                            <a href="listing-half-map-grid.html">
                              half map grid
                            </a>
                          </li>
                          <li>
                            <a href="listing-half-map-list.html">
                              half map list
                            </a>
                          </li>
                          <li>
                            <a href="listing-left-sidebar.html">
                              listing left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="listing-right-sidebar.html">
                              listing right sidebar
                            </a>
                          </li>
                          <li>
                            <a href="listing-details.html">listing details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          pages <span className="la la-angle-down"></span>
                        </a>
                        <div className="dropdown-menu-item mega-menu">
                          <ul className="row no-gutters">
                            <li className="col-lg-4 mega-menu-item">
                              <ul>
                                <li>
                                  <a href="dashboard.html">
                                    dashboard{" "}
                                    <span className="ribbon">Hot</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="about.html">about</a>
                                </li>
                                <li>
                                  <a href="user-profile.html">user profile</a>
                                </li>
                                <li>
                                  <a href="career.html">career</a>
                                </li>
                                <li>
                                  <a href="career-details.html">
                                    career details
                                  </a>
                                </li>
                                <li>
                                  <a href="top-place.html">top places </a>
                                </li>
                                <li>
                                  {isLoggedin ? (
                                    <Link to="/add-listing">add listing </Link>
                                  ) : (
                                    <Link
                                      onClick={() =>
                                        setLoginVisible(!loginVisible)
                                      }
                                    >
                                      add listing
                                    </Link>
                                  )}
                                </li>
                              </ul>
                            </li>
                            <li className="col-lg-4 mega-menu-item">
                              <ul>
                                <li>
                                  <a href="top-author.html">top authors </a>
                                </li>
                                <li>
                                  <a href="booking.html">booking</a>
                                </li>
                                <li>
                                  <a href="booking-confirmation.html">
                                    booking confirmation{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="invoice.html">invoice</a>
                                </li>
                                <li>
                                  <a href="pricing.html">Pricing</a>
                                </li>
                                <li>
                                  <a href="all-categories.html">
                                    all categories
                                  </a>
                                </li>
                                <li>
                                  <a href="all-locations.html">all locations</a>
                                </li>
                              </ul>
                            </li>
                            <li className="col-lg-4 mega-menu-item">
                              <ul>
                                <li>
                                  <a href="add-new-post.html">add new post </a>
                                </li>
                                <li>
                                  <a href="contact.html">contact</a>
                                </li>
                                <li>
                                  <a href="faq.html">faq</a>
                                </li>
                                <li>
                                  <a href="page-404.html">404 page</a>
                                </li>
                                <li>
                                  <a href="terms-and-conditions.html">
                                    Terms & Conditions
                                  </a>
                                </li>
                                <li>
                                  <a href="privacy-policy.html">
                                    Privacy Policy
                                  </a>
                                </li>
                                <li>
                                  <a href="coming-soon.html"> Coming Soon</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          blog <span className="la la-angle-down"></span>
                        </a>
                        <ul className="dropdown-menu-item">
                          <li>
                            <a href="blog-full-width.html">full width</a>
                          </li>
                          <li>
                            <a href="blog-grid.html">blog grid</a>
                          </li>
                          <li>
                            <a href="blog-left-sidebar.html">left sidebar </a>
                          </li>
                          <li>
                            <a href="blog-right-sidebar.html">right sidebar </a>
                          </li>
                          <li>
                            <a href="blog-single.html">blog detail</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="quick-search-form d-flex align-items-center">
                  <form action="#" className="w-100">
                    <div className="header-search position-relative">
                      <i className="la la-search form-icon"></i>
                      <input
                        type="search"
                        placeholder="What are you looking for?"
                      />
                      <div className="instant-results">
                        <ul className="instant-results-list">
                          <li>
                            <a href="#" className="d-flex align-items-center">
                              <span className="icon-element bg-1 mr-2">
                                <i className="la la-glass"></i>
                              </span>
                              Food & Drinks
                            </a>
                          </li>
                          <li>
                            <a href="#" className="d-flex align-items-center">
                              <span className="icon-element bg-2 mr-2">
                                <i className="la la-hotel"></i>
                              </span>
                              Travel & Hotel
                            </a>
                          </li>
                          <li>
                            <a href="#" className="d-flex align-items-center">
                              <span className="icon-element bg-3 mr-2">
                                <i className="la la-cutlery"></i>
                              </span>
                              Restaurants
                            </a>
                          </li>
                          <li>
                            <a href="#" className="d-flex align-items-center">
                              <span className="icon-element bg-4 mr-2">
                                <i className="la la-television"></i>
                              </span>
                              Entertainment
                            </a>
                          </li>
                          <li>
                            <a href="#" className="d-flex align-items-center">
                              <span className="icon-element bg-5 mr-2">
                                <i className="la la-shopping-bag"></i>
                              </span>{" "}
                              Shopping
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="nav-right-content ml-auto">
                  {isLoggedin ? (
                    <Link
                      to="/add-listing"
                      className="theme-btn gradient-btn shadow-none add-listing-btn-hide"
                    >
                      <i className="la la-plus mr-2"></i>Add Listing
                    </Link>
                  ) : (
                    <Link
                      onClick={() => setLoginVisible(!loginVisible)}
                      className="theme-btn gradient-btn shadow-none add-listing-btn-hide"
                    >
                      <i className="la la-plus mr-2"></i>Add Listing
                    </Link>
                  )}
                  {/* Render the LoginModal when loginModalVisible is true */}
                  {loginVisible && (
                    <LoginModal
                      loginVisible={setLoginVisible}
                      switch={setLoginVisible}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderMenu;
