import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
                <Link to="/register">Create account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
