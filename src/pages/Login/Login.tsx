// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Carousel from "../../components/Login/Carousel";
import { validateLogin } from "../../data/UserData";
import "../../assets/css/login.css";
import { images } from "../../assets/images";

const LOGIN_SLIDES = [
  "Create your own courses",
  "Customize as you like",
  "Invite students to your class",
];

const LOGIN_IMAGES = [
  images.login.l1,
  images.login.l2,
  images.login.l3,
];

/**
 * Login - handles Sign In / Sign Up toggle.
 * On successful sign-in, saves user id to localStorage and navigates to /profile.
 */
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  // Sign-in form state
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInError, setSignInError] = useState("");

  // Sign-up form state
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");

  // Floating-label active state helpers
  const isActive = (value: string) => value.length > 0;

  const toggleMode = () => {
    setIsSignUpMode((prev) => !prev);
    setSignInError("");
    setSignUpError("");
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signInUsername.trim()) {
      setSignInError("Please enter your username.");
      return;
    }
    if (!signInPassword.trim()) {
      setSignInError("Please enter your password.");
      return;
    }

    const user = validateLogin(signInUsername.trim(), signInPassword);
    if (!user) {
      setSignInError("Incorrect username or password.");
      return;
    }

    // Persist logged-in user id
    localStorage.setItem("loggedInUserId", String(user.id));
    navigate("/profile");
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUpName.trim() || !signUpEmail.trim() || !signUpPassword.trim()) {
      setSignUpError("Please fill in all fields.");
      return;
    }
    // Placeholder: registration not wired to backend
    alert("Account created successfully! Please sign in.");
    setIsSignUpMode(false);
  };

  return (
    <section id="main" className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          {/* ── Forms ── */}
          <div className="forms-wrap">
            {/* Sign-In Form */}
            <form
              autoComplete="off"
              className="sign-in-form"
              onSubmit={handleSignIn}
            >
              <div className="logo logo-login">
                <Link to="/">
                  <img src={images.logo.lo1} alt="Logo" />
                </Link>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registered yet? </h6>
                <button type="button" className="toggle" onClick={toggleMode}>
                  Sign up
                </button>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    className={`input-field${isActive(signInUsername) ? " active" : ""}`}
                    autoComplete="off"
                    required
                    value={signInUsername}
                    onChange={(e) => setSignInUsername(e.target.value)}
                  />
                  <label className="contact-f">Username</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    className={`input-field${isActive(signInPassword) ? " active" : ""}`}
                    autoComplete="off"
                    required
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                  />
                  <label className="contact-f">Password</label>
                </div>

                {signInError && (
                  <p
                    style={{
                      color: "#e74c3c",
                      fontSize: "0.8rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {signInError}
                  </p>
                )}

                <input type="submit" value="Sign In" className="sign-btn" />

                <p className="text">
                  Forgotten your password?{" "}
                  <Link to="/forgotPassword">Get Your Password</Link>
                </p>
              </div>
            </form>

            {/* Sign-Up Form */}
            <form
              autoComplete="off"
              className="sign-up-form"
              onSubmit={handleSignUp}
            >
              <div className="logo logo-login">
                <img src={images.logo.lo1} alt="Logo" />
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account? </h6>
                <button type="button" className="toggle" onClick={toggleMode}>
                  Sign in
                </button>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength={4}
                    className={`input-field${isActive(signUpName) ? " active" : ""}`}
                    autoComplete="off"
                    required
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                  />
                  <label className="contact-f">Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className={`input-field${isActive(signUpEmail) ? " active" : ""}`}
                    autoComplete="off"
                    required
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                  />
                  <label className="contact-f">Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength={4}
                    className={`input-field${isActive(signUpPassword) ? " active" : ""}`}
                    autoComplete="off"
                    required
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                  />
                  <label className="contact-f">Password</label>
                </div>

                {signUpError && (
                  <p
                    style={{
                      color: "#e74c3c",
                      fontSize: "0.8rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {signUpError}
                  </p>
                )}

                <input type="submit" value="Sign Up" className="sign-btn" />

                <p className="text">
                  By signing up, I agree to the{" "}
                  <Link to="#">Terms of Services</Link> and{" "}
                  <Link to="#">Privacy Policy</Link>
                </p>
              </div>
            </form>
          </div>

          {/* ── Carousel ── */}
          <Carousel slides={LOGIN_SLIDES} images={LOGIN_IMAGES} />
        </div>
      </div>
    </section>
  );
};

export default Login;
