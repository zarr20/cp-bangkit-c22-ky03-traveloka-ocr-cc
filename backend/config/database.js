import { Sequelize } from "sequelize";

const db = new Sequelize('traveloka_ocr', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;