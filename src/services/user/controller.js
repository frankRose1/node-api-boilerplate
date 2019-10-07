import mongoose from 'mongoose';
import { validateCreateUser } from '../../utils/validation';
import { HTTP400Error } from '../../utils/httpErrors';

const User = mongoose.model('User');

export const createUser = async (req, res) => {
    const { error, value } = validateCreateUser(req.body);

    if (error) {
        throw new HTTP400Error(error.details)
    }

    const user = new User(req.body);
    await user.save()
    res.sendStatus(201)
};
