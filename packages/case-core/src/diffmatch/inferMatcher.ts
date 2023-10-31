import {
  AnyCaseNodeType,
  CaseNodeFor,
  AnyLeafOrStructure,
  AnyCaseMatcher,
  isCaseNode,
} from '@contract-case/case-entities-internal';
import {
  coreAndMatcher,
  coreArrayLengthMatcher,
} from '../entities/nodes/matchers/auxiliary';
import * as leafMatchers from '../entities/nodes/matchers/leaf';
import {
  coreShapedArrayMatcher,
  coreShapedObjectMatcher,
} from '../entities/nodes/matchers/structure';

export const inferMatcher = <T extends AnyCaseNodeType>(
  matcherOrData: CaseNodeFor<T> | AnyLeafOrStructure,
): AnyCaseMatcher => {
  if (matcherOrData == null) {
    return leafMatchers.coreNullMatcher();
  }
  if (typeof matcherOrData === 'string') {
    return leafMatchers.coreStringMatcher(matcherOrData);
  }
  if (typeof matcherOrData === 'number') {
    return leafMatchers.coreNumberMatcher(matcherOrData);
  }
  if (typeof matcherOrData === 'boolean') {
    return leafMatchers.coreBooleanMatcher(matcherOrData);
  }

  if (Array.isArray(matcherOrData)) {
    return coreAndMatcher(
      coreShapedArrayMatcher(matcherOrData),
      coreArrayLengthMatcher({
        minLength: matcherOrData.length,
        maxLength: matcherOrData.length,
      }),
    );
  }

  if (isCaseNode(matcherOrData)) {
    return matcherOrData;
  }

  return coreShapedObjectMatcher(matcherOrData);
};
