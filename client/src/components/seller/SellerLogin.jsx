// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../../context/AppContext';

// const SellerLogin = () => {
//     const { isSeller, setIsSeller, navigate } = useContext(AppContext);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     useEffect(() => {
//         if(isSeller) {
//             navigate('/seller');
//         }
//     }, [isSeller]);

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         console.log("email:", email, "password:", password);
//         setIsSeller(true);
//     };

//     return !isSeller && (
//         <>
//             <div
//                 className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40"
//                 onClick={() => setShowUserLogin(false)}
//             >
//                 {/* Modal Box */}
//                 <form
//                     onSubmit={submitHandler}
//                     onClick={(e) => e.stopPropagation()}
//                     className="bg-white rounded-xl shadow-2xl p-8 w-80 sm:w-[360px] flex flex-col gap-5 animate-scaleIn border border-gray-100"
//                 >
//                     {/* Heading */}
//                     <h2 className="text-3xl font-extrabold text-center">
//                         <span className="text-indigo-600">
//                             Seller
//                         </span>Login
//                     </h2>

//                     {/* Email */}
//                     <div className="flex flex-col gap-1">
//                         <label className="font-medium text-gray-700 text-sm">Email</label>
//                         <input
//                             type="email"
//                             required
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="input-field"
//                             placeholder="example@gmail.com"
//                         />
//                     </div>

//                     {/* Password */}
//                     <div className="flex flex-col gap-1">
//                         <label className="font-medium text-gray-700 text-sm">Password</label>
//                         <input
//                             type="password"
//                             required
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="input-field"
//                             placeholder="••••••••"
//                         />
//                     </div>

//                     {/* Button */}
//                     <button
//                         type="submit"
//                         className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all"
//                     >Login
//                     </button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default SellerLogin

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSeller(true);
  };

  return (
    !isSeller && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
        
        {/* Modal */}
        <form
          onSubmit={submitHandler}
          className="relative w-[90%] max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-fadeIn"
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold">
              <span className="text-indigo-600">Seller</span> Login
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Access your seller dashboard
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seller@example.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
          >
            Login as Seller
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-5">
            Secure Seller Access 🔒
          </p>
        </form>
      </div>
    )
  );
};

export default SellerLogin;
