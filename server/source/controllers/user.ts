import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/user';

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    User.find()
        .exec()
        .then((users) => {
            return res.status(200).json({
                users: users,
                count: users.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const createUser = (req: Request, res: Response, next: NextFunction) => {
    let { name, weight } = req.body;

    console.log('Check Body', req);

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        weight
    });

    return user
        .save()
        .then((result) => {
            return res.status(201).json({
                user: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { getAllUsers, createUser };
