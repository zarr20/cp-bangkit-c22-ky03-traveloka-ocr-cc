import express from "express";

import {
    getUsers,
    Register,
    Login,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    Logout
} from "../controllers/UserController.js";

import {
    getdataktp,
    getdataktpById,
    createdataktp,
    updatedataktp,
    deletedataktp,
    tolakdataktp,
    terimadataktp,
    getdataktpByNik,
    countKTP
} from "../controllers/dataktpController.js";

import {
    getadmin,
    getadminById,
    Register_admin,
    Login_admin,
    updateadmin,
    deleteadmin,
    Logout_admin
} from "../controllers/adminController.js";

import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { uploadKTP } from "../controllers/UploadFileController.js";

import path from "path";
const __dirname = path.resolve();


const router = express.Router();

router.get('/dataktp/total', countKTP);


router.post('/upload/ktp', function(req, res, next) {
    console.log(req.files);
    if (!req.files) {
        return res.status(400).send("No files");
    }

    const file = req.files.ktp;
    const path = __dirname + "/uploads/" + file.name;

    file.mv(path, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send({ status: "success", path: path });
    });

});

router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/users', verifyToken, getUsers);
router.get('/users/:id', getUserById);
//router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/dataktp', getdataktp);
router.get('/dataktp/:id', getdataktpById);
router.get('/dataktp/nik/:id', getdataktpByNik);

router.post('/dataktp', createdataktp);
router.patch('/dataktp/:id', updatedataktp);
router.delete('/dataktp/:id', deletedataktp);

router.patch('/dataktp/tolak/:id', tolakdataktp);
router.patch('/dataktp/terima/:id', terimadataktp);


router.get('/admin',  verifyToken, getadmin);
router.get('/admin/:id', getadminById);
router.post('/admin', Register_admin);
router.post('/login', Login_admin);
router.get('/token', refreshToken);
router.delete('/logout', Logout_admin);
router.patch('/admin/:id', updateadmin);
router.delete('/admin/:id', deleteadmin);

export default router;
