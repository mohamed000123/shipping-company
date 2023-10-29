import { Parcel } from "../models/parcel.js";
import { v4 as uuidv4 } from "uuid";
import { userTypes } from "../enum/userTypes.js";
import { parcelStatus } from "../enum/parcelStatus.js";
import dotenv from "dotenv";
dotenv.config();

export const createParcel = (req, res) => {
  if (req.type == userTypes.User) {
    const { title, description, pickupAddress, deliveryAddress } = req.body;
    const userId = req.userId;
    const newParcel = {
      id: uuidv4(),
      title,
      description,
      pickupAddress,
      deliveryAddress,
      userId,
      status: parcelStatus.created,
      createdAt: new Date(),
    };
    Parcel.create(newParcel)
      .then(() => {
        res
          .status(200)
          .json({ message: "parcel created successfully", success: "true" });
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json(e);
      });
  } else {
    res.status(500).json("wrong credentials");
  }
};

export const getUserParcels = (req, res) => {
  try {
    if (req.type == userTypes.User) {
      Parcel.findAll({
        where: {
          userId: req.userId,
        },
        order: [["createdAt", "DESC"]],
      })
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((e) => {
          res.status(500).json(e);
        });
    } else {
      res.status(500).json("wrong credentials");
    }
  } catch (e) {
    console.log("error", e);
  }
};
