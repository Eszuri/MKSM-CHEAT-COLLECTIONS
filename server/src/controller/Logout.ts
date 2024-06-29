import { Request, Response } from "express";

export default function Logout(req: Request, res: Response) {
    const expires = 30 * 24 * 60 * 60 * 1000;
    res.clearCookie('auth', { maxAge: expires, secure: true, sameSite: "none", path: "/", httpOnly: true }).json({ logout: true });
};