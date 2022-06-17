import express from "express";

import {
  getUserById,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  logoutUser,
  getUser,
} from "../controllers/User.js";

import {
  countKTP,
  getKtp,
  getKtpById,
  getKtpByNik,
  insertKtp,
  deleteKtp,
  rejectKtp,
  approveKtp,
} from "../controllers/Ktp.js";

import {
  deleteAdmin,
  getAdmin,
  getAdminById,
  loginAdmin,
  logoutAdmin,
  registerAdmin,
  updateAdmin,
} from "../controllers/Admin.js";

import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken, refreshTokenAdmin } from "../controllers/RefreshToken.js";
import { uploadFile } from "../controllers/UploadFile.js";

// import path from "path";
// const __dirname = path.resolve();

const router = express.Router();


router.get("/ktp/count", countKTP);

router.get("/ktp", getKtp);
router.get("/ktp/:id", getKtpByNik);
router.get("/ktp/id/:id", getKtpById);
router.post("/ktp", insertKtp);
// router.patch('/ktp/:id', updatedataktp);
router.delete("/ktp/:id", deleteKtp);
router.patch("/ktp/reject/:id", rejectKtp);
router.patch("/ktp/approve/:id", approveKtp);

router.post("/upload/ktp", uploadFile);
// upload ktp akan me-return path gambar untuk pengecekan ocr

// User & Admin Routes
// get token
router.get("/token", refreshToken);
router.get("/admin/token", refreshTokenAdmin);
// User Routes
router.post("/register", registerUser);
router.post("/auth", loginUser);
router.delete("/logout", logoutUser);
router.get("/users", verifyToken, getUser);
router.get("/users/:id", getUserById);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
// Admin Routes
router.get("/admin", getAdmin);
router.get("/admin/:id", getAdminById);
router.post("/admin", registerAdmin);
router.post("/admin/login", loginAdmin);
router.delete("/admin/logout", logoutAdmin);
router.patch("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);
// END - User & Admin Routes

export default router;
