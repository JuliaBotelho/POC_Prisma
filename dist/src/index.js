import express, { json } from "express";
import moviesRouter from "./routes/moviesRouter.js";
import usersRouter from "./routes/usersRouter.js";
var app = express();
app.use(json());
app.use(moviesRouter);
app.use(usersRouter);
app.listen(4000, function () {
    console.log("Server is up and running on port: 4000");
});
