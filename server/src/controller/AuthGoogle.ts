import jwt from 'jsonwebtoken';
import GoogleUserModels from "../models/GoogleUser";
import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import "dotenv/config"

const AuthGoogle = async (req: Request, res: Response) => {
    const ClientID = atob(String(req.headers.clientid));
    const Credential = atob(String(req.headers.credential));

    const client = new OAuth2Client(ClientID);
    const verifyAuth = await client.verifyIdToken({
        idToken: Credential,
        audience: ClientID
    });
    const payload = verifyAuth.getPayload();
    if (payload) {
        const { email, name, picture } = payload;
        const expires = new Date();
        expires.setDate(expires.getDate() + 30);
        GoogleUserModels.findOne({ email: email })
            .then((data) => {
                const enc = jwt.sign({ name: name, email: email, pictures: picture }, String(process.env.JWT_SECRET_TOKEN), { expiresIn: '30d' });
                if (data === null) {
                    GoogleUserModels.create({ name: name, email: email, picture: picture })
                        .then(() => {
                            res.status(200).cookie('auth', enc, { expires: expires, httpOnly: true, secure: true }).json({ name: name, email: email, pictures: picture })
                        })
                } else {
                    res.status(200).cookie('auth', enc, { expires: expires, httpOnly: true }).json({ name: name, email: email, pictures: picture })
                }
            })
            .catch(err => {
                res.status(500).send(err);
                console.log(err);
            })
    } else {
        res.status(400).json({ error: 'Invalid token payload' });
    }
};


export default AuthGoogle;