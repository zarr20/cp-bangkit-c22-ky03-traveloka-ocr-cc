import express from "express";
import {
    getdataktp,
    getdataktpById,
    createdataktp,
    updatedataktp,
    deletedataktp
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/dataktp', getdataktp);
router.get('/dataktp/:id', getdataktpById);
router.post('/dataktp', createdataktp);
router.patch('/dataktp/:id', updatedataktp);
router.delete('/dataktp/:id', deletedataktp);


export default router;