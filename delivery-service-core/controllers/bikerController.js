import { Parcel } from "../models/parcel.js";
import { userTypes } from "../enum/userTypes.js";
import { parcelStatus } from "../enum/parcelStatus.js";
import dotenv from "dotenv";
dotenv.config();

export const pickUp = (req, res) => {
  try {
    if (req.type == userTypes.Biker) {
      const bikerId = req.userId;
      Parcel.update(
        { status: parcelStatus.pickedUp, bikerId, pickUpDate: new Date() },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then(() => {
          return res
            .status(200)
            .json(`parcel has been picked up successfully `);
        })
        .catch((e) => {
          return res.status(500).json(`something went wrong" ${e}`);
        });
    } else {
      return res.status(500).json(`wrong credentials`);
    }
  } catch (err) {
    console.log(err);
  }
};

export const bikerParcels = (req, res) => {
  try {
    if (req.type == userTypes.Biker) {
      Parcel.findAll({
        where: [
          {
            bikerId: req.userId,
          },
          {
            status: parcelStatus.pickedUp,
          },
        ],
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
export const delivered = (req, res) => {
  try {
    if (req.type == userTypes.Biker) {
      Parcel.findAll({
        where: [
          {
            bikerId: req.userId,
          },
          {
            status: parcelStatus.delivered,
          },
        ],
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

export const deliver = (req, res) => {
  try {
    if (req.type == userTypes.Biker) {
      Parcel.update(
        { status: parcelStatus.delivered, deliveryDate: new Date() },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then(() => {
          return res
            .status(200)
            .json(`parcel has been delivered  successfully `);
        })
        .catch((e) => {
          return res.status(500).json(`something went wrong" ${e}`);
        });
    } else {
      return res.status(500).json(`wrong credentials`);
    }
  } catch (err) {
    console.log(err);
  }
};
