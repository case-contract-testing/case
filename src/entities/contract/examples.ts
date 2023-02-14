import { CaseCoreError } from 'entities/CaseCoreError';
import type { CaseError } from 'entities/types';
import type { CaseExample, ExampleNames } from './types';

export const exampleToNames = (
  { states, mock }: CaseExample,
  index: string
): ExampleNames => {
  const stateNames = states.map((state) => state.stateName).join(' and ');

  const requestName =
    'case:matcher:uniqueName' in mock.request
      ? mock.request['case:matcher:uniqueName']
      : `Mock ${index}'s request`;
  const responseName =
    'case:matcher:uniqueName' in mock.response
      ? mock.response['case:matcher:uniqueName']
      : `Mock ${index}'s response`;

  return {
    requestName,
    responseName,
    mockName: `${stateNames !== '' ? `When ${stateNames}, then ` : ''}${
      mock['case:mock:uniqueName']
        ? mock['case:mock:uniqueName']
        : `${requestName} -> ${responseName}`
    }`,
  };
};

export const makeSuccessExample = (example: CaseExample): CaseExample => {
  if (example.result !== 'PENDING') {
    throw new CaseCoreError(
      `Trying to make a successful example from one that wasn't pending (was ${example.result})`
    );
  }
  return { ...example, result: 'VERIFIED' };
};

export const makeFailedExample = (
  example: CaseExample,
  errors: Array<CaseError>
): CaseExample => {
  if (example.result !== 'PENDING') {
    throw new CaseCoreError(
      `Trying to make a failed example from one that wasn't pending (was ${example.result})`
    );
  }
  return { ...example, result: 'FAILED', errors };
};
