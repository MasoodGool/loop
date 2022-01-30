import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import User from '../models/user';
import logging from '../config/logging';
import signJWT from '../functions/signJWT';

const NAMESPACE = 'Users';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Token validated, user authorized.');

    return res.status(200).json({
        message: 'Token(s) validated',
        validated: true
    });
};

const sign_up = async (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body;

    let taken = await User.find({ username }).exec();

    if (taken.length !== 0) {
        return res.status(401).json({
            error: 'Username taken, please try another username'
        });
    } else {
        bcryptjs.hash(password, 10, (hashError, hash) => {
            if (hashError) {
                return res.status(401).json({
                    message: hashError.message,
                    error: hashError
                });
            }

            const _user = new User({
                _id: new mongoose.Types.ObjectId(),
                username,
                password: hash
            });

            return _user
                .save()
                .then((user) => {
                    return res.status(201).json({
                        user
                    });
                })
                .catch((error) => {
                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                });
        });
    }
};

const login = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body;
    User.find({ username })
        .exec()
        .then((users) => {
            if (users.length !== 1) {
                return res.status(401).json({
                    message: 'Unauthorized'
                });
            }

            bcryptjs.compare(password, users[0].password, (error, result) => {
                if (result) {
                    signJWT(users[0], (_error, token) => {
                        if (_error) {
                            return res.status(500).json({
                                message: _error.message,
                                error: _error
                            });
                        } else if (token) {
                            return res.status(200).json({
                                message: 'Auth successful',
                                token: token,
                                user: users[0]
                            });
                        }
                    });
                } else {
                    return res.status(401).json({
                        message: 'Password Mismatch'
                    });
                }
            });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({
                error: err
            });
        });
};

const createUser = (req: Request, res: Response, next: NextFunction) => {
    let { username, password, weight } = req.body;

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username,
        password,
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

const saveWeight = (req: Request, res: Response, next: NextFunction) => {
    let { username, weight } = req.body;
    let date = new Date();
    let update = {
        weight: weight,
        date: date
    };

    User.updateOne({ username: username }, { $push: { weight: update } })
        .exec()
        .then((user) => {
            console.log(user);
            res.status(200).json({
                user
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

const getWeights = (req: Request, res: Response, next: NextFunction) => {
    let { username } = req.body;
    User.findOne({ username: username })
        .select('weight')
        .exec()
        .then((users) => {
            return res.status(200).json({
                users: users
            });
        });
};

export default { createUser, validateToken, sign_up, login, saveWeight, getWeights };
