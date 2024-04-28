import { Options } from 'sequelize';

const DbConfig: { [key: string]: Options } = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: +(process.env.DB_PORT || 5432),
    dialect: "postgres",
  },
  testing: {
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASS_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    port: +(process.env.DB_PORT_TEST || 23640),
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  },
}

export { DbConfig };
