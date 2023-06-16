import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function LoginModal(props) {
  return (
    <Modal show={props.loginVisible} onHide={() => props.switch()}>
      <Modal.Body>
        <div className="modal-header align-items-center mh-bg">
          <h5 className="modal-title" id="loginModalTitle">
            Hey, Welcome back!
          </h5>
          <button
            onClick={() => props.switch()}
            type="button"
            className="close"
          >
            <span aria-hidden="true" className="la la-times-circle"></span>
          </button>
        </div>
        <div className="modal-body">
          <form method="post" className="form-box">
            <div className="input-box">
              <label className="label-text">Username or email</label>
              <div className="form-group">
                <span className="la la-user form-icon"></span>
                <input
                  className="form-control form-control-styled"
                  type="text"
                  name="text"
                  placeholder="Username or email address"
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
                  name="text"
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
              <button type="submit" className="theme-btn gradient-btn w-100">
                <i className="la la-sign-in mr-1"></i> Login to Account
              </button>
              <p className="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                New to Listhub?{" "}
                <a className="text-color-2 signup-btn" href="#">
                  Create account
                </a>
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
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
