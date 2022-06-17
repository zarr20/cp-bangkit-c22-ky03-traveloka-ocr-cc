import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const dataktp = db.define('dataktp', {
    id:  {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nik: {
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    tempat:{
        type: DataTypes.STRING
    },
    tgl_lahir:{
        type: DataTypes.STRING
    },
    jenis_kelamin:{
        type: DataTypes.STRING
    },
    gol_darah:{
        type: DataTypes.STRING
    },
    alamat:{
        type: DataTypes.STRING
    },
    agama:{
        type: DataTypes.STRING
    },
    status_perkawinan:{
        type: DataTypes.STRING
    },
    pekerjaan:{
        type: DataTypes.STRING
    },
    kewarganegaraan:{
        type: DataTypes.STRING
    },
    kode_pos:{
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    }
    ,
    foto_ktp: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default dataktp;

(async() => {
    await db.sync();
    // console.log("Database connected: Data KTP");
})();
