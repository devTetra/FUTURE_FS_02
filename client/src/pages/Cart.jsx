import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { fetchCart, cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const total = cart?.items?.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,
    0,
  );

  const handleCart = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  const handleDeleteCart = (e, productId) => {
    e.preventDefault();
    removeFromCart(productId);
  };
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <section className="bg-secondary text-text font-body min-h-screen py-16 pt-24 md:pt-30">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 data-aos="fade-up" className="font-heading mb-10 text-3xl">
          Your Shopping Bag
        </h1>

        {cart?.items.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart?.items.map((item, id) => (
              <div
                key={id}
                data-aos="fade-right"
                className="bg-background flex items-center justify-between rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.productId.image}
                    alt={item.productId.name}
                    loading="lazy"
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-medium">
                      {item.productId.name}
                    </h2>
                    <p className="text-accent text-sm">
                      ${item.productId.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <p className="text-sm">
                    Qty: <span className="font-medium">{item.quantity}</span>
                  </p>
                  <button
                    onClick={(e) => handleDeleteCart(e, item.productId._id)}
                    className="text-accent hover:text-primary transition-colors"
                  >
                    <FaTrashAlt className="text-xl" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between border-t pt-6">
              <p className="text-xl font-medium">Total</p>
              <p className="font-heading text-2xl">${total?.toFixed(2)}</p>
            </div>

            <button
              onClick={(e) => handleCart(e)}
              className="bg-primary text-background mt-6 rounded-full px-6 py-3 font-medium transition hover:opacity-90"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default Cart;
