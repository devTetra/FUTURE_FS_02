import { useParams } from "react-router";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { CartBtn, CounterBtn } from "../components/Button";
import { useEffect, useState } from "react";
import { summaryApi } from "../common/endpoints";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const fetchProductDetails = async () => {
    const dataResponse = await fetch(`${summaryApi.product.url}/${id}`, {
      method: summaryApi.product.method,
    });
    const { data } = await dataResponse.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <section className="bg-background text-text font-body min-h-screen py-16 pt-24 md:pt-30">
      {!product ? (
        <div className="text-text font-body flex h-screen items-center justify-center">
          Loading product details...
        </div>
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16">
          <div
            data-aos="fade-right"
            className="bg-background relative max-h-[450px] overflow-hidden rounded-xl shadow-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full cursor-pointer object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center space-y-4 md:space-y-5"
          >
            <p className="text-accent text-sm uppercase">{product.category}</p>
            <h1 className="font-heading text-primary text-3xl">
              {product.name}
            </h1>

            <p className="text-primary text-2xl font-medium">
              ${product.price?.toFixed(2)}
            </p>

            <p className="text-accent/90 text-base leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-6 md:gap-10">
              <p className="text-accent text-sm">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
              <div className="text-accent flex items-center gap-2">
                {Array.from({ length: Math.floor(product.rating) }).map(
                  (_, i) => (
                    <FaStar key={i} />
                  ),
                )}
                {product.rating % 1 ? <FaStarHalfStroke /> : ""}
                {5 - Math.round(product.rating) ? <FaRegStar /> : ""}
                <span className="text-text/70 ml-2 text-sm">
                  ({product.rating} / 5)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-8 md:gap-10">
              <CounterBtn btnClass={"px-3 py-1"} spanClass={"px-4"} />
              <CartBtn product={product} btnClass={"px-8 py-3"} />
            </div>

            <div className="text-text/80 mt-4 space-y-2 text-base">
              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>
              <p>
                <strong>Shipping:</strong> {product.shippingInformation}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default ProductDetails;
