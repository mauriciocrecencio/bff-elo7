import { Request, Response } from 'express';

import jobService from '../services/jobService';

export async function getJobs(req: Request, res: Response) {
  try {
    const jobs = await jobService.getJobOpportunities();
    res.status(200).json(jobs);
  } catch {
    res.status(500).json({ error: 'Error to fetch job opportunities' });
  }
}
