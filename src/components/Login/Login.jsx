import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import "./Login.scss";
import { Link } from "react-router-dom";

////////// Log in Design Start ///////////

const Login = () => {
  return (
    <>
      <div className="twitter-area">
        <div className="twitter-container">
          <div className="twitter-left">
            <div className="logo">
              <img
                src="https://www.talentedladiesclub.com/site/wp-content/uploads/Twitter-X-logo-2023.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="twitter-right">
            <div className="header">
              <h1>Happening now</h1>
              <h2>Join today.</h2>
            </div>
            <div className="login-btn">
              <span>
                <FcGoogle />
              </span>
              <p>Sign up with Google</p>
            </div>
            <div className="apple-btn">
              <div className="login-btn">
                <span>
                  <FaApple />
                </span>
                <p>Sign up with Apple</p>
              </div>
            </div>
            <div className="divider">
              <div className="divider-left"></div>
              or
              <div className="divider-right"></div>
            </div>
            <div className="create-account">
              <div className="login-btn">
                <Link to="/sign-up">Create account</Link>
              </div>
              <p>
                By signing up, you agree to the{" "}
                <Link to="">Terms of Service</Link> and{" "}
                <Link to="">Privacy Policy</Link>, including{" "}
                <Link to=""> Cookie Use.</Link>
              </p>
            </div>
            <div className="sign-in">
              <h4>Already have an account?</h4>
              <div className="login-btn">
                <Link to="">Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
