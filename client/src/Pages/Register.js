import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import signUpValidation from "./../utils/validations/signUpValidations";
import { register, reset } from "./../redux/authSlice";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
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
    console.log(e.target.name, e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationResult = signUpValidation(formData);
    console.log(validationResult);
    if (Object.keys(validationResult).length === 0) {
      console.log(validationResult);
      dispatch(register(formData));
      console.log(message);
    }
  };
  return (
    <section className="add-listing-area section-padding">
      <div className="container">
        <div className="row flex-column">
          <div className="col-lg-6 mx-auto">
            <div className="modal-body">
              <form method="post" className="form-box" onSubmit={onSubmit}>
                <div className="input-box">
                  <label className="label-text">Username</label>
                  <div className="form-group">
                    <span className="la la-user form-icon"></span>
                    <input
                      className="form-control form-control-styled"
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="input-box">
                  <label className="label-text">Email</label>
                  <div className="form-group">
                    <span className="la la-envelope form-icon"></span>
                    <input
                      className="form-control form-control-styled"
                      type="email"
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
                      type="text"
                      name="password"
                      onChange={onChange}
                      placeholder="Enter password"
                    />
                  </div>
                  <p className="font-size-14 mt-n2">
                    Your password must be at least 6 characters long and must
                    contain letters, numbers and special characters. Cannot
                    contain whitespace.
                  </p>
                </div>
                <div className="input-box py-4 user-action-meta">
                  <div className="custom-checkbox">
                    <input type="checkbox" id="agreeChb" />
                    <label htmlFor="agreeChb" className="font-size-14">
                      By signing up, you agree to our{" "}
                      <a href="privacy-policy.html" className="text-color-2">
                        Privacy Policy.
                      </a>
                    </label>
                  </div>
                </div>
                <div className="btn-box">
                  <button
                    type="submit"
                    className="theme-btn gradient-btn w-100"
                  >
                    <i className="la la-user-plus mr-1"></i> Register Account
                  </button>
                  <p className="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                    Already on Listhub?{" "}
                    <a className="text-color-2 login-btn" href="#">
                      Log in
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
