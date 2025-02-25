# Changelog

## [0.19.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.18.0...@contract-case/case-core-v0.19.0) (2025-02-25)


### ⚠ BREAKING CHANGES

* Allow different tests to have different values for the same default state variable. Contracts using state variables from the previous version will need to be regnerated
* Add ability for matchers to validate their own content. This is a breaking change for any plugin authors, as matcher Executor implementations now need to provide validation functions

### Features

* Add ability for matchers to validate their own content. This is a breaking change for any plugin authors, as matcher Executor implementations now need to provide validation functions ([afaa8d7](https://github.com/case-contract-testing/contract-case/commit/afaa8d75d81e45ca7609f89b1e17819183bc59b2))
* Add ability for the current version to be generated from the git sha ([dd70365](https://github.com/case-contract-testing/contract-case/commit/dd703650fd058d34f6d772011b74faec10b93074))
* Run parameter validators ahead of the self-check, allowing early warning of configuration mistakes in example interactions ([186d2e5](https://github.com/case-contract-testing/contract-case/commit/186d2e58eff512d37e53425ac353b231d15250a8))


### Bug Fixes

* Allow different tests to have different values for the same default state variable. Contracts using state variables from the previous version will need to be regnerated ([2984d2b](https://github.com/case-contract-testing/contract-case/commit/2984d2baf29406fab884c5fffc790b6022621047))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-function bumped from 0.18.0 to 0.19.0
    * @contract-case/case-core-plugin-http bumped from 0.18.0 to 0.19.0
    * @contract-case/case-core-plugin-http-dsl bumped from 0.18.0 to 0.19.0
    * @contract-case/case-entities-internal bumped from 0.18.0 to 0.19.0
    * @contract-case/case-plugin-base bumped from 0.18.0 to 0.19.0
    * @contract-case/case-plugin-dsl-types bumped from 0.18.0 to 0.19.0
  * devDependencies
    * @contract-case/case-definition-dsl bumped from ^0.18.0 to ^0.19.0
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.1 to 0.2.0

## [0.18.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.17.1...@contract-case/case-core-v0.18.0) (2024-10-17)


### ⚠ BREAKING CHANGES

* Replace the config object in triggers with a clearer SetupInfo type, allowing cross-language function calls as mocks. Note that the function calls now always return json strings, user-facing DSLs will need to parse the strings

### Bug Fixes

* Improve broker logging and error reporting ([61fb28d](https://github.com/case-contract-testing/contract-case/commit/61fb28d362879fe68e70b2b15504da5c8b82ec5a))


### Code Refactoring

* Replace the config object in triggers with a clearer SetupInfo type, allowing cross-language function calls as mocks. Note that the function calls now always return json strings, user-facing DSLs will need to parse the strings ([c9ddd93](https://github.com/case-contract-testing/contract-case/commit/c9ddd93782b5e11cd5925ea76e089e0d779fdc11))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-http-dsl bumped from 0.17.1 to 0.18.0
    * @contract-case/case-core-plugin-http bumped from 0.17.1 to 0.18.0
    * @contract-case/case-core-plugin-function bumped from 0.17.1 to 0.18.0
    * @contract-case/case-entities-internal bumped from 0.17.1 to 0.18.0
    * @contract-case/case-plugin-base bumped from 0.17.1 to 0.18.0
    * @contract-case/case-plugin-dsl-types bumped from 0.17.1 to 0.18.0
  * devDependencies
    * @contract-case/case-definition-dsl bumped from ^0.17.1 to ^0.18.0

## [0.17.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.17.0...@contract-case/case-core-v0.17.1) (2024-10-08)


### Bug Fixes

* Correct location of error messages when the string prefix / suffix don't resolve to strings ([ba3746e](https://github.com/case-contract-testing/contract-case/commit/ba3746e4ee5faab80051efe6aface1288f5a419b))
* Further improve logging of function invocation ([6641155](https://github.com/case-contract-testing/contract-case/commit/664115569ac7aac041ca05c6abe58cc585d9088c))
* Include all error messages in overall verification failed error ([889439f](https://github.com/case-contract-testing/contract-case/commit/889439faaacde40e54d988b93436bfa2d1a18253))
* Warn if the contract filename is too long ([fcc80d7](https://github.com/case-contract-testing/contract-case/commit/fcc80d7ed55a37bc85f95df3c460d8ad09d79e32))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-http-dsl bumped from 0.17.0 to 0.17.1
    * @contract-case/case-core-plugin-http bumped from 0.17.0 to 0.17.1
    * @contract-case/case-core-plugin-function bumped from 0.17.0 to 0.17.1
    * @contract-case/case-entities-internal bumped from 0.17.0 to 0.17.1
    * @contract-case/case-plugin-base bumped from 0.17.0 to 0.17.1
    * @contract-case/case-plugin-dsl-types bumped from 0.17.0 to 0.17.1
  * devDependencies
    * @contract-case/case-definition-dsl bumped from ^0.17.0 to ^0.17.1

## [0.17.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.16.3...@contract-case/case-core-v0.17.0) (2024-10-02)


### Miscellaneous Chores

* **@contract-case/case-core:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-http-dsl bumped from 0.16.3 to 0.17.0
    * @contract-case/case-core-plugin-http bumped from 0.16.3 to 0.17.0
    * @contract-case/case-core-plugin-function bumped from 0.16.3 to 0.17.0
    * @contract-case/case-entities-internal bumped from 0.16.3 to 0.17.0
    * @contract-case/case-plugin-base bumped from 0.16.3 to 0.17.0
    * @contract-case/case-plugin-dsl-types bumped from 0.16.3 to 0.17.0
  * devDependencies
    * @contract-case/case-definition-dsl bumped from ^0.16.3 to ^0.17.0

## [0.16.3](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.16.2...@contract-case/case-core-v0.16.3) (2024-10-02)


### Miscellaneous Chores

* **@contract-case/case-core:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-http-dsl bumped from ^0.16.2 to ^0.16.3
    * @contract-case/case-core-plugin-http bumped from ^0.16.2 to ^0.16.3
    * @contract-case/case-core-plugin-function bumped from ^0.16.2 to ^0.16.3
    * @contract-case/case-entities-internal bumped from 0.16.2 to 0.16.3
    * @contract-case/case-plugin-base bumped from ^0.16.2 to ^0.16.3
  * devDependencies
    * @contract-case/case-definition-dsl bumped from ^0.16.2 to ^0.16.3

## [0.16.2](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.16.1...@contract-case/case-core-v0.16.2) (2024-10-02)


### Miscellaneous Chores

* **@contract-case/case-core:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-http-dsl bumped from ^0.16.1 to ^0.16.2
    * @contract-case/case-core-plugin-http bumped from ^0.16.1 to ^0.16.2
    * @contract-case/case-core-plugin-function bumped from ^0.16.1 to ^0.16.2
    * @contract-case/case-entities-internal bumped from 0.16.1 to 0.16.2
    * @contract-case/case-plugin-base bumped from ^0.16.1 to ^0.16.2
  * devDependencies
    * @contract-case/case-definition-dsl bumped from ^0.16.1 to ^0.16.2

## [0.16.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.16.0...@contract-case/case-core-v0.16.1) (2024-10-01)


### Miscellaneous Chores

* **@contract-case/case-core:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-http-dsl bumped from ^0.16.0 to ^0.16.1
    * @contract-case/case-core-plugin-http bumped from ^0.16.0 to ^0.16.1
    * @contract-case/case-core-plugin-function bumped from ^0.16.0 to ^0.16.1
    * @contract-case/case-entities-internal bumped from 0.16.0 to 0.16.1
    * @contract-case/case-plugin-base bumped from ^0.16.0 to ^0.16.1
  * devDependencies
    * @contract-case/case-definition-dsl bumped from ^0.16.0 to ^0.16.1

## [0.16.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.15.7...@contract-case/case-core-v0.16.0) (2024-10-01)


### ⚠ BREAKING CHANGES

* Slightly improve the description of and matchers. This is a breaking change for anyone relying on the autogenerated example names.
* Split HTTP mock and matchers to their own packages

### Features

* Allow loading of plugins via PluginLoader class ([0968917](https://github.com/case-contract-testing/contract-case/commit/0968917a4fa3cca66e6d58b1fd2ac552e6b73a56))
* Include function plugin by default ([7c2a0f3](https://github.com/case-contract-testing/contract-case/commit/7c2a0f3efac06a0c088427fafc19b3abbf610382))
* Introduce mockConfig to configuration object ([225ab61](https://github.com/case-contract-testing/contract-case/commit/225ab614bacc41c1b7461bed678cb7e0cde0e8a6))
* Load matchers from plugin ([8bd1bf0](https://github.com/case-contract-testing/contract-case/commit/8bd1bf08bb08b552e92087e6ee75bf5205003a5b))


### Bug Fixes

* Hardcode error names so that they're robust to minification ([3106196](https://github.com/case-contract-testing/contract-case/commit/3106196f909ef703ecb15e0f076933a987e69fc3))
* Slightly improve the description of and matchers. This is a breaking change for anyone relying on the autogenerated example names. ([176eb01](https://github.com/case-contract-testing/contract-case/commit/176eb01cb3bef50a19e3b1b65dfbbe881b55d954))


### Miscellaneous Chores

* Split HTTP mock and matchers to their own packages ([bfc2e4f](https://github.com/case-contract-testing/contract-case/commit/bfc2e4ff2d464899fd8ce63978048e9f1991ff80))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-http-dsl bumped from ^0.15.7 to ^0.16.0
    * @contract-case/case-core-plugin-http bumped from ^0.15.7 to ^0.16.0
    * @contract-case/case-core-plugin-function bumped from ^0.15.7 to ^0.16.0
    * @contract-case/case-entities-internal bumped from 0.15.7 to 0.16.0
    * @contract-case/case-plugin-base bumped from ^0.15.7 to ^0.16.0
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.4 to 0.1.0
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.0 to 0.1.1
    * @contract-case/case-definition-dsl bumped from ^0.15.7 to ^0.16.0

## [0.15.7](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.15.6...@contract-case/case-core-v0.15.7) (2024-05-16)


### Features

* Add internal config parameters to control whether verification is async or not ([6882739](https://github.com/case-contract-testing/contract-case/commit/68827393b0b766e753aeb77dcab123a2a01672fe))


### Bug Fixes

* Prevent server waiting for keepalive timeout on http verification ([7cebbf0](https://github.com/case-contract-testing/contract-case/commit/7cebbf0ced18f7129ff31f01067938b2ed11390c))
* Remove current-git-branch, allowing webpack to roll up the package ([0078083](https://github.com/case-contract-testing/contract-case/commit/0078083936e7a51bb2df02dcc7c22541bd7d1b04))
* Significantly improve trigger configuration error messages ([c494726](https://github.com/case-contract-testing/contract-case/commit/c4947265d3a65e57c7ff051de93db2b500f843ec))
* Tidy up logging by demoting some noisy logs to deepMaintainerDebug from maintainerDebug ([b9c5548](https://github.com/case-contract-testing/contract-case/commit/b9c5548569bb3082e4d2ffa93be08323127b1932))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.15.6 to 0.15.7
  * devDependencies
    * @contract-case/eslint-config-case-maintainer bumped from 0.0.3 to 0.1.0

## [0.15.6](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.15.5...@contract-case/case-core-v0.15.6) (2024-02-11)


### Bug Fixes

* Correct issue where type error might be thrown when a trigger function failed ([7889ef3](https://github.com/case-contract-testing/contract-case/commit/7889ef329f6e290221852752615c886d4d700158))
* Improve log output when matchers are double-specified ([62a4b09](https://github.com/case-contract-testing/contract-case/commit/62a4b09e53ab8b0b97af021388cbfbdc0f77b5ec))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.15.5 to 0.15.6

## [0.15.5](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.15.4...@contract-case/case-core-v0.15.5) (2024-01-30)


### Bug Fixes

* Correct an issue where nested lookup matchers would fail the test of whether or not they described the same thing ([bc2eac9](https://github.com/case-contract-testing/contract-case/commit/bc2eac9cb2ebb42044a957ed377501e5e3180c00))
* Improve logging of http responses ([4f8faef](https://github.com/case-contract-testing/contract-case/commit/4f8faeff9e5616e120ac60227b458ab643827d31))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.15.4 to 0.15.5

## [0.15.4](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.15.3...@contract-case/case-core-v0.15.4) (2024-01-23)


### Miscellaneous Chores

* **@contract-case/case-core:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.15.3 to 0.15.4
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.3 to 0.0.4

## [0.15.3](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.15.2...@contract-case/case-core-v0.15.3) (2024-01-18)


### Bug Fixes

* Correct issue where trigger functions that failed before calling the server would fail with the wrong reason ([1a8a375](https://github.com/case-contract-testing/contract-case/commit/1a8a3750421f0bad42c47a23b549c3790089fb6a))
* Improve debug logging around server startup and shutdown ([8509660](https://github.com/case-contract-testing/contract-case/commit/8509660d0e190b65677be7fcf5ca6e32a8cf2345))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.15.2 to 0.15.3

## [0.15.2](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.15.1...@contract-case/case-core-v0.15.2) (2024-01-06)


### Miscellaneous Chores

* **@contract-case/case-core:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.15.1 to 0.15.2

## [0.15.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.15.0...@contract-case/case-core-v0.15.1) (2024-01-06)


### Bug Fixes

* Correct an issue where lookup matchers that had nulls were incorrectly seen as non-equal ([06ac4fa](https://github.com/case-contract-testing/contract-case/commit/06ac4fa0d7648dffd02dfbe083d0220e424358ca))
* Correct issue where trigger function errors weren't thrown in some cases ([6172c18](https://github.com/case-contract-testing/contract-case/commit/6172c1827c52b45cd98e2b992d3c31ad544585c9))
* Correct name in log string ([6dec88b](https://github.com/case-contract-testing/contract-case/commit/6dec88b0feaee94fb672078618053fe5129320c1))
* Improve maintainer logging when there are no errors thrown ([f5110c0](https://github.com/case-contract-testing/contract-case/commit/f5110c06b4ba6d280ff192e259154531918f9823))
* Improve trigger function error message ([1894fb5](https://github.com/case-contract-testing/contract-case/commit/1894fb53d0c8a31635880a4103a07464980f4e6f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.15.0 to 0.15.1

## [0.15.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.14.0...@contract-case/case-core-v0.15.0) (2023-12-25)


### ⚠ BREAKING CHANGES

* Now all loggers and printers return promises, to better reflect that there is a boundary crossed

### Code Refactoring

* Now all loggers and printers return promises, to better reflect that there is a boundary crossed ([14a9365](https://github.com/case-contract-testing/contract-case/commit/14a9365d6f873c352dadff539b7d8b67946412d0))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.14.0 to 0.15.0

## [0.14.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.13.1...@contract-case/case-core-v0.14.0) (2023-10-11)


### Bug Fixes

* Add link to documentation in warning message about zero-length arrays ([54dd26d](https://github.com/case-contract-testing/contract-case/commit/54dd26dd1d534b6c71f0c9a8655b4a264439b8e2))
* Make loglevel config option optional ([f6c18d9](https://github.com/case-contract-testing/contract-case/commit/f6c18d97434aebbff054c368b5929251935b41ea))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.13.1 to 0.14.0
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.2 to 0.0.3
    * @contract-case/eslint-config-case-maintainer bumped from 0.0.2 to 0.0.3

## [0.13.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.13.0...@contract-case/case-core-v0.13.1) (2023-10-11)


### Bug Fixes

* Make loglevel config option optional ([f6c18d9](https://github.com/case-contract-testing/contract-case/commit/f6c18d97434aebbff054c368b5929251935b41ea))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.13.0 to 0.13.1
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.1 to 0.0.2
    * @contract-case/eslint-config-case-maintainer bumped from 0.0.1 to 0.0.2

## [0.13.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.12.2...@contract-case/case-core-v0.13.0) (2023-06-09)


### Miscellaneous Chores

* **@contract-case/case-core:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.12.2 to 0.13.0

## [0.12.2](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.12.1...@contract-case/case-core-v0.12.2) (2023-06-01)


### Bug Fixes

* Add link to documentation in warning message about zero-length arrays ([54dd26d](https://github.com/case-contract-testing/contract-case/commit/54dd26dd1d534b6c71f0c9a8655b4a264439b8e2))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.12.1 to 0.12.2

## [0.12.1](https://github.com/TimothyJones/ContractCaseTest/compare/@contract-case/case-core-v0.12.0...@contract-case/case-core-v0.12.1) (2023-05-19)


### Bug Fixes

* Add link to documentation in warning message about zero-length arrays ([54dd26d](https://github.com/TimothyJones/ContractCaseTest/commit/54dd26dd1d534b6c71f0c9a8655b4a264439b8e2))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.12.0 to 0.12.1

## [0.12.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.11.0...@contract-case/case-core-v0.12.0) (2023-05-17)


### ⚠ BREAKING CHANGES

* Add new constructor parameter to allow parents to pass in their version number for debugging. Any uses of the Contract* classes will need to be updated to provide an array of parent package version strings

### Features

* Add new constructor parameter to allow parents to pass in their version number for debugging. Any uses of the Contract* classes will need to be updated to provide an array of parent package version strings ([93485eb](https://github.com/case-contract-testing/contract-case/commit/93485eb9c2cd4f83f5119a3283ea8b4ac8dbdf99))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.11.0 to 0.12.0

## [0.11.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-v0.10.1...@contract-case/case-core-v0.11.0) (2023-05-09)


### ⚠ BREAKING CHANGES

* Remove ContractDefiner and ContractVerifier boundaries. Please use @contract-case/case-boundary instead.
* Remove jest DSL. Please use @contract-case/contract-case-jest instead.
* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again
* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated

### Features

* Add ability to pass in printer for log lines ([d6d8b7f](https://github.com/case-contract-testing/contract-case/commit/d6d8b7f455a8cb30f80a4db3dbb459e3493502f5))
* Add cli package ([600c429](https://github.com/case-contract-testing/contract-case/commit/600c4298089cfc8bc34a50cd4bf3cacf920b75ad))
* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type ([861be95](https://github.com/case-contract-testing/contract-case/commit/861be95135b0bdbe2eba615f455163f44ffe6945))
* Add triggerAndTest function to the connectors layer ([fd9f1f2](https://github.com/case-contract-testing/contract-case/commit/fd9f1f255919a53e22a52de295738b41aba721f0))
* Allow specification of more options via environment variables ([553a7b1](https://github.com/case-contract-testing/contract-case/commit/553a7b15fbb6ba6069c0bee2c683b57ece942c3c))
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again ([6cfd730](https://github.com/case-contract-testing/contract-case/commit/6cfd730d83d3ad5381479c592d8f3939263a4ea3))
* Export  TestInvoker, MultiTestInvoker and CaseContractDescription ([4818aa8](https://github.com/case-contract-testing/contract-case/commit/4818aa8d2400517ef6ef21fc16f1536b04e99962))
* Export all error types ([8b2ca24](https://github.com/case-contract-testing/contract-case/commit/8b2ca241189d4d51a04d9bfdbbe9e82ad10f5a7d))
* Export ContractDefinerConnector and ContractVerifierConnector. The ContractDefiner and ContractVerifier classes will be moved to the case-boundaries package soon ([6805f1c](https://github.com/case-contract-testing/contract-case/commit/6805f1c50d72aa9313b767bfc8157614d9924b40))
* Export error and config types ([b46fe4a](https://github.com/case-contract-testing/contract-case/commit/b46fe4a99bce89cd8a14be71de6f710af16d3acd))
* Export LogPrinter type ([77eb3ce](https://github.com/case-contract-testing/contract-case/commit/77eb3ce7a68d5d445bf690c2e054f5d0fb18fd76))
* Introduce BrokerError and expose it ([6fc09ba](https://github.com/case-contract-testing/contract-case/commit/6fc09ba2bd9c2eac360e1f7c47c12fe88f9927cd))
* Introduce triggerAndTest types for invoking both a trigger and the test together (useful for invoking from other languages) ([855ffd8](https://github.com/case-contract-testing/contract-case/commit/855ffd8a22957c9b12b778fd4f200755e5f2b72d))
* Remove ContractDefiner and ContractVerifier boundaries. Please use @contract-case/case-boundary instead. ([b560086](https://github.com/case-contract-testing/contract-case/commit/b560086eb1676f357ba4e32d5b734a7a29aa5ea8))
* Remove jest DSL. Please use @contract-case/contract-case-jest instead. ([5ae33bb](https://github.com/case-contract-testing/contract-case/commit/5ae33bbebfbe416331d4ba01e55f613302409e24))


### Bug Fixes

* Add contract name to log location for publish contract/verification ([d736689](https://github.com/case-contract-testing/contract-case/commit/d7366896304897c9a7fff6148966d5dbd62ce1f8))
* Correct a bug where the default settings overrode settings provided via environment variables ([9784637](https://github.com/case-contract-testing/contract-case/commit/97846379f0be62cf01c0837dee6261fac66b2c9d))
* Correct an issue where combined triggers were not passed through to the test runner ([0dfe32f](https://github.com/case-contract-testing/contract-case/commit/0dfe32f03a8d4ae60a58cd82e9a7e3307e6227f0))
* Correct issue where verifier didn't pass down all invoker properties ([238b42b](https://github.com/case-contract-testing/contract-case/commit/238b42b87a07abb5ceca337fd9c8459167a13092))
* Correct problem where not having a broker CI token would not fail the publish ([b22d956](https://github.com/case-contract-testing/contract-case/commit/b22d9565f60a474890aa9fd7962294e87f88d23d))
* Don't throw configuration errors for missing broker details when publish=NEVER ([4893bc3](https://github.com/case-contract-testing/contract-case/commit/4893bc306fb4d4943d4f7be9b9baab76313b5a2e))
* Fix a bug where configuration from environment variables was ignored during contract definition ([2fe5d32](https://github.com/case-contract-testing/contract-case/commit/2fe5d328b2e63e731b7969b63cb1156b668d139c))
* Improve error message if you try to publish verification results for a contract that has no broker ([03714d1](https://github.com/case-contract-testing/contract-case/commit/03714d1e98ccff92e84f35d0d79abd2a97607df7))
* Improve error messages when contract downloader fails ([93eb28b](https://github.com/case-contract-testing/contract-case/commit/93eb28bda6920e9d49c057f9b024c5176cee6649))
* Improve formatting of error output ([04897a4](https://github.com/case-contract-testing/contract-case/commit/04897a421f31a4c7a998b024eb9ca0e2ade2af80))
* Improve logger output ([f68752d](https://github.com/case-contract-testing/contract-case/commit/f68752d774a3d8c5a953a47b164ac0e81bbcc227))
* Swap colours for maintainerDebug and deepMaintainerDebug ([c77f6fb](https://github.com/case-contract-testing/contract-case/commit/c77f6fbbffd4d96b3396d408a29dd6456e3fe96a))
* Widen types for `stripMatchers` and `checkMatch` (a side-effect of using the new case-entities-internal package) ([26d5b6e](https://github.com/case-contract-testing/contract-case/commit/26d5b6e90612066d703d359421b8be9995b0009a))


### Code Refactoring

* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated ([438fac4](https://github.com/case-contract-testing/contract-case/commit/438fac472f9d58686a705bd57d58696a0499f226))

## [0.10.1](https://github.com/case-contract-testing/case/compare/v0.10.0...v0.10.1) (2023-05-08)


### Bug Fixes

* Correct problem where not having a broker CI token would not fail the publish ([b22d956](https://github.com/case-contract-testing/case/commit/b22d9565f60a474890aa9fd7962294e87f88d23d))
* Don't throw configuration errors for missing broker details when publish=NEVER ([4893bc3](https://github.com/case-contract-testing/case/commit/4893bc306fb4d4943d4f7be9b9baab76313b5a2e))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.10.0 to 0.11.0

## [0.10.0](https://github.com/case-contract-testing/case/compare/v0.9.1...v0.10.0) (2023-05-06)


### ⚠ BREAKING CHANGES

* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again
* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated

### Features

* Add ability to pass in printer for log lines ([d6d8b7f](https://github.com/case-contract-testing/case/commit/d6d8b7f455a8cb30f80a4db3dbb459e3493502f5))
* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type ([861be95](https://github.com/case-contract-testing/case/commit/861be95135b0bdbe2eba615f455163f44ffe6945))
* Add triggerAndTest function to the connectors layer ([fd9f1f2](https://github.com/case-contract-testing/case/commit/fd9f1f255919a53e22a52de295738b41aba721f0))
* Allow specification of more options via environment variables ([553a7b1](https://github.com/case-contract-testing/case/commit/553a7b15fbb6ba6069c0bee2c683b57ece942c3c))
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again ([6cfd730](https://github.com/case-contract-testing/case/commit/6cfd730d83d3ad5381479c592d8f3939263a4ea3))
* Export  TestInvoker, MultiTestInvoker and CaseContractDescription ([4818aa8](https://github.com/case-contract-testing/case/commit/4818aa8d2400517ef6ef21fc16f1536b04e99962))
* Export all error types ([8b2ca24](https://github.com/case-contract-testing/case/commit/8b2ca241189d4d51a04d9bfdbbe9e82ad10f5a7d))
* Export ContractDefinerConnector and ContractVerifierConnector. The ContractDefiner and ContractVerifier classes will be moved to the case-boundaries package soon ([6805f1c](https://github.com/case-contract-testing/case/commit/6805f1c50d72aa9313b767bfc8157614d9924b40))
* Export error and config types ([b46fe4a](https://github.com/case-contract-testing/case/commit/b46fe4a99bce89cd8a14be71de6f710af16d3acd))
* Export LogPrinter type ([77eb3ce](https://github.com/case-contract-testing/case/commit/77eb3ce7a68d5d445bf690c2e054f5d0fb18fd76))
* Introduce triggerAndTest types for invoking both a trigger and the test together (useful for invoking from other languages) ([855ffd8](https://github.com/case-contract-testing/case/commit/855ffd8a22957c9b12b778fd4f200755e5f2b72d))


### Bug Fixes

* Add contract name to log location for publish contract/verification ([d736689](https://github.com/case-contract-testing/case/commit/d7366896304897c9a7fff6148966d5dbd62ce1f8))
* Correct a bug where the default settings overrode settings provided via environment variables ([9784637](https://github.com/case-contract-testing/case/commit/97846379f0be62cf01c0837dee6261fac66b2c9d))
* Correct an issue where combined triggers were not passed through to the test runner ([0dfe32f](https://github.com/case-contract-testing/case/commit/0dfe32f03a8d4ae60a58cd82e9a7e3307e6227f0))
* Correct issue where verifier didn't pass down all invoker properties ([238b42b](https://github.com/case-contract-testing/case/commit/238b42b87a07abb5ceca337fd9c8459167a13092))
* Improve error message if you try to publish verification results for a contract that has no broker ([03714d1](https://github.com/case-contract-testing/case/commit/03714d1e98ccff92e84f35d0d79abd2a97607df7))
* Improve error messages when contract downloader fails ([93eb28b](https://github.com/case-contract-testing/case/commit/93eb28bda6920e9d49c057f9b024c5176cee6649))
* Improve formatting of error output ([04897a4](https://github.com/case-contract-testing/case/commit/04897a421f31a4c7a998b024eb9ca0e2ade2af80))
* Improve logger output ([f68752d](https://github.com/case-contract-testing/case/commit/f68752d774a3d8c5a953a47b164ac0e81bbcc227))
* Swap colours for maintainerDebug and deepMaintainerDebug ([c77f6fb](https://github.com/case-contract-testing/case/commit/c77f6fbbffd4d96b3396d408a29dd6456e3fe96a))
* Widen types for `stripMatchers` and `checkMatch` (a side-effect of using the new case-entities-internal package) ([26d5b6e](https://github.com/case-contract-testing/case/commit/26d5b6e90612066d703d359421b8be9995b0009a))


### Code Refactoring

* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated ([438fac4](https://github.com/case-contract-testing/case/commit/438fac472f9d58686a705bd57d58696a0499f226))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.9.1 to 0.10.0

## [0.9.1](https://github.com/case-contract-testing/case/compare/@contract-case/case-core-v0.9.0...@contract-case/case-core-v0.9.1) (2023-05-03)


### Features

* Add triggerAndTest function to the connectors layer ([fd9f1f2](https://github.com/case-contract-testing/case/commit/fd9f1f255919a53e22a52de295738b41aba721f0))
* Export  TestInvoker, MultiTestInvoker and CaseContractDescription ([4818aa8](https://github.com/case-contract-testing/case/commit/4818aa8d2400517ef6ef21fc16f1536b04e99962))


### Bug Fixes

* Correct an issue where combined triggers were not passed through to the test runner ([0dfe32f](https://github.com/case-contract-testing/case/commit/0dfe32f03a8d4ae60a58cd82e9a7e3307e6227f0))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.9.0 to 0.9.1

## [0.9.0](https://github.com/case-contract-testing/case/compare/@contract-case/case-core-v0.8.0...@contract-case/case-core-v0.9.0) (2023-04-26)


### ⚠ BREAKING CHANGES

* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again
* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated

### Features

* Add ability to pass in printer for log lines ([d6d8b7f](https://github.com/case-contract-testing/case/commit/d6d8b7f455a8cb30f80a4db3dbb459e3493502f5))
* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type ([861be95](https://github.com/case-contract-testing/case/commit/861be95135b0bdbe2eba615f455163f44ffe6945))
* Allow specification of more options via environment variables ([553a7b1](https://github.com/case-contract-testing/case/commit/553a7b15fbb6ba6069c0bee2c683b57ece942c3c))
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again ([6cfd730](https://github.com/case-contract-testing/case/commit/6cfd730d83d3ad5381479c592d8f3939263a4ea3))
* Export all error types ([8b2ca24](https://github.com/case-contract-testing/case/commit/8b2ca241189d4d51a04d9bfdbbe9e82ad10f5a7d))
* Export ContractDefinerConnector and ContractVerifierConnector. The ContractDefiner and ContractVerifier classes will be moved to the case-boundaries package soon ([6805f1c](https://github.com/case-contract-testing/case/commit/6805f1c50d72aa9313b767bfc8157614d9924b40))
* Export error and config types ([b46fe4a](https://github.com/case-contract-testing/case/commit/b46fe4a99bce89cd8a14be71de6f710af16d3acd))
* Export LogPrinter type ([77eb3ce](https://github.com/case-contract-testing/case/commit/77eb3ce7a68d5d445bf690c2e054f5d0fb18fd76))
* Introduce triggerAndTest types for invoking both a trigger and the test together (useful for invoking from other languages) ([855ffd8](https://github.com/case-contract-testing/case/commit/855ffd8a22957c9b12b778fd4f200755e5f2b72d))


### Bug Fixes

* Add contract name to log location for publish contract/verification ([d736689](https://github.com/case-contract-testing/case/commit/d7366896304897c9a7fff6148966d5dbd62ce1f8))
* Correct a bug where the default settings overrode settings provided via environment variables ([9784637](https://github.com/case-contract-testing/case/commit/97846379f0be62cf01c0837dee6261fac66b2c9d))
* Improve error message if you try to publish verification results for a contract that has no broker ([03714d1](https://github.com/case-contract-testing/case/commit/03714d1e98ccff92e84f35d0d79abd2a97607df7))
* Improve error messages when contract downloader fails ([93eb28b](https://github.com/case-contract-testing/case/commit/93eb28bda6920e9d49c057f9b024c5176cee6649))
* Improve formatting of error output ([04897a4](https://github.com/case-contract-testing/case/commit/04897a421f31a4c7a998b024eb9ca0e2ade2af80))
* Improve logger output ([f68752d](https://github.com/case-contract-testing/case/commit/f68752d774a3d8c5a953a47b164ac0e81bbcc227))
* Swap colours for maintainerDebug and deepMaintainerDebug ([c77f6fb](https://github.com/case-contract-testing/case/commit/c77f6fbbffd4d96b3396d408a29dd6456e3fe96a))
* Widen types for `stripMatchers` and `checkMatch` (a side-effect of using the new case-entities-internal package) ([26d5b6e](https://github.com/case-contract-testing/case/commit/26d5b6e90612066d703d359421b8be9995b0009a))


### Code Refactoring

* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated ([438fac4](https://github.com/case-contract-testing/case/commit/438fac472f9d58686a705bd57d58696a0499f226))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.8.0 to 0.9.0

## [0.8.0](https://github.com/case-contract-testing/case/compare/v0.7.0...case-core-v0.8.0) (2023-04-19)

### ⚠ BREAKING CHANGES

- Rename all internal fields from "case:_" to "\_case:_" for compatibility with JSii. Contract files written before this change will need to be regenerated

### Features

- Add ability to pass in printer for log lines ([d6d8b7f](https://github.com/case-contract-testing/case/commit/d6d8b7f455a8cb30f80a4db3dbb459e3493502f5))
- Export ContractDefinerConnector and ContractVerifierConnector. The ContractDefiner and ContractVerifier classes will be moved to the case-boundaries package soon ([6805f1c](https://github.com/case-contract-testing/case/commit/6805f1c50d72aa9313b767bfc8157614d9924b40))
- Export error and config types ([b46fe4a](https://github.com/case-contract-testing/case/commit/b46fe4a99bce89cd8a14be71de6f710af16d3acd))
- Export LogPrinter type ([77eb3ce](https://github.com/case-contract-testing/case/commit/77eb3ce7a68d5d445bf690c2e054f5d0fb18fd76))

### Bug Fixes

- Add contract name to log location for publish contract/verification ([d736689](https://github.com/case-contract-testing/case/commit/d7366896304897c9a7fff6148966d5dbd62ce1f8))
- Improve logger output ([f68752d](https://github.com/case-contract-testing/case/commit/f68752d774a3d8c5a953a47b164ac0e81bbcc227))
- Swap colours for maintainerDebug and deepMaintainerDebug ([c77f6fb](https://github.com/case-contract-testing/case/commit/c77f6fbbffd4d96b3396d408a29dd6456e3fe96a))
- Widen types for `stripMatchers` and `checkMatch` (a side-effect of using the new case-entities-internal package) ([26d5b6e](https://github.com/case-contract-testing/case/commit/26d5b6e90612066d703d359421b8be9995b0009a))

### Code Refactoring

- Rename all internal fields from "case:_" to "\_case:_" for compatibility with JSii. Contract files written before this change will need to be regenerated ([438fac4](https://github.com/case-contract-testing/case/commit/438fac472f9d58686a705bd57d58696a0499f226))

### Dependencies

- The following workspace dependencies were updated
  - dependencies
    - @contract-case/case-entities-internal bumped from \* to 0.8.0

## [0.7.0](https://github.com/case-contract-testing/case/compare/v0.6.2...v0.7.0) (2023-04-07)

### ⚠ BREAKING CHANGES

- Rename the verifier options triggers.verifiers to triggers.testResponses and triggers.errorVerifiers to triggers.testErrorResponses for consistency with the runExample DSL
- Rename `contract.verifyContract` to `contract.runVerification` for consistency
- Verification now supports reading contracts from a directory, to allow contract download from a broker. The interface to `verifyContract` has now changed - use contractFilename or contractDirectory instead of passing the raw contract.
- Change the default to not publish contracts if not in CI. Set the new config option `publish: true` or `publish: "ALWAYS"` if you need the old behaviour of always publishing
- All matcher and mock types are now prefixed with `case:`. This change allows extensions without naming clashes, but means any contracts prior to this version must be regenerated.

### Features

- Add ability to publish verification results ([cc2b7c2](https://github.com/case-contract-testing/case/commit/cc2b7c287b4e08607cced24d1f6db1eb2d9cc1b1))
- Change the default to not publish contracts if not in CI. Set the new config option `publish: true` or `publish: "ALWAYS"` if you need the old behaviour of always publishing ([9ab6ca9](https://github.com/case-contract-testing/case/commit/9ab6ca9ad6319c8f0e9e6271849b835a56ed6799))
- Print broker response messages ([093d896](https://github.com/case-contract-testing/case/commit/093d896a0871e2a7d7ff913e7387453cd643b295))
- Verification now supports reading contracts from a directory, to allow contract download from a broker. The interface to `verifyContract` has now changed - use contractFilename or contractDirectory instead of passing the raw contract. ([e0b9fbb](https://github.com/case-contract-testing/case/commit/e0b9fbb441ab393bcfeb9fb987b424b698411514))
- When saving contracts, create contract directory if it doesn't already exist ([72f8edb](https://github.com/case-contract-testing/case/commit/72f8edbb3ebb7f38833109f12878edbfaa2549b6))

### Bug Fixes

- Correct parsing of Broker response messages ([f625168](https://github.com/case-contract-testing/case/commit/f6251687be2ae9ed9f8ba25981da1447754a55a9))
- Empty triggers.testResponses and triggers.testErrorResponses blocks are no longer required ([4a2d6e6](https://github.com/case-contract-testing/case/commit/4a2d6e67e7ac787cfbd2aaccd21a404435dcd354))
- Extend Jest's timeout during contract definition as well as verification ([db998a6](https://github.com/case-contract-testing/case/commit/db998a6b5fab44c6727bed4dc50cf2485434289d))
- Improve debug message when the trigger fails ([098050a](https://github.com/case-contract-testing/case/commit/098050ae6942638ddbac9c380e4237b84fe48007))
- Improve error message when publish is misconfigured ([fc0fb1e](https://github.com/case-contract-testing/case/commit/fc0fb1ef45e468c686630dfe8dd4c932410eb1bb))

### Code Refactoring

- All matcher and mock types are now prefixed with `case:`. This change allows extensions without naming clashes, but means any contracts prior to this version must be regenerated. ([945808b](https://github.com/case-contract-testing/case/commit/945808bba0f425b1defbeb766b7d2671baeea8d5))
- Rename `contract.verifyContract` to `contract.runVerification` for consistency ([b739ceb](https://github.com/case-contract-testing/case/commit/b739cebea5cbf7c232768fa17204c63854043a74))
- Rename the verifier options triggers.verifiers to triggers.testResponses and triggers.errorVerifiers to triggers.testErrorResponses for consistency with the runExample DSL ([a6fe848](https://github.com/case-contract-testing/case/commit/a6fe848cf0020b0aa0e7f4bd97aeab4ebd7540a1))

## [0.6.2](https://github.com/case-contract-testing/case/compare/v0.6.1...v0.6.2) (2023-03-28)

### Features

- Add stringifiedJson and encodedStringBase64 matchers ([5e992e7](https://github.com/case-contract-testing/case/commit/5e992e71bb34bba317b368a2f0f1b67b47798fc9))
- Use the advanced broker publishing endpoint instead of the old one ([070aee8](https://github.com/case-contract-testing/case/commit/070aee8d8426430dabb06efd8a01ef69e10b9841))

### Miscellaneous Chores

- release 0.6.2 ([de6504e](https://github.com/case-contract-testing/case/commit/de6504e8021a17a0b09259efb183cdc83cfe3ca3))

## [0.6.1](https://github.com/case-contract-testing/case/compare/v0.6.0...v0.6.1) (2023-03-27)

### Bug Fixes

- Tidy up boundary layer to improve importing in JSii ([6604996](https://github.com/case-contract-testing/case/commit/66049962d81556997a94ce0c5304e7061c752d9f))

### Miscellaneous Chores

- release 0.6.1 ([d34ee95](https://github.com/case-contract-testing/case/commit/d34ee95ee53765f4184076fde1b32720d5f5db3b))

## [0.6.0](https://github.com/case-contract-testing/case/compare/v0.5.1...v0.6.0) (2023-03-26)

### ⚠ BREAKING CHANGES

- Verification no longer throws an error if verification fails. The intended use is to use `can-i-deploy` to gate deployments. If you need failure (eg during development), set `throwOnFail: true` in the options.

### Features

- Verification no longer throws an error if verification fails. The intended use is to use `can-i-deploy` to gate deployments. If you need failure (eg during development), set `throwOnFail: true` in the options. ([ee33690](https://github.com/case-contract-testing/case/commit/ee336900c6ff14cd6fcc7530c2175ea75e0b9978))

### Bug Fixes

- Add location information to title of the errors, improving readability ([1f740d9](https://github.com/case-contract-testing/case/commit/1f740d911b59344e77b5d02792b4f45031bf2dc1))
- Correct location string in the suffix matcher during describe (was incorrectly "prefix") ([a52efca](https://github.com/case-contract-testing/case/commit/a52efcad47d637020d916b4674d61990b6942043))
- Improve formatting of the thrown error when the assertions fail ([3a50dad](https://github.com/case-contract-testing/case/commit/3a50dad7b8ecadda8726a8c713fc66609e7cd3fb))
- Rename 'Test' -&gt; 'Example' in the location tag printed in errors ([e8bddf6](https://github.com/case-contract-testing/case/commit/e8bddf68df08ffd1dc046d61bbaf0f0189b929ed))
- Substantially reduce the verbosity of the location hint in errors (unless logLevel is maintainerDebug or lower) ([63f3413](https://github.com/case-contract-testing/case/commit/63f3413f9023e9dc9694840c00ed5e9413716387))

## [0.5.1](https://github.com/TimothyJones/case/compare/v0.5.0...v0.5.1) (2023-03-21)

### Features

- **jest:** Use contract consumerName and providerName in describe block during contract validation ([9763035](https://github.com/TimothyJones/case/commit/9763035c24ea816f07e1ffe11648a6090e51e52e))

### Bug Fixes

- Remove an empty describe block present during contract verification in Jest ([e01070e](https://github.com/TimothyJones/case/commit/e01070e70d0c9720b30b289901756a7162b80492))

### Miscellaneous Chores

- release 0.5.1 ([4ee5bcb](https://github.com/TimothyJones/case/commit/4ee5bcb37e6dbca84b05f9a769e736fd0600f84e))

## [0.5.0](https://github.com/TimothyJones/case/compare/v0.4.0...v0.5.0) (2023-03-21)

### ⚠ BREAKING CHANGES

- Remove misnamed exports of CaseContract and CaseVerifier. Use the intended classes ContractDefiner and ContractVerifier instead
- Rename VerifiyCaseJestCallback -> VerifyCaseJestCallback, fixing a typo in the name

### Features

- Add ability to override config on a per-test level using an optional config parameter for runExample() and runRejectingExample() ([d3fe7de](https://github.com/TimothyJones/case/commit/d3fe7dedced31ad2bfc383a61ab254c56ade88ba))
- Add bearerToken() matcher for ease of auth headers; and a stringStateVariable() matcher for use when you know a variable is a string ([f9fa501](https://github.com/TimothyJones/case/commit/f9fa501f1b1783992181ee5cf54369502ab77050))
- Add download-contracts binary which can download contracts from a broker ([7c73360](https://github.com/TimothyJones/case/commit/7c7336091524c6d45f20e3b4ef1bf5599b2de382))
- Add uriEncodedString() matcher for URI encoded strings ([de7bdea](https://github.com/TimothyJones/case/commit/de7bdea6285aad973e94bdc2577616eb599898fe))
- **docs:** Defining contract documentation now written ([ab894ff](https://github.com/TimothyJones/case/commit/ab894ff9f7781c597851ba953262aeb1d81d2c0a))
- Expose config to test reponse functions during contract definition ([d237618](https://github.com/TimothyJones/case/commit/d237618449bfe1c55f2d1a7503a34a18015bd296))
- Support the Open Source Pact Broker by adding basic auth. Also added a basicAuth() matcher ([997c3ab](https://github.com/TimothyJones/case/commit/997c3abe8017fc67edca43b78f4ce06ac156b155))

### Bug Fixes

- Correct typo in httpStatus human-readable string (httpStaus -&gt; httpStatus) ([70e44af](https://github.com/TimothyJones/case/commit/70e44af3d75d416eb4bae81b70552b844431b2fb))
- Don't try to publish a contract if there's no CI token set; instead just print a warning ([564aa6e](https://github.com/TimothyJones/case/commit/564aa6e2cbd88c7a15b1469b4cf029bd24c2e529))
- Fix a bug where it was possible to have a failed test ignored instead of leading to failure to write the contract ([757ebf8](https://github.com/TimothyJones/case/commit/757ebf87fa2f43ac402baa0c7297b5263ce09d52))
- Increase timeout for verifications in Jest to 30 seconds ([ce800c2](https://github.com/TimothyJones/case/commit/ce800c21ad95c566465eb5d81e5350a38ebb4bdf))
- Loosen type restriction when using variables from Config objects ([f8918d9](https://github.com/TimothyJones/case/commit/f8918d9f77c7c91cb8f5ab836e7a8ad3566c010e))
- Remove hack to match Pact file format as it is now not necessary ([30ddd7f](https://github.com/TimothyJones/case/commit/30ddd7f62c0c1815fe48d7a8a3f3812660e121de))
- Remove misnamed exports of CaseContract and CaseVerifier. Use the intended classes ContractDefiner and ContractVerifier instead ([5cd77aa](https://github.com/TimothyJones/case/commit/5cd77aaf6ad90b931c84ae282024079964da9832))
- Rename VerifiyCaseJestCallback -&gt; VerifyCaseJestCallback, fixing a typo in the name ([d69c4b2](https://github.com/TimothyJones/case/commit/d69c4b258e2d2b3d140c567a5b605072a194eaf0))

## [0.4.0](https://github.com/TimothyJones/case/compare/v0.3.0...v0.4.0) (2023-03-17)

### ⚠ BREAKING CHANGES

- Rename ContractFile type ContractData

### Features

- Add case version metadata to contract file ([479c27b](https://github.com/TimothyJones/case/commit/479c27bd73d260dc5813d61bc71c7bd7e0fcce88))

### Code Refactoring

- Rename ContractFile type ContractData ([0329b6c](https://github.com/TimothyJones/case/commit/0329b6c62c9e9f691721426c4fae1aa2e85d4d64))

## [0.3.0](https://github.com/TimothyJones/case/compare/v0.2.0...v0.3.0) (2023-03-07)

### ⚠ BREAKING CHANGES

- Change the automatic description of variables from ${varName} to {{varName}}
- **jest:** Add verifyContract helper; rename caseContractWith to defineContract for consistency

### Features

- Add ability to pass common config (statehandlers and triggers) to the contract at initialisation ([e30fe34](https://github.com/TimothyJones/case/commit/e30fe34063caccdc84ba156bab68fa9b3fc1849d))
- **jest:** Add verifyContract helper; rename caseContractWith to defineContract for consistency ([a035fc7](https://github.com/TimothyJones/case/commit/a035fc7e916f6663782d5f76e0a9e22c6d5510a5))
- Support query strings in http tests ([0909b4c](https://github.com/TimothyJones/case/commit/0909b4c795f6210671330ab05ccbc4ec55a80c25))

### Bug Fixes

- Change the automatic description of variables from ${varName} to {{varName}} ([eecab14](https://github.com/TimothyJones/case/commit/eecab14d02e7397b1affb3c107076b106b2cacc1))
- Print name of error instead of 'EXECUTION ERROR' when an execution error happens ([30610e5](https://github.com/TimothyJones/case/commit/30610e57a6a6aa67d0a9d532bd78e1ba9d3d802f))

## [0.2.0](https://github.com/TimothyJones/case/compare/v0.1.0...v0.2.0) (2023-03-06)

### ⚠ BREAKING CHANGES

- Remove info log level as it was never needed

### Features

- Add ability to specifiy exact contract filename ([7ccf8de](https://github.com/TimothyJones/case/commit/7ccf8deda08772bea6ebc184227eb13c896e592b))
- Add deepMaintainerDebug log level ([673c3c2](https://github.com/TimothyJones/case/commit/673c3c2b418ac99d95a762be6b0f28d68609e9a2))
- Add native broker client ([465cf44](https://github.com/TimothyJones/case/commit/465cf44656cf5264bd5814804c4a853bff480b3e))
- Allow files to be uploaded to Pact Brokers ([4879b35](https://github.com/TimothyJones/case/commit/4879b354ef4e9a0e784126a63626eff9af8ec5b5))
- Extract Jest DSL for writing contracts ([a56bb1e](https://github.com/TimothyJones/case/commit/a56bb1e38512ce990b1cd5f812edd3d8c7af5f80))

### Bug Fixes

- Add Jest as a peer-dependency ([a48e861](https://github.com/TimothyJones/case/commit/a48e8614c3bfe5ca3611f42e9e403aaf32e7af91))
- Connect state variables to the config object that handlers receive ([76e4e49](https://github.com/TimothyJones/case/commit/76e4e49e5d7c4422ecdce2782ea7cadb939f5293))
- Don't log the config in the contract file ([4cf3922](https://github.com/TimothyJones/case/commit/4cf39228408208a87a0ff95cc6bb8faed55506a0))
- Ensure that version number in logs is always correct ([672301f](https://github.com/TimothyJones/case/commit/672301f4435c2e6f7a20e47f6fb7d5c0161f80e0))
- ensure the Assertable promise isn't left open if a trigger function fails ([7a6270d](https://github.com/TimothyJones/case/commit/7a6270dbc1c1198b0a5001d74b6ddd7004285370))
- Expose typescript types in compiled package ([0ad7502](https://github.com/TimothyJones/case/commit/0ad7502689bfe011ec50da784c15e5af119a857b))
- Remove info log level as it was never needed ([b6801b6](https://github.com/TimothyJones/case/commit/b6801b6b777d409c5d05308749557930dabcdcf8))
- Substantially improve error message when the verification of a trigger return object fails ([085df9b](https://github.com/TimothyJones/case/commit/085df9bdf68ddd833662f8031dfdefcca8b90eb4))
- upgrade axios from 1.3.1 to 1.3.2 ([c98b4a6](https://github.com/TimothyJones/case/commit/c98b4a6a9299c3e89fbe0e18b9787e146efde935))
- upgrade pretty-format from 29.3.1 to 29.4.1 ([951696e](https://github.com/TimothyJones/case/commit/951696e1f03d4b9d23ebd12dc22180b47925ba21))

## [0.1.0](https://github.com/TimothyJones/case/compare/v0.0.2...v0.1.0) (2023-02-14)

### ⚠ BREAKING CHANGES

- Replace interaction in contract file property names with mock
- Change the name of the http interactions to make behaviour clearer

### Features

- Add 'none' logLevel ([3cc6976](https://github.com/TimothyJones/case/commit/3cc6976b9bb805b53141168eb7b8cc0a4a29dd1a))
- Add ability for matchers to describe themselves, bringing in a substantially improved autoname ([3027c6c](https://github.com/TimothyJones/case/commit/3027c6c768d3b192ed7fe4391658714b48dd7a79))
- Add ability to get variables from provider state ([96b71c7](https://github.com/TimothyJones/case/commit/96b71c7969f3f99a188d0bf1f51730ec05dd37b6))
- Add ability to match headers ([e29da44](https://github.com/TimothyJones/case/commit/e29da4400178d3742eb54bc3ca8bf7a5ccc26779))
- Add logLevel matcher allowing fine grained control over logging ([e9e5c24](https://github.com/TimothyJones/case/commit/e9e5c24cf719907d9e9cf0f05924d4f070eecfaf))
- Add provider driven contract creation ([ba2d8a2](https://github.com/TimothyJones/case/commit/ba2d8a2b6bdea8ccbe9ca710a9e810c46dbb687b))
- Add stringPrefix and stringSuffix matchers ([824a69b](https://github.com/TimothyJones/case/commit/824a69bdd7f03ab56e46f304ad7ba4933ec555ba))
- Add trigger map for client verification ([163c10b](https://github.com/TimothyJones/case/commit/163c10be3069ffe944305bf2baabb28618f4447d))
- Added an option to control whether or not results are printed ([73a6b70](https://github.com/TimothyJones/case/commit/73a6b704eeca4f7abb962fcd28fbc87885b7f8cf))

### Bug Fixes

- Correct typo in error message ([9af1b04](https://github.com/TimothyJones/case/commit/9af1b04fd6cb291b0a6f3e678f1c417dd80b2b5e))
- Ensure that failure messages are printed if configuration errors happen during verification ([ed027ec](https://github.com/TimothyJones/case/commit/ed027ec604436e2086af0843b9ffefd2cf26235c))
- Improve formatting of http status describe ([60a8b1c](https://github.com/TimothyJones/case/commit/60a8b1c21294a9f8bc07e09c3ee65ca88a42ca0a))
- Prettify the contract file when writing so it is easier to read by humans ([98ca5c7](https://github.com/TimothyJones/case/commit/98ca5c7820fe2ac7331c9fdd549c71005badf286))
- Remove unnecessary getMatcher in mock setup, which makes mock setup significantly more flexible ([8688368](https://github.com/TimothyJones/case/commit/86883682ea9fb0acb204f71493ac49604bf354f9))
- Stop useing replaceAll (again) so that it compiles on node14 (again) ([f3686d1](https://github.com/TimothyJones/case/commit/f3686d113b3649c8932e2dca268d0cef7c9d9bac))
- Substantially improve formatting of names ([83767df](https://github.com/TimothyJones/case/commit/83767df52a447048df626f0e606a6e8eeccbe8f4))
- Use keep-alive false for http tests, avoiding any issues from repeated requests ([d876308](https://github.com/TimothyJones/case/commit/d876308824f778f70f53fee8668b1296cc43188e))
- Widen type for http request and responses ([23317d0](https://github.com/TimothyJones/case/commit/23317d0fc8748237004f3023fcb164780dd9f66b))

- Change the name of the http interactions to make behaviour clearer ([9b43ad9](https://github.com/TimothyJones/case/commit/9b43ad9ce0f58a399118429c4a034cae43c6e3ae))
- Replace interaction in contract file property names with mock ([0b46a29](https://github.com/TimothyJones/case/commit/0b46a29061446dbdbe30ddd73ba26caf8c46dabc))

### [0.0.2](https://github.com/TimothyJones/case/compare/v0.0.1...v0.0.2) (2023-01-11)

### Features

- Add `and` matcher ([6462e20](https://github.com/TimothyJones/case/commit/6462e208ac1433a9cc1133df448326a083ae58b9))
- Add ability to match arrays by shape ([15d2b43](https://github.com/TimothyJones/case/commit/15d2b439be8bc7e527374a8c256b7b594b621397))
- Add ability to specify contract dir by config ([1720fa6](https://github.com/TimothyJones/case/commit/1720fa6a9583271cc0c2dff6008d588003e11f7a))
- Add ability to strip matchers from responses ([6a01b80](https://github.com/TimothyJones/case/commit/6a01b80455f89bc8cf1e52312d54aeda98ef4015))
- Add ability to verify responses ([b736461](https://github.com/TimothyJones/case/commit/b7364615a06e3513859d77e79029edcd91431c4e))
- Add ability to write contract file ([4f7601b](https://github.com/TimothyJones/case/commit/4f7601bbf071b96352e4f4dfeac0261cd8c5917b))
- Add an array length matcher ([8359ca9](https://github.com/TimothyJones/case/commit/8359ca918d40eccfb0cbc2b72da6a7853b4200a9))
- Add arrayContains matcher ([e3d8f4d](https://github.com/TimothyJones/case/commit/e3d8f4d6618a1f295fb94bdf019a283c8969c71a))
- Add arrayEachItemMatches matcher ([9acc621](https://github.com/TimothyJones/case/commit/9acc621d0c5545992724831b530d401ab2098271))
- Add arrayStartsWith matcher ([6563924](https://github.com/TimothyJones/case/commit/6563924c76e92dc7aa0f7cc90386b2266919e2ac))
- Add boolean matcher ([2af6c36](https://github.com/TimothyJones/case/commit/2af6c367e7ba34287f86062c4156cbe393f853f0))
- Add classes for contracts, allowing configuration and multiple contracts ([4371909](https://github.com/TimothyJones/case/commit/437190957c37ed0247767b0e561b0b26928e3785))
- Add clear printing of results ([4f0c3aa](https://github.com/TimothyJones/case/commit/4f0c3aa6ec06ce582f069f9133ffe8ff64217d26))
- Add config types to make configuration easier ([142ddc4](https://github.com/TimothyJones/case/commit/142ddc4e5c0acc89339af02f1384e7486477d658))
- Add eachKeyLike matcher ([87ce5fc](https://github.com/TimothyJones/case/commit/87ce5fccad84efffd18a475aa4f67613e26ca7b7))
- Add exact matchers for primitives ([0407fba](https://github.com/TimothyJones/case/commit/0407fbada1bad89a75437a7cbc20ff7868c930d2))
- Add http matching ([a03493a](https://github.com/TimothyJones/case/commit/a03493adbf1ef4f820ccee128892d85df77307a8))
- Add http status matcher ([3d3c82e](https://github.com/TimothyJones/case/commit/3d3c82e49a4d3a1ac2b53ebf7f76ec7fa42a878e))
- Add initial skeleton and two json matchers ([7c6db2a](https://github.com/TimothyJones/case/commit/7c6db2aeaa80255b1cf5e415a1e245f1e7e70781))
- Add initial structure for http matching ([e475eeb](https://github.com/TimothyJones/case/commit/e475eeb34f475909ff4932e5ec903b53800b14aa))
- Add integer matcher ([c4d67a4](https://github.com/TimothyJones/case/commit/c4d67a4429cf25a45b7ca959cfc121206002616f))
- Add location information to errors ([8f17e8e](https://github.com/TimothyJones/case/commit/8f17e8e3e7ea8ec86b718993a25310fdb401312b))
- Add logger ([3c62a74](https://github.com/TimothyJones/case/commit/3c62a74a06bba890ce3a7ad22856d26f58fde97c))
- Add named (lookupable) matchers ([e1e0b82](https://github.com/TimothyJones/case/commit/e1e0b82a44cd2f94f05524ecfa9babc06065d1ae))
- Add object each value like ([bec4544](https://github.com/TimothyJones/case/commit/bec4544ad59f01f8994ea5325ec374eada9e7db3))
- Add object shape matcher ([aa74576](https://github.com/TimothyJones/case/commit/aa7457612e393e7e9d2d68ed0475c25a05a110d7))
- Add preverification of matcher / example combinations to checkMatch pathway ([711bfe7](https://github.com/TimothyJones/case/commit/711bfe7829ef415c7c6eddee460013dd56d684ac))
- Add provider states, and test with the contract written by the http request tests ([459b68a](https://github.com/TimothyJones/case/commit/459b68af3a66fc43de8fdd4c0e54f42a34b464c3))
- Add self-verification to all interactions ([affc4bb](https://github.com/TimothyJones/case/commit/affc4bb01e59dcc8418f78a9ec31664d8a1e8093))
- Add shapedLike matcher ([d62998b](https://github.com/TimothyJones/case/commit/d62998b86890371a5908e28be19b139866a313b4))
- Add skeleton for states ([3674b69](https://github.com/TimothyJones/case/commit/3674b69ec0e8934f1eba62bafc20bb05113b31b4))
- Add sketch of http get matcher ([d192f9d](https://github.com/TimothyJones/case/commit/d192f9d7592fdf557a45d337dc096d2d534e6b20))
- Add string includes matcher ([3b99f86](https://github.com/TimothyJones/case/commit/3b99f860bfd788d3ac92d8e306a0e17a0d519132))
- Add stripMatchers to dsl ([4660879](https://github.com/TimothyJones/case/commit/46608792de12051302136d58df221e5f4d938605))
- Check lookup matchers for raw equality ([0ef4a62](https://github.com/TimothyJones/case/commit/0ef4a6269c0079bbf1c265001e0c2da250ae3da8))
- Introduce cascading exact matcher ([b5051ee](https://github.com/TimothyJones/case/commit/b5051ee1b1b948e0f986891e0f3a40e49c1937d1))

### Bug Fixes

- Add ability to give log level to start and end contract ([19d70c4](https://github.com/TimothyJones/case/commit/19d70c49d1deee5fd9ff164cc063ba3ec07b4d25))
- Add location to logger output ([68ec2a6](https://github.com/TimothyJones/case/commit/68ec2a615e1267f0e7e45f2b0c8ba3ed08ecc7d8))
- Add log statements to the verification flow ([b45d642](https://github.com/TimothyJones/case/commit/b45d6421731912e46084d182c098c619e1d3c898))
- Add missing resolvesTo fields for remaining leaf matchers ([5d029f9](https://github.com/TimothyJones/case/commit/5d029f9c9f9488e9658fc9ede48a196975b0a0dd))
- Add test ids to logs ([8ed722b](https://github.com/TimothyJones/case/commit/8ed722b67157c2fc27cb1f05fbdb50a21b10e849))
- Add timestamp to logger and generally improve logging format ([15b81b6](https://github.com/TimothyJones/case/commit/15b81b6a3b1eb33239f92bdd738c57c4b7a619ca))
- Clarify type system for HTTP requests ([395b1ad](https://github.com/TimothyJones/case/commit/395b1adf59ef0177e6154b922e2ee5de0ee13ff6))
- Correct double location in some http contexts ([a924cab](https://github.com/TimothyJones/case/commit/a924cab02c13c12d1a0ba0f3474f2be79fc1a064))
- Correct issue with Date formats crashing on earlier versions of node ([6d5d08d](https://github.com/TimothyJones/case/commit/6d5d08deeda7fe4eadf159ade4c85bd9ff0e47dd))
- Correct newline handling in test output ([968c760](https://github.com/TimothyJones/case/commit/968c760c28770f9ce3d155e13db8aea61eede523))
- Generate test indexes at the top level of the contract instead of assuming 0 ([756bc93](https://github.com/TimothyJones/case/commit/756bc934136c18107b86e88c94786b346e2aa374))
- Improve formatting of location strings in logger and errors ([e4c8ce8](https://github.com/TimothyJones/case/commit/e4c8ce8ab3f6142b236206a334a5d57406cfc0db))
- Improve formatting of result titles ([eb03d57](https://github.com/TimothyJones/case/commit/eb03d570c2cc443639d6145afd96a9d7bd3811a0))
- Improve logger output ([9fb4f5d](https://github.com/TimothyJones/case/commit/9fb4f5ddc3b7302dbd1a67a58e7595fbc5c391c6))
- Improve logger output with colours ([e9c6735](https://github.com/TimothyJones/case/commit/e9c67358f3149d43f7a08353cb403deeedb2bc22))
- Improve state handler errors, and run state handlers sequentially ([30df87a](https://github.com/TimothyJones/case/commit/30df87a3731d51f6f73e6adc57a0c7c7cd262fd2))
- Improve warning message ([58eee00](https://github.com/TimothyJones/case/commit/58eee0073486f82f786ecee3768129373cae0c43))
- Make text for the maintainer-debug label black ([f6ec22f](https://github.com/TimothyJones/case/commit/f6ec22f5cbc778c6082e8d4ceeec6c7ac0ec5d28))
- No longer hard code baseUrl in http interaction ([6617a55](https://github.com/TimothyJones/case/commit/6617a554351c5552624366477d9225b7642352f6))
- prevent location context from putting a '.' before a ':' ([5fbee95](https://github.com/TimothyJones/case/commit/5fbee95b7b6771b7ce6be293b004537b9fae660c))
- Print the request destination when it fails verification ([dc10014](https://github.com/TimothyJones/case/commit/dc1001417a636e4affaad5f04fcc3911a719b59c))
- Slightly improve formatting of success message ([624b424](https://github.com/TimothyJones/case/commit/624b42446c32005c3bc295b004a9935a8f1cf6dc))
- Substantially improve rendering of actual values when it is not primitive ([42161cc](https://github.com/TimothyJones/case/commit/42161ccb32ed57556efdce0de913000d982501ef))
- Use random port for http tests, and improve test output ([8ca075c](https://github.com/TimothyJones/case/commit/8ca075ca9fab6129ece78bac7f47075e3fd8fba8))
- Use replace instead of replaceAll for node 14 ([713db9d](https://github.com/TimothyJones/case/commit/713db9d0bf1b51f326e3739bb9193755033b74df))
