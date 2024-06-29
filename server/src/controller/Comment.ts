import CommentModels from "../models/Comments";
import { Request, Response } from "express";

function createComment(req: Request, res: Response) {
    const name = req.body.name;
    const comment = req.body.comment;
    const position = req.body.position;
    const type = req.body.type;
    const email = req.body.email;
    const picture = req.body.picture;

    const getCurrentDateInIndonesia = (): string => {
        const now: Date = new Date();
        const utc: number = now.getTime() + (now.getTimezoneOffset() * 60000); // waktu UTC dalam milidetik
        const wib: Date = new Date(utc + (3600000 * 7)); // waktu Indonesia Barat (WIB)

        // Format ke string yang diinginkan
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'Asia/Jakarta',
            timeZoneName: 'short'
        };
        let wibString: string = wib.toLocaleString('id-ID', options);

        // Replace 'pukul' with ','
        wibString = wibString.replace('pukul', ',');

        return wibString;
    };

    const RequestNoLogin = { page: position, type: type, name: name, content: comment, dateCreated: getCurrentDateInIndonesia() }
    const RequestWithLogin = { page: position, type: type, name: name, content: comment, dateCreated: getCurrentDateInIndonesia(), email: email, picture: picture }

    CommentModels.create((email === undefined && picture === undefined) ? RequestNoLogin : RequestWithLogin)
        .then(() => {
            res.status(200).json({ status: 'created' })
        })
        .catch(err => {
            res.status(500).send("Error Created")
        })
};



function readComment(req: Request, res: Response) {
    const type = req.headers.price_type;
    const page = req.headers.position_db;
    CommentModels.find({ type: type, page: page })
        .then(comment => {
            const toJson = JSON.stringify(comment);
            res.status(200).json({ data: btoa(toJson) })
        })
};



export { createComment, readComment };