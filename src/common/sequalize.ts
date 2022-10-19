import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    models: [__dirname + '/**/*.model.ts'],
});
