"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./routes/users"));
const ctrl_wrapper_1 = require("./middlewares/ctrl_wrapper");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/home', (req, res) => { res.send('Main Page'); });
app.use('/users', (0, ctrl_wrapper_1.ctrlWrapper)(users_1.default));
// app.use('/users', (req, res) => { res.send('Users Page') });
app.use((req, res) => {
    console.log("no routes match");
    res.status(404).json({ message: "Not found" });
});
app.use(async (err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});
exports.default = app;
