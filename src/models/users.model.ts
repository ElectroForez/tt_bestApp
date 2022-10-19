import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

interface UserCreationAttrs {
    username: string;
}

@Table({updatedAt: false})
export class User extends Model<User, UserCreationAttrs> {

    @Column({unique: true})
    username!: string;

}