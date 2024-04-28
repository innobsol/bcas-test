import { Optional, Model } from 'sequelize';

type Token = {
  id: 0;
  name: string;
  ticker: string;
  description: string;
}

interface TokenCreation
  extends Optional<Token, 'id'> { }

export interface TokenInstance
  extends Model<Token, TokenCreation>,
  Token {
  createdAt?: Date;
  updatedAt?: Date;
}