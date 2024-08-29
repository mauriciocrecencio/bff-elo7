import { Request, Response } from 'express';

import jobService from '../services/jobService';
import { transformJobsByType } from '../utils/transformJobsByType';

export async function getJobs(req: Request, res: Response) {
  try {
    const data = await jobService.getJobOpportunities();
    const jobsByType = transformJobsByType(data.jobs);

    res.status(200).json(jobsByType);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error to fetch job opportunities' });
  }
}
