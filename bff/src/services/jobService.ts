import { apiClient } from '../lib/apiClient';

async function getJobOpportunities() {
  try {
    const response = await apiClient.get('/mock-vagas.json');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch job opportunities');
  }
}

export default {
  getJobOpportunities
};
