import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { summaryApi } from "../common/endpoints";

export const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const dataResponse = await fetch(summaryApi.products.url, {
      method: summaryApi.products.method,
    });
    const { data } = await dataResponse.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="font-body bg-background px-6 py-16" id="products">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-text mb-8 text-3xl">
          Explore Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {!products ? (
            <div className="text-text font-body col-span-full flex h-screen items-start justify-center">
              Loading product details...
            </div>
          ) : (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
