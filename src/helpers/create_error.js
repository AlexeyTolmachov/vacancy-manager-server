// import { IError } from "../interfaces/error";

// interface Imessage {
//     status?: number,
//     message?: string,
//     [status: number]: string
// }

const messages = {
    400:'Bad Request',
    401:'Unauthorized',
    404:'Not Found',
    409:'Conflict',
    500: 'Server Error'
}

export const createError = (status = 400, message = messages[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
}