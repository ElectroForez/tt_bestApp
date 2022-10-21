import ApiError from "../errors/ApiError";
import {CreateChatDto} from "../dto";
import {UsersService} from "./users.service";
import {Chat, ChatUsers, Message, User} from "../models";
import UsersModel from "../models/users.model";



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
        const chat = await this.create(dto.name);

        for (const userId of dto.users) {
            const user = await this.usersService.getById(userId);
            if (!user) throw ApiError.Conflict(`User with id ${userId} not exists`);

            await this.addUserToChat(chat, user);
        }

        return chat;
    }

    async getById(id: number) {
        const result = await Chat.findByPk(id, {include: {all: true}});
        return result;
    }

    async getUserChats(userId: number) {
        const chats = await User.findByPk(userId, {
            attributes: [],
            include: [{
                model: Chat,
                through: {
                    attributes: []
                }
            }]
        });

        return chats;
    }
}