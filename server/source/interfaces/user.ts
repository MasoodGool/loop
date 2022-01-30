import { Document, Types } from 'mongoose';

interface IWeight {
    weight: number;
    date: Date;
}

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          default: username
 *        password:
 *          type: string
 *          default: stringPassword123
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 */

export default interface IUser extends Document {
    username: string;
    password: string;
    weight: Array<IWeight>;
}
