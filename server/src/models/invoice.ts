import { DataTypes } from 'sequelize';
import db from '../db/connection'

const Invoice = db.define('invoice', {
    date: {
        type: DataTypes.DATE
    },
    amount: {
        type: DataTypes.DECIMAL
    }
})

export default Invoice;