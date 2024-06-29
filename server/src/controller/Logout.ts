import { Request, Response } from "express";

export default function Logout(req: Request, res: Response) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 30);
    res.clearCookie('auth', { expires: expires, secure: true }).json({ logout: true });
};