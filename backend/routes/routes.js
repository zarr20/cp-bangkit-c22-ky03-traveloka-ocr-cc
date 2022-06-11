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
import { uploadKTP } from "../controllers/UploadFile.js";

// import path from "path";
// const __dirname = path.resolve();

const router = express.Router();

// router.post('/upload/ktp', function(req, res, next) {
//     console.log(req.files);
//     if (!req.files) {
//         return res.status(400).send("No files");
//     }

//     const file = req.files.ktp;
//     const path = __dirname + "/uploads/" + file.name;

//     file.mv(path, (err) => {
//         if (err) {
//             return res.status(500).send(err);
//         }
//         return res.send({ status: "success", path: path });
//     });

// });

router.get("/kyc/info", countKTP);

router.get("/ktp", getKtp);
router.get("/ktp/:id", getKtpByNik);
router.get("/ktp/id/:id", getKtpById);
router.post("/ktp", insertKtp);
// router.patch('/ktp/:id', updatedataktp);
router.delete("/ktp/:id", deleteKtp);
router.patch("/ktp/reject/:id", rejectKtp);
router.patch("/ktp/approve/:id", approveKtp);

router.post("/upload/ktp", uploadKTP);
// upload ktp akan me-return path gambar untuk pengecekan ocr

// User & Admin Routes
// get token
router.get("/token", refreshToken);
router.get("/admin/token", refreshTokenAdmin);
// User Routes
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.delete("/auth/logout", logoutUser);
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
