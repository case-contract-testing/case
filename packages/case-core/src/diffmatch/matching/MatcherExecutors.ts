import {
  AnyCaseNodeType,
  NUMBER_MATCHER_TYPE,
  STRING_MATCHER_TYPE,
  STRING_CONTAINS_TYPE,
  STRING_PREFIX_TYPE,
  STRING_SUFFIX_TYPE,
  BOOLEAN_MATCHER_TYPE,
  CASCADING_CONTEXT_MATCHER_TYPE,
  NULL_MATCHER_TYPE,
  SHAPED_ARRAY_MATCHER_TYPE,
  SHAPED_OBJECT_MATCHER_TYPE,
  ARRAY_LENGTH_MATCHER_TYPE,
  COMBINE_MATCHERS_TYPE,
  ARRAY_EACH_ENTRY_MATCHES_TYPE,
  ARRAY_CONTAINS_TYPE,
  OBJECT_VALUES_MATCH_TYPE,
  INTEGER_MATCH_TYPE,
  OBJECT_KEYS_MATCH_TYPE,
  CONTEXT_VARIABLE_TYPE,
  JSON_STRINGIFIED_TYPE,
  BASE64_ENCODED_TYPE,
  CaseNodeFor,
} from '@contract-case/case-entities-internal';
import {
  MatcherExecutor,
  LOOKUP_MATCHER_TYPE,
} from '@contract-case/case-plugin-base';
import {
  HTTP_STATUS_CODE_MATCHER_TYPE,
  HTTP_RESPONSE_MATCHER_TYPE,
  HTTP_REQUEST_MATCHER_TYPE,
  URL_ENCODED_STRING_TYPE,
  HTTP_BASIC_AUTH_TYPE,
} from '@contract-case/case-core-plugin-http-dsl';
import {
  HttpStatusCodeMatcher,
  HttpResponseMatcher,
  HttpRequestMatcher,
  UrlEncodedStringMatcher,
  HttpBasicAuthMatcher,
} from '@contract-case/case-core-plugin-http';
import {
  NumberMatcher,
  StringMatcher,
  BooleanMatcher,
  NullMatcher,
  IntegerMatcher,
} from './leaf';
import {
  AndCombinationMatcher,
  CascadingContext,
  ContextVariableMatcher,
  LookupMatcher,
} from './meta';
import {
  ShapedArrayExecutor,
  ShapedObjectExecutor,
  EachArrayEntryMatches,
  ObjectEachValueMatches,
  ObjectEachKeyMatches,
  ArrayContains,
  ArrayLengthExecutor,
} from './structure';
import {
  Base64EncodedStringMatcher,
  JsonStringifiedString,
  StringContainsMatcher,
  StringPrefixMatcher,
  StringSuffixMatcher,
} from './strings';

export const MatcherExecutors: {
  [T in AnyCaseNodeType]: MatcherExecutor<T, CaseNodeFor<T>>;
} = {
  [NUMBER_MATCHER_TYPE]: NumberMatcher,
  [STRING_MATCHER_TYPE]: StringMatcher,
  [STRING_CONTAINS_TYPE]: StringContainsMatcher,
  [STRING_PREFIX_TYPE]: StringPrefixMatcher,
  [STRING_SUFFIX_TYPE]: StringSuffixMatcher,
  [BOOLEAN_MATCHER_TYPE]: BooleanMatcher,
  [CASCADING_CONTEXT_MATCHER_TYPE]: CascadingContext,
  [NULL_MATCHER_TYPE]: NullMatcher,
  [SHAPED_ARRAY_MATCHER_TYPE]: ShapedArrayExecutor,
  [SHAPED_OBJECT_MATCHER_TYPE]: ShapedObjectExecutor,
  [HTTP_STATUS_CODE_MATCHER_TYPE]: HttpStatusCodeMatcher,
  [HTTP_RESPONSE_MATCHER_TYPE]: HttpResponseMatcher,
  [HTTP_REQUEST_MATCHER_TYPE]: HttpRequestMatcher,
  [LOOKUP_MATCHER_TYPE]: LookupMatcher,
  [ARRAY_LENGTH_MATCHER_TYPE]: ArrayLengthExecutor,
  [COMBINE_MATCHERS_TYPE]: AndCombinationMatcher,
  [ARRAY_EACH_ENTRY_MATCHES_TYPE]: EachArrayEntryMatches,
  [ARRAY_CONTAINS_TYPE]: ArrayContains,
  [OBJECT_VALUES_MATCH_TYPE]: ObjectEachValueMatches,
  [INTEGER_MATCH_TYPE]: IntegerMatcher,
  [OBJECT_KEYS_MATCH_TYPE]: ObjectEachKeyMatches,
  [CONTEXT_VARIABLE_TYPE]: ContextVariableMatcher,
  [URL_ENCODED_STRING_TYPE]: UrlEncodedStringMatcher,
  [HTTP_BASIC_AUTH_TYPE]: HttpBasicAuthMatcher,
  [JSON_STRINGIFIED_TYPE]: JsonStringifiedString,
  [BASE64_ENCODED_TYPE]: Base64EncodedStringMatcher,
};
