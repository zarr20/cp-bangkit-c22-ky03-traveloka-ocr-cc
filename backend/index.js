import express from "express";
import cors from "cors";
// import UserRoute from "./routes/UserRoute.js";
// import dataktpRoute from "./routes/dataktpRoute.js";
import routes from "./routes/routes.js";

// const express = require("express");
// const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000, () => console.log('Server berjalan di localhost:5000'));