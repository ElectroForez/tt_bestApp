import {Table, Column, Model, CreatedAt} from 'sequelize-typescript';

interface UserCreationAttrs {
    username: string;
}

@Table
export class User extends Model<User, UserCreationAttrs> {
    @Column
    username!: string;

    @CreatedAt
    creationDate!: Date;

}