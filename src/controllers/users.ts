import { IProps } from '../interfaces/interfaces';
import { readData } from '../models/user';

export const getUsers = async ({ req, res }: IProps) => {
  console.log("start getUsers")
  const result = await readData();
  console.log(result);
  res.status(200).send(result);
}