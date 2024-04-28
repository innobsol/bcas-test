
import db from '../db';
import Joi from '@hapi/joi'
import { STRING, INTEGER } from 'sequelize';
import { TokenInstance } from '../types';

const Token = db.define<TokenInstance>('token', {
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
}, { timestamps: false });

const TokenSchema = Joi.object<TokenInstance>({
  ticker: Joi.string().min(1).max(6).required(),
  name: Joi.string().min(1).max(30).required(),
  description: Joi.string().min(1).max(255).required(),
});


export { Token, TokenSchema };
