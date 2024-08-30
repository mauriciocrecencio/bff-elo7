import { describe, expect, test } from 'vitest';

import { formatJob, transformJobsByType } from '../../../utils/jobUtils';
import * as jobMocks from '../../fixtures/jobMocks';
import * as transformedJobsMock from '../../fixtures/transformedJobsMock';

describe('jobUtils', () => {
  test('should transform jobs by type', () => {
    const jobs = [jobMocks.remoteJob, jobMocks.seniorSpJob];
    const transformedJobs = transformJobsByType(jobs);

    expect(transformedJobs).toStrictEqual({
      Engenharia: [transformedJobsMock.remoteJobTransformed],
      Operacional: [transformedJobsMock.seniorSpJobTransformed]
    });
  });

  test('should format job Title, Location and Path', () => {
    const formattedJob = formatJob(jobMocks.remoteJob);

    expect(formattedJob).toEqual({
      title: 'Pessoa Engenheira De Dados - Junior',
      location: 'Remoto',
      path: 'pessoa-engenheira-de-dados'
    });
  });

  test('should format location to "Remote" when location is null', () => {
    const formattedJob = formatJob(jobMocks.remoteJob);

    expect(formattedJob).toEqual({
      title: 'Pessoa Engenheira De Dados - Junior',
      location: 'Remoto',
      path: 'pessoa-engenheira-de-dados'
    });
  });
});
