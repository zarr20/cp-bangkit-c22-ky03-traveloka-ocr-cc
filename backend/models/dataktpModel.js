import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const dataktp = db.define('dataktp', {
    nik: DataTypes.STRING,
    name: DataTypes.STRING,
    tempat: DataTypes.STRING,
    tgl_lahir: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    alamat: DataTypes.STRING,
    agama: DataTypes.STRING,
    status_perkawinan: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    kewarganegaraan: DataTypes.STRING,
    kode_pos: DataTypes.STRING
}, {
    freezeTableName: true
});

export default dataktp;

(async() => {
    await db.sync();
})();