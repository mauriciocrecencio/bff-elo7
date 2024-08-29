import { describe, expect, test } from 'vitest';

import { transformJobsByType } from '../../../utils/transformJobsByType';
import * as jobMocks from '../../fixtures/jobMocks';
import * as transformedJobsMock from '../../fixtures/transformedJobsMock';

describe('transformJobsByType', () => {
  test('should transform jobs by type', () => {
    const jobs = [jobMocks.remoteJob, jobMocks.seniorSpJob];
    const transformedJobs = transformJobsByType(jobs);

    expect(transformedJobs).toStrictEqual({
      Engenharia: [transformedJobsMock.remoteJobTransformed],
      Operacional: [transformedJobsMock.seniorSpJobTransformed]
    });
  });
});
