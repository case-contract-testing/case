import type { AnyState } from 'entities/states/types';
import type { AnyMock, CaseError } from 'entities/types';

export interface ContractDescription {
  consumerName: string;
  providerName: string;
}

interface BaseCaseExample {
  states: AnyState[];
  mock: AnyMock;
}

interface SuccessfulCaseExample extends BaseCaseExample {
  result: 'VERIFIED';
}

interface PendingCaseExample extends BaseCaseExample {
  result: 'PENDING';
}

interface FailedCaseExample extends BaseCaseExample {
  result: 'FAILED';
  errors: CaseError[];
}

export type CaseExample =
  | SuccessfulCaseExample
  | FailedCaseExample
  | PendingCaseExample;

export type ExampleNames = {
  mockName: string;
  requestName: string;
  responseName: string;
};
