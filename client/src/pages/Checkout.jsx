import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useCart();

  const total = cart?.items?.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0,
  );

  return (
    <div className="font-body text-text mx-auto max-w-2xl space-y-8 px-6 py-10 pt-24 md:max-w-4xl md:pt-30">
      <h1
        data-aos="fade-left"
        className="text-primary text-2xl font-semibold md:text-4xl"
      >
        Checkout
      </h1>

      <div data-aos="fade-left" className="bg-background rounded-2xl shadow-sm">
        <div className="border-accent/30 border-b px-6 py-4">
          <h2 className="text-lg font-medium">Order Summary</h2>
          <p className="text-accent text-sm">
            {`${cart?.items.length} item${cart?.items.length === 1 ? "" : "s"}`}{" "}
          </p>
        </div>
        <div className="px-6 py-4">
          {cart?.items.map((item, id) => (
            <div
              key={id}
              className="border-accent/20 flex items-center justify-between border-b py-2 last:border-none"
            >
              <p>{item.productId.name}</p>
              <p className="text-accent">${item.productId.price}</p>
            </div>
          ))}
        </div>
        <div className="border-accent/30 flex items-center justify-between border-t px-6 py-4 text-lg font-medium">
          <p>Total:</p>
          <p className="text-primary">${total?.toFixed(2)}</p>
        </div>
      </div>

      <div data-aos="fade-left" className="space-y-3">
        <h2 className="text-primary text-lg font-medium">
          Billing Information
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          autoComplete="billing name"
          className="border-accent/30 bg-background focus:border-primary w-full rounded-xl border px-4 py-2 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Address"
          autoComplete="billing address-level1"
          className="border-accent/30 bg-background focus:border-primary w-full rounded-xl border px-4 py-2 focus:outline-none"
        />
      </div>

      <div data-aos="fade-left" className="space-y-3">
        <h2 className="text-primary text-lg font-medium">Payment Details</h2>
        <input
          type="text"
          placeholder="Card Number"
          className="border-accent/30 bg-background focus:border-primary w-full rounded-xl border px-4 py-2 focus:outline-none"
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Expiry (MM/YY)"
            className="border-accent/30 bg-background focus:border-primary w-1/2 rounded-xl border px-4 py-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="CVV"
            className="border-accent/30 bg-background focus:border-primary w-1/2 rounded-xl border px-4 py-2 focus:outline-none"
          />
        </div>
      </div>

      <button className="bg-primary text-background w-full rounded-full px-6 py-3 font-medium transition hover:opacity-90">
        Pay ${total?.toFixed(2)}
      </button>
    </div>
  );
};

export default Checkout;
