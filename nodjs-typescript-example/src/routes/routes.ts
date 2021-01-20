import express, { Application, Request, Response, NextFunction, Router } from "express";

const route: Router = express.Router();

route.get("/app", (req: Request, res: Response, next: NextFunction) => {

    res.send("hi app");
    Date.now()

});

export { route as default }
