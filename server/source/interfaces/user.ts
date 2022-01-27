import { Document } from 'mongoose';

export default interface IUser extends Document {
    name: string;
    weight: number;
    extraInformation: string;
}
