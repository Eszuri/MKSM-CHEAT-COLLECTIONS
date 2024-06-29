import express, { Express } from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

const middleware = (app: Express) => {
    app.use(cors({
        origin: [String(process.env.CORS_URL),
            "https://mksm-cheat-collections.vercel.app/",
            "https://mksm-cheat-collections.vercel.app/api",
            "https://mksm-cheat-collections.vercel.app/api/"],
        credentials: true
    }));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
};

export default middleware;