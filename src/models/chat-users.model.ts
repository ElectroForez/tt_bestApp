import {Table, Column, Model, ForeignKey, PrimaryKey, BelongsTo, HasMany} from 'sequelize-typescript';
import {Chat} from "./chats.model";
import {User} from "./users.model";
import Message from "./messages.model";


@Table({updatedAt: false})
export class ChatUsers extends Model<ChatUsers> {

    @PrimaryKey
    @ForeignKey(() => Chat)
    @Column
    chatId!: number;

    @PrimaryKey
    @ForeignKey(() => User)
    @Column
    authorId!: number;

    @HasMany(() => Message)
    messages!: Message[];
}

export default ChatUsers;
