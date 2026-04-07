import type { CartItem } from '../../data/Cart';

/**
 * Tính tổng số lượng sản phẩm trong giỏ hàng
 */
export const calculateTotalItems = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

/**
 * Tính tổng tiền giỏ hàng (chuyển từ string price sang number)
 */
export const calculateTotalPrice = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    const priceNum = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
    return total + priceNum * item.quantity;
  }, 0);
};

/**
 * Format số tiền theo kiểu Việt Nam ($VND)
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};

/**
 * Thêm sản phẩm vào giỏ hàng (hoặc tăng số lượng nếu đã tồn tại)
 * @returns CartItem[] - giỏ hàng mới
 */
export const addToCart = (
  currentItems: CartItem[],
  product: { title: string; price: string; image: string }
): CartItem[] => {
  const existingItem = currentItems.find(item => item.title === product.title);

  if (existingItem) {
    return currentItems.map(item =>
      item.title === product.title
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    const newItem: CartItem = {
      id: Date.now(),
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    return [...currentItems, newItem];
  }
};

/**
 * Xóa một item khỏi giỏ hàng theo id
 */
export const removeFromCart = (items: CartItem[], id: number): CartItem[] => {
  return items.filter(item => item.id !== id);
};

/**
 * Cập nhật số lượng của một item
 */
export const updateCartItemQuantity = (
  items: CartItem[],
  id: number,
  newQuantity: number
): CartItem[] => {
  if (newQuantity < 1) return items;
  
  return items.map(item =>
    item.id === id ? { ...item, quantity: newQuantity } : item
  );
};