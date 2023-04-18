import type { AnyCaseNodeOrData, AnyStringMatcher } from '../types';
import {
  CoreHttpBasicAuthValue,
  CoreHttpRequestMatcher,
  CoreHttpResponseMatcher,
  CoreHttpStatusCodeMatcher,
  CoreUrlEncodedStringMatcher,
  HttpMockRequest,
  HttpMockResponse,
  HTTP_BASIC_AUTH_TYPE,
  HTTP_REQUEST_MATCHER_TYPE,
  HTTP_RESPONSE_MATCHER_TYPE,
  HTTP_STATUS_CODE_MATCHER_TYPE,
  URL_ENCODED_STRING_TYPE,
} from './types';
import { validateCodes } from './validator';

export const httpStatusCodeMatcher = (
  codes: string | Array<string>,
  example?: number
): CoreHttpStatusCodeMatcher => {
  const impliedExample = validateCodes(codes);
  return {
    '_case:matcher:type': HTTP_STATUS_CODE_MATCHER_TYPE,
    '_case:matcher:example': example ?? impliedExample,
    '_case:matcher:rule': codes,
    '_case:matcher:resolvesTo': 'HttpStatusCode',
  };
};

export const httpRequestMatcher = (
  request: HttpMockRequest
): CoreHttpRequestMatcher => ({
  ...request,
  '_case:matcher:type': HTTP_REQUEST_MATCHER_TYPE,
});

export const httpResponseMatcher = (
  response: HttpMockResponse
): CoreHttpResponseMatcher => ({
  ...response,
  '_case:matcher:type': HTTP_RESPONSE_MATCHER_TYPE,
});

export const coreUrlEncodedString = (
  child: AnyCaseNodeOrData
): CoreUrlEncodedStringMatcher => ({
  '_case:matcher:type': URL_ENCODED_STRING_TYPE,
  '_case:matcher:child': child,
  '_case:matcher:accepts': 'string',
  '_case:matcher:resolvesTo': 'string',
});

export const coreBasicAuthValue = (
  username: AnyStringMatcher,
  password: AnyStringMatcher
): CoreHttpBasicAuthValue => ({
  '_case:matcher:type': HTTP_BASIC_AUTH_TYPE,
  '_case:matcher:username': username,
  '_case:matcher:password': password,
  '_case:matcher:resolvesTo': 'string',
});
