import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
const router = express.Router();

router.get("/", getProducts);
// Alternatively
//router.get('/').get(getProducts);
router.get("/:id", getProductById);
// Alternatively
//router.get('/:id').get(getProduct);
export default router;
