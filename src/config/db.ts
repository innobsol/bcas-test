import { Options } from 'sequelize';

//Now only dev environment is configured
//Usually here we would have staging and production configs
const DbConfig: { [key: string]: Options } = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: 5432,
  },
}

export { DbConfig };
