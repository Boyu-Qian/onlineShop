import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserByID,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();
//Public
router.route("/").post(registerUser);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/profile").put(protect, updateUserProfile);

//Admin
router.route("/").get(protect, admin, getUsers);
router.route("/:id").delete(protect, admin, deleteUser);
router.route("/:id").get(protect, admin, getUserByID);
router.route("/:id").put(protect, admin, updateUser);

export default router;
