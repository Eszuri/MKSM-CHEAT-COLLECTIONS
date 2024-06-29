import { api } from '../controller';
import { Express } from 'express';

const middlewareRoute = (app: Express) => {
    app.use('/api', api)
};

export default middlewareRoute;