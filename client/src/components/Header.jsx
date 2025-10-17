import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

const Header = () => {
  const { cart } = useCart();
  let quantity = 0;

  if (cart?.items)
    quantity = cart?.items?.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-background/80 font-body fixed z-50 w-full shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-4 md:py-4 xl:max-w-7xl">
        <Link
          to="/"
          className="font-heading text-text hover:text-primary text-2xl transition"
        >
          AUREO
        </Link>

        <div className="border-primary bg-background focus-within:bg-secondary hidden w-full max-w-sm items-center justify-between rounded-full border pl-2 focus-within:shadow-sm lg:flex">
          <input
            type="text"
            placeholder="Search product here..."
            className="text-text placeholder:text-text/70 w-full bg-transparent px-3 outline-none"
          />
          <div className="bg-accent text-background flex h-8 min-w-[50px] items-center justify-center rounded-r-full text-lg">
            <FaSearch />
          </div>
        </div>

        <nav className="flex items-center gap-5 sm:gap-6">
          <Link to="/cart" className="hover:text-primary relative transition">
            <FaShoppingBag className="text-lg sm:text-xl" />
            <div className="bg-accent text-background absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full p-1 text-xs font-medium">
              {quantity}
            </div>
          </Link>
          <Link to="/user-details" className="hover:text-primary transition">
            <FaUser className="text-lg sm:text-xl" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
