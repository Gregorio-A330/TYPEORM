import { Router } from 'express';
import classRouter from './class.routes';
import contentRouter from './content.routes';
import lessonRouter from './lesson.routes';
import studentRouter from './student.routes';

const routes = Router();

routes.use('/class', classRouter); //sempre vai ser mapeado nessa rota, tudo o que for referente ao class -> no arquivo class.routes.ts
routes.use('/lesson', lessonRouter);
routes.use('/student', studentRouter);
routes.use('/content', contentRouter);


export default routes;
