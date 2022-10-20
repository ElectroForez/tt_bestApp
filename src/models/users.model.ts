import {Table, Column, Model, BelongsToMany} from 'sequelize-typescript';
import {Chat} from "./chats.model";
import {ChatUsers} from "./chats-users.model";

interface UserCreationAttrs {
    username: string;
}

@Table({updatedAt: false})
export class User extends Model<User, UserCreationAttrs> {

    @Column({unique: true})
    username!: string;

    @BelongsToMany(() => Chat, () => ChatUsers)
    chats!: Chat[];
}