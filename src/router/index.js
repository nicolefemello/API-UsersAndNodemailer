import express from 'express';
import userRoutesInit from "./usersRoutes.js";
import emailRoutesInit from './emailRoutes.js';

const routes = (app) => {
    app.get("/", (req, res) => res.status(200).send("Bem-vindo(a) ao nosso servidor!"));

    userRoutesInit(app);
    emailRoutesInit(app);
}

export default routes;
