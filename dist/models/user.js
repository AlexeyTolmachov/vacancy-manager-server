"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeData = exports.readData = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const create_error_js_1 = require("../helpers/create_error.js");
const usersPath = path_1.default.join(__dirname, '../users.json');
const readData = async () => {
    return JSON.parse((await promises_1.default.readFile(usersPath)).toString());
};
exports.readData = readData;
const writeData = async (data) => {
    return await promises_1.default.writeFile(usersPath, JSON.stringify(data));
};
exports.writeData = writeData;
const login = async (req, res) => {
    const users = await (0, exports.readData)();
    console.log("Users", users);
    const user = users.find(user => user.email === req.body.email);
    if (user)
        throw (0, create_error_js_1.createError)(409, `The user ${user.email} already exist`);
    req.body.id = Date.now().toString(); // generate id
    users.push(req.body);
    (0, exports.writeData)(users);
    res.status(201).send(`user ${req.body.name} added successfuly`);
};
