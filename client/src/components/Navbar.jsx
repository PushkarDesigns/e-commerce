import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets.js"

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const { user, setUser, navigate, setShowUserLogin } = useContext(AppContext);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link to={'/'}>
        <h1 className="text-2xl font-bold text-orange-600">Grocery Store</h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/">Home</Link>
        <Link to="/products">All Products</Link>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <img src={assets.cart_icon} alt="" className="w-7 h-7" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
        </div>

        {user ? (
          <>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition"
              />

              {/* Dropdown Menu */}
              <ul className="absolute top-12 right-0 bg-white shadow-xl rounded-xl border border-gray-100 w-44 py-3 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-out">
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer flex items-center gap-2" onClick={() => navigate('/my-orders')}>
                  <svg width="16" height="16" fill="currentColor" className="text-gray-600">
                    <path d="M2 2h12v12H2z" />
                  </svg>
                  My Orders
                </li>

                <li className="px-4 py-2 hover:bg-red-50 rounded-md cursor-pointer flex items-center gap-2 text-red-600" onClick={() => setUser(null)}>
                  <svg width="16" height="16" fill="currentColor" className="text-red-500">
                    <path d="M3 4h10v2H3zM3 8h10v2H3zM3 12h10v2H3z" />
                  </svg>
                  Logout
                </li>
              </ul>
            </div>
          </>
        ) : (<button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full" onClick={()=>setShowUserLogin(true)}> Login </button>)}
      </div>

      <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
        {/* Menu Icon SVG */}
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
        <Link to="/">Home</Link>
        <Link to="/products">All Products</Link>
        {user ? (
          <>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition"
              />

              {/* Dropdown Menu */}
              <ul className="absolute top-12 right-0 bg-white shadow-xl rounded-xl border border-gray-100 w-44 py-3 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-out">
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer flex items-center gap-2" onClick={() => navigate('/my-orders')}>
                  <svg width="16" height="16" fill="currentColor" className="text-gray-600">
                    <path d="M2 2h12v12H2z" />
                  </svg>
                  My Orders
                </li>

                <li className="px-4 py-2 hover:bg-red-50 rounded-md cursor-pointer flex items-center gap-2 text-red-600" onClick={() => setUser(null)}>
                  <svg width="16" height="16" fill="currentColor" className="text-red-500">
                    <path d="M3 4h10v2H3zM3 8h10v2H3zM3 12h10v2H3z" />
                  </svg>
                  Logout
                </li>
              </ul>
            </div>
          </>
        ) : <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"> Login </button>}
      </div>

    </nav>
  )
}

export default Navbar