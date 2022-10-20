import {Table, Column, Model} from 'sequelize-typescript';

interface UserCreationAttrs {
    username: string;
}

@Table({updatedAt: false})
export default class User extends Model<User, UserCreationAttrs> {

    @Column({unique: true})
    username!: string;

}