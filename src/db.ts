import Sequelize from "sequelize"

export const sequelize = new Sequelize({
  host: process.env.DB_URL,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: (process.env.DB_PASSWORD && parseInt(process.env.DB_PASSWORD)) || 5432,
  pool: {
    max: 1,
    min: 0,
  },
  dialect: 'postgres',
})
