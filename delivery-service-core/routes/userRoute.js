import express from "express";
import { createParcel, getUserParcels } from "../controllers/userController.js";
const router = express.Router();
router.post("/create-parcel", createParcel);
router.get("/all-parcels/user", getUserParcels);
export default router;
