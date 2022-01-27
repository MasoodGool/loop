import { NextFunction, Request, Response } from 'express';

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'I AM ALIVE'
    });
};

export default { serverHealthCheck };
