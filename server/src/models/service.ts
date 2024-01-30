import { DataTypes } from 'sequelize';
import db from '../db/connection'

const service = db.define('service', {
    service: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL
    }
})

export default service;