import { Request, Response } from 'express';

import { searchJobs } from '../lib/searchJobs';
import jobService from '../services/jobService';
import { filterInactiveJobs, sortJobsByType } from '../utils/jobUtils';
import { transformJobsByType } from '../utils/jobUtils';
import { paginate } from '../utils/paginate';

export async function getJobs(req: Request, res: Response) {
  const search = req.query.search as string;

  try {
    const data = await jobService.getJobOpportunities();
    let jobs = filterInactiveJobs(data.jobs);
    jobs = sortJobsByType(jobs);
    const { page, limit, skip, totalPages } = paginate(req, jobs.length);
    jobs = jobs.slice(skip, skip + limit);

    if (search) {
      jobs = searchJobs(jobs, search);
    }

    const jobsByType = transformJobsByType(jobs);

    res.status(200).json({ jobs: jobsByType, paginate: { page, limit, totalPages } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error to fetch job opportunities' });
  }
}
