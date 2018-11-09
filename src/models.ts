import Sequelize from "sequelize"
import { sequelize } from "./db"

export const AppFeature = sequelize.define("AppFeature", {
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
