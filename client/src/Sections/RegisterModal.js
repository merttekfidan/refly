import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { register, reset } from "./../redux/authSlice";
function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;

  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name, e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };
    console.log(userData);
    dispatch(register(userData));
  };
  return (
    <Modal show={props.loginVisible} onHide={() => props.switch()}>
      <Modal.Body>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header align-items-center mh-bg-2">
              <h5 className="modal-title" id="signUpModalTitle">
                Welcome! create your listhub account
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => props.switch()}
              >
                <span aria-hidden="true" className="la la-times-circle"></span>
              </button>
            </div>
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
                <div className="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
                  OR
                </div>
                <div className="text-center">
                  <p className="font-size-15 font-weight-medium">
                    Connect with social network
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
                      <a
                        href="#"
                        className="instagram-bg mx-1"
                        title="Instagram"
                      >
                        <i className="lab la-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="font-size-15 pb-3">
                    Don't worry, we never any post to your social profile.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Register;
