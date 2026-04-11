// Page: CourseDetail
// Route: /courses/:id
// Fetches a course by id from CourseData.
// Chapters are fetched separately from CourseChapterData using getChaptersByCourseId().
// Renders rich content using contentBlock[] — same pattern as BlogDetail and BookDetail.
// Includes: breadcrumb, product info, quantity, add-to-cart, description, chapters accordion, related courses.

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../../../data/CourseData";
import { getChaptersByCourseId } from "../../../data/CourseChapterData";
import { useShoppingCart } from "../../../utilis/cart/useCart";
import "../../../assets/css/course-detail.css";

// ── Helpers ──────────────────────────────────────────────────────────────────

// Calculates the discount percentage between original and current price
const calcDiscountPercent = (original: number, current: number): number =>
  Math.round(((original - current) / original) * 100);

// Renders filled star icons based on a 1–5 rating
const renderStars = (rating: number) =>
  Array.from({ length: 5 }, (_, idx) => (
    <i
      key={idx}
      className={
        idx < Math.floor(rating) ? "fas fa-star" : "fas fa-star-half-alt"
      }
      style={{ color: "#ffc107" }}
    />
  ));

// ── Component ─────────────────────────────────────────────────────────────────

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem, openCart } = useShoppingCart();

  const [quantity, setQuantity] = useState(1);

  // Track which chapter accordion panel is open (-1 = none)
  const [openChapterIndex, setOpenChapterIndex] = useState<number>(-1);

  // Find the course matching the URL param
  const course = courses.find((c) => c.id === Number(id));

  // Chapters for this specific course — fetched from separate data source
  const chapters = course ? getChaptersByCourseId(course.id) : [];

  // Related courses: up to 4 excluding the current one
  const relatedCourses = courses.filter((c) => c.id !== Number(id)).slice(0, 4);

  // Not found guard
  if (!course) {
    return (
      <div style={{ textAlign: "center", padding: "120px 20px" }}>
        <h2 style={{ marginBottom: 16 }}>Course not found</h2>
        <Link to="/courses" style={{ color: "#065e06", fontWeight: 600 }}>
          ← Back to Courses
        </Link>
      </div>
    );
  }

  const discountPercent = calcDiscountPercent(
    course.originalPrice,
    course.price,
  );

  // Quantity controls — clamped between 1 and 10
  const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 10));
  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        title: course.name,
        price: `$${course.price.toFixed(2)}`,
        image: course.image,
      });
    }
    openCart();
  };

  // Toggle chapter accordion — clicking the same chapter again closes it
  const toggleChapter = (idx: number) =>
    setOpenChapterIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <>
      {/* ── Breadcrumb ───────────────────────────────────────────── */}
      <section className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/shopping">Shop</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {course.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ── Product info ─────────────────────────────────────────── */}
      <section className="product-detail-section">
        <div className="container">
          <div className="row">
            {/* Course cover image */}
            <div className="col-md-6">
              <div className="product-gallery">
                <div className="main-image">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div className="col-md-6">
              <div className="product-info">
                <h1 className="product-title">{course.name}</h1>

                {/* Star rating */}
                <div className="product-rating">
                  {renderStars(course.rating)}
                  <span className="rating-text">({course.rating}/5)</span>
                </div>

                {/* Price + discount */}
                <div className="product-price">
                  <span className="current-price">
                    ${course.price.toFixed(2)}
                  </span>
                  <span className="original-price">
                    ${course.originalPrice.toFixed(2)}
                  </span>
                  <span className="discount-badge">-{discountPercent}%</span>
                </div>

                {/* Meta info */}
                <div className="product-meta">
                  {course.instructor && (
                    <div className="meta-item">
                      <strong>Instructor</strong>
                      <span>{course.instructor}</span>
                    </div>
                  )}
                  <div className="meta-item">
                    <strong>Access</strong>
                    <span>{course.duration}</span>
                  </div>
                  {course.lessonCount && (
                    <div className="meta-item">
                      <strong>Lessons</strong>
                      <span>{course.lessonCount} lessons</span>
                    </div>
                  )}
                  {chapters.length > 0 && (
                    <div className="meta-item">
                      <strong>Chapters</strong>
                      <span>{chapters.length} chapters</span>
                    </div>
                  )}
                  {course.level && (
                    <div className="meta-item">
                      <strong>Level</strong>
                      <span>{course.level}</span>
                    </div>
                  )}
                  {course.language && (
                    <div className="meta-item">
                      <strong>Language</strong>
                      <span>{course.language}</span>
                    </div>
                  )}
                </div>

                {/* Quantity selector */}
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={decreaseQuantity}>
                      −
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      min={1}
                      max={10}
                      readOnly
                    />
                    <button className="quantity-btn" onClick={increaseQuantity}>
                      +
                    </button>
                  </div>
                </div>

                {/* Add to cart */}
                <div className="action-buttons">
                  <button
                    className="add-to-cart-btn-v2"
                    onClick={handleAddToCart}
                  >
                    <i
                      className="fas fa-shopping-cart"
                      style={{ marginRight: 8 }}
                    />
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rich description (contentBlock) ──────────────────────── */}
      <div className="container">
        <section className="product-description-section">
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              marginBottom: 24,
              color: "#333",
            }}
          >
            About This Course
          </h2>
          <div className="description-content">
            <div className="description-text">
              {course.contentBlock?.map((block, idx) => {
                if (block.type === "paragraph")
                  return <p key={idx}>{block.text}</p>;

                if (block.type === "image")
                  return (
                    <img
                      key={idx}
                      src={block.src}
                      alt={block.alt ?? course.name}
                    />
                  );

                if (block.type === "heading")
                  return <h3 key={idx}>{block.text}</h3>;

                if (block.type === "quote")
                  return (
                    // <blockquote
                    //     key={idx}
                    //     style={{
                    //         fontSize: 20,
                    //         background: "#f0f7f0",
                    //         padding: "20px 24px",
                    //         borderLeft: "5px solid #065e06",
                    //         margin: "30px 0",
                    //         fontStyle: "italic",
                    //         borderRadius: "0 8px 8px 0",
                    //     }}
                    // >
                    //     "{block.text}"
                    //     <cite style={{ display: "block", marginTop: 10, fontWeight: "bold", fontStyle: "normal" }}>
                    //         — {block.src}
                    //     </cite>
                    // </blockquote>
                    null
                  );

                return null;
              })}

              {/* Fallback: show plain description when no contentBlock */}
              {!course.contentBlock && <p>{course.description}</p>}
            </div>
          </div>
        </section>
      </div>

      {/* ── Chapter accordion ────────────────────────────────────── */}
      {chapters.length > 0 && (
        <div className="container">
          <section className="course-chapters-section">
            <h2 className="section-title">Course Curriculum</h2>
            <div className="faq-container">
              {chapters.map((chapter, idx) => {
                const isOpen = openChapterIndex === idx;
                return (
                  <div
                    key={chapter.id}
                    className={`faq-item${isOpen ? " active" : ""}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleChapter(idx)}
                      aria-expanded={isOpen}
                    >
                      {/* Chapter number + title */}
                      <span>
                        <span style={{ color: "#065e06", marginRight: 10 }}>
                          {String(idx + 1).padStart(2, "0")}.
                        </span>
                        {chapter.title}
                      </span>
                      <i
                        className={`fas fa-chevron-${isOpen ? "up" : "down"}`}
                      />
                    </button>
                    {/* Chapter summary — shown when accordion is open */}
                    <div className="faq-answer">
                      <p>{chapter.summary}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ── Related courses ──────────────────────────────────────── */}
      {relatedCourses.length > 0 && (
        <section className="container">
          <div className="related-products-section ">
            <h2 className="section-title">You May Also Like</h2>
            <div className="related-products-grid">
              {relatedCourses.map((related) => (
                <Link
                  to={`/books/${related.id}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <div key={related.id} className="related-product-card">
                    <div className="product-image">
                      <img src={related.image} alt={related.name} />
                      <span
                        className="sale-badge"
                        style={{ width: 50, textAlign: "center" }}
                      >
                        -
                        {calcDiscountPercent(
                          related.originalPrice,
                          related.price,
                        )}
                        %
                      </span>
                    </div>
                    <div className="product-info">
                      <h4 className="product-title">{related.name}</h4>
                      <div className="product-price">
                        <span className="current-price">
                          ${related.price.toFixed(2)}
                        </span>
                        <span className="original-price">
                          ${related.originalPrice.toFixed(2)}
                        </span>
                      </div>
                      <Link
                        to={`/books/${related.id}`}
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="view-detail-btn"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CourseDetail;
