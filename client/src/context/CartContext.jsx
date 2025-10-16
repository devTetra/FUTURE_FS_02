import { createContext, useContext, useEffect, useState } from "react";
import { summaryApi } from "../common/endpoints";
import { toast } from "react-toastify";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const dataResponse = await fetch(summaryApi.getCart.url, {
        method: summaryApi.getCart.method,
        credentials: "include",
      });
      const { data } = await dataResponse.json();
      setCart(data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (productId, quantity = 1) => {
    try {
      const dataResponse = await fetch(summaryApi.addToCart.url, {
        method: summaryApi.addToCart.method,
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ productId, quantity }),
      });
      const data = await dataResponse.json();
      if (data.error) toast.error(data.message);
      if (data.success) toast.success(data.message);

      setCart(data.data);
    } catch (err) {
      console.error("Error adding to cart", err);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const dataResponse = await fetch(summaryApi.updateCart.url, {
        method: summaryApi.updateCart.method,
        credentials: "include",
        body: JSON.stringify({ productId, quantity }),
      });
      const { data } = await dataResponse.json();
      setCart(data);
    } catch (err) {
      console.error("Error updating cart", err);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const dataResponse = await fetch(
        `${summaryApi.removeFromCart.url}/${productId}`,
        {
          method: summaryApi.removeFromCart.method,
          credentials: "include",
        },
      );
      const data = await dataResponse.json();

      if (data.error) toast.error(data.message);
      if (data.success) toast.success(data.message);
      setCart(data.data);
    } catch (err) {
      console.error("Error removing from cart", err);
    }
  };

  const value = {
    cart,
    loading,
    addToCart,
    fetchCart,
    updateQuantity,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used in a CartProvider!");
  return context;
};
