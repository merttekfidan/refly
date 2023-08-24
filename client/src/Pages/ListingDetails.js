import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { getOneOffer } from "./../@@API/offerService";
function ListingDetails() {
  const { offerId } = useParams();
  const [offer, setOffer] = useState({});
  const getOfferFromApi = async (offerId) => {
    try {
      const res = await getOneOffer(offerId);
      setOffer(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getOfferFromApi(offerId);
  }, []);
  return (
    <>
      <section className="breadcrumb-area bg-gradient-gray py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content breadcrumb-content-2 d-flex flex-wrap align-items-end justify-content-between">
                <div className="section-heading">
                  <ul className="list-items bread-list bread-list-2 bg-transparent rounded-0 p-0">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">{offer.category}</a>
                    </li>
                    <li>Super Duper Burgers</li>
                  </ul>
                  <div className="d-flex align-items-center pt-1">
                    <h2 className="sec__title mb-0">{offer.title}</h2>
                    <div className="hover-tooltip-box ml-2 pt-2">
                      <span className="text-color">
                        <i className="la la-check-circle mr-1 text-color-4"></i>
                        Claimed
                      </span>
                      <div className="hover-tooltip">
                        <p>
                          This business has been claimed by the owner or a
                          representative. <a href="#">Learn more</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="sec__desc py-2 font-size-17">
                    <i className="la la-map-marker mr-1 text-color-2"></i>
                    {offer.location && offer.location.voivodeship} -
                    {offer.location && offer.location.city}
                  </p>
                </div>
                <div className="btn-box d-flex align-items-center">
                  <span className="btn-gray mr-2">
                    <i className="la la-eye mr-1"></i>Viewed - 255
                  </span>
                  <span className="btn-gray mr-2">
                    <i className="la la-heart mr-1"></i>Saved - 124
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="listing-detail-area padding-top-60px padding-bottom-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="listing-detail-wrap">
                <div className="card mb-4">
                  <Carousel showArrows={true} showThumbs={true}>
                    {offer.images_url
                      ? offer.images_url.map((e, index) => {
                          return (
                            <div key={index}>
                              <img src={`/img/listings/${e}`} />
                            </div>
                          );
                        })
                      : ""}
                  </Carousel>
                </div>

                <div className="block-card mb-4">
                  <div className="block-card-header">
                    <h2 className="widget-title">Availabilities</h2>
                    <div className="stroke-shape"></div>
                  </div>

                  <div className="block-card-body">
                    <div className="info-list-box">
                      <ul className="row info-list">
                        {offer.availability
                          ? offer.availability.map((e, index) => {
                              return (
                                <li className="col-lg-6" key={index}>
                                  <i className="la la-check mr-2 text-color-4"></i>
                                  {e}
                                </li>
                              );
                            })
                          : ""}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="block-card mb-4">
                  <div className="block-card-header">
                    <h2 className="widget-title">Product Details</h2>
                    <div className="stroke-shape"></div>
                  </div>
                  <div className="block-card-body">
                    <div className="review-content d-flex flex-wrap align-items-center">
                      <div className="review-bars d-flex flex-row flex-wrap flex-grow-1 align-items-center">
                        <div className="review-bars-item d-flex justify-content-between">
                          <span className="review-bars-name">Service</span>
                          <span className="review-bars-name">Service</span>
                        </div>
                        <div className="review-bars-item">
                          <span className="review-bars-name">
                            Value for Money
                          </span>
                          <div className="review-bars-inner d-flex w-100 align-items-center">
                            <span className="review-bars-review">
                              <span className="review-bars-review-inner"></span>
                            </span>
                            <span className="pill">4.0</span>
                          </div>
                        </div>
                        <div className="review-bars-item">
                          <span className="review-bars-name">Quality</span>
                          <div className="review-bars-inner d-flex w-100 align-items-center">
                            <span className="review-bars-review">
                              <span className="review-bars-review-inner"></span>
                            </span>
                            <span className="pill">2.8</span>
                          </div>
                        </div>
                        <div className="review-bars-item">
                          <span className="review-bars-name">Location</span>
                          <div className="review-bars-inner d-flex w-100 align-items-center">
                            <span className="review-bars-review">
                              <span className="review-bars-review-inner"></span>
                            </span>
                            <span className="pill">3.9</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-card mb-4">
                  <div className="block-card-header">
                    <h2 className="widget-title">Listing Description</h2>
                    <div className="stroke-shape"></div>
                  </div>
                  <div className="block-card-body">
                    <p className="pb-3 font-weight-medium line-height-30">
                      {offer.description}
                    </p>
                    <div
                      className="collapse collapse-content"
                      id="showMoreOptionCollapse"
                    >
                      <p className="font-weight-medium line-height-30 pb-3">
                        Porpoise uncritical gosh and much and this haughtily
                        broadcast goodness ponderous squid darn in sheepish yet
                        the slapped mildly and adventurously sincere less
                        dalmatian assentingly wherever left ethereal the
                        underneath oh lustily arduously that a groggily some
                        vexedly broadcast sheepish yet the slapped.
                      </p>
                    </div>
                    <a
                      className="collapse-btn"
                      href="#showMoreOptionCollapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="showMoreOptionCollapse"
                    >
                      <span className="collapse-btn-hide">
                        Read More <i className="la la-plus ml-1"></i>
                      </span>
                      <span className="collapse-btn-show">
                        Read Less <i className="la la-minus ml-1"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar mb-0">
                <div className="sidebar-widget">
                  <h3 className="widget-title">General Information</h3>
                  <div className="stroke-shape mb-4"></div>
                  <ul className="list-items list-items-style-2">
                    <li>
                      <i className="la la-external-link mr-2 text-color-2 font-size-18"></i>
                      <a href="#">www.techydevs.com</a>
                    </li>
                    <li>
                      <i className="la la-phone mr-2 text-color-2 font-size-18"></i>
                      <a href="#">+(0) 880 222 4465</a>
                    </li>
                    <li>
                      <i className="la la-map-signs mr-2 text-color-2 font-size-18"></i>
                      <a href="#">Get Directions</a>
                    </li>
                    <li>
                      <i className="la la-cutlery mr-2 text-color-2 font-size-18"></i>
                      <a href="#">
                        Full menu <i className="la la-external-link ml-1"></i>
                      </a>
                    </li>
                    <li>
                      <i className="la la-comment mr-2 text-color-2 font-size-18"></i>
                      <a href="#">Message the Business</a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3 className="widget-title">Follow & Connect</h3>
                  <div className="stroke-shape mb-4"></div>
                  <div className="icon-block-wrap d-flex flex-wrap align-items-center ml-n1">
                    <a
                      href="#"
                      className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2"
                    >
                      <span className="icon-element icon-element-sm f-bg-rgb">
                        <i className="la la-facebook"></i>
                      </span>
                      <div className="pl-2 flex-grow-1">
                        <span className="text-color font-weight-bold font-size-17 d-block line-height-20">
                          9,809
                        </span>
                        <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">
                          Followers
                        </span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2"
                    >
                      <span className="icon-element icon-element-sm t-bg-rgb">
                        <i className="la la-twitter"></i>
                      </span>
                      <div className="pl-2 flex-grow-1">
                        <span className="text-color font-weight-bold font-size-17 d-block line-height-20">
                          789
                        </span>
                        <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">
                          Followers
                        </span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2"
                    >
                      <span className="icon-element icon-element-sm i-bg-rgb">
                        <i className="la la-instagram"></i>
                      </span>
                      <div className="pl-2 flex-grow-1">
                        <span className="text-color font-weight-bold font-size-17 d-block line-height-20">
                          12,809
                        </span>
                        <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">
                          Followers
                        </span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2"
                    >
                      <span className="icon-element icon-element-sm y-bg-rgb">
                        <i className="la la-youtube"></i>
                      </span>
                      <div className="pl-2 flex-grow-1">
                        <span className="text-color font-weight-bold font-size-17 d-block line-height-20">
                          20,876
                        </span>
                        <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">
                          Subscriber
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-area bg-gradient-gray section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2 className="sec__title font-size-24 line-height-30">
                  People Also Viewed
                </h2>
              </div>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-lg-12">
              <div className="card-carousel owl-trigger-action">
                <div className="card-item border border-color">
                  <div className="card-image">
                    <a href="listing-details.html" className="d-block">
                      <img
                        src="/img/listings/1691520520582-1.jpeg"
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
                      title="TechyDevs"
                    >
                      <img
                        src="/img/listings/1691520520582-1.jpeg"
                        alt="author-img"
                      />
                    </a>
                    <h4 className="card-title pt-3">
                      <a href="listing-details.html">
                        Favorite Place Food Bank
                      </a>
                      <i
                        className="la la-check-circle ml-1"
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
                        <span className="price-range" title="Pricey">
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
                        src="/img/listings/1691520520582-1.jpeg"
                        className="card__img"
                        alt=""
                      />
                      <span className="badge bg-10">closed</span>
                    </a>
                    <span className="bookmark-btn" title="Save">
                      <i className="la la-bookmark"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <a
                      href="#"
                      className="user-thumb d-inline-block"
                      title="TechyDevs"
                    >
                      <img
                        src="/img/listings/1691520520582-1.jpeg"
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
                        <span className="price-range" title="Moderate">
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
                        src="/img/listings/1691520520582-1.jpeg"
                        className="card__img"
                        alt=""
                      />
                      <span className="badge">Now Open</span>
                    </a>
                    <span className="bookmark-btn" title="Save">
                      <i className="la la-bookmark"></i>
                    </span>
                  </div>
                  <div className="card-content">
                    <a
                      href="#"
                      className="user-thumb d-inline-block"
                      title="TechyDevs"
                    >
                      <img
                        src="/img/listings/1691520520582-1.jpeg"
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
                        <span className="price-range" title="Inexpensive">
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
                        src="/img/listings/1691520520582-1.jpeg"
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
                      title="TechyDevs"
                    >
                      <img
                        src="/img/listings/1691520520582-1.jpeg"
                        alt="author-img"
                      />
                    </a>
                    <h4 className="card-title pt-3">
                      <a href="listing-details.html">Sticky band party</a>
                      <i
                        className="la la-check-circle ml-1"
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
                        <span className="price-range" title="Pricey">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListingDetails;
