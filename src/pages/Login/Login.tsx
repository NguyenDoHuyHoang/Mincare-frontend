import { useState } from "react";
import SignInForm from "../../components/Login/SignInForm";
import SignUpForm from "../../components/Login/SignUpForm";
import Carousel from "../../components/Login/Carousel";
import "../../assets/css/login.css";

export default function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    <section id="main">
      <div className="box">
      <div className={`inner-box ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-wrap">
          <SignInForm toggleToSignUp={() => setIsSignUpMode(true)} />
          <SignUpForm toggleToSignIn={() => setIsSignUpMode(false)} />
        </div>
        <Carousel />
      </div>
    </div>
    </section>
  );
}