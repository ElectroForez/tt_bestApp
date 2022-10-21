import {Table, Column, Model, BelongsToMany} from 'sequelize-typescript';
import {Chat} from "./chats.model";
import {Message} from "./messages.model";
import ChatUsers from "./chat-users.model";

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

export default User;
