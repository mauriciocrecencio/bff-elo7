import { Request, Response } from 'express';

import jobService from '../services/jobService';
import { normalizeJobData } from '../utils/normalizeString';

export async function getJobs(req: Request, res: Response) {
  try {
    const data = await jobService.getJobOpportunities();
    const jobs = normalizeJobData(data.jobs);
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error to fetch job opportunities' });
  }
}
