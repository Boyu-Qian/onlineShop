import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
// Alternatively
//router.get('/').get(getProducts);

router.get("/top", getTopProducts);

router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.route("/:id/reviews").post(protect, createReview);
// Alternatively
//router.get('/:id').get(getProduct);
export default router;
