import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users';
const app = express();

app.use(cors());
app.use('/', (req, res) => { res.send('Main Page') })
app.use('/users', usersRouter)

export default app;