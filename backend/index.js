import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/routes.js";
import fileupload from "express-fileupload";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(fileupload());

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


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
app.use(router);

app.listen(5000, () => console.log("Server berjalan ..."));
