import request from 'supertest';
import { describe, expect, test, vi } from 'vitest';

import { app } from '../../../server';
import jobService from '../../../services/jobService';
import { filteredByEngenheiroJobApiMock, jobApiMock, transformedJobApiMock } from '../../fixtures/jobApiMock';

vi.mock('../../../services/jobService');

describe('../../../services/jobService.ts', () => {
  vi.mocked(jobService).getJobOpportunities.mockReturnValue(new Promise((resolve) => resolve(jobApiMock)));
  test('should all jobs transformed by type', async () => {
    await request(app)
      .get('/jobs')
      .then((response) => {
        expect(response.body).toEqual(transformedJobApiMock);
      });
  });

  test("should return all jobs filtered by title 'engenheiro'", async () => {
    await request(app)
      .get('/jobs?search=engenheiro')
      .then((response) => {
        expect(response.body).toEqual(filteredByEngenheiroJobApiMock);
      });
  });
});
