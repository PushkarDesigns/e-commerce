import mongoose from "mongoose"
//Mongoose MongoDB से connect करने और data handle करने में मदद करता है।

const MONGODB_URL = process.env.MONGODB_URI
// .env फाइल में जो database URL है उसे यहाँ लिया जा रहा है।

let cached = global.mongoose
// Next.js में हर request पर server code दुबारा run हो सकता है, इसलिए हम global में cache रखते हैं ताकि नया connection न बने।

if (!cached) {
  cached = global.mongoose = {
    connection: null,
    promise: null,
  }
}
// Next.js में हर बार API call पर नया code run होता है।
//अगर हर बार नया database connection बन जाए तो problem होती है।
//इसलिए हम connection को cache में रख रहे हैं।
//cached.connection = database connected object
//cached.promise = अभी connection बन रहा है या बनेगा

export const connectDB = async () => {
  if (cached.connection) return cached.connection;
  // पहले से connection मौजूद है तो उसे return कर दो। नया connection नहीं बनाएगा।

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL, {
      dbName: 'ECOMMERCEDB',
      bufferCommands: false
    })
  }
  cached.connection = await cached.promise
  // Promise resolve होने पर connection store करना
  return cached.connection
}
