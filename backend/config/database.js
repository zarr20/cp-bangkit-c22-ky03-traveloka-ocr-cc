import { Sequelize } from "sequelize";

const db = new Sequelize('db_new', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    logging: false


});

export default db;