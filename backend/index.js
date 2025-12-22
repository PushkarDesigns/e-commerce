import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/connectDB.js";
import userRoutes from "./routes/user.routes.js"
import sellerRoutes from './routes/seller.routes.js'

// connectDB();

const app = express();
const allowedOrigins = ["http://localhost:5173"];

// middlewares
app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());

// Api Endpointes
app.get('/',(req, res) => {
    res.send("hello");
});

app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})