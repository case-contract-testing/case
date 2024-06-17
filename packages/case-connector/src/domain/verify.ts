import {
  BoundaryResult,
  ILogPrinter,
  IResultPrinter,
  IRunTestCallback,
} from '../entities/types';
import { versionString } from '../versionString';
import { ContractCaseConnectorConfig, VerificationId } from './types';
import { mapConfig, mapConfigNoId } from './config';
import {
  closeVerifier,
  createVerifier,
  getVerifier,
} from '../connectors/case-boundary/verifier';

export const beginVerification = (
  config: ContractCaseConnectorConfig,
  callback: IRunTestCallback,
  callbackPrinter: ILogPrinter,
  resultPrinter: IResultPrinter,
  callerVersions: string[],
): VerificationId =>
  createVerifier(
    mapConfigNoId(config),
    callback,
    callbackPrinter,
    resultPrinter,
    [...callerVersions, versionString],
  );

export const availableContractDescriptions = (
  verifierId: string,
): Promise<BoundaryResult> =>
  Promise.resolve().then(() => {
    const verifierHandle = getVerifier(
      verifierId,
      'availableContractDescriptions',
    );
    if (!('id' in verifierHandle)) {
      return verifierHandle;
    }
    return verifierHandle.verifier.availableContractDescriptions();
  });

export const runVerification = (
  verifierId: string,
  config: ContractCaseConnectorConfig,
): Promise<BoundaryResult> =>
  Promise.resolve().then(() => {
    const definerHandle = getVerifier(verifierId, 'runVerification');
    if (!('id' in definerHandle)) {
      return definerHandle;
    }
    return definerHandle.verifier.runVerification(
      mapConfig(config, verifierId),
    );
  });

export const endVerification = (verifierId: string): Promise<void> =>
  Promise.resolve().then(() => closeVerifier(verifierId));
