"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
// import { IProps } from '../interfaces/interfaces';
const user_1 = require("../models/user");
// export const getUsers = async ({ req, res }: IProps) => {
const getUsers = async (req, res) => {
    console.log("start getUsers");
    const result = await (0, user_1.readData)();
    console.log(result);
    res.status(200).send(result);
};
exports.getUsers = getUsers;
