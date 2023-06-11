import MainSearch from "./../Components/MainSearch";
import CategoriesBar from "./../Sections/CategoriesBar";
import ArticlesSection from "./../Sections/ArticlesSection";
import HowToSection from "./../Sections/HowToSection";
function Home() {
  return (
    <>
      <section className="hero-wrapper hero-bg-4 pb-0">
        <div className="overlay opacity-9"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-heading">
                <div className="section-heading">
                  <h2 className="sec__title mb-3 line-height-60">
                    Listhub helps you find out whats happening in your city,
                    Let's explore.
                  </h2>
                  <p className="sec__desc line-height-35">
                    Simple, Yet powerful local business directory where buyers
                    and sellers engage each others with trust.
                  </p>
                </div>
                <div className="btn-box padding-top-35px">
                  <a
                    href="about.html"
                    className="theme-btn gradient-btn shadow-none"
                  >
                    Know More<i className="la la-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ml-auto">
              <MainSearch />
            </div>
          </div>
        </div>
        <CategoriesBar />
      </section>
      <section className="card-area section-padding">
        <div className="container-fluid padding-right-50px padding-left-50px">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-badge pb-3">
                  <span className="ribbon ribbon-lg">Popular Listing</span>
                </div>
                <h2 className="sec__title">
                  Most Popular <span className="text-color-16">Listings.</span>
                </h2>
                <p className="sec__desc">
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, <br />a feugiat eros. Nunc ut lacinia
                  tortors.
                </p>
              </div>
            </div>
          </div>
          <div className="row padding-top-60px">
            <div className="col-lg-12">
              <div className="card-carousel-2 owl-trigger-action">
                <div className="card-item border border-color">
                  <div className="card-image">
                    <a href="listing-details.html" className="d-block">
                      <img
                        src="theme/assets/images/img4.jpg"
                        className="card__img"
                        alt=""
                      />
                      <span className="badge">now open</span>
                    </a>
                    <span className="bookmark-btn" title="Save">
                      <i className="la la-bookmark"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <a
                      href="#"
                      className="user-thumb d-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="TechyDevs"
                    >
                      <img
                        src="theme/assets/images/listing-logo.jpg"
                        alt="author-img"
                      />
                    </a>
                    <h4 className="card-title pt-3">
                      <a href="listing-details.html">
                        Favorite Place Food Bank
                      </a>
                      <i
                        className="la la-check-circle ml-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Claimed"
                      ></i>
                    </h4>
                    <p className="card-sub">
                      <a href="#">
                        <i className="la la-map-marker mr-1 text-color-2"></i>
                        Bishop Avenue, New York
                      </a>
                    </p>
                    <ul className="listing-meta d-flex align-items-center">
                      <li className="d-flex align-items-center">
                        <span className="rate flex-shrink-0">4.7</span>
                        <span className="rate-text">5 Ratings</span>
                      </li>
                      <li>
                        <span
                          className="price-range"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Pricey"
                        >
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-cutlery mr-1 listing-icon"></i>
                        <a href="#" className="listing-cat-link">
                          Restaurant
                        </a>
                      </li>
                    </ul>
                    <ul className="info-list padding-top-20px">
                      <li>
                        <span className="la la-link icon"></span>
                        <a href="#"> www.techydevs.com</a>
                      </li>
                      <li>
                        <span className="la la-calendar-check-o icon"></span>
                        Opened 1 month ago
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-item border border-color">
                  <div className="card-image">
                    <a href="listing-details.html" className="d-block">
                      <img
                        src="theme/assets/images/img5.jpg"
                        className="card__img"
                        alt=""
                      />
                      <span className="badge bg-10">closed</span>
                    </a>
                    <span
                      className="bookmark-btn"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Save"
                    >
                      <i className="la la-bookmark"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <a
                      href="#"
                      className="user-thumb d-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="TechyDevs"
                    >
                      <img
                        src="theme/assets/images/listing-logo2.jpg"
                        alt="author-img"
                      />
                    </a>
                    <h4 className="card-title pt-3">
                      <a href="listing-details.html">Beach Blue Boardwalk</a>
                    </h4>
                    <p className="card-sub">
                      <a href="#">
                        <i className="la la-map-marker mr-1 text-color-2"></i>
                        Bishop Avenue, New York
                      </a>
                    </p>
                    <ul className="listing-meta d-flex align-items-center">
                      <li className="d-flex align-items-center">
                        <span className="rate flex-shrink-0">4.7</span>
                        <span className="rate-text">5 Ratings</span>
                      </li>
                      <li>
                        <span
                          className="price-range"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Moderate"
                        >
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-plane mr-1 listing-icon"></i>
                        <a href="#" className="listing-cat-link">
                          Travel
                        </a>
                      </li>
                    </ul>
                    <ul className="info-list padding-top-20px">
                      <li>
                        <span className="la la-link icon"></span>
                        <a href="#"> www.techydevs.com</a>
                      </li>
                      <li>
                        <span className="la la-calendar-check-o icon"></span>
                        Opened 1 month ago
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-item border border-color">
                  <div className="card-image">
                    <a href="listing-details.html" className="d-block">
                      <img
                        src="theme/assets/images/img6.jpg"
                        className="card__img"
                        alt=""
                      />
                      <span className="badge">Now Open</span>
                    </a>
                    <span
                      className="bookmark-btn"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Save"
                    >
                      <i className="la la-bookmark"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <a
                      href="#"
                      className="user-thumb d-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="TechyDevs"
                    >
                      <img
                        src="theme/assets/images/listing-logo3.jpg"
                        alt="author-img"
                      />
                    </a>
                    <h4 className="card-title pt-3">
                      <a href="listing-details.html">Hotel Govendor</a>
                    </h4>
                    <p className="card-sub">
                      <a href="#">
                        <i className="la la-map-marker mr-1 text-color-2"></i>
                        Bishop Avenue, New York
                      </a>
                    </p>
                    <ul className="listing-meta d-flex align-items-center">
                      <li className="d-flex align-items-center">
                        <span className="rate flex-shrink-0">4.7</span>
                        <span className="rate-text">5 Ratings</span>
                      </li>
                      <li>
                        <span
                          className="price-range"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Inexpensive"
                        >
                          <strong className="font-weight-medium">$</strong>
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-hotel mr-1 listing-icon"></i>
                        <a href="#" className="listing-cat-link">
                          Hotels
                        </a>
                      </li>
                    </ul>
                    <ul className="info-list padding-top-20px">
                      <li>
                        <span className="la la-link icon"></span>
                        <a href="#"> www.techydevs.com</a>
                      </li>
                      <li>
                        <span className="la la-calendar-check-o icon"></span>
                        Opened 1 month ago
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-item border border-color">
                  <div className="card-image">
                    <a href="listing-details.html" className="d-block">
                      <img
                        src="theme/assets/images/img7.jpg"
                        className="card__img"
                        alt=""
                      />
                      <span className="badge">now open</span>
                    </a>
                    <span
                      className="bookmark-btn"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Save"
                    >
                      <i className="la la-bookmark"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <a
                      href="#"
                      className="user-thumb d-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="TechyDevs"
                    >
                      <img
                        src="theme/assets/images/anywhere.png"
                        alt="author-img"
                      />
                    </a>
                    <h4 className="card-title pt-3">
                      <a href="listing-details.html">Sticky band party</a>
                      <i
                        className="la la-check-circle ml-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Claimed"
                      ></i>
                    </h4>
                    <p className="card-sub">
                      <a href="#">
                        <i className="la la-map-marker mr-1 text-color-2"></i>
                        Bishop Avenue, New York
                      </a>
                    </p>
                    <ul className="listing-meta d-flex align-items-center">
                      <li className="d-flex align-items-center">
                        <span className="rate flex-shrink-0">4.7</span>
                        <span className="rate-text">5 Ratings</span>
                      </li>
                      <li>
                        <span
                          className="price-range"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Pricey"
                        >
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-music mr-1 listing-icon"></i>
                        <a href="#" className="listing-cat-link">
                          Event
                        </a>
                      </li>
                    </ul>
                    <ul className="info-list padding-top-20px">
                      <li>
                        <span className="la la-link icon"></span>
                        <a href="#"> www.techydevs.com</a>
                      </li>
                      <li>
                        <span className="la la-calendar-check-o icon"></span>
                        Opened 1 month ago
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-item border border-color">
                  <div className="card-image">
                    <a href="listing-details.html" className="d-block">
                      <img
                        src="theme/assets/images/img8.jpg"
                        className="card__img"
                        alt=""
                      />
                      <span className="badge bg-10">closed</span>
                    </a>
                    <span
                      className="bookmark-btn"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Save"
                    >
                      <i className="la la-bookmark"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <a
                      href="#"
                      className="user-thumb d-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="TechyDevs"
                    >
                      <img
                        src="theme/assets/images/sketch.png"
                        alt="author-img"
                      />
                    </a>
                    <h4 className="card-title pt-3">
                      <a href="listing-details.html">
                        Sena clothing shopping mall
                      </a>
                    </h4>
                    <p className="card-sub">
                      <a href="#">
                        <i className="la la-map-marker mr-1 text-color-2"></i>
                        Bishop Avenue, New York
                      </a>
                    </p>
                    <ul className="listing-meta d-flex align-items-center">
                      <li className="d-flex align-items-center">
                        <span className="rate flex-shrink-0">4.7</span>
                        <span className="rate-text">5 Ratings</span>
                      </li>
                      <li>
                        <span
                          className="price-range"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Ultra High"
                        >
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                          <strong className="font-weight-medium">$</strong>
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-shopping-cart mr-1 listing-icon"></i>
                        <a href="#" className="listing-cat-link">
                          Shop
                        </a>
                      </li>
                    </ul>
                    <ul className="info-list padding-top-20px">
                      <li>
                        <span className="la la-link icon"></span>
                        <a href="#"> www.techydevs.com</a>
                      </li>
                      <li>
                        <span className="la la-calendar-check-o icon"></span>
                        Opened 1 month ago
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-item border border-color">
                  <div className="card-image">
                    <a href="listing-details.html" className="d-block">
                      <img
                        src="theme/assets/images/img9.jpg"
                        className="card__img"
                        alt=""
                      />
                      <span className="badge">Now open</span>
                    </a>
                    <span
                      className="bookmark-btn"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Save"
                    >
                      <i className="la la-bookmark"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <a
                      href="#"
                      className="user-thumb d-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="TechyDevs"
                    >
                      <img
                        src="theme/assets/images/fill-sign.png"
                        alt="author-img"
                      />
                    </a>
                    <h4 className="card-title pt-3">
                      <a href="listing-details.html">Hotel Govendor</a>
                    </h4>
                    <p className="card-sub">
                      <a href="#">
                        <i className="la la-map-marker mr-1 text-color-2"></i>
                        Bishop Avenue, New York
                      </a>
                    </p>
                    <ul className="listing-meta d-flex align-items-center">
                      <li className="d-flex align-items-center">
                        <span className="rate flex-shrink-0">4.7</span>
                        <span className="rate-text">5 Ratings</span>
                      </li>
                      <li>
                        <span
                          className="price-range"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Inexpensive"
                        >
                          <strong className="font-weight-medium">$</strong>
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-hotel mr-1 listing-icon"></i>
                        <a href="#" className="listing-cat-link">
                          Hotels
                        </a>
                      </li>
                    </ul>
                    <ul className="info-list padding-top-20px">
                      <li>
                        <span className="la la-link icon"></span>
                        <a href="#"> www.techydevs.com</a>
                      </li>
                      <li>
                        <span className="la la-calendar-check-o icon"></span>
                        Opened 1 month ago
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-block"></div>

      <HowToSection />
      <ArticlesSection />

      <section className="cta-area cta-bg bg-fixed section-padding text-center">
        <div className="overlay opacity-9"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content p-0">
                <div className="section-heading">
                  <div className="section-badge pb-3">
                    <span className="ribbon ribbon-lg">Join with us</span>
                  </div>
                  <h2 className="sec__title mb-4 font-size-45 line-height-60 text-white">
                    Grow Your Marketing With{" "}
                    <span className="text-color-16">Listhub</span> and <br />
                    Be Happy With Your Business.
                  </h2>
                  <p className="sec__desc text-white line-height-35 mb-3">
                    Your business deserves efficiently unleash cross-media
                    information without cross-media value <br />
                    Quickly maximize timely deliverables for real-time schemas.
                  </p>
                </div>
                <div className="btn-box pt-4">
                  <a href="#" className="theme-btn gradient-btn">
                    <i className="la la-user-plus mr-2"></i>Click Me to Start
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
