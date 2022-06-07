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

import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { uploadKTP } from "../controllers/UploadFileController.js";

import multer from "multer";

// membuat konfigurasi diskStorage multer
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "/uploads"));
    },
    // konfigurasi penamaan file yang unik
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

const router = express.Router();

router.get('/dataktp/total', countKTP);
// router.get('/dataktp/total/known', countKTPknown);
// router.get('/dataktp/total/unknown', countKTPunknown);

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).single('ktp');

router.post('/upload/ktp', function (req, res, next) {
  upload(req, res, function(err) {
    
    console.log(req.body); // return full value
    console.log(req.files); // return full value

    if(err) {
      console.log(err);
      return res.status(404).send("a error ocurred");
    }
    if (req.file) { 
      console.dir(req.file); 
      return res.end('Thank you for the file'); 
    } else {
      res.end('Missing file'); 
    }
 });

});

router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/users', verifyToken, getUsers);
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