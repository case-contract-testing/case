import { versionFromGitTag } from 'absolute-version';

import type { MakeBrokerApi, Broker } from '../../../core/contract/types';

import { CaseConfigurationError } from '../../../entities';
import type {
  ContextLogger,
  ContractData,
  MatchContext,
} from '../../../entities/types';

import { makeAxiosConnector } from './axios';

const trimSlash = (str: string): string => {
  if (str.endsWith('/')) {
    return trimSlash(str.substring(0, str.length - 1));
  }
  return str;
};

export const makeBrokerApi: MakeBrokerApi = (
  configContext: MatchContext
): Broker => {
  const authToken =
    configContext['case:currentRun:context:brokerCiAccessToken'];
  const baseUrl = configContext['case:currentRun:context:brokerBaseUrl'];

  if (authToken === undefined || authToken === '') {
    throw new CaseConfigurationError(
      "Can't access a broker without an authorization token. Set the environment variable CASE_BROKER_CI_TOKEN"
    );
  }

  if (typeof authToken !== 'string') {
    throw new CaseConfigurationError(
      `Expected the authToken to be a string, but it was '${typeof authToken}'`
    );
  }

  if (baseUrl === undefined || baseUrl === '') {
    throw new CaseConfigurationError(
      "Can't access a broker without specifying the base URL. Set the environment variable CASE_BROKER_BASEURL"
    );
  }

  if (typeof baseUrl !== 'string') {
    throw new CaseConfigurationError(
      `Expected the baseurl to be a string, but it was '${typeof authToken}'`
    );
  }

  const server = makeAxiosConnector(trimSlash(baseUrl), authToken);

  return {
    publishContract: (
      contract: ContractData,
      publishContext: ContextLogger
    ) => {
      const version = versionFromGitTag();
      publishContext.logger.debug(
        `Publishing contract for ${contract.description.consumerName}@${version} -> ${contract.description.providerName} to broker at ${baseUrl}`
      );

      const path = `/pacts/provider/${encodeURIComponent(
        contract.description.providerName
      )}/consumer/${encodeURIComponent(
        contract.description.consumerName
      )}/version/${encodeURIComponent(version)}`;

      publishContext.logger.maintainerDebug(`Publish path is: ${path}`);

      return server.authedPut(path, contract, publishContext).then((d) => {
        publishContext.logger.debug(`Published successfully`);
        publishContext.logger.deepMaintainerDebug(
          `Published result was`,
          JSON.stringify(d)
        );
        return d;
      });
    },
  };
};
