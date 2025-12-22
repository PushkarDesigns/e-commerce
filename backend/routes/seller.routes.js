import express from "express";
import { sellerLogin } from "../controllers/seller.controller.js";
import { authSeller } from "../middlerwares/authSeller.js";

const router = express.Router();

router.post("/login", sellerLogin);

export default router;
