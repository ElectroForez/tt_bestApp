import {Table, Column, Model, BelongsToMany} from 'sequelize-typescript';
import ChatUsers from "./chats-users.model";
import User from "./users.model";

interface ChatCreationAttrs {
    name: string;
}

@Table({updatedAt: false})
export default class Chat extends Model<Chat, ChatCreationAttrs> {

    @Column
    name!: string;

    @BelongsToMany(() => Chat, () => ChatUsers)
    users!: User[];
}