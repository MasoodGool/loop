import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import User from '../models/user';
import logging from '../config/logging';
import signJWT from '../functions/signJWT';

const NAMESPACE = 'Users';

// const validateToken = (req: Request, res: Response, next: NextFunction) => {
//     logging.info(NAMESPACE, 'Token validated, user authorized.');

//     return res.status(200).json({
//         message: 'Token(s) validated'
//     });
// };

// const sign_up = (req: Request, res: Response, next: NextFunction) => {
//     let { username, password, weight } = req.body;

//     bcryptjs.hash(password, 10, (hashError, hash) => {
//         if (hashError) {
//             return res.status(401).json({
//                 message: hashError.message,
//                 error: hashError
//             });
//         }

//         const _user = new User({
//             _id: new mongoose.Types.ObjectId(),
//             username,
//             password: hash,
//             weight
//         });

//         return _user
//             .save()
//             .then((user) => {
//                 return res.status(201).json({
//                     user
//                 });
//             })
//             .catch((error) => {
//                 return res.status(500).json({
//                     message: error.message,
//                     error
//                 });
//             });
//     });
// };

// const login = (req: Request, res: Response, next: NextFunction) => {
//     let { username, password } = req.body;

//     User.find({ username })
//         .exec()
//         .then((users) => {
//             if (users.length !== 1) {
//                 return res.status(401).json({
//                     message: 'Unauthorized'
//                 });
//             }

//             bcryptjs.compare(password, users[0].password, (error, result) => {
//                 if (error) {
//                     return res.status(401).json({
//                         message: 'Password Mismatch'
//                     });
//                 } else if (result) {
//                     signJWT(users[0], (_error, token) => {
//                         if (_error) {
//                             return res.status(500).json({
//                                 message: _error.message,
//                                 error: _error
//                             });
//                         } else if (token) {
//                             return res.status(200).json({
//                                 message: 'Auth successful',
//                                 token: token,
//                                 user: users[0]
//                             });
//                         }
//                     });
//                 }
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// };

// const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
//     User.find()
//         .select('-password')
//         .exec()
//         .then((users) => {
//             return res.status(200).json({
//                 users: users,
//                 count: users.length
//             });
//         })
//         .catch((error) => {
//             return res.status(500).json({
//                 message: error.message,
//                 error
//             });
//         });
// };

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
    let { username, password } = req.body;

    User.updateOne({ username: username }, { $push: { weight: 33.21 } })
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
    let { username, password } = req.body;
    User.findOne({ username: username })
        .select('weight')
        .exec()
        .then((users) => {
            return res.status(200).json({
                users: users
            });
        });
};

//export default { getAllUsers, createUser, validateToken, sign_up, login, saveWeight, getWeights };
export default { createUser, saveWeight, getWeights };
