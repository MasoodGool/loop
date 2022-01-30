import express from 'express';
import controller from '../controllers/user';
import extractJWT from '../middleware/extractJWT';

const router = express.Router();

/**
 * @openapi
 * '/api/sign_up':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      500:
 *        description: Server Error
 */
router.post('/sign_up', controller.sign_up);

/**
 * @openapi
 * '/api/login':
 *  post:
 *     tags:
 *     - User
 *     summary: Log in returning user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              Input:
 *                type: object
 *                required:
 *                  - username
 *                  - password
 *                properties:
 *                  username:
 *                    type: string
 *                    default: username
 *                  password:
 *                    type: string
 *                    default: stringPassword123
 *              Response:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  token:
 *                    type: string
 *                  user:
 *                    type: object
 *                  createdAt:
 *                    type: string
 *                  updatedAt:
 *                    type: string
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Server Error
 */
router.post('/login', controller.login);

/**
 * @openapi
 * '/api/save_weight':
 *  put:
 *     tags:
 *     - User
 *     summary: Save a weight entry
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              Input:
 *                type: object
 *                required:
 *                  - username
 *                  - weight
 *                properties:
 *                  username:
 *                    type: string
 *                    default: username
 *                  weight:
 *                    type: number
 *                    default: 78.42
 *              Response:
 *                type: object
 *                properties:
 *                  user:
 *                    type: object
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      500:
 *        description: Server Error
 */
router.put('/save_weight', extractJWT, controller.saveWeight);

/**
 * @openapi
 * /api/get_weight_history:
 *  get:
 *     tags:
 *     - User
 *     summary: History of user's weight
 *     description: Retrieves the history of weight entries and their dates as an object for a specific user
 *     responses:
 *       200:
 *         description: Successfully retried object of weights recorded
 */
router.get('/get_weight_history', extractJWT, controller.getWeights);

export = router;
