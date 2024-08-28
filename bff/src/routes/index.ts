import { Router } from 'express';

import { jobRoutes } from './jobs.routes';

export const routes = Router();

routes.use('/jobs', jobRoutes);
