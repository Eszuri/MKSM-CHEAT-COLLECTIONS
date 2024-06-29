import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import middleware from './middleware/middleware';
import middlewareRoute from './middleware/middlewareRoute';
const app = express();

middleware(app);
middlewareRoute(app);

mongoose.connect(String(process.env.MONGO_URI))
    .then(() => { console.log("MongoDB Connected"); })
    .catch(err => console.log(err))

app.listen(4000, () => {
    console.log("EXPRESS-JS RUNNING ON http://localhost:4000");
});