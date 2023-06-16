import { useState } from "react";
import LoginModal from "./../../Sections/LoginModal";
import RegisterModal from "./../../Sections/RegisterModal";

function HeaderTopbar() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const switchLoginVisible = () => {
    setLoginVisible(!loginVisible);
  };
  const switchRegisterVisible = () => {
    setRegisterVisible(!registerVisible);
  };
  return (
    <>
      <div className="header-top-bar bg-dark-opacity py-2 padding-right-30px padding-left-30px">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center header-top-info font-size-14 font-weight-medium">
              <p className="login-and-signup-wrap">
                <a onClick={switchLoginVisible} href="#">
                  <span className="mr-1 la la-sign-in"></span>Login
                </a>
                <span className="or-text px-2">or</span>
                <a onClick={switchRegisterVisible} href="#">
                  <span className="mr-1 la la-user-plus"></span>Sign Up
                </a>
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end header-top-info">
              <span className="mr-2 text-white font-weight-semi-bold font-size-14">
                Follow Refly on:
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
      {loginVisible && <LoginModal loginVisible switch={switchLoginVisible} />}
      {registerVisible && (
        <RegisterModal loginVisible switch={switchRegisterVisible} />
      )}
    </>
  );
}

export default HeaderTopbar;
