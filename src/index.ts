import express, { json } from "express";
import moviesRouter from "./routes/moviesRouter.js";
import usersRouter from "./routes/usersRouter.js"


const app = express();
app.use(json());
app.use(moviesRouter);
app.use(usersRouter);


app.listen(4000, () => {
  console.log(`Server is up and running on port: 4000`);
})