import {NextFunction, Request, Response} from "express";

interface Run {
    (req: Request, res: Response, next: NextFunction)
}

export interface Route {
    name: string,
    run: Run
}