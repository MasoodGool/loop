import { Document, Types } from 'mongoose';

interface IWeight {
    weight: number;
    date: Date;
}

export default interface IUser extends Document {
    username: string;
    password: string;
    weight: Array<IWeight>;
}
