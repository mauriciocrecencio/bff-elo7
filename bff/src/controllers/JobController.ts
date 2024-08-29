import { Request, Response } from 'express';

import { searchJobs } from '../lib/searchJobs';
import jobService from '../services/jobService';
import { transformJobsByType } from '../utils/transformJobsByType';

export async function getJobs(req: Request, res: Response) {
  const search = req.query.search as string;

  try {
    const data = await jobService.getJobOpportunities();
    let jobs = data.jobs;
    if (search) {
      jobs = searchJobs(jobs, search);
    }

    const jobsByType = transformJobsByType(jobs);

    res.status(200).json(jobsByType);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error to fetch job opportunities' });
  }
}
