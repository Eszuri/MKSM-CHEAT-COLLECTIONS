import express from 'express';
import { createComment, readComment } from './Comment';
import AuthGoogle from './AuthGoogle';
import GetUser from './GetUser';
import Logout from "./Logout";
const api = express.Router();


api.get('/login', AuthGoogle);
api.get('/logout', Logout);
api.get('/user', GetUser);


api.post('/create-comment', createComment);
api.get('/read-comment/:type/:position', readComment);

export { api };