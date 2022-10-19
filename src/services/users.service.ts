import {sequelize} from "../common/sequalize";
import {User} from "../models/users.model";

export class UsersService {
    private usersRepository = sequelize.getRepository(User);

    constructor() {
        this.usersRepository.sync()
    }

    async getAll() {
        const result = await this.usersRepository.findAll({});
        return result;
    }

    async add(username: string) {
        const user = new User({username});
        await user.save();
        console.log(user);
        return user;
    }
}