import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

import {
    getdataktp,
    getdataktpById,
    createdataktp,
    updatedataktp,
    deletedataktp
} from "../controllers/dataktpController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/dataktp', getdataktp);
router.get('/dataktp/:id', getdataktpById);
router.post('/dataktp', createdataktp);
router.patch('/dataktp/:id', updatedataktp);
router.delete('/dataktp/:id', deletedataktp);


export default router;