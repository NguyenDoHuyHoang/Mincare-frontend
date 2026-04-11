import ForgotPasswordForm from "../../components/Login/ForgotPasswordForm";
import Carousel from "../../components/Login/Carousel";
import "../../assets/css/login.css";

export default function ForgotPassword() {
  return (    
    <div className="box">
      <div className="inner-box">
        <div className="forms-wrap">
          <ForgotPasswordForm />
        </div>
        <Carousel />
      </div>
    </div>
  );
}
