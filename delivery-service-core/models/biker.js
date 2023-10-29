import { sequelize } from "./dbConnection.js";
import { Sequelize } from "sequelize";


export const Biker = sequelize.define(
  "biker",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isLongEnough(value) {
          if (value.length < 8) {
            throw new Error("Password should be at least 8 characters long");
          }
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

Biker.sync();
