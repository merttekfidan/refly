import { useState, useEffect } from "react";

function CarFormAttributes({ formData, setFormData, formErrors }) {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    mileage: "",
    transmission: "",
    engine_size: "",
    fuel_type: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setCar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      product_details: {
        ...car,
      },
    }));
  }, [car]);

  return (
    <>
      <div className="col-lg-6">
        <div className="input-box">
          <label className="label-text">Brand</label>
          <div className="form-group user-chosen-select-container">
            <select
              className="user-chosen-select"
              name="brand"
              onChange={onChange}
              value={car.brand}
            >
              <option value="0">Select a Car Brand*</option>
              <option value="Skoda">Skoda</option>
              <option value="Renault">Renault</option>
              <option value="Fiat">Fiat</option>
            </select>
            <p className="error-message">
              {formErrors["product_details.brand"]}
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="input-box">
          <label className="label-text">Model</label>
          <div className="form-group">
            <span className="la la-map form-icon"></span>
            <input
              className="form-control"
              id="model"
              type="text"
              name="model"
              placeholder="Fabia"
              onChange={onChange}
              value={car.model}
            />
            <p className="error-message">
              {formErrors["product_details.model"]}
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="input-box">
          <label className="label-text">Year*</label>
          <div className="form-group">
            <span className="la la-map form-icon"></span>
            <input
              className="form-control"
              type="text"
              name="year"
              placeholder="2017"
              onChange={onChange}
              value={car.year}
            />
            <p className="error-message">
              {formErrors["product_details.year"]}
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="input-box">
          <label className="label-text">Mileage*</label>
          <div className="form-group">
            <span className="la la-map form-icon"></span>
            <input
              className="form-control"
              type="text"
              name="mileage"
              onChange={onChange}
              placeholder="140000"
              value={car.mileage}
            />
          </div>
          <p className="error-message">
            {formErrors["product_details.mileage"]}
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="input-box">
          <label className="label-text">Transmission*</label>
          <div className="form-group user-chosen-select-container">
            <select
              className="user-chosen-select"
              name="transmission"
              onChange={onChange}
              value={car.transmission}
            >
              <option value="0">Select a Transmission</option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
              <option value="tiptronic">Tiptronic</option>
            </select>
            <p className="error-message">
              {formErrors["product_details.transmission"]}
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="input-box">
          <label className="label-text">Engine Size*</label>
          <div className="form-group">
            <span className="la la-map form-icon"></span>
            <input
              className="form-control"
              type="text"
              name="engine_size"
              placeholder="1.4"
              onChange={onChange}
              value={car.engine_size}
            />
          </div>
          <p className="error-message">
            {formErrors["product_details.engine_size"]}
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="input-box">
          <label className="label-text">Fuel Type*</label>
          <div className="form-group user-chosen-select-container">
            <select
              className="user-chosen-select"
              name="fuel_type"
              onChange={onChange}
              value={car.fuel_type}
            >
              <option value="0">Select a Fuel Type</option>
              <option value="benzin">Benzin</option>
              <option value="diesel">Diesel</option>
              <option value="lpg">LPG</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <p className="error-message">
              {formErrors["product_details.fuel_type"]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarFormAttributes;
