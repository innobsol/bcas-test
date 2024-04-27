import express from 'express';

const tokenRouter = express.Router();

tokenRouter.get('/:id', (req, res, next) => {
  res.send({ test: 'get' })
});

tokenRouter.post('/', (req, res, next) => {
  res.send({ test: 'post' })
});

export { tokenRouter };