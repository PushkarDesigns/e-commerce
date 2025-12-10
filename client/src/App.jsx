import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import Navbar from "./components/Navbar";
// import { useContext } from "react";
// import { AppContext } from "./context/AppContext";

const App = () => {
  // const { setIsSeller } = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes('seller');
  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
    </div>
  );
};


export default App;
