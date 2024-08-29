import { Request, Response } from 'express';

import jobService from '../services/jobService';
import { normalizeJobData } from '../utils/normalizeString';
import { transformJobsByType } from '../utils/transformJobsByType';

export async function getJobs(req: Request, res: Response) {
  try {
    const data = await jobService.getJobOpportunities();
    const normalizedJobs = normalizeJobData(data.jobs);
    const jobsByType = transformJobsByType(normalizedJobs);

    res.status(200).json(jobsByType);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error to fetch job opportunities' });
  }
}
