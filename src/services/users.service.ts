import {CreateUserDto} from "../dto";
import {Chat, User} from "../models";
import ApiError from "../errors/ApiError";
import {UpdateUserDto} from "../dto/update-user.dto";

export class UsersService {

    async getAll() {
        const result = await User.findAll({});
        return result;
    }

    async add(dto: CreateUserDto) {
        const username = dto.username;

        const candidate = await this.getByUsername(username);
        if (candidate) throw ApiError.Conflict("User with this username already exists");

        const user = new User({username});
        await user.save();
        return user;
    }

    async getById(id: number) {
        const result = await User.findByPk(id, {include: {model: Chat}});
        return result;
    }

    async getByUsername(username: string) {
        const result = await User.findOne({where: {username}});
        return result;
    }

    async deleteById(id: number) {
        const result = await User.destroy({where: {id}});

        if (!result) throw ApiError.NotFound(`User with id ${id} not found`)
        return id;
    }

    async update(dto: UpdateUserDto) {
        const result = await User.update( {...dto}, {where: {id: dto.id}});
        console.log(result);
        if (!result[0]) throw ApiError.NotFound(`User with id ${dto.id} not found`)
        return dto.id;
    }


}