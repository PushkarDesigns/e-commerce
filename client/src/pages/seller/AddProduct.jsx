// import { useState } from "react";
// import { assets, categories } from "../../assets/assets";
// import { useContext } from "react";
// import { AppContext } from "../../context/AppContext";
// import toast from "react-hot-toast";


// const AddProduct = () => {
//   const { axios } = useContext(AppContext)
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [offerPrice, setOfferPrice] = useState('');

//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("offerPrice", offerPrice);
//       formData.append("category", category);
//       for (let i = 0; i < files.length; i++) {
//         formData.append("image", files[i]);
//       }

//       const { data } = await axios.post("/api/product/add-product", formData)
//       if (data.success) {
//         toast.success(data.message);
//         setName("");
//         setDescription("");
//         setPrice("");
//         setOfferPrice("");
//         setCategory("");
//         setFiles([]);
//       } else {
//         toast.error(data.message);
//       }
//     }catch (error){
//       toast.error(error.message);
//   }
// } 


// return (
//   <>
//     <div className="py-10 flex flex-col justify-between bg-white">
//       <form className="md:p-10 p-4 space-y-5 max-w-lg" onSubmit={handleSubmit}>
//         <div>
//           <p className="text-base font-medium">Product Image</p>
//           <div className="flex flex-wrap items-center gap-3 mt-2">
//             {Array(4).fill('').map((_, index) => (
//               <label key={index} htmlFor={`image${index}`}>
//                 <input accept="image/*" type="file" id={`image${index}`} hidden onChange={(e) => {
//                   const updatedFiles = [...files];
//                   updatedFiles[index] = e.target.files[0];
//                   setFiles(updatedFiles);
//                 }} />
//                 <img className="max-w-24 cursor-pointer" src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area} alt="uploadArea" width={100} height={100} />
//               </label>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col gap-1 max-w-md">
//           <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
//           <input id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div className="flex flex-col gap-1 max-w-md">
//           <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
//           <textarea id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here" onChange={(e) => setDescription(e.target.value)}></textarea>
//         </div>
//         <div className="w-full flex flex-col gap-1">
//           <label className="text-base font-medium" htmlFor="category">Category</label>
//           <select id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" onChange={(e) => setCategory(e.target.value)}>
//             <option value="">Select Category</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category.path}>
//                 {category.path}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex items-center gap-5 flex-wrap">
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
//             <input id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required onChange={(e) => setPrice(e.target.value)} />
//           </div>
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
//             <input id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required onChange={(e) => setOfferPrice(e.target.value)} />
//           </div>
//         </div>
//         <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">ADD</button>
//       </form>
//     </div>
//   </>
// );
// };

// export default AddProduct

import { useState, useContext, useEffect } from "react";
import { assets, categories } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddProduct = () => {
  const { axios } = useContext(AppContext);

  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  // cleanup image URLs
  useEffect(() => {
    return () => {
      files.forEach((file) => file && URL.revokeObjectURL(file));
    };
  }, [files]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(offerPrice) > Number(price)) {
      return toast.error("Offer price cannot be greater than price");
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("offerPrice", offerPrice);
      formData.append("category", category);

      files.forEach((file) => {
        if (file) {
          formData.append("image", file);
        }
      });

      const { data } = await axios.post(
        "/api/product/add-product",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (data.success) {
        toast.success(data.message);
        setName("");
        setDescription("");
        setPrice("");
        setOfferPrice("");
        setCategory("");
        setFiles([]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="py-10 flex flex-col bg-white">
      <form
        className="md:p-10 p-4 space-y-5 max-w-lg"
        onSubmit={handleSubmit}
      >
        {/* Images */}
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  <input
                    type="file"
                    accept="image/*"
                    id={`image${index}`}
                    hidden
                    onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles);
                    }}
                  />
                  <img
                    className="max-w-24 cursor-pointer"
                    src={
                      files[index]
                        ? URL.createObjectURL(files[index])
                        : assets.upload_area
                    }
                    alt="upload"
                    width={100}
                    height={100}
                  />
                </label>
              ))}
          </div>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">Product Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-3 py-2 rounded outline-none"
            placeholder="Type here"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">Product Description</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border px-3 py-2 rounded outline-none resize-none"
            placeholder="Type here"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">Category</label>
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-3 py-2 rounded outline-none"
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat.path}>
                {cat.path}
              </option>
            ))}
          </select>
        </div>

        {/* Prices */}
        <div className="flex gap-5">
          <div className="flex flex-col gap-1">
            <label className="font-medium">Product Price</label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border px-3 py-2 rounded outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium">Offer Price</label>
            <input
              type="number"
              required
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              className="border px-3 py-2 rounded outline-none"
            />
          </div>
        </div>

        <button className="px-8 py-2.5 bg-indigo-500 text-white rounded">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
