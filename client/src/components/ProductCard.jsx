import { useNavigate } from "react-router";
import { CartBtn, CounterBtn } from "./Button";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewProduct = (e, product) => {
    e.preventDefault();
    navigate(`/product/${product._id}`);
  };

  return (
    <div
      data-aos="fade-left"
      className="bg-background font-body cursor-pointer overflow-hidden rounded-2xl shadow-sm transition hover:shadow-md"
    >
      <div
        onClick={(e) => handleViewProduct(e, product)}
        className="relative overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition-all duration-500 hover:scale-105 sm:h-64 md:h-72"
        />
      </div>

      <div className="space-y-3 p-4">
        <h2
          onClick={(e) => handleViewProduct(e, product)}
          className="text-base font-medium sm:text-lg"
        >
          {product.name}
        </h2>
        <p className="text-accent text-sm sm:text-base">${product.price}</p>

        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <CounterBtn btnClass={"px-2 py-1"} spanClass={"px-2"} />

          <CartBtn product={product} btnClass={"px-4 py-2"} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
