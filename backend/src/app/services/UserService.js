import UserModel from "@models/User";
import HttpError from "@utils/HttpError";

class UserService {
    async store({ username, password }) {
        const userExists = await UserModel.findOne({ username }).lean();

        if (userExists) {
            throw new HttpError("User already exists", 400);
        }

        const createdUser = await UserModel.create({ username, password });

        return {
            id: createdUser.id,
            username: createdUser.username,
        };
    }
}

export default new UserService();
