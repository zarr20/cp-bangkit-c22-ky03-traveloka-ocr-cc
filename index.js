import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/routes.js";
import fileupload from "express-fileupload";
import bodyParser from "body-parser";
import path from "path";

const __dirname = path.resolve();



dotenv.config();

const app = express();



app.use(fileupload());

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: true }));


app.use(cookieParser());

// app.use("/", function (req, res, next) {
//   var contype = req.headers["content-type"];
  
//   if (contype === "multipart/form-data") {
//     if (req.originalUrl == "/upload/ktp") {
//         return next();
//     } else {
//         app.use(bodyParser.json());
//       app.use(bodyParser.urlencoded({ extended: true }));
      
      
//     }
//   } else {
//     app.use(bodyParser.json());
//       app.use(bodyParser.urlencoded({extended: true}));
     
//       console.log(contype);
//   }
// });


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

console.log(path.join(__dirname, 'uploads'));
// app.use(express.static(path.join(__dirname, 'uploads')));

app.get('/uploads', (req, res) => {
  try{
    const buff = Buffer.from(req.query.url, 'base64');
    const base64_decode = buff.toString('utf-8');
    // str = req.query.url.replace("&=", "");
    // console.log(req.query.url);
    // console.log(decodeURI(req.query.url));
    res.sendFile(path.join(__dirname,'uploads/'+ base64_decode))
  }catch(err){
    console.log(err)
  }
  
})

app.use(router);


const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log("Server berjalan pada PORT:"+Port));
