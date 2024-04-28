import { Sequelize } from 'sequelize';
import dbConfig from '../config'

const env = process.env.NODE_ENV || "development";
const config = dbConfig[env]
const db = new Sequelize(config);

export default db;