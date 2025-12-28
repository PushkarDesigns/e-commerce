import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "./ProductCart";

const BestSeller = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="mt-16">
      <p className="text-3xl font-semibold mb-6">Best Sellers</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products
          .filter((product) => product.inStock)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

      </div>
    </div>
  );
};

export default BestSeller;




// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import ProductCard from "./ProductCart";

// const BestSeller = () => {
//   const { products } = useContext(AppContext);
//   return (
//     <div className="mt-16">
//       <p className="text-2xl font-medium md:text-3xl">Best Sellers</p>
//       <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">
//         {products
//           .filter((product) => product.inStock)
//           .slice(0, 5)
//           .map((product, index) => (
//             <ProductCard key={index} product={product} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default BestSeller;
