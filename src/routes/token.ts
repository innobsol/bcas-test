import express from 'express';
import { getToken, addToken } from '../controllers';
const tokenRouter = express.Router();

tokenRouter.get('/:id', getToken);
tokenRouter.post('/', addToken);

export { tokenRouter };