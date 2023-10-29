import { Parcel } from "../models/parcel.js";
import dotenv from "dotenv";
import { parcelStatus } from "../enum/parcelStatus.js";
dotenv.config();

export const getParcels = (req, res) => {
  Parcel.findAll({
    where: {
      status: parcelStatus.created,
    },
    order: [["createdAt", "DESC"]],
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(200).json(e);
    });
};
