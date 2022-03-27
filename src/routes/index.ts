import { Router } from 'express';
import classRouter from './class.routes';

const routes = Router();

routes.use('/class', classRouter); //sempre vai ser mapeado nessa rota, tudo o que for referente ao class -> no arquivo class.routes.ts

export default routes;
