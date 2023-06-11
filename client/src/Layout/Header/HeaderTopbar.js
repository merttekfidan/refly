function HeaderTopbar() {
  return (
    <>
      <div className="header-top-bar bg-dark-opacity py-2 padding-right-30px padding-left-30px">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center header-top-info font-size-14 font-weight-medium">
              <p className="login-and-signup-wrap">
                <a href="#" data-toggle="modal" data-target="#loginModal">
                  <span className="mr-1 la la-sign-in"></span>Login
                </a>
                <span className="or-text px-2">or</span>
                <a href="#" data-toggle="modal" data-target="#signUpModal">
                  <span className="mr-1 la la-user-plus"></span>Sign Up
                </a>
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end header-top-info">
              <span className="mr-2 text-white font-weight-semi-bold font-size-14">
                Follow Listhub on:
              </span>
              <ul className="social-profile social-profile-colored">
                <li>
                  <a href="#" className="facebook-bg">
                    <i className="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter-bg">
                    <i className="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram-bg">
                    <i className="lab la-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTopbar;
