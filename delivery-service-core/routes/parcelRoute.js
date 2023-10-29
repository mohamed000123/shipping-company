import express from "express";
import {
  getParcels,
} from "../controllers/parcelController.js";
const router = express.Router();
router.get("/all-parcels", getParcels);



export default router;
