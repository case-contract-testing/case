import { AnyMatcherOrData } from '../../types';
import { CascadingContextMatcher } from '../base';

/**
 * Alters the ContractCase log level below this matcher. Useful for debugging.
 *
 * This has no effect on matching.
 *
 * Note that this log level matcher will be saved into the contract, so it will
 * also affect the log level during verification. Usually you will want to
 * remove the use of this matcher before saving the contract.
 * @public
 */
export class ChangeLogLevel extends CascadingContextMatcher {
  /**
   * Alters the ContractCase log level below this matcher. Useful for debugging.
   *
   * This has no effect on matching.
   *
   * Note that this log level matcher will be saved into the contract, so it will
   * also affect the log level during verification. Usually you will want to
   * remove the use of this matcher before saving the contract.
   *
   * @param logLevel - The new LogLevel. One of "none" | "error" | "warn" | "debug" | "maintainerDebug" | "deepMaintainerDebug". see [LogLevel](https://case.contract-testing.io/docs/reference/configuring#loglevel-none--error--warn--debug--maintainerdebug) for details
   * @param child - The next matcher in the tree.
   */
  constructor(logLevel: string, child: AnyMatcherOrData) {
    super(child, {}, { logLevel });
  }

  /**
   * For non-TypeScript implementations (see `AnyMatcher.toJSON`)
   *
   * @privateRemarks
   * This comment and the implementation is boilerplate on all matchers to avoid
   * outputting duplicate unimportant documentation on all matcher classes of
   * the docs. Only modify this comment or the implementation via search and replace.
   */
  override toJSON(): unknown {
    return super.toJSON();
  }
}
