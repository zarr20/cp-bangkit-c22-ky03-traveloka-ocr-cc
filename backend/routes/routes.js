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
    getdataktpByNik
} from "../controllers/dataktpController.js";

import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();


router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/users', verifyToken, getUsers);
// router.get('/users', getUsers);
router.get('/users/:id', getUserById);
// router.post('/users', createUser);
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


export default router;