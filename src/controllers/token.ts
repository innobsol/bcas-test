import { Request, Response, NextFunction } from 'express'
import { Token, TokenSchema } from '../models'
import { UniqueConstraintError } from 'sequelize';

const getToken = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send({ msg: "The provided token ID is not valid." });
  }


  try {
    const token = await Token.findOne({
      where: {
        id
      }
    })
    if (!token) {
      return res.status(404).send({ msg: `Token with ID ${id} not found.` });
    }
    return res.status(200).send(token?.dataValues);
  } catch (err) {
    return res.status(500).send({ msg: "Unkown error occured." });
  }
}

const addToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.body;
  const { error } = TokenSchema.validate(token);
  if (error) {
    return res.status(400).send({ msg: error?.message });
  }

  try {
    const savedToken = await Token.create(token);
    return res.status(201).send({ msg: `Created token with ID ${savedToken.dataValues.id}` });
  } catch (err: unknown) {
    const queryErr = err as UniqueConstraintError;
    const { errors } = queryErr;
    let msg = "Unkown error occured."

    if (errors.length) {
      msg = errors[0].message
    }

    return res.status(500).send({ msg });
  }
}

export { getToken, addToken };