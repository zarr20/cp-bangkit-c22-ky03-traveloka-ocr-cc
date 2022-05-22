import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import dataktpRoute from "./routes/dataktpRoute.js";

// const express = require("express");
// const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(dataktpRoute);

app.listen(5000, () => console.log('Server berjalan ...'));