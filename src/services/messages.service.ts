import {CreateMessageDto} from "../dto";
import {Message, User} from "../models";
import ApiError from "../errors/ApiError";
import {UsersService} from "./users.service";

export class MessagesService {
    private usersService = new UsersService();

    async getAll() {
        const result = await User.findAll({});
        return result;
    }

    async add(dto: CreateMessageDto) {
        const user = await this.usersService.getById(dto.author);
        if (!user) throw ApiError.Conflict(`User with id ${dto.author} not exists`);
        const chat = user.getDataValue('chats').find(chat => chat.id === dto.chat);

        if (!chat) throw ApiError.Conflict(`User ${dto.author} not exists in chat ${dto.chat}`);

        const message = new Message({
            authorId: dto.author,
            chatId: dto.chat,
            text: dto.text
        });
        await message.save();

        return message;

    }

    async getById(id: number) {
        const result = await Message.findByPk(id, {include: {all: true}});
        return result;
    }

    async getFromChat(chatId: number) {
        const result = await Message.findAll({
            where: {
                chatId
            },
            order: [['createdAt', 'ASC']]
        })
        return result;
    }
}