function CarCard({ data }) {
  /*
    CAR
        Car 1
        Kraków, Poland
        ADDED ON APRIL 15, 2023
        Year : 1996
        Mileage: 10,000 km
        Brand: BMW
        Modal: Modal 2
        Price: 12,000zł
        Diesel
 */
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

export default CarCard;
