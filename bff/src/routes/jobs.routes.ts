import { Router } from 'express';

import * as JobController from '../controllers/jobController';

export const jobRoutes = Router();

jobRoutes.get('/', JobController.getJobs);
