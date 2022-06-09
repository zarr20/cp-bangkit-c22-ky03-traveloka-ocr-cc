import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    // telepon: {
    //     type: DataTypes.STRING
    // },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

(async() => {
    await db.sync();
})();

export default User;