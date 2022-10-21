import {Table, Column, Model, BelongsToMany} from 'sequelize-typescript';
import {Message} from "./messages.model";
import {User} from "./users.model";
import ChatUsers from "./chat-users.model";

interface ChatCreationAttrs {
    name: string;
}

@Table({updatedAt: false})
export class Chat extends Model<Chat, ChatCreationAttrs> {

    @Column
    name!: string;

    @BelongsToMany(() => User, () => ChatUsers)
    users!: User[];
}

export default Chat;