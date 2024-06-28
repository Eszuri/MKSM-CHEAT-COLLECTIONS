import jwt from 'jsonwebtoken';
import GoogleUserModels from "@/models/GoogleUser";
import { Request, Response } from "express";
import "dotenv/config";

const GetUser = (req: Request, res: Response) => {
    const auth = req.cookies.auth;
    if (auth === '' || auth === undefined) {
        res.status(200).json({ isLoggin: false, name: 'unknown', email: 'unknown@gmail.com' });
    } else {
        jwt.verify(auth, String(process.env.JWT_SECRET_TOKEN), (err: any, data: any) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                GoogleUserModels.findOne({ email: data.email })
                    .then((result) => {
                        res.status(200).json({ isLoggin: true, name: result?.name, email: result?.email, picture: result?.picture });
                    }).catch((err) => {
                        res.status(500).json({ error: err });
                    });
            }
        });
    }
};

export default GetUser;