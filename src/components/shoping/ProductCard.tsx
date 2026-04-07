import "../../assets/css/shopping.css";
// import "../../assets/css/shoppingBook.css";
// import "../../assets/css/shoppingCourse.css";

import { Link } from "react-router-dom";
import type { Book, Course } from "../../data/Types";
import { useShoppingCart } from "../../utilis/cart/useCart";
import { showNotification } from "../../utilis/Notification";

type productProps = Book | Course ;

const ProductCard = ({ id, name, price, originalPrice, image }: productProps) => {
  const discount: number = (1 - price / originalPrice) * 100;
  console.log(discount);

  const { addItem } = useShoppingCart(); // ← cùng context với Header và CartSidebar

  /**
   * Thêm sách vào giỏ:
   * - addItem tự động mở CartSidebar qua context (setIsCartOpen(true))
   * - totalItems trong Header cập nhật ngay lập tức
   */
  const handleAddToCart = () => {
    addItem({
      title: name,
      price: `$${price}`,
      image: image,
    });
    showNotification("Đã thêm vào giỏ hàng!", "success");
  };

  return (
    <>
      <Link to={`/book/${id}`} className="product-card-link">
        <div className="product-card">
          <div className="product-image">
            <img src={image} alt={name} />

            {discount > 0 && (
              <span className="sale-badge">-{Math.round(discount)}%</span>
            )}
          </div>
          <div className="product-info">
            <h3 className="product-title">{name}</h3>
            <div className="product-price">
              <span className="current-price">${price}</span>
              <span className="original-price">${originalPrice}</span>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={(e) => {
                e.preventDefault();// ngăn Link navigate khi click button
                handleAddToCart();
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};
export default ProductCard;
