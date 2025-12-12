import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "./ProductCart";

const BestSeller = () => {
  const { products } = useContext(AppContext);
  return (
    <div className="mt-16">
      <p className="text-2xl font-medium md:text-3xl">Best Sellers</p>
      <div>
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
