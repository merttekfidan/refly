import Moment from "moment";
import CarCard from "./ProductAttrViews/Cards/CarCard";
import MotorcycleCard from "./ProductAttrViews/Cards/MotorcycleCard";

function OfferCard({ data }) {
  const productAttributes = (category) => {
    switch (data.category) {
      case "Car":
        return <CarCard data={data} />;
      case "Motorcycle":
        return <MotorcycleCard data={data} />;
      default:
        return "";
    }
  };
  return (
    <>
      <div className="card-item border border-color">
        <div className="card-image">
          <a href={`/listing-details/${data._id}`} className="d-block">
            <img
              src={
                data.images_url[0]
                  ? `/img/listings/${data.images_url[0]}`
                  : "/theme/assets/images/no-image.jpeg"
              }
              className="card__img"
              alt=""
            />
            <span className="badge">{data.offer_type}</span>
          </a>
        </div>
        <div className="card-content">
          <h6 className="text-muted pb-2">{data.category}</h6>
          <span className="d-flex align-items-center justify-content-between pt-0">
            <h4 className="card-title">
              <a href="listing-details.html">{data.title}</a>
              <i className="la la-check-circle ml-1" title="Claimed"></i>
            </h4>
          </span>
          <p className="card-sub">
            <a href="/#">
              <i className="la la-map-marker mr-1 text-color-2"></i>
              {data.location && data.location.city && data.location.city}/
              {data.location.voivodeship && data.location.voivodeship}
            </a>
          </p>
          <hr />
          {productAttributes(data.category)}
          <hr />
          <div className="row ">
            <div className="col listing-meta pt-0">
              <i className="la mr-1 listing-icon la-money-bill-wave"></i>
              {data.price} zł
            </div>
            <div className="col listing-meta pt-0">
              <span className="la listing-icon la-calendar-check-o icon"></span>
              {Moment(data.createdAt).format("DD MM YYYY")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferCard;
