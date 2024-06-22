import axios from 'axios';

import { unmarshallSuccess, unmarshallFailure } from './marshaller.js';

type HttpConnector = {
  authedGet: <T>(path: string, query?: Record<string, string>) => Promise<T>;
  get: <T>(path: string) => Promise<T>;
};

// This is the connector for axios.
// It knows how to turn logical requests into axios calls

export const makeAxiosConnector = (baseurl: string): HttpConnector => ({
  authedGet: (path, query) =>
    axios
      .get(`${baseurl}${path}`, {
        headers: { Accept: 'application/json' },
        ...(query ? { params: query } : {}),
        //      headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(unmarshallSuccess, unmarshallFailure),
  get: (path) =>
    axios
      .get(`${baseurl}${path}`, { headers: { Accept: 'application/json' } })
      .then(unmarshallSuccess, unmarshallFailure),
});
