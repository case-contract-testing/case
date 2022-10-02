import type { Verifiable } from 'entities/types';
import axios from 'axios';
import { httpInteraction } from 'entities/nodes/interactions/http';
import { setup } from '.';

/*

willSend(httpGet({ path: '/health' })).canRecieve({
  contentType: 'application/json',
  status: 200,
  body: { status: 'up' },
});

*/

const api = (baseUrl: string) => ({
  getHealth: () =>
    axios.get(`${baseUrl}/health`).then((response) => response.data.status),
  /* other endpoints here */
});

describe('simple get endpoint', () => {
  let context: Verifiable<'SendHttpRequest'>;
  beforeEach(async () => {
    context = await setup(
      httpInteraction({
        request: {
          method: 'GET',
          path: '/health',
        },
        response: { status: 200, body: { status: 'up' } },
      })
    );
  });

  it('calls server health', async () => {
    const client = api(context.mock.baseUrl);

    const health = await client.getHealth();
    expect(health).toEqual('up');
  });

  afterEach(async () => {
    const res = await context.verify();
    if (res.length !== 0) {
      throw new Error(res.join('\n').toString());
    }
  });
});
