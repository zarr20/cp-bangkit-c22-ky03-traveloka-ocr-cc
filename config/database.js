import { Sequelize } from "sequelize";

import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Sequelize('database-ky03', 'root', '', {
    host: '34.101.52.65',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync(__dirname + '/server-ca.pem'),
            key: fs.readFileSync(__dirname + '/client-key.pem'),
            cert: fs.readFileSync(__dirname + '/client-cert.pem')
        }
      },
      define: {
        timestamps: false
    },

    logging: false


});

// const db = new Sequelize('database-ky03', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',

//     logging: false


// });

export default db;
