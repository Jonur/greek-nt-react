import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

import { AXIOS_RETRY_COUNT, AXIOS_RETRY_DELAY_MS } from 'src/constants';

const createAxiosClient = (): AxiosInstance => {
  const client = axios.create();

  axiosRetry(client, {
    retries: AXIOS_RETRY_COUNT,
    retryDelay: (retryCount: number): number => retryCount * AXIOS_RETRY_DELAY_MS,
  });

  return client;
};

export default createAxiosClient;
