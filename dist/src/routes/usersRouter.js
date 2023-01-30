import { Router } from "express";
import { signUp, signIn } from '../controller/users_controllers.js';
import { userValidation } from "../middleware/validation_middleware.js";
var usersRouter = Router();
usersRouter.post('/user', userValidation, signUp);
usersRouter.put('/user', signIn);
export default usersRouter;
