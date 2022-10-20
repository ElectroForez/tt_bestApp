import {Table, Column, Model, ForeignKey} from 'sequelize-typescript';
import Chat from "./chats.model";
import User from "./users.model";


@Table({updatedAt: false})
export default class ChatUsers extends Model<ChatUsers> {

    @ForeignKey(() => Chat)
    @Column
    chatId!: number;

    @ForeignKey(() => User)
    @Column
    userId!: number;
}