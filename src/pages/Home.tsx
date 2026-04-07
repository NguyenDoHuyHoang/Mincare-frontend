import HeroCarousel from "../components/home/heroCarousel";
import Introduction from "../components/home/Introduction";
import TeamSection from "../components/home/TeamSection";
import { teamMembers } from "../data/TeamMember";
import CouuseSection from "../components/home/CourseSection";
import { courses } from "../data/CourseData";
import BookSection from "../components/home/BookSection";
import { books } from "../data/BookData";
import BlogPostSection from "../components/home/BlogSection";
import { blogs } from "../data/Blog";
import TestimonialSection from "../components/home/TestimonialSection";
import { testimonials } from "../data/Testimonial";

import "../assets/css/styles.css";
import { images } from "../assets/images";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Introduction />
      <TeamSection teamMembers={teamMembers} itemsPerPage={3} />
      <CouuseSection courses={courses} itemsPerPage={3} />
      <BookSection books={books} itemsPerPage={3} />

      <section className="guarantee">
        <div className="container">
          <img
            src={images.guarantee}
            alt="Guarantee Logo"
            className="guarantee-logo"
          />
          <p>
            We are dedicated to delivering the finest experiences through
            high‑quality services.
          </p>
          <p>
            With our unwavering commitment, your satisfaction is always
            guaranteed.
          </p>
        </div>
      </section>

      <TestimonialSection testimonials={testimonials} />

      <section className="benefits">
        <div className="container">
          <div
            className="benefits-bg"
            style={{ backgroundImage: `url(${images.hero.h3})` }}
          />
          <div className="benefits-content">
            <h2 className="benefits-title">Benefits for Subscribers</h2>
            <div className="benefits-list">
              <ul className="benefits-left">
                <ul>
                  <li>Access to professional coaching courses</li>
                  <li>Personalized support from expert coaches</li>
                  <li>Active learner community with mutual support</li>
                  <li>Free resources and tools for self‑development</li>
                </ul>
                <ul className="benefits-right">
                  <li>Special discounts on products and services</li>
                  <li>Regular updates on the latest coaching trends</li>
                  <li>Recognized course completion certificates</li>
                  <li>24/7 support via email and live chat</li>
                </ul>
              </ul>
            </div>
            <a href="register.html" className="benefits-btn">
              Join Us
            </a>
          </div>
        </div>
      </section>

      <BlogPostSection blogs={blogs} itemsPerPage={4} />
    </>
  );
};

export default Home;
