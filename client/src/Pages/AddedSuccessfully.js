import { Link } from "react-router-dom";

function AddedSuccessfully() {
  return (
    <section class="booking-confirm-area section-padding position-relative">
      <span class="circle-bg circle-bg-1 position-absolute"></span>
      <span class="circle-bg circle-bg-2 position-absolute"></span>
      <span class="circle-bg circle-bg-3 position-absolute"></span>
      <span class="circle-bg circle-bg-4 position-absolute"></span>
      <span class="circle-bg circle-bg-5 position-absolute"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="booking-confirm-content text-center">
              <i class="la la-check-circle-o font-size-90 text-success"></i>
              <div class="section-heading pt-3">
                <h2 class="sec__title mb-2">
                  Thank you. Your offer has been added.
                </h2>
                <p class="sec__desc">
                  We'll check your offer and publish as soon as possible
                </p>
              </div>
              <div class="btn-box padding-top-30px">
                <Link to="/" class="btn-gray btn-gray-lg px-4">
                  Go to Homepage <i class="la la-arrow-right ml-1"></i>
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
