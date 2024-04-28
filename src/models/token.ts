
import { Optional, STRING, INTEGER } from 'sequelize';
import db from '../db';
import { TokenInstance } from '../types';

const TokenModel = db.define<TokenInstance>('token', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  ticker: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
});

export default TokenModel;
