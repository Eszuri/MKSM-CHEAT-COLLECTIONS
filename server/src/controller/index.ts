import express from 'express';
import { createComment, readComment } from '@/controller/Comment';
import AuthGoogle from '@/controller/AuthGoogle';
import GetUser from '@/controller/GetUser';
import Logout from "@/controller/Logout";
const api = express.Router();


api.get('/login', AuthGoogle);
api.get('/logout', Logout);
api.get('/user', GetUser);


api.post('/create-comment', createComment);
api.get('/read-comment', readComment);

export { api };