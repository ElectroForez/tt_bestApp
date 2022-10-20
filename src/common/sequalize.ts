import { Sequelize } from 'sequelize-typescript';
import {Chat, ChatUsers, User} from "../models";


export const sequelize = new Sequelize({
    database: process.env.DB_NAME || 'postgres',
    dialect: 'postgres',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_HOST) || 5432,
    models: [User, Chat, ChatUsers],
    sync: {
        force: true,
        logging: false
    }
});