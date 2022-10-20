import {CreateUserDto} from "../dto";
import {User} from "../models";

export class UsersService {

    async getAll() {
        const result = await User.findAll({});
        return result;
    }

    async add(dto: CreateUserDto) {
        const username = dto.username;

        const candidate = await this.getByUsername(username);
        if (candidate) return undefined; // undo add

        const user = new User({username});
        await user.save();
        return user;
    }

    async getById(id: number) {
        const result = await User.findByPk(id);
        return result;
    }

    async getByUsername(username: string) {
        const result = await User.findOne({where: {username}});
        return result;
    }
}