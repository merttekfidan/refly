import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout, reset } from "./../../redux/authSlice";

function HeaderTopbar() {
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <>
      <div className="header-top-bar bg-dark-opacity py-2 padding-right-30px padding-left-30px">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center header-top-info font-size-14 font-weight-medium">
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
            <div className="col-lg-6 d-flex align-items-center justify-content-end header-top-info">
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
                    <span className="mr-1 la la-sign-in"></span>
                    <Link to="login">Login</Link>

                    <span className="or-text px-2">or</span>
                    <span className="mr-1 la la-user-plus"></span>
                    <Link to="register">Register</Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTopbar;
