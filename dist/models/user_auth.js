"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const create_error_js_1 = require("../helpers/create_error.js");
const usersPath = path_1.default.join(__dirname, '../users.json');
const login = async (req, res) => {
    const result = await JSON.parse(promises_1.default.readFile(usersPath).toString());
    const user = result.find(user => user.email === req.email);
    if (user)
        throw (0, create_error_js_1.createError)(409, `The user ${user.email} already exist`);
    res.status(201);
};
