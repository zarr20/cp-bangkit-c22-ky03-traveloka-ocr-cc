import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const dataktp = db.define('dataktp', {
    nik: DataTypes.STRING,
    name: DataTypes.STRING,
    tempat: DataTypes.STRING,
    tgl_lahir: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    gol_darah: DataTypes.STRING,
    alamat: DataTypes.STRING,
    agama: DataTypes.STRING,
    status_perkawinan: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    kewarganegaraan: DataTypes.STRING,
    kode_pos: DataTypes.STRING,
    status: DataTypes.STRING 
}, {
    freezeTableName: true
});

export default dataktp;

(async() => {
    await db.sync();
    console.log("Database connected: Data KTP");
})();
