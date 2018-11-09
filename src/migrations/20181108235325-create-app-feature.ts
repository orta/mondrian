import { QueryInterface, SequelizeStatic } from "sequelize"
import { AppFeature } from "../models"

export default {
  up: async (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    await queryInterface.createTable(AppFeature.getTableName(), {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.STRING,
        allowNull: false
      },
      value: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    await queryInterface.dropTable(AppFeature.getTableName() as string)
  },
}
