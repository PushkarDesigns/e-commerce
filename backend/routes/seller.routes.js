import express from "express";
import { sellerLogin } from "../controllers/seller.controller.js";
import { authSeller } from "../middlerwares/authSeller.js";
import { sellerLogout } from "../config/seller.controller.js";

const router = express.Router();

router.post("/login", sellerLogin);
router.post("/login", authSeller, sellerLogout);

export default router;
