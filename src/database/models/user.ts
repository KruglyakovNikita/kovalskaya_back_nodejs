import { DataTypes, Model } from "sequelize";
import { pgClient } from "..";

export interface UserModel extends Model {
  id: string;
  balance: number;
}

export const User = pgClient.define<UserModel>("User", {
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10000,
  },
});
