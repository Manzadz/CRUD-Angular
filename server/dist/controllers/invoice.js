"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoice = exports.getInvoices = void 0;
const client_1 = __importDefault(require("../models/client"));
const getInvoices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listInvoice = yield client_1.default.findAll();
    res.json(listInvoice);
});
exports.getInvoices = getInvoices;
const getInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const invoice = yield client_1.default.findByPk(id);
    if (invoice) {
        res.json(invoice);
    }
    else {
        res.status(404).json({
            msg: 'No existe una factura con este id'
        });
    }
});
exports.getInvoice = getInvoice;
