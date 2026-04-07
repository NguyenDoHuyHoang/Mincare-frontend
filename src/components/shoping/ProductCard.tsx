import "../../assets/css/shopping.css";
import "../../assets/css/shoppingBook.css";
import "../../assets/css/shoppingCourse.css";

import { Link } from "react-router-dom";
import type { Book } from "../../data/Types";

const ProductCard = ({ id, name, price, originalPrice, image }: Book) => {
  const discount: number = (1 - price / originalPrice) * 100;
  console.log (discount);
  return (
    <>
      <Link to={`/book/${id}`} className="product-card-link">
        <div className="product-card">
          <div className="product-image">
            <img src={image} alt={name} />
            if ({discount > 0} ) {<span className="sale-badge">-{discount}</span>}
          </div>
          <div className="product-info">
            <h3 className="product-title">{name}</h3>
            <div className="product-price">
              <span className="current-price">${price}</span>
              <span className="original-price">${originalPrice}</span>
            </div>
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        </div>
      </Link>
    </>
  );
};
export default ProductCard;
