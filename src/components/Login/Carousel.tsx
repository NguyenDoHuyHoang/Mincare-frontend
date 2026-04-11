import { useState, useEffect } from "react";
import { images } from "../../assets/images";
import "../../assets/css/login.css";

const slides = [
  { id: 1, img: images.login.l1, text: "Create your own courses" },
  { id: 2, img: images.login.l2, text: "Customize as you like" },
  { id: 3, img: images.login.l3, text: "Invite students to your class" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const textSlider = document.querySelector(".text-group") as HTMLElement;
    if (textSlider) {
      textSlider.style.transform = `translateY(${-(currentIndex - 1) * 2.2}rem)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="images-wrapper">
        {slides.map(slide => (
          <img
            key={slide.id}
            src={slide.img}
            className={`image img-${slide.id} ${currentIndex === slide.id ? "show" : ""}`}
            alt=""
          />
        ))}
      </div>

      <div className="text-slider">
        <div className="text-wrap">
          <div className="text-group">
            {slides.map(slide => <h2 key={slide.id}>{slide.text}</h2>)}
          </div>
        </div>

        <div className="bullets">
          {slides.map(slide => (
            <span
              key={slide.id}
              className={currentIndex === slide.id ? "active" : ""}
              data-value={slide.id}
              onClick={() => setCurrentIndex(slide.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}