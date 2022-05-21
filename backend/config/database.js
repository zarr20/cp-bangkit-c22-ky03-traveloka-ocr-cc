import { Sequelize } from "sequelize";

const db = new Sequelize('nama_db','root','123456', {
host: 'localhost',
dialect:'mysql'
});