"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Client = connection_1.default.define('Client', {
    name: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false
});
exports.default = Client;
