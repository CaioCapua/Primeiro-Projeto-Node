// src/routes/index.ts;
import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// toda rota que inicie com appointments, idependendo do metodo, GET, POST, PUT ou DELETE, vou passar para
// dentro da funcao appointmentsRouter.
// com isso, ao chamar essa rota no arquivo appointments.routes.ts, nao precisaremos passar o caminho
// /appointments, apenas a /
routes.use('/appointments', appointmentsRouter);

export default routes;
