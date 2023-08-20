import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../redux/authSlice";
function Login() {
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/", { replace: true });
    }
  }, [isSuccess]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };

  const loginHandle = async (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log(formData);
  };
  return (
    <section className="add-listing-area section-padding">
      <div className="container">
        <div className="row flex-column">
          <div className="col-lg-6 mx-auto">
            <form method="post" className="form-box" onSubmit={loginHandle}>
              <div className="input-box">
                <label className="label-text">Email</label>
                <div className="form-group">
                  <span className="la la-user form-icon"></span>
                  <input
                    className="form-control form-control-styled"
                    type="text"
                    name="email"
                    onChange={onChange}
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="input-box">
                <label className="label-text">Password</label>
                <div className="form-group">
                  <span className="la la-lock form-icon"></span>
                  <input
                    className="form-control form-control-styled"
                    type="passowrd"
                    name="password"
                    onChange={onChange}
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div className="input-box d-flex align-items-center justify-content-between pb-4 user-action-meta">
                <div className="custom-checkbox">
                  <input type="checkbox" id="keepMeSignedChb" />
                  <label htmlFor="keepMeSignedChb" className="font-size-14">
                    Keep me signed in
                  </label>
                </div>
                <a
                  href="#"
                  className="margin-bottom-10px lost-pass-btn font-size-14"
                >
                  Lost Password?
                </a>
              </div>
              <div className="btn-box">
                <button
                  // onClick={loginHandle}
                  type="submit"
                  className="theme-btn gradient-btn w-100"
                >
                  <i className="la la-sign-in mr-1"></i> Login to Account
                </button>
              </div>
            </form>
            <div className="btn-box">
              <p className="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                New to Listhub?
                <button
                  style={{ border: 0, backgroundColor: "transparent" }}
                  className="text-color-2 signup-btn"
                >
                  Create account
                </button>
              </p>
            </div>
            <div className="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
              OR
            </div>
            <div className="text-center">
              <p className="font-size-15 font-weight-medium">
                Login with your social network
              </p>
              <ul className="social-profile social-profile-colored py-3">
                <li>
                  <a href="#" className="google-bg mx-1" title="Google">
                    <i className="lab la-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook-bg mx-1" title="Facebook">
                    <i className="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter-bg mx-1" title="Twitter">
                    <i className="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram-bg mx-1" title="Instagram">
                    <i className="lab la-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
