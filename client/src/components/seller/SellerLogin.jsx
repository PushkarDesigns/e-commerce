import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';

const SellerLogin = () => {
    const { isSeller, setIsSeller, navigate } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        if(isSeller) {
            navigate('/seller');
        }
    },[isSeller]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("email:", email, "password:", password);
    };

    return !isSeller && (
        <>
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
                            Seller
                        </span>Login
                    </h2>

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

                    {/* Button */}
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all"
                    >Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default SellerLogin