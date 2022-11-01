import {createTransport} from "nodemailer";

export class Mailer {

    /**
     * @param to
     * @param from
     * @param subject
     * @param message
     *
     * TODO: Add valid smtp details
     */

    public async send(to : string, from : string , subject : string, message : string) {
        const transportsOpts = {
            host: "smtp.example.com",
            port: 587,
            secure: true,
        }
        let transporter = createTransport(transportsOpts);
        return await transporter.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: message
        });
    }
}