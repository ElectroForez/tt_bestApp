import {User} from "../models/users.model";

export class UsersService {

    async getAll() {
        const result = await User.findAll({});
        return result;
    }

    async add(username: string) {
        const user = new User({username});
        await user.save();
        console.log(user);
        return user;
    }
}