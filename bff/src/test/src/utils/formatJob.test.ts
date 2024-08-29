import { describe, expect, test } from 'vitest';

import { formatJob } from '../../../utils/formatJob';
import { remoteJob } from '../../fixtures/jobMocks';

describe('formatJob', () => {
  test('should format job Title, Location and Path', () => {
    const formattedJob = formatJob(remoteJob);

    expect(formattedJob).toEqual({
      title: 'Pessoa Engenheira De Dados - Junior',
      location: 'Remoto',
      path: 'pessoa-engenheira-de-dados'
    });
  });

  test('should format location to "Remote" when location is null', () => {
    const formattedJob = formatJob(remoteJob);

    expect(formattedJob).toEqual({
      title: 'Pessoa Engenheira De Dados - Junior',
      location: 'Remoto',
      path: 'pessoa-engenheira-de-dados'
    });
  });
});
