import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginModal from "./../../Sections/LoginModal";
import RegisterModal from "./../../Sections/RegisterModal";
import { logout, reset } from "./../../redux/authSlice";

function HeaderTopbar() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };
  useEffect(() => {
    if (isSuccess) {
      setLoginVisible(false);
      setRegisterVisible(false);
    }
  }, [user, isSuccess, isError, message, isLoading]);

  return (
    <>
      <div className="header-top-bar bg-dark-opacity py-2 padding-right-30px padding-left-30px">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center header-top-info font-size-14 font-weight-medium">
              {user ? (
                <>
                  Welcome {user.data.username}
                  <a href="#" onClick={onLogout}>
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <p className="login-and-signup-wrap">
                    <a onClick={() => setLoginVisible(true)} href="#">
                      <span className="mr-1 la la-sign-in"></span>Login
                    </a>
                    <span className="or-text px-2">or</span>
                    <a onClick={() => setRegisterVisible(true)} href="#">
                      <span className="mr-1 la la-user-plus"></span>Sign Up
                    </a>
                  </p>
                </>
              )}
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
      {loginVisible && <LoginModal loginVisible switch={setLoginVisible} />}
      {registerVisible && (
        <RegisterModal registerVisible switch={setRegisterVisible} />
      )}
    </>
  );
}

export default HeaderTopbar;
