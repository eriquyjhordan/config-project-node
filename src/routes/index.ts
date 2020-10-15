import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Padrão de projeto node como ts' }),
);

export default routes;
