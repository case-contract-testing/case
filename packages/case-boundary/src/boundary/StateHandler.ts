import { CaseConfigurationError } from '@contract-case/case-core';
import { Result } from './Result';

export class StateHandler {
  /**
   * @returns Either a `Failure` or a `SuccessWithMap`
   */
  setup(): Promise<Result> {
    throw new CaseConfigurationError(
      `${this}: State handler setup function not overridden`
    );
  }
}

export abstract class StateHandlerWithTeardown extends StateHandler {
  /**
   * @returns Either a `Failure` or a `Success`
   */
  teardown(): Promise<Result> {
    throw new CaseConfigurationError(
      `${this}: State handler teardown function not overridden`
    );
  }
}
