"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoice_1 = require("../controllers/invoice");
const router = (0, express_1.Router)();
router.get('/:id', invoice_1.getInvoice);
exports.default = router;
