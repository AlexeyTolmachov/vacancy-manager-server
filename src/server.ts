import app from './app';

const port = 3000;

// app.get("/", (req, res) => {
//   res.send("The Main Page");
// });

app.listen(port, () => console.log(`server is listening on ${port}`));
