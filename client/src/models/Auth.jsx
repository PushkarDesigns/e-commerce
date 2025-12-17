// import { React, useContext, useState } from 'react'
// import { AppContext } from '../context/AppContext';

// const Auth = () => {
//     const [state, setState] = useState("login");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const { setShowUserLogin, setUser } = useContext(AppContext)

//     const submitHandler = async(e) => {
//         e.preventDefault();
//         console.log("name:", name,"email:", email,"password:", password);
//     }

//     return (
//         <>
//             <div className="fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center bg-black/50 text-gray-600" onClick={()=> setShowUserLogin(false)}>
//                 <form className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white" onSubmit={submitHandler} onClick={(e)=> e.stopPropagation()}>
//                     <p className="text-2xl font-medium m-auto">
//                         <span className="text-indigo-500">User</span> {state === "login" ? "Login" : "Sign Up"}
//                     </p>
//                     {state === "register" && (
//                         <div className="w-full">
//                             <p>Name</p>
//                             <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="text" required />
//                         </div>
//                     )}
//                     <div className="w-full ">
//                         <p>Email</p>
//                         <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
//                     </div>
//                     <div className="w-full ">
//                         <p>Password</p>
//                         <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
//                     </div>
//                     {state === "register" ? (
//                         <p>
//                             Already have account? <span onClick={() => setState("login")} className="text-indigo-500 cursor-pointer">click here</span>
//                         </p>
//                     ) : (
//                         <p>
//                             Create an account? <span onClick={() => setState("register")} className="text-indigo-500 cursor-pointer">click here</span>
//                         </p>
//                     )}
//                     <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer" onClick={()=> {setUser(true);setShowUserLogin(false);}}>
//                         {state === "register" ? "Create Account" : "Login"}
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default Auth;

import { React, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Auth = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setShowUserLogin, setUser } = useContext(AppContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("name:", name, "email:", email, "password:", password);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40"
      onClick={() => setShowUserLogin(false)}
    >
      {/* Modal Box */}
      <form
        onSubmit={submitHandler}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-2xl p-8 w-80 sm:w-[360px] flex flex-col gap-5 animate-scaleIn border border-gray-100"
      >
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center">
          <span className="text-indigo-600">
            User
          </span>{" "}
            {state === "login" ? "Welcome Back" : "Create Account"}
        </h2>

        {/* Name Only in Register */}
        {state === "register" && (
          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700 text-sm">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="John Doe"
            />
          </div>
        )}

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700 text-sm">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="example@gmail.com"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700 text-sm">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="••••••••"
          />
        </div>

        {/* Toggle login/register */}
        <p className="text-sm text-gray-600 text-center">
          {state === "login" ? (
            <>
              Don’t have an account?{" "}
              <span
                className="text-indigo-600 font-medium cursor-pointer hover:underline"
                onClick={() => setState("register")}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-indigo-600 font-medium cursor-pointer hover:underline"
                onClick={() => setState("login")}
              >
                Login
              </span>
            </>
          )}
        </p>

        {/* Button */}
        <button
          type="submit"
          onClick={() => {
            setUser(true);
            setShowUserLogin(false);
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Auth;