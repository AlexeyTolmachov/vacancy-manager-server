import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users';
import { IError } from './interfaces/interfaces';
import { ctrlWrapper } from './middlewares/ctrl_wrapper';

const app = express();

app.use(cors());
app.use('/home', (req, res) => { res.send('Main Page') });
app.use('/users', ctrlWrapper(usersRouter));
// app.use('/users', (req, res) => { res.send('Users Page') });

app.use((req, res) => {
  console.log("no routes match");
  res.status(404).json({ message: "Not found" });
});

app.use(async (err: IError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;