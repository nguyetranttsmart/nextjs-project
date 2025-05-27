import Cookies from 'js-cookie';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CART_KEY = 'cart';

export function getCart(): CartItem[] {
  try {
    const cart = Cookies.get(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
}
export function updateQuantity(id: string, quantity: number) {
  const cart = getCart();
  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity = quantity > 0 ? quantity : 1; 
    saveCart(cart);
  }
}
export function saveCart(cart: CartItem[]) {
  Cookies.set(CART_KEY, JSON.stringify(cart), { expires: 7 });
}

export function addToCart(product: CartItem) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
}

export function removeFromCart(id: string) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}
