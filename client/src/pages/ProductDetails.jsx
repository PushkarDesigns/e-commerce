// import { useContext, useState, useEffect } from 'react'
// import { AppContext } from '../context/AppContext';
// import { Link, useParams } from 'react-router-dom';
// import { assets } from '../assets/assets';

// const ProductDetails = () => {
//     const { products, navigate, addToCart } = useContext(AppContext);
//     const { id } = useParams();
//     const [thumbnail, setThumbnail] = useState(null);
//     const product = products.find((product) => product._id === id);
//     useEffect(() => {
//         if (product?.image?.length) {
//             setThumbnail(product.image[0])
//         }
//     }, []);


//     return product && (
//         <div className="max-w-6xl w-full px-6 mt-16">
//             <p>
//                 <Link to={"/"}>Home</Link> /
//                 <Link to={"/products"}> Products</Link> /
//                 <Link to={`/products/${product.category.toLowerCase()}`}></Link>
//                 <span className="text-indigo-500"> {product.name}</span>
//             </p>

//             <div className="flex flex-col md:flex-row gap-16 mt-4">
//                 <div className="flex gap-3">
//                     <div className="flex flex-col gap-3">
//                         {product.image.map((image, index) => (
//                             <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
//                                 <img src={image} alt={`Thumbnail ${index + 1}`} />
//                             </div>
//                         ))}
//                     </div>

//                     <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
//                         <img src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
//                     </div>
//                 </div>

//                 <div className="text-sm w-full md:w-1/2">
//                     <h1 className="text-3xl font-medium">{product.name}</h1>

//                     <div className="flex items-center gap-0.5 mt-1">
//                         {Array(5)
//                             .fill("")
//                             .map(
//                                 (_, i) =>
//                                     product.rating > (
//                                         <img src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="star" key={i} className="w-3.5 md:w-4"
//                                         />
//                             )   )   }
//                         <p className="text-base ml-2">(4)</p>
//                     </div>

//                     <div className="mt-6">
//                         <p className="text-gray-500/70 line-through">MRP: ${product.price}</p>
//                         <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
//                         <span className="text-gray-500/70">(inclusive of all taxes)</span>
//                     </div>

//                     <p className="text-base font-medium mt-6">About Product</p>
//                     <ul className="list-disc ml-4 text-gray-500/70">
//                         {product.description.map((desc, index) => (
//                             <li key={index}>{desc}</li>
//                         ))}
//                     </ul>

//                     <div className="flex items-center mt-10 gap-4 text-base">
//                         <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" onClick={()=> addToCart(product._id)}>
//                             Add to Cart
//                         </button>
//                         <button className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition" onClick={()=> {addToCart(product._id); navigate('/cart');}}>
//                             Buy now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Link, useParams } from 'react-router-dom';
import { assets } from '../assets/assets';

const ProductDetails = () => {
    const { products, navigate, addToCart } = useContext(AppContext);
    const { id } = useParams();
    const [thumbnail, setThumbnail] = useState(null);

    const product = products.find((product) => product._id === id);

    useEffect(() => {
        if (product?.image?.length) setThumbnail(product.image[0]);
    }, [product]);

    if (!product) {
        return <p className="text-center mt-20 text-gray-500 text-lg">Product not found.</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-6 mt-16">
            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mb-6">
                <Link to="/" className="hover:text-indigo-500">Home</Link> /
                <Link to="/products" className="hover:text-indigo-500 ml-1">Products</Link> /
                <Link to={`/products/${product.category.toLowerCase()}`} className="hover:text-indigo-500 ml-1">{product.category}</Link> /
                <span className="text-indigo-500 ml-1">{product.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Left: Thumbnails + Main Image */}
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4">
                        {product.image?.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setThumbnail(`http://localhost:3000/images/${image}`)}
                                className={`border rounded-lg overflow-hidden cursor-pointer transition transform hover:scale-105 ${
                                    thumbnail === image ? 'border-indigo-500' : 'border-gray-300'
                                }`}
                            >
                                <img src={`http://localhost:3000/images/${product.image[0]}`} alt={`Thumbnail ${index + 1}`} className="w-20 h-20 object-cover"/>
                            </div>
                        ))}
                    </div>

                    <div className="border rounded-lg overflow-hidden shadow-lg w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center bg-white">
                        {thumbnail && (
                            <img
                                src={`http://localhost:3000/images/${product.image[0]}`}
                                alt="Selected product"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        )}
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="flex-1">
                    <h1 className="text-4xl font-semibold mb-2">{product.name}</h1>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                        {Array(5).fill("").map((_, i) => (
                            <img
                                key={i}
                                src={i < product.rating ? assets.star_icon : assets.star_dull_icon}
                                alt="star"
                                className="w-4 h-4"
                            />
                        ))}
                        <span className="text-gray-500 ml-2">({product.rating})</span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <p className="text-gray-400 line-through text-lg">MRP: ${product.price}</p>
                        <p className="text-3xl font-bold text-indigo-600">${product.offerPrice}</p>
                        <span className="text-gray-400 text-sm">(inclusive of all taxes)</span>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">About this product</h2>
                        <ul className="list-disc ml-5 text-gray-600 space-y-1">
                            {product.description?.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 flex-col md:flex-row">
                        <button
                            className="w-full md:w-1/2 py-3.5 font-medium bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition"
                            onClick={() => addToCart(product._id)}
                        >
                            Add to Cart
                        </button>
                        <button
                            className="w-full md:w-1/2 py-3.5 font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                            onClick={() => {
                                addToCart(product._id);
                                navigate('/cart');
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
