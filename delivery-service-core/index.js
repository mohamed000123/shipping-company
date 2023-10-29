import express from "express";
import { sequelize } from "./models/dbConnection.js";
import authRouter from "./routes/authRoute.js";
import parcelRouter from "./routes/parcelRoute.js";
import bikerRouter from "./routes/bikerRoute.js"
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import authCheck from "./middleware/authMiddelware.js";
const app = express();
sequelize
  .authenticate()
  .then(() => {
    app.listen("8000", () => {
      console.log("server is running on port 8000");
    });
  })
  .catch((e) => {
    console.log("error connecting to db", e);
  });
// middelwares
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// auth route
app.use("/", authRouter);
// parcel route
app.use("/", authCheck, parcelRouter);
// biker route
app.use("/", authCheck, bikerRouter);
// user route
app.use("/", authCheck, userRoute);
