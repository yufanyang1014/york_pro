import http from './http';

export const exchangeApi = (params, config) => (
  http.get('/exchange', params, { ...config })
);

