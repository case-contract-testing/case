import {
  functionArgumentsMatcher,
  MOCK_FUNCTION_EXECUTION,
  MOCK_FUNCTION_INVOCATION,
} from '@contract-case/case-core-plugin-function-dsl';
import { AnyMockDescriptor } from '../base/AnyMockDescriptor';
import { AnyMatcherOrData } from '../../types';
import { FunctionExecutionExample } from './types';

/**
 * Defines an example that expects a function to be called with specific arguments
 *
 * @public
 */
export class MockFunctionExecution extends AnyMockDescriptor {
  /** @internal */
  readonly '_case:mock:type': typeof MOCK_FUNCTION_EXECUTION;

  /** @internal */
  readonly '_case:run:context:setup': {
    write: {
      type: typeof MOCK_FUNCTION_EXECUTION;
      stateVariables: 'default';
      triggers: 'provided';
    };
    read: {
      type: typeof MOCK_FUNCTION_INVOCATION;
      stateVariables: 'state';
      triggers: 'generated';
    };
  };

  readonly arguments: AnyMatcherOrData;

  readonly returnValue: AnyMatcherOrData;

  constructor(example: FunctionExecutionExample) {
    super(MOCK_FUNCTION_EXECUTION, {
      write: {
        mockType: MOCK_FUNCTION_EXECUTION,
        stateVariables: 'default',
        triggers: 'provided',
      },
      read: {
        mockType: MOCK_FUNCTION_INVOCATION,
        stateVariables: 'state',
        triggers: 'generated',
      },
    });
    this.arguments = functionArgumentsMatcher(example.arguments);
    this.returnValue = example.returnValue;
  }
}
