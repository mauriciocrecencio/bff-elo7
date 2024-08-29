import Fuse from 'fuse.js';

import { Job } from '../ts/types/Job';

export const searchJobs = (allJobs: Job[], search: string) => {
  const fuseOptions = {
    threshold: 0.4,
    distance: 100,
    keys: ['title', 'type', 'location', 'level']
  };

  return new Fuse(allJobs, fuseOptions).search(search).map((result) => result.item);
};
