import "../../assets/css/styles.css";
import { images } from "../../assets/images";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div>
            <div>
              <img src={images.logo.lo1} />
              <p>MindCare will take care of your mind - Leading your life</p>

              {/*Link to outside web */}

              <nav>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </nav>

            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/coaching">Coaching</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4>More</h4>
              <ul>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/terms-and-conditions">Terms &amp; Conditions</NavLink>
                </li>
                <li>
                  <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/sitemap">Sitemap</NavLink>
                </li>
                <li>
                  <NavLink to="/code-of-conduct">Code of Conduct</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4>Get in Touch</h4>
              <p>
                <i className="uil uil-envelope-open" /> <span>Email:</span>{" "}
                mindcare@gmail.com
              </p>
              <p>
                <i className="uil uil-store-alt" /> <span>Business Hour:</span>{" "}
                Monday - Friday: 9:00 AM - 6:00 PM (EST), Saturday - Sunday:
                Closed
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
