import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Chat} from "./chats.model";
import {User} from "./users.model";
import {CreateMessageDto} from "../dto";
import {ChatUsers} from "./chat-users.model";

interface MessageCreationAttrs {
    chat: number;
    author: number;
    text: string;
}

@Table({updatedAt: false, })
export class Message extends Model<Message, MessageCreationAttrs> {

    @ForeignKey(() => ChatUsers)
    @Column
    chat!: number;

    @ForeignKey(() => ChatUsers)
    @Column
    author!: number;

    @Column
    text!: string;

    @BelongsTo(() => ChatUsers)
    chatUser!: ChatUsers;
}

export default Message;
