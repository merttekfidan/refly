import { Link } from "react-router-dom";

function AddedSuccessfully() {
  return (
    <section className="booking-confirm-area section-padding position-relative">
      <span className="circle-bg circle-bg-1 position-absolute"></span>
      <span className="circle-bg circle-bg-2 position-absolute"></span>
      <span className="circle-bg circle-bg-3 position-absolute"></span>
      <span className="circle-bg circle-bg-4 position-absolute"></span>
      <span className="circle-bg circle-bg-5 position-absolute"></span>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="booking-confirm-content text-center">
              <i className="la la-check-circle-o font-size-90 text-success"></i>
              <div className="section-heading pt-3">
                <h2 className="sec__title mb-2">
                  Thank you. Your offer has been added.
                </h2>
                <p className="sec__desc">
                  We'll check your offer and publish as soon as possible
                </p>
              </div>
              <div className="btn-box padding-top-30px">
                <Link to="/" className="btn-gray btn-gray-lg px-4">
                  Go to Homepage <i className="la la-arrow-right ml-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddedSuccessfully;
