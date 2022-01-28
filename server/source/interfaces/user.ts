import { Document, Types } from 'mongoose';

interface IWeight {
    value: number;
}

export default interface IUser extends Document {
    username: string;
    password: string;
    weight: Array<number>;
}
