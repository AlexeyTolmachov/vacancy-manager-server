import fs from 'fs/promises';
import path from'path';
import express from 'express';
import { IUser } from '../interfaces/interfaces';
import { createError } from '../helpers/create_error.js';

const usersPath = path.join(__dirname, '../users.json');

export const readData = async() => {
    return JSON.parse((await fs.readFile(usersPath)).toString());
}
export const writeData = async (data: IUser[]) => {
    return await fs.writeFile(usersPath, JSON.stringify(data))
}

const login = async(req: express.Request, res: express.Response) => {
    const users: IUser[] = await readData();
    console.log("Users", users);
    const user = users.find(user => user.email === req.body.email);
    if (user) throw createError(409, `The user ${user.email} already exist`);
    req.body.id = Date.now().toString(); // generate id
    users.push(req.body);
    writeData(users);
    res.status(201).send(`user ${req.body.name} added successfuly`)
}

