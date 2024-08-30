import { Router } from 'express';

import * as JobController from '../controllers/JobController';

export const jobRoutes = Router();

jobRoutes.get('/', JobController.getJobs);
