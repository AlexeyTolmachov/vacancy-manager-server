import express from 'express';

export interface IProps{
    req: express.Request,
    res: express.Response
}
export interface ICtrlProps{
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
}

export interface IError extends Error{
    status: number,
    message: string
}

export interface IUser {
    id: string,
    name: string,
    email: string,
    pass: string
}