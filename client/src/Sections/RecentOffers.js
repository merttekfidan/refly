import { useState, useEffect } from "react";
import OfferCard from "../Components/OfferCard";
import { getRecentOffers } from "./../@@API/viewService";
function RecentOffers() {
  const [offers, setOffers] = useState("");
  const apiToState = async () => {
    try {
      const res = await getRecentOffers();
      setOffers(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiToState();
  }, []);
  return (
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
                consequat libero, <br />a feugiat eros. Nunc ut lacinia tortors.
              </p>
            </div>
          </div>
        </div>
        <div className="row padding-top-60px">
          <div className="col-lg-12">
            <div className="card-carousel-2 owl-trigger-action">
              {offers.data
                ? offers.data.map((e, key) => <OfferCard key={key} data={e} />)
                : "No Offers Found"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentOffers;
