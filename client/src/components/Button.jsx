import { useState } from "react";
import { summaryApi } from "../common/endpoints";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

export const CounterBtn = ({ btnClass, spanClass }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border-accent/40 flex items-center rounded-xl border">
      <button
        onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
        className={`hover:text-primary ${btnClass} text-xl transition duration-300`}
      >
        -
      </button>
      <span className={spanClass}>{quantity}</span>
      <button
        onClick={() => setQuantity((prev) => prev + 1)}
        className={`hover:text-primary ${btnClass} text-xl transition duration-300`}
      >
        +
      </button>
    </div>
  );
};

export const CartBtn = ({ product, btnClass }) => {
  const { addToCart } = useCart();
  const handleAddToCart = (e) => {
    e.preventDefault();
    const productId = product._id;
    const quantity =
      +e.target.previousSibling.querySelector("span").textContent;

    addToCart(productId, quantity);
  };
  return (
    <button
      onClick={(e) => {
        handleAddToCart(e);
      }}
      className={`bg-primary hover:bg-accent text-background rounded-xl ${btnClass} font-medium transition`}
    >
      Add to Cart
    </button>
  );
};
