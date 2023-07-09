function CarFormAttributes({ formData, setFormData }) {
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      product_details: {
        ...prevState.product_details,
        [e.target.name]: e.target.value,
      },
    }));
  };

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
              value={
                formData.product_details.brand
                  ? formData.product_details.brand
                  : 0
              }
            >
              <option value="0">Select a Car Brand</option>
              <option value="Skoda">Skoda</option>
              <option value="Renault">Renault</option>
              <option value="Fiat">Fiat</option>
            </select>
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
              value={
                formData.product_details.model
                  ? formData.product_details.model
                  : ""
              }
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="input-box">
          <label className="label-text">Year</label>
          <div className="form-group">
            <span className="la la-map form-icon"></span>
            <input
              className="form-control"
              type="text"
              name="year"
              placeholder="2017"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="input-box">
          <label className="label-text">Mileage</label>
          <div className="form-group">
            <span className="la la-map form-icon"></span>
            <input
              className="form-control"
              type="text"
              name="mileage"
              onChange={onChange}
              placeholder="140000"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="input-box">
          <label className="label-text">Transmission</label>
          <div className="form-group user-chosen-select-container">
            <select
              className="user-chosen-select"
              name="transmission"
              onChange={onChange}
            >
              <option value="0">Select a Transmission</option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
              <option value="tiptronic">Tiptronic</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="input-box">
          <label className="label-text">Engine Size</label>
          <div className="form-group">
            <span className="la la-map form-icon"></span>
            <input
              className="form-control"
              type="text"
              name="engine_size"
              placeholder="1.4"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="input-box">
          <label className="label-text">Fuel Type</label>
          <div className="form-group user-chosen-select-container">
            <select
              className="user-chosen-select"
              name="fuel_type"
              onChange={onChange}
            >
              <option value="0">Select a Fuel Type</option>
              <option value="benzin">Benzin</option>
              <option value="diesel">Diesel</option>
              <option value="lpg">LPG</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarFormAttributes;
