"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('crud', 'root', 'leo040820', {
    host: 'localhost',
    dialect: 'mariadb',
});
exports.default = sequelize;
