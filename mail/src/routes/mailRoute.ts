import {NextFunction, Request, Response} from "express";
import {Route} from "../interfaces/route";
import {Mailer} from "../mailer/mailer";

export const route: Route = {
    name: "/sendmail",
    run: async (req: Request, res: Response, next: NextFunction) => {
        const subject : string = req.body.subject;
        const message : string = req.body.message;
        const from : string = req.body.message;
        const to : string = req.body.to;

        if (subject && message && from && to) {
            const mailer = new Mailer();
            await mailer.send(to, from, subject, message);
        } else {
            res.json({
                "message": "No request parameters provided"
            })
        }
    }
}