import express from 'express';
import { getToken, addToken } from '../controllers';
const tokenRouter = express.Router();

/**
 * @swagger
 * /token/{id}:
 *  get:
 *    summary: Retrieve a token by it's id
 *    tags: [Token]
 *    parameters:
 *      - in: path
 *        name: id
 *    responses:
 *      200:
 *        description: A token containing the provided ID
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                ticker:
 *                  type: string
 *                name:
 *                  type: string
 *                description:
 *                  type: string
 *      404:
 *        description: Token with ID {id} not found.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *      500:
 *        description: Unknown error occured.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *            
 */
tokenRouter.get('/:id', getToken);

/**
 * @swagger
 * /token/:
 *  post:
 *    summary: Create a new token
 *    tags: [Token]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              ticker:
 *                type: string
 *              name:
 *                type: string
 *              description:
 *                type: string
 *    responses:
 *      201:
 *        description: The token was successfully created
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               msg:
 *                 type: string
 *      400:
 *        description: Provided params are invalid
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *      500:
 *        description: An error occured during token creation
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               msg:
 *                 type: string
 */
tokenRouter.post('/', addToken);

export { tokenRouter };