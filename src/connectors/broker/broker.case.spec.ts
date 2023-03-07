import * as fs from 'node:fs';

import {
  anyString,
  inState,
  stateVariable,
  stringPrefix,
  willSendHttpRequest,
} from '../../boundaries';
import { defineContract } from '../../boundaries/jest/jest';
import { caseVersion } from '../../caseVersion';
import { CaseConfigurationError } from '../../entities';
import type { Logger } from '../../entities/types';
import { readContract } from '../contract/writer';
import { API_NOT_AUTHORISED } from './axios/apiErrors';
import { makeBrokerApi } from './broker';

const emptyContext = {
  logger: {
    error: () => {},
    warn: () => {},
    debug: () => {},
    maintainerDebug: () => {},
    deepMaintainerDebug: () => {},
  },
  resultPrinter: {
    printError(): void {},
    printSuccessTitle(): void {},
    printFailureTitle(): void {},
  },
  makeLogger(): Logger {
    return {
      error: () => {},
      warn: () => {},
      debug: () => {},
      maintainerDebug: () => {},
      deepMaintainerDebug: () => {},
    };
  },
};

const contractFilename = 'case-contracts/case-pact-broker.case.json';

describe('broker client', () => {
  beforeAll(() => {
    // Delete the contract file first
    try {
      fs.rmSync(contractFilename);
      fs.mkdirSync('case-contracts');
    } catch (e) {
      // Ignore any errors deleting the file and making the directory
    }
  });

  defineContract(
    {
      consumerName: 'Case',
      providerName: 'Pact Broker',
      config: {
        contractFilename,
      },
    },
    (contract) => {
      describe('publish contract', () => {
        describe('with missing configuration', () => {
          it('fails with no token', () => {
            expect(() => makeBrokerApi('http://localhost', '')).toThrow(
              CaseConfigurationError
            );
          });
          it('fails with no baseUrl', () => {
            expect(() => makeBrokerApi('', 'TOKEN')).toThrow(
              CaseConfigurationError
            );
          });
        });

        describe('with a valid auth token', () => {
          it('will be successful', () =>
            contract.runExample({
              states: [inState('auth token is valid', { token: 'TOKEN' })],
              definition: willSendHttpRequest({
                request: {
                  method: 'PUT',
                  path: stringPrefix(
                    `/pacts/provider/http%20request%20provider/consumer/http%20request%20consumer/version/${caseVersion}`,
                    anyString()
                  ),
                  headers: {
                    accept: 'application/json',
                    authorization: stringPrefix(
                      'Bearer ',
                      stateVariable('token')
                    ),
                  },
                },
                response: { status: 200 },
              }),
              trigger: (config) =>
                makeBrokerApi(
                  config.baseUrl,
                  config.variables['token'] as string
                ).publishContract(
                  readContract(
                    'case-contracts/http-request-consumer-http-request-provider-PDC.case.json'
                  ),
                  emptyContext
                ),
              testResponse: (data) => {
                expect(data).not.toBeNull();
              },
            }));
        });

        describe('with an invalid auth token', () => {
          it('will be successful', () =>
            contract.runRejectingExample({
              states: [
                inState('auth token is not valid', {
                  invalidToken: 'TOKEN',
                }),
              ],
              definition: willSendHttpRequest({
                request: {
                  method: 'PUT',
                  path: stringPrefix(
                    `/pacts/provider/http%20request%20provider/consumer/http%20request%20consumer/version/${caseVersion}`,
                    anyString()
                  ),
                  headers: {
                    accept: 'application/json',
                    authorization: stringPrefix(
                      'Bearer ',
                      stateVariable('invalidToken')
                    ),
                  },
                },
                response: { status: 403 },
              }),
              trigger: (config) =>
                makeBrokerApi(
                  config.baseUrl,
                  config.variables['invalidToken'] as string
                ).publishContract(
                  readContract(
                    'case-contracts/contract-for-broker-upload-test.json'
                  ),
                  emptyContext
                ),
              testErrorResponse: (error) => {
                expect(error.name).toBe(API_NOT_AUTHORISED);
              },
            }));
        });
      });
    }
  );
  describe('Broker contract', () => {});
});
