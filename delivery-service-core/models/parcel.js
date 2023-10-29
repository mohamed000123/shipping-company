import { sequelize } from "./dbConnection.js";
import { Sequelize } from "sequelize";
import { User } from "./user.js";
import { Biker } from "./biker.js";
export const Parcel = sequelize.define(
  "parcel",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pickupAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deliveryAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt:{
      type:Sequelize.DATE,
    },
    pickUpDate:{
      type:Sequelize.DATE,
    },
    deliveryDate:{
      type:Sequelize.DATE,
    },
  }
);
Parcel.belongsTo(User);
Parcel.belongsTo(Biker);
Parcel.sync();
