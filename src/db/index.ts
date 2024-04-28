import { Sequelize } from 'sequelize';
import { DbConfig } from '../config'

const env = process.env.NODE_ENV || "development";
const config = DbConfig[env]
const db = new Sequelize(config);

export default db;