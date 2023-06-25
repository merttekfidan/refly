function MotorcycleCard({ data }) {
  return (
    <>
      <div className="row">
        <div className="col">
          <h6 className="text-muted">Year:</h6> {data.product.year}
        </div>
        <div className="col">
          <h6 className="text-muted">Fuel Type:</h6> {data.product.fuel_type}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6 className="text-muted pt-3">Mileage:</h6> {data.product.mileage}
          00 km
        </div>
        <div className="col">
          <h6 className="text-muted pt-3">Transmission:</h6>
          {data.product.transmission}
        </div>
      </div>
    </>
  );
}

export default MotorcycleCard;
