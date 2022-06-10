import { Sequelize } from "sequelize";

const db = new Sequelize('ocr_trvlk', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    logging: false


});

export default db;
