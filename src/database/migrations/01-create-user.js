"use strict";

module.exports = {
  up: async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().createTable("Users", {
      id: {
        type: "SERIAL",
        primaryKey: true,
        allowNull: false,
      },
      balance: {
        type: "INTEGER",
        allowNull: false,
        defaultValue: 10000,
      },
      createdAt: {
        type: "TIMESTAMP",
        allowNull: false,
        defaultValue: sequelize.literal("NOW()"),
      },
      updatedAt: {
        type: "TIMESTAMP",
        allowNull: false,
        defaultValue: sequelize.literal("NOW()"),
      },
    });

    await sequelize
      .getQueryInterface()
      .bulkInsert("Users", [{ balance: 10000 }]);
  },

  down: async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().dropTable("Users");
  },
};
