import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import IUser from '../interfaces/user';

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        weight: { type: Number, required: true }
    },
    {
        timestamps: true
    }
);

UserSchema.post<IUser>('save', function () {
    logging.info('Mongo', 'Looking at current weight: ', this);
});

export default mongoose.model<IUser>('User', UserSchema);