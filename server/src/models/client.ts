import { DataTypes } from 'sequelize';
import db from '../db/connection'

const Client = db.define('Client', {
    name: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false
});

export default Client;