import { ICtrlProps } from "../interfaces/interfaces";

// export const ctrlWrapper = (ctrl: ({ req, res, next }: ICtrlProps) => void) => {
export const ctrlWrapper = (ctrl: any) => {
  console.log("ctrlWrapper");
  return async ({ req, res, next }: ICtrlProps) => {
    try {
      ctrl(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}