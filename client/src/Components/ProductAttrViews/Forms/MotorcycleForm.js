function MotorcycleForm({ formData, setFormData }) {
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
              value={
                formData.product_details.year
                  ? formData.product_details.year
                  : ""
              }
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
              value={
                formData.product_details.mileage
                  ? formData.product_details.mileage
                  : ""
              }
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
              value={
                formData.product_details.transmission
                  ? formData.product_details.transmission
                  : ""
              }
            >
              <option value="0">Select a Transmission</option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </select>
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
              value={
                formData.product_details.fuel_type
                  ? formData.product_details.type
                  : ""
              }
            >
              <option value="0">Select a Fuel Type</option>
              <option value="benzin">Benzin</option>
              <option value="electric">Electric</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default MotorcycleForm;
