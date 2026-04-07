// src/components/CartSidebar.tsx
import React from "react";
import { useShoppingCart } from "../../utilis/cart/useCart";
import { showNotification } from "../../utilis/Notification";
import "../../assets/css/CartSideBar.css";

/**
 * CartSidebar - Hiển thị giỏ hàng dạng sidebar
 * isOpen và onClose lấy trực tiếp từ CartContext - không cần props
 */
const CartSidebar: React.FC = () => {
  const {
    cartItems,
    totalItems,
    formattedTotalPrice,
    removeItem,
    updateQuantity,
    isCartOpen,
    closeCart,
  } = useShoppingCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showNotification("Giỏ hàng của bạn đang trống!", "error");
      return;
    }
    window.location.href = "/payment-confirm";
  };

  return (
    <>
      {/* Overlay - chỉ hiện khi cart mở */}
      <div
        className={`cart-overlay ${isCartOpen ? "active" : ""}`}
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? "active" : ""}`}>
        <div className="cart-sidebar-header">
          <h3>Giỏ hàng ({totalItems})</h3>
          <button className="close-cart" onClick={closeCart}>
            ×
          </button>
        </div>

        <div className="cart-sidebar-content">
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="empty-cart">Giỏ hàng trống</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item" data-id={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <div className="cart-item-price">{item.price}</div>
                    <div className="cart-item-quantity">
                      <button
                        className="quantity-btn minus"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn plus"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeItem(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <span>Tổng cộng:</span>
              <span className="total-price">{formattedTotalPrice}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;