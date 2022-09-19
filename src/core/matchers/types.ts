import type { MatchContextByExact } from 'core/context/types';

export const NUMBER_MATCHER_TYPE = 'JsonSerialisableNumber' as const;
export const STRING_MATCHER_TYPE = 'JsonSerialisableString' as const;
export const NULL_MATCHER_TYPE = 'JsonSerialisableNull' as const;
export const BOOLEAN_MATCHER_TYPE = 'JsonSerialisableBoolean' as const;
export const CASCADING_EXACT_MATCHER_TYPE = 'JsonExactPrimitive' as const;

export type AnyCaseNodeType =
  | typeof NUMBER_MATCHER_TYPE
  | typeof STRING_MATCHER_TYPE
  | typeof NULL_MATCHER_TYPE
  | typeof BOOLEAN_MATCHER_TYPE
  | typeof CASCADING_EXACT_MATCHER_TYPE;

export const isCaseNode = (
  maybeMatcher: unknown
): maybeMatcher is AnyCaseNode =>
  typeof maybeMatcher === 'object' &&
  maybeMatcher != null &&
  'case:matcher:type' in (maybeMatcher as AnyCaseNode);

export type JsonSerialisablePrimitive = boolean | number | string | null;
export type AnyJson = JsonSerialisablePrimitive | JsonArray | JsonMap;
export interface JsonMap {
  [key: string]: AnyJson;
}
export type JsonArray = Array<AnyJson>;

export type AnyMatcher =
  | CoreNumberMatcher
  | CoreStringMatcher
  | CoreNullMatcher
  | CoreBooleanMatcher;

export type AnyCaseNode = AnyMatcher | CoreCascadingExactMatcher;

export type CaseNodeOrData = AnyCaseNode | AnyJson;

type IsCaseNodeForType<T extends AnyCaseNodeType> = {
  'case:matcher:type': T;
};

export type CaseNodeFor<T extends AnyCaseNodeType> = Extract<
  AnyCaseNode,
  IsCaseNodeForType<T>
>;

interface CaseMatcher {
  'case:matcher:type': AnyCaseNodeType;
  'case:matcher:example': unknown;
}

export interface CoreNumberMatcher extends CaseMatcher {
  'case:matcher:type': typeof NUMBER_MATCHER_TYPE;
  'case:matcher:example': number;
}

export interface CoreStringMatcher extends CaseMatcher {
  'case:matcher:type': typeof STRING_MATCHER_TYPE;
  'case:matcher:example': string;
}

export interface CoreBooleanMatcher extends CaseMatcher {
  'case:matcher:type': typeof BOOLEAN_MATCHER_TYPE;
  'case:matcher:example': boolean;
}

export interface CoreCascadingExactMatcher extends MatchContextByExact {
  'case:matcher:type': typeof CASCADING_EXACT_MATCHER_TYPE;
  'case:matcher:child': CaseNodeOrData;
}

export interface CoreNullMatcher extends CaseMatcher {
  'case:matcher:type': typeof NULL_MATCHER_TYPE;
  'case:matcher:example': null;
}
