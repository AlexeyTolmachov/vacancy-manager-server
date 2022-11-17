"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrlWrapper = void 0;
// export const ctrlWrapper = (ctrl: ({ req, res, next }: ICtrlProps) => void) => {
const ctrlWrapper = (ctrl) => {
    console.log("ctrlWrapper");
    return async ({ req, res, next }) => {
        try {
            ctrl(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
};
exports.ctrlWrapper = ctrlWrapper;
