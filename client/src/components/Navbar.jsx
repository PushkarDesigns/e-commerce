// import { useContext, useState } from "react"
// import { Link } from "react-router-dom"
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets.js"

// const Navbar = () => {

//   const [open, setOpen] = useState(false);
//   const { user, setUser, navigate, setShowUserLogin } = useContext(AppContext);

//   return (
//     <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
//       <Link to={'/'}>
//         <h1 className="text-2xl font-bold text-orange-600">Grocery Store</h1>
//       </Link>

//       {/* Desktop Menu */}
//       <div className="hidden sm:flex items-center gap-8">
//         <Link to="/">Home</Link>
//         <Link to="/products">All Products</Link>

//         <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
//           <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
//             <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
//           </svg>
//         </div>

//         <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
//           <img src={assets.cart_icon} alt="" className="w-7 h-7" />
//           <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
//         </div>

//         {user ? (
//           <>
//             <div className="relative group">
//               <img
//                 src={assets.profile_icon}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition"
//               />

//               {/* Dropdown Menu */}
//               <ul className="absolute top-12 right-0 bg-white shadow-xl rounded-xl border border-gray-100 w-44 py-3 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-out">
//                 <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer flex items-center gap-2" onClick={() => navigate('/my-orders')}>
//                   <svg width="16" height="16" fill="currentColor" className="text-gray-600">
//                     <path d="M2 2h12v12H2z" />
//                   </svg>
//                   My Orders
//                 </li>

//                 <li className="px-4 py-2 hover:bg-red-50 rounded-md cursor-pointer flex items-center gap-2 text-red-600" onClick={() => setUser(null)}>
//                   <svg width="16" height="16" fill="currentColor" className="text-red-500">
//                     <path d="M3 4h10v2H3zM3 8h10v2H3zM3 12h10v2H3z" />
//                   </svg>
//                   Logout
//                 </li>
//               </ul>
//             </div>
//           </>
//         ) : (<button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full" onClick={()=> {setShowUserLogin(true)}}> Login </button>)}
//       </div>

//       <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
//         {/* Menu Icon SVG */}
//         <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <rect width="21" height="1.5" rx=".75" fill="#426287" />
//           <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
//           <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
//         </svg>
//       </button>

//       {/* Mobile Menu */}
//       <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
//         <Link to="/">Home</Link>
//         <Link to="/products">All Products</Link>
//         {user ? (
//           <>
//             <div className="relative group">
//               <img
//                 src={assets.profile_icon}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition"
//               />

//               {/* Dropdown Menu */}
//               <ul className="absolute top-12 right-0 bg-white shadow-xl rounded-xl border border-gray-100 w-44 py-3 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-out">
//                 <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer flex items-center gap-2" onClick={() => navigate('/my-orders')}>
//                   <svg width="16" height="16" fill="currentColor" className="text-gray-600">
//                     <path d="M2 2h12v12H2z" />
//                   </svg>
//                   My Orders
//                 </li>

//                 <li className="px-4 py-2 hover:bg-red-50 rounded-md cursor-pointer flex items-center gap-2 text-red-600" onClick={() => setUser(null)}>
//                   <svg width="16" height="16" fill="currentColor" className="text-red-500">
//                     <path d="M3 4h10v2H3zM3 8h10v2H3zM3 12h10v2H3z" />
//                   </svg>
//                   Logout
//                 </li>
//               </ul>
//             </div>
//           </>
//         ) : <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"> Login </button>}
//       </div>

//     </nav>
//   )
// }

// export default Navbar

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, navigate, setShowUserLogin, cartCount } = useContext(AppContext);

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex justify-between items-center sticky top-0 z-40">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary tracking-wide">
          Grocery<span className="text-orange-500">Store</span>
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-10 text-gray-700 font-medium">

        <Link to="/" className="hover:text-primary transition">Home</Link>
        <Link to="/products" className="hover:text-primary transition">All Products</Link>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-full bg-gray-50">
          <input 
            type="text" 
            className="bg-transparent outline-none text-sm w-40 placeholder-gray-500"
            placeholder="Search products..."
          />
          <img src={assets.search_icon} alt="" className="w-4 opacity-70" />
        </div>

        {/* Cart */}
        <div 
          className="relative cursor-pointer group" 
          onClick={() => navigate("/cart")}
        >
          <img src={assets.cart_icon} className="w-7" />
          <span className="absolute -top-2 -right-3 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold shadow-md">
            {cartCount()}
          </span>
        </div>

        {/* Profile / Login */}
        {user ? (
          <div className="relative group">
            <img 
              src={assets.profile_icon}
              className="w-11 h-11 rounded-full border border-gray-300 shadow cursor-pointer hover:scale-105 transition"
            />

            {/* Dropdown */}
            <ul className="absolute right-0 mt-3 bg-white w-48 shadow-xl border border-gray-200 rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <li 
                onClick={() => navigate("/my-orders")} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-sm"
              >
                <img src={assets.order_icon} className="w-4" /> My Orders
              </li>

              <li 
                onClick={() => setUser(null)} 
                className="px-4 py-2 hover:bg-red-100 cursor-pointer flex items-center gap-2 text-sm text-red-600"
              >
                <img src={assets.logout_icon} className="w-4" /> Logout
              </li>
            </ul>
          </div>
        ) : (
          <button 
            onClick={() => setShowUserLogin(true)}
            className="px-6 py-2 rounded-full bg-primary hover:bg-primary/80 text-white shadow-md transition font-medium"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setOpen(!open)} 
        className="sm:hidden"
      >
        <svg width="22" height="16" fill="none">
          <rect width="22" height="2" rx="1" fill="#444" />
          <rect y="7" width="22" height="2" rx="1" fill="#444" />
          <rect y="14" width="22" height="2" rx="1" fill="#444" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`${open ? "flex" : "hidden"} sm:hidden flex-col gap-4 absolute top-[60px] left-0 w-full bg-white shadow-lg border-t border-gray-200 px-6 py-5 text-gray-700 font-medium`}>

        <Link to="/" className="hover:text-primary transition">Home</Link>
        <Link to="/products" className="hover:text-primary transition">All Products</Link>

        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <img src={assets.cart_icon} className="w-6" />
          <span>Cart (3)</span>
        </div>

        {user ? (
          <>
            <button 
              className="text-left hover:text-primary transition"
              onClick={() => navigate("/my-orders")}
            >
              My Orders
            </button>

            <button 
              className="text-left text-red-600 hover:text-red-700 transition"
              onClick={() => setUser(null)}
            >
              Logout
            </button>
          </>
        ) : (
          <button 
            onClick={() => setShowUserLogin(true)}
            className="mt-3 px-6 py-2 bg-primary rounded-full text-white shadow-md"
          >
            Login
          </button>
        )}

      </div>

    </nav>
  );
};

export default Navbar;
