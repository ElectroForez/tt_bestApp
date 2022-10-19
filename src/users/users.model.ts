import {Table, Column, Model, CreatedAt} from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column
    username!: string;

    @CreatedAt
    creationDate!: Date;

}