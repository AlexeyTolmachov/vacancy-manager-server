"use strict";
// import { IError } from "../interfaces/error";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = void 0;
// interface Imessage {
//     status?: number,
//     message?: string,
//     [status: number]: string
// }
const messages = {
    400: 'Bad Request',
    401: 'Unauthorized',
    404: 'Not Found',
    409: 'Conflict',
    500: 'Server Error'
};
const createError = (status = 400, message = messages[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
};
exports.createError = createError;
