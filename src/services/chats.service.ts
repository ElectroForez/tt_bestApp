import ApiError from "../errors/ApiError";
import {CreateChatDto} from "../dto";
import {UsersService} from "./users.service";
import {Chat, User} from "../models";
import {sequelize} from "../common/sequalize";



export class ChatsService {
    private usersService = new UsersService();

    async getAll() {
        const result = await Chat.findAll({});
        return result;
    }

    async create(name: string) {
        const chat = new Chat({name});
        chat.users = [];
        await chat.save();
        return chat;
    }

    async addUserToChat(chat: Chat, user: User) {
        await chat.$add("users", user.id);
        chat.users.push(user);
        return chat;
    }


    async add(dto: CreateChatDto) {
        const candidate = await this.getByName(dto.name);
        if (candidate) throw ApiError.Conflict("Chat with this name already exists");

        const chat = await this.create(dto.name);

        for (const userId of dto.users) {
            const user = await this.usersService.getById(userId);
            if (!user) {
                throw ApiError.NotFound(`User with id ${userId} not exists`);
            }

            await this.addUserToChat(chat, user);
        }

        return chat;
    }

    async getById(id: number) {
        const result = await Chat.findByPk(id, {include: {all: true}});
        return result;
    }

    async getByName(name: string) {
        const result = await Chat.findOne({where: {name}});
        return result;
    }

    async getUserChats(userId: number) {
        const user = await User.findByPk(userId);
        if (!user) return;

        const [results, metadata] = await sequelize.query(`
            SELECT "Chats".* FROM "Chats"
            JOIN "ChatUsers" ON "ChatUsers"."chatId" = "Chats"."id"
            JOIN "Messages" ON "Messages"."chat" = "Chats"."id"
            WHERE "ChatUsers"."authorId" = ${userId}
            GROUP BY "Chats"."id"
            ORDER BY MAX("Messages"."createdAt") DESC
        `)

        return results;
    }
}