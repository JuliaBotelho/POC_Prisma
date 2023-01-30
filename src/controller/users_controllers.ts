import { Request, Response } from 'express';
import { createUser, loginUser, fetchLoggedUser } from '../repository/repository.js'
import { user } from '../protocols/user.js';
import { v4 as uuid } from "uuid";

export async function signUp(req: Request, res: Response) {
    const userData = req.body as user;

    try {
        const entry = await createUser(userData);
        res.status(200).send(`User created`)

    } catch(err) {
        console.log(err)
        res.sendStatus(400);
    }
}

export async function signIn(req: Request, res: Response) {
    const user: user = req.body;
    const token = uuid();

    const userLog = fetchLoggedUser(user.userName);
    if (user.password !== (await userLog).password) {
        res.send("Senha Incorreta")
    }

    try {
        const tokenCreation = loginUser(user.userName, token);
        res.status(200).send(`Your token is:${token}`)

    } catch {
        res.sendStatus(400);
    }

}