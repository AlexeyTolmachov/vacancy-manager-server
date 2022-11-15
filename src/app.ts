import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users';
const app = express();

app.use(cors());
app.use('/', (req, res) => { res.send('Main Page') })
app.use('/users', usersRouter)

app.get("/", (req, res) => {
  res.send("The Mother fucker !!!");
});

// app.use(async (err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

export default app;