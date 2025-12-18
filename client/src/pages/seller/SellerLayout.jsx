import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

const SellerLayout = () => {
  const { setIsSeller, navigate } = useContext(AppContext);
  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon, },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];
  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-primary tracking-wide">
            Grocery<span className="text-orange-500">Store</span>
          </h1>
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button className='border rounded-full text-sm px-4 py-1' onClick={() => {
            setIsSeller(false);
            navigate('/');
          }}>Logout</button>
        </div>
      </div>
      <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
        {sidebarLinks.map((item) => (
          <NavLink key={item.name} to={item.path} end={item.path === "/seller"} className={({ isActive }) => `flex items-center gap-3 py-3 px-4 hover:bg-gray-100 ${ isActive ? "bg-gray-100 border-r-4 border-primary" : "" }`}>
            <img src={item.icon} alt={item.name} className="w-7 h-7" />
            <p className="md:block hidden">{item.name}</p>
          </NavLink>
        ))}
      </div>
    </>
  );
};
export default SellerLayout;