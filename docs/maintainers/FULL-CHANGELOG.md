# Changelog

## [0.19.0](https://github.com/case-contract-testing/contract-case/compare/v0.18.0...v0.19.0) (2025-02-25)


### ⚠ BREAKING CHANGES

* Allow different tests to have different values for the same default state variable. Contracts using state variables from the previous version will need to be regnerated
* Add ability for matchers to validate their own content. This is a breaking change for any plugin authors, as matcher Executor implementations now need to provide validation functions
* Move the matchers to packages grouped around related functionality - please update your imports following the matcher documentation

### Features

* Add ability for matchers to validate their own content. This is a breaking change for any plugin authors, as matcher Executor implementations now need to provide validation functions ([afaa8d7](https://github.com/case-contract-testing/contract-case/commit/afaa8d75d81e45ca7609f89b1e17819183bc59b2))
* Add ability for the current version to be generated from the git sha ([dd70365](https://github.com/case-contract-testing/contract-case/commit/dd703650fd058d34f6d772011b74faec10b93074))
* Expose docs-json for auto-documentation purposes ([2ff4e97](https://github.com/case-contract-testing/contract-case/commit/2ff4e97501bc29af4af085d7a751b752bad8e82c))
* Run parameter validators ahead of the self-check, allowing early warning of configuration mistakes in example interactions ([186d2e5](https://github.com/case-contract-testing/contract-case/commit/186d2e58eff512d37e53425ac353b231d15250a8))


### Bug Fixes

* Allow different tests to have different values for the same default state variable. Contracts using state variables from the previous version will need to be regnerated ([2984d2b](https://github.com/case-contract-testing/contract-case/commit/2984d2baf29406fab884c5fffc790b6022621047))


### Code Refactoring

* Move the matchers to packages grouped around related functionality - please update your imports following the matcher documentation ([1edbda0](https://github.com/case-contract-testing/contract-case/commit/1edbda04c1fc6bcee19bfb13beb30980714bbfb6))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.1 to 0.2.0

## [0.18.0](https://github.com/case-contract-testing/contract-case/compare/v0.17.1...v0.18.0) (2024-10-17)


### ⚠ BREAKING CHANGES

* Replace the config object in triggers with a clearer SetupInfo type, allowing cross-language function calls as mocks. Note that the function calls now always return json strings, user-facing DSLs will need to parse the strings

### Bug Fixes

* Improve broker logging and error reporting ([61fb28d](https://github.com/case-contract-testing/contract-case/commit/61fb28d362879fe68e70b2b15504da5c8b82ec5a))


### Code Refactoring

* Replace the config object in triggers with a clearer SetupInfo type, allowing cross-language function calls as mocks. Note that the function calls now always return json strings, user-facing DSLs will need to parse the strings ([c9ddd93](https://github.com/case-contract-testing/contract-case/commit/c9ddd93782b5e11cd5925ea76e089e0d779fdc11))

## [0.17.1](https://github.com/case-contract-testing/contract-case/compare/v0.17.0...v0.17.1) (2024-10-08)


### Bug Fixes

* Correct location of error messages when the string prefix / suffix don't resolve to strings ([ba3746e](https://github.com/case-contract-testing/contract-case/commit/ba3746e4ee5faab80051efe6aface1288f5a419b))
* Further improve logging of function invocation ([6641155](https://github.com/case-contract-testing/contract-case/commit/664115569ac7aac041ca05c6abe58cc585d9088c))
* Include all error messages in overall verification failed error ([889439f](https://github.com/case-contract-testing/contract-case/commit/889439faaacde40e54d988b93436bfa2d1a18253))
* Warn if the contract filename is too long ([fcc80d7](https://github.com/case-contract-testing/contract-case/commit/fcc80d7ed55a37bc85f95df3c460d8ad09d79e32))

## [0.17.0](https://github.com/case-contract-testing/contract-case/compare/v0.16.3...v0.17.0) (2024-10-02)


### ⚠ BREAKING CHANGES

* Separate case-plugin-base into case-plugin-base and case-plugin-dsl-types to make working with bundled dependencies easier. Some imports may need to be updated.

### Code Refactoring

* Separate case-plugin-base into case-plugin-base and case-plugin-dsl-types to make working with bundled dependencies easier. Some imports may need to be updated. ([6659218](https://github.com/case-contract-testing/contract-case/commit/6659218c053146c2c1171fa3c9621c6aa8399aac))

## [0.16.3](https://github.com/case-contract-testing/contract-case/compare/v0.16.2...v0.16.3) (2024-10-02)


### Bug Fixes

* Correct included jsii dependencies ([352f4b3](https://github.com/case-contract-testing/contract-case/commit/352f4b3753c16b83088fb6391aadddd4ef0628d3))

## [0.16.2](https://github.com/case-contract-testing/contract-case/compare/v0.16.1...v0.16.2) (2024-10-02)


### Bug Fixes

* Include pretty-format in package too ([c17b646](https://github.com/case-contract-testing/contract-case/commit/c17b646d0f52c24032df283c34cc517ff3cb6724))

## [0.16.1](https://github.com/case-contract-testing/contract-case/compare/v0.16.0...v0.16.1) (2024-10-01)


### Bug Fixes

* Correct broken JS includes ([a439292](https://github.com/case-contract-testing/contract-case/commit/a43929236dcf4130c4ec145bcacc95effacc6f15))

## [0.16.0](https://github.com/case-contract-testing/contract-case/compare/v0.15.8...v0.16.0) (2024-10-01)


### ⚠ BREAKING CHANGES

* Slightly improve the description of and matchers. This is a breaking change for anyone relying on the autogenerated example names.
* Replace test-equivalence-matchers and case-example-mock-types with one package named "case-definition-dsl"
* Export plugin as the default export instead of named
* Split HTTP mock and matchers to their own packages

### Features

* Add ability for plugins to specify their own configuration ([bf636c2](https://github.com/case-contract-testing/contract-case/commit/bf636c22a2564cfc2e4ebdac179835b32fa3a964))
* Add function caller mocks ([e05b370](https://github.com/case-contract-testing/contract-case/commit/e05b370380d67f1b0774631bbd83d5e0c83d6a59))
* Add function plugin for mocking function execution ([de74428](https://github.com/case-contract-testing/contract-case/commit/de74428f60945a754bf7da1fadc0f813bb5fa3f3))
* Add getPluginConfig convenience method for extracting the value of `mockConfig[pluginName]` ([50de742](https://github.com/case-contract-testing/contract-case/commit/50de74239f0a384043309986e7ce033f204d5865))
* Add loadPlugin message to both contract definition and verification grpc streams ([5845808](https://github.com/case-contract-testing/contract-case/commit/584580849cc48eaf990a2b559ab85f29f0b571b6))
* Add mockConfig configuration property ([f82a394](https://github.com/case-contract-testing/contract-case/commit/f82a394f4e048721f5399928a83f19ed044ac13c))
* Add MockFunctionCall to the definition dsl ([172fbe2](https://github.com/case-contract-testing/contract-case/commit/172fbe2b2c9a60942042e797e9ccf4e97bd39650))
* Add plugin loader methods to ContractDefiner and ContractVerifier ([1112f40](https://github.com/case-contract-testing/contract-case/commit/1112f40de01e53dd4dc5f60d9562a30a4fe090d4))
* Allow loading of plugins via PluginLoader class ([0968917](https://github.com/case-contract-testing/contract-case/commit/0968917a4fa3cca66e6d58b1fd2ac552e6b73a56))
* Allow specifying baseUrlUnderTest via mockConfig ([052ea3f](https://github.com/case-contract-testing/contract-case/commit/052ea3f6fadb95c7140c75024ac181b2fd8743ad))
* Extract proto to its own package ([6a64dbe](https://github.com/case-contract-testing/contract-case/commit/6a64dbe019d01b0477361cb9571b87dbcaddcb08))
* Include function plugin by default ([7c2a0f3](https://github.com/case-contract-testing/contract-case/commit/7c2a0f3efac06a0c088427fafc19b3abbf610382))
* Introduce mockConfig to configuration object ([225ab61](https://github.com/case-contract-testing/contract-case/commit/225ab614bacc41c1b7461bed678cb7e0cde0e8a6))
* Load matchers from plugin ([8bd1bf0](https://github.com/case-contract-testing/contract-case/commit/8bd1bf08bb08b552e92087e6ee75bf5205003a5b))


### Bug Fixes

* Avoid channel unavailable messages during normal shutdown ([0ccdbf7](https://github.com/case-contract-testing/contract-case/commit/0ccdbf7a5e2dfd10deb92a68b0b6a552ccef10d3))
* Correct documentation for And matcher ([70ed28d](https://github.com/case-contract-testing/contract-case/commit/70ed28d08ded1897acbf666dff863c42d3f89994))
* Correct issue where correctly configured http plugins said they weren't correctly configured ([df386cb](https://github.com/case-contract-testing/contract-case/commit/df386cb2e8ca41d6c1a06819dc84c611bb1b74ea))
* Extract sourcemap for better stack traces ([e465b96](https://github.com/case-contract-testing/contract-case/commit/e465b962296ae0c661c5c0a0dd7e230218e6aca7))
* Fix issue where tests could hang on node 18 ([e023711](https://github.com/case-contract-testing/contract-case/commit/e023711337a015eee3297fe42cc251c0ff49ef05))
* Hardcode error names so that they're robust to minification ([3106196](https://github.com/case-contract-testing/contract-case/commit/3106196f909ef703ecb15e0f076933a987e69fc3))
* Improve hasErrors function ([9b82033](https://github.com/case-contract-testing/contract-case/commit/9b8203359419ffc1be723e54228445df040be1d4))
* Improve location reporting when function return types don't match ([1f32560](https://github.com/case-contract-testing/contract-case/commit/1f325600c7690c8124750fa9e1e3bc4fffb05aca))
* Improve plugin configuration error messages ([11d44bb](https://github.com/case-contract-testing/contract-case/commit/11d44bb8e951df8197ce3a7abaf9ca1d3e2a817d))
* Improve plugin configuration errors and documentation ([30e5987](https://github.com/case-contract-testing/contract-case/commit/30e5987f52d0743b751c9ec57858e739260ac2fc))
* Remove unnecessary dependencies ([3bc3f37](https://github.com/case-contract-testing/contract-case/commit/3bc3f370aacf2a73eabb2984060c1c349c4ecfd1))
* Slightly improve the description of and matchers. This is a breaking change for anyone relying on the autogenerated example names. ([176eb01](https://github.com/case-contract-testing/contract-case/commit/176eb01cb3bef50a19e3b1b65dfbbe881b55d954))
* Support null responses, eg for void returns in functions ([1c2eeb1](https://github.com/case-contract-testing/contract-case/commit/1c2eeb1d72aabbaccbe67eec820e12463bdb84e0))


### Miscellaneous Chores

* Split HTTP mock and matchers to their own packages ([bfc2e4f](https://github.com/case-contract-testing/contract-case/commit/bfc2e4ff2d464899fd8ce63978048e9f1991ff80))


### Code Refactoring

* Export plugin as the default export instead of named ([78397d2](https://github.com/case-contract-testing/contract-case/commit/78397d2bea51b41f1c6b53bc70fdc741f5e7d084))
* Replace test-equivalence-matchers and case-example-mock-types with one package named "case-definition-dsl" ([031ce1e](https://github.com/case-contract-testing/contract-case/commit/031ce1e1eef309f37b17dfff6dc90a2317cac122))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.0 to 0.1.1

## [0.15.8](https://github.com/case-contract-testing/contract-case/compare/v0.15.7...v0.15.8) (2024-05-16)


### Features

* Add case-boundary into the connector package ([072222f](https://github.com/case-contract-testing/contract-case/commit/072222f4b4f1eeddef461b0007bc5f431217fb7b))
* Add internal config parameters to control whether verification is async or not ([6882739](https://github.com/case-contract-testing/contract-case/commit/68827393b0b766e753aeb77dcab123a2a01672fe))
* Implement and expose contract verifier ([ea460cd](https://github.com/case-contract-testing/contract-case/commit/ea460cd5a915975673b2f22d98e05fab3b2b1cba))


### Bug Fixes

* Prevent server waiting for keepalive timeout on http verification ([7cebbf0](https://github.com/case-contract-testing/contract-case/commit/7cebbf0ced18f7129ff31f01067938b2ed11390c))
* Remove current-git-branch, allowing webpack to roll up the package ([0078083](https://github.com/case-contract-testing/contract-case/commit/0078083936e7a51bb2df02dcc7c22541bd7d1b04))
* Significantly improve trigger configuration error messages ([c494726](https://github.com/case-contract-testing/contract-case/commit/c4947265d3a65e57c7ff051de93db2b500f843ec))
* Start the ContractCase server on a random port ([4c5d431](https://github.com/case-contract-testing/contract-case/commit/4c5d431848cb026701510cf7248f0c48ff5f8b75))
* Tidy up logging by demoting some noisy logs to deepMaintainerDebug from maintainerDebug ([b9c5548](https://github.com/case-contract-testing/contract-case/commit/b9c5548569bb3082e4d2ffa93be08323127b1932))
* Use case-connector instead of case-boundary ([ecc1c9a](https://github.com/case-contract-testing/contract-case/commit/ecc1c9a02f1afc7caadaf1844d9b49eb1843a014))

## [0.15.7](https://github.com/case-contract-testing/contract-case/compare/v0.15.6...v0.15.7) (2024-02-11)


### Bug Fixes

* Bump version of case-boundary to 0.10.4 ([a15aac9](https://github.com/case-contract-testing/contract-case/commit/a15aac9a1337b77831c9f0baf425b6e3f4e2fa17))

## [0.15.6](https://github.com/case-contract-testing/contract-case/compare/v0.15.5...v0.15.6) (2024-02-11)


### Bug Fixes

* Correct issue where type error might be thrown when a trigger function failed ([7889ef3](https://github.com/case-contract-testing/contract-case/commit/7889ef329f6e290221852752615c886d4d700158))
* Improve log output when matchers are double-specified ([62a4b09](https://github.com/case-contract-testing/contract-case/commit/62a4b09e53ab8b0b97af021388cbfbdc0f77b5ec))

## [0.15.5](https://github.com/case-contract-testing/contract-case/compare/v0.15.4...v0.15.5) (2024-01-30)


### Features

* Add a new AnyState supertype for the state variables ([854c312](https://github.com/case-contract-testing/contract-case/commit/854c312f1eac72e35c79d463936c089240c91fa6))


### Bug Fixes

* Correct an issue where nested lookup matchers would fail the test of whether or not they described the same thing ([bc2eac9](https://github.com/case-contract-testing/contract-case/commit/bc2eac9cb2ebb42044a957ed377501e5e3180c00))
* Improve logging of http responses ([4f8faef](https://github.com/case-contract-testing/contract-case/commit/4f8faeff9e5616e120ac60227b458ab643827d31))

## [0.15.4](https://github.com/case-contract-testing/contract-case/compare/v0.15.3...v0.15.4) (2024-01-23)


### Features

* Add InState and InStateWithVariables for describing states during example runs ([cb2d437](https://github.com/case-contract-testing/contract-case/commit/cb2d4372d405d7b25d2e27e67a0b9199366f8745))


### Bug Fixes

* **deps:** Bump version of case-boundary to 0.9.3 ([7a56f60](https://github.com/case-contract-testing/contract-case/commit/7a56f60888d077cda861e2c6cb52c82ff0b86a15))

## [0.15.3](https://github.com/case-contract-testing/contract-case/compare/v0.15.2...v0.15.3) (2024-01-18)


### Bug Fixes

* Correct issue where trigger functions that failed before calling the server would fail with the wrong reason ([1a8a375](https://github.com/case-contract-testing/contract-case/commit/1a8a3750421f0bad42c47a23b549c3790089fb6a))
* Improve debug logging around server startup and shutdown ([8509660](https://github.com/case-contract-testing/contract-case/commit/8509660d0e190b65677be7fcf5ca6e32a8cf2345))

## [0.15.2](https://github.com/case-contract-testing/contract-case/compare/v0.15.1...v0.15.2) (2024-01-06)


### Bug Fixes

* Correctly expose java types from jsii modules ([f40fc13](https://github.com/case-contract-testing/contract-case/commit/f40fc1371a3bc2565692e491125762b82b5e068b))
* Improve AnyMock documentation ([b518a6d](https://github.com/case-contract-testing/contract-case/commit/b518a6d4ef410506da4e1f3d5e9035878f596bc9))

## [0.15.1](https://github.com/case-contract-testing/contract-case/compare/v0.15.0...v0.15.1) (2024-01-06)


### Features

* Add a stringified convenience method to the mock descriptors ([a6fa77e](https://github.com/case-contract-testing/contract-case/commit/a6fa77e2c79073f183c603336f43503194f6d3b2))


### Bug Fixes

* Correct an issue where lookup matchers that had nulls were incorrectly seen as non-equal ([06ac4fa](https://github.com/case-contract-testing/contract-case/commit/06ac4fa0d7648dffd02dfbe083d0220e424358ca))
* Correct issue where trigger function errors weren't thrown in some cases ([6172c18](https://github.com/case-contract-testing/contract-case/commit/6172c1827c52b45cd98e2b992d3c31ad544585c9))
* Correct name in log string ([6dec88b](https://github.com/case-contract-testing/contract-case/commit/6dec88b0feaee94fb672078618053fe5129320c1))
* Improve maintainer logging when there are no errors thrown ([f5110c0](https://github.com/case-contract-testing/contract-case/commit/f5110c06b4ba6d280ff192e259154531918f9823))
* Improve trigger function error message ([1894fb5](https://github.com/case-contract-testing/contract-case/commit/1894fb53d0c8a31635880a4103a07464980f4e6f))

## [0.15.0](https://github.com/case-contract-testing/contract-case/compare/v0.14.0...v0.15.0) (2023-12-25)


### ⚠ BREAKING CHANGES

* Now all loggers and printers return promises, to better reflect that there is a boundary crossed

### Code Refactoring

* Now all loggers and printers return promises, to better reflect that there is a boundary crossed ([14a9365](https://github.com/case-contract-testing/contract-case/commit/14a9365d6f873c352dadff539b7d8b67946412d0))

## [0.14.0](https://github.com/case-contract-testing/contract-case/compare/v0.13.1...v0.14.0) (2023-10-11)


### ⚠ BREAKING CHANGES

* Only expose types in modules. Root imports will need to be updated to include the module name

### Features

* Add developer config package for api-extractor, prettier, eslint, tsconfig ([9588334](https://github.com/case-contract-testing/contract-case/commit/95883341698eb0f3f66812a1add0cb1ea85974ca))
* Add developer documentation ([6d2c52d](https://github.com/case-contract-testing/contract-case/commit/6d2c52d8134339aebeadfdd84e6bfe540afdca04))
* Add developer documentation ([8524363](https://github.com/case-contract-testing/contract-case/commit/85243632ef5f93c0d0fe639256ffdb5edbfb612c))
* Add developer documentation ([e855d61](https://github.com/case-contract-testing/contract-case/commit/e855d61f9615ca31f02762e780fe3dfa592b07e3))
* Add eslint config package ([f1659fa](https://github.com/case-contract-testing/contract-case/commit/f1659fa0035e69d64f7f7ecb49c977c377d3fceb))


### Bug Fixes

* Add link to documentation in warning message about zero-length arrays ([54dd26d](https://github.com/case-contract-testing/contract-case/commit/54dd26dd1d534b6c71f0c9a8655b4a264439b8e2))
* Correct issue where core code wasn't included in package ([7f70b3c](https://github.com/case-contract-testing/contract-case/commit/7f70b3c41cfab833dbeca56567bfda075275ac79))
* Improve intellisense documentation ([aebaac8](https://github.com/case-contract-testing/contract-case/commit/aebaac83c859a47e85ea2f2ceadbd5aaa70e416a))
* Make loglevel config option optional ([f6c18d9](https://github.com/case-contract-testing/contract-case/commit/f6c18d97434aebbff054c368b5929251935b41ea))
* No longer include coverage directories in package ([b5f42a0](https://github.com/case-contract-testing/contract-case/commit/b5f42a039b966c0fe908231adcc0154a1403846c))
* Remove unused dependencies ([7e51170](https://github.com/case-contract-testing/contract-case/commit/7e511705f71ecb4697375c13d394ba88701441f0))
* Update documentation for boundary classes ([bffd21b](https://github.com/case-contract-testing/contract-case/commit/bffd21b5dc338046a89e881d708ed4c5fa771aea))


### Code Refactoring

* Only expose types in modules. Root imports will need to be updated to include the module name ([015dc7a](https://github.com/case-contract-testing/contract-case/commit/015dc7a449805920a5c08cc54ca486ec8bcbc888))

## [0.13.1](https://github.com/case-contract-testing/contract-case/compare/v0.13.0...v0.13.1) (2023-10-11)


### Features

* Add developer config package for api-extractor, prettier, eslint, tsconfig ([9588334](https://github.com/case-contract-testing/contract-case/commit/95883341698eb0f3f66812a1add0cb1ea85974ca))
* Add developer documentation ([6d2c52d](https://github.com/case-contract-testing/contract-case/commit/6d2c52d8134339aebeadfdd84e6bfe540afdca04))
* Add developer documentation ([8524363](https://github.com/case-contract-testing/contract-case/commit/85243632ef5f93c0d0fe639256ffdb5edbfb612c))
* Add developer documentation ([e855d61](https://github.com/case-contract-testing/contract-case/commit/e855d61f9615ca31f02762e780fe3dfa592b07e3))
* Add eslint config package ([f1659fa](https://github.com/case-contract-testing/contract-case/commit/f1659fa0035e69d64f7f7ecb49c977c377d3fceb))


### Bug Fixes

* Make loglevel config option optional ([f6c18d9](https://github.com/case-contract-testing/contract-case/commit/f6c18d97434aebbff054c368b5929251935b41ea))

## [0.13.0](https://github.com/case-contract-testing/contract-case/compare/v0.12.2...v0.13.0) (2023-06-09)


### ⚠ BREAKING CHANGES

* Only expose types in modules. Root imports will need to be updated to include the module name

### Bug Fixes

* Correct issue where core code wasn't included in package ([7f70b3c](https://github.com/case-contract-testing/contract-case/commit/7f70b3c41cfab833dbeca56567bfda075275ac79))
* No longer include coverage directories in package ([b5f42a0](https://github.com/case-contract-testing/contract-case/commit/b5f42a039b966c0fe908231adcc0154a1403846c))
* Remove unused dependencies ([7e51170](https://github.com/case-contract-testing/contract-case/commit/7e511705f71ecb4697375c13d394ba88701441f0))


### Code Refactoring

* Only expose types in modules. Root imports will need to be updated to include the module name ([015dc7a](https://github.com/case-contract-testing/contract-case/commit/015dc7a449805920a5c08cc54ca486ec8bcbc888))

## [0.12.2](https://github.com/case-contract-testing/contract-case/compare/v0.12.1...v0.12.2) (2023-06-01)


### Bug Fixes

* Add link to documentation in warning message about zero-length arrays ([54dd26d](https://github.com/case-contract-testing/contract-case/commit/54dd26dd1d534b6c71f0c9a8655b4a264439b8e2))
* Improve intellisense documentation ([aebaac8](https://github.com/case-contract-testing/contract-case/commit/aebaac83c859a47e85ea2f2ceadbd5aaa70e416a))
* Update documentation for boundary classes ([bffd21b](https://github.com/case-contract-testing/contract-case/commit/bffd21b5dc338046a89e881d708ed4c5fa771aea))

## [0.12.1](https://github.com/TimothyJones/ContractCaseTest/compare/v0.12.0...v0.12.1) (2023-05-19)


### Bug Fixes

* Add link to documentation in warning message about zero-length arrays ([54dd26d](https://github.com/TimothyJones/ContractCaseTest/commit/54dd26dd1d534b6c71f0c9a8655b4a264439b8e2))

## [0.12.0](https://github.com/case-contract-testing/contract-case/compare/v0.11.0...v0.12.0) (2023-05-17)


### ⚠ BREAKING CHANGES

* Add new constructor parameter to allow parents to pass in their version number for debugging. Any uses of the Contract* classes will need to be updated to provide an array of parent package version strings

### Features

* Add new constructor parameter to allow parents to pass in their version number for debugging. Any uses of the Contract* classes will need to be updated to provide an array of parent package version strings ([93485eb](https://github.com/case-contract-testing/contract-case/commit/93485eb9c2cd4f83f5119a3283ea8b4ac8dbdf99))
* Pass version info through to logger ([a6dc4f7](https://github.com/case-contract-testing/contract-case/commit/a6dc4f73a176552d779eabba9273e78f0979b5af))

## [0.11.0](https://github.com/case-contract-testing/contract-case/compare/ContractCase-All-Core-Packages-v0.3.0...ContractCase-All-Core-Packages-v0.11.0) (2023-05-09)


### ⚠ BREAKING CHANGES

* Remove ContractDefiner and ContractVerifier boundaries. Please use @contract-case/case-boundary instead.
* Remove jest DSL. Please use @contract-case/contract-case-jest instead.
* Make names of matcher interfaces consistently end in Matcher. This change has no effect on non-typescript consumers of the case-entities-internal package
* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again
* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated

### Features

* Add ability to pass in printer for log lines ([d6d8b7f](https://github.com/case-contract-testing/contract-case/commit/d6d8b7f455a8cb30f80a4db3dbb459e3493502f5))
* Add Case Example Mock Types package ([7f79879](https://github.com/case-contract-testing/contract-case/commit/7f7987951174de9d57f68106e29c7104745a6296))
* Add cli package ([600c429](https://github.com/case-contract-testing/contract-case/commit/600c4298089cfc8bc34a50cd4bf3cacf920b75ad))
* Add crash messages when the core fails ([8147c9d](https://github.com/case-contract-testing/contract-case/commit/8147c9d59183d31c212fbba31f468f2b0b2c4a58))
* Add documentation package ([f5b1f61](https://github.com/case-contract-testing/contract-case/commit/f5b1f615c8c8b1db60c04a9d3cee4c087cf8d9eb))
* Add HttpResponse and HttpRequest matchers ([21cc98a](https://github.com/case-contract-testing/contract-case/commit/21cc98abe8614813ba3196baa0ba6dce31b1bfea))
* Add ILogPrinter interface to allow printing log lines ([f17d1fa](https://github.com/case-contract-testing/contract-case/commit/f17d1fac53dfaf54e9ddd2c0742baa5a75a149a8))
* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type ([861be95](https://github.com/case-contract-testing/contract-case/commit/861be95135b0bdbe2eba615f455163f44ffe6945))
* Add separate package for jest + javascript DSL ([e175bf7](https://github.com/case-contract-testing/contract-case/commit/e175bf7befd9c6a9e1be96f490845289ca248aaf))
* Add StateHandlers type to boundary ([75a2a9b](https://github.com/case-contract-testing/contract-case/commit/75a2a9b3f529a626a1ae49ed20088675b95d7f0c))
* Add triggerAndTest function to the connectors layer ([fd9f1f2](https://github.com/case-contract-testing/contract-case/commit/fd9f1f255919a53e22a52de295738b41aba721f0))
* Add types for states ([55048e1](https://github.com/case-contract-testing/contract-case/commit/55048e1041f73f0edfede8ca2cf605ae6be138f6))
* Allow specification of more options via environment variables ([553a7b1](https://github.com/case-contract-testing/contract-case/commit/553a7b15fbb6ba6069c0bee2c683b57ece942c3c))
* **boundary:** Add initial types for ContractDefiner ([06643c0](https://github.com/case-contract-testing/contract-case/commit/06643c0073f85b960619a0849084d791b7769e99))
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again ([6cfd730](https://github.com/case-contract-testing/contract-case/commit/6cfd730d83d3ad5381479c592d8f3939263a4ea3))
* Export  TestInvoker, MultiTestInvoker and CaseContractDescription ([4818aa8](https://github.com/case-contract-testing/contract-case/commit/4818aa8d2400517ef6ef21fc16f1536b04e99962))
* Export all error types ([8b2ca24](https://github.com/case-contract-testing/contract-case/commit/8b2ca241189d4d51a04d9bfdbbe9e82ad10f5a7d))
* export AnyMatcherOrData and AnyStringMatcher ([e116600](https://github.com/case-contract-testing/contract-case/commit/e11660022ac56ab5a9ee9465921d98025485cc58))
* Export ContractDefinerConnector and ContractVerifierConnector. The ContractDefiner and ContractVerifier classes will be moved to the case-boundaries package soon ([6805f1c](https://github.com/case-contract-testing/contract-case/commit/6805f1c50d72aa9313b767bfc8157614d9924b40))
* Export error and config types ([b46fe4a](https://github.com/case-contract-testing/contract-case/commit/b46fe4a99bce89cd8a14be71de6f710af16d3acd))
* Export LogPrinter type ([77eb3ce](https://github.com/case-contract-testing/contract-case/commit/77eb3ce7a68d5d445bf690c2e054f5d0fb18fd76))
* Export MatchContextByType, DataOrCaseNodeFor and add the HTTP matcher types to the Any* lists ([0ce1ee3](https://github.com/case-contract-testing/contract-case/commit/0ce1ee384017516d3107e8c45e8d308ea6cba4dd))
* Introduce BrokerError and expose it ([6fc09ba](https://github.com/case-contract-testing/contract-case/commit/6fc09ba2bd9c2eac360e1f7c47c12fe88f9927cd))
* Introduce triggerAndTest types for invoking both a trigger and the test together (useful for invoking from other languages) ([855ffd8](https://github.com/case-contract-testing/contract-case/commit/855ffd8a22957c9b12b778fd4f200755e5f2b72d))
* Map errors appropriately at the boundary ([c9df9ff](https://github.com/case-contract-testing/contract-case/commit/c9df9ffa16aa68183b8410b25c37e6cc03f36182))
* Remove ContractDefiner and ContractVerifier boundaries. Please use @contract-case/case-boundary instead. ([b560086](https://github.com/case-contract-testing/contract-case/commit/b560086eb1676f357ba4e32d5b734a7a29aa5ea8))
* Remove jest DSL. Please use @contract-case/contract-case-jest instead. ([5ae33bb](https://github.com/case-contract-testing/contract-case/commit/5ae33bbebfbe416331d4ba01e55f613302409e24))
* Substantially improve options parsing for ContractCase CLI ([30085ae](https://github.com/case-contract-testing/contract-case/commit/30085aeb878b84885578f3a5341be1d091d5b984))


### Bug Fixes

* Actually include the jsii manifest ([a1cf72f](https://github.com/case-contract-testing/contract-case/commit/a1cf72f25628d3f1a1d93084ef6dd3334bb6a495))
* Add AnyLeafOrStructure to AnyCaseMatcherOrData, preventing type errors in tests ([b0d3cf0](https://github.com/case-contract-testing/contract-case/commit/b0d3cf0a8a6f1020777ecc53837f1764ccdeb2d3))
* Add contract name to log location for publish contract/verification ([d736689](https://github.com/case-contract-testing/contract-case/commit/d7366896304897c9a7fff6148966d5dbd62ce1f8))
* Correct a bug where the default settings overrode settings provided via environment variables ([9784637](https://github.com/case-contract-testing/contract-case/commit/97846379f0be62cf01c0837dee6261fac66b2c9d))
* Correct an issue where combined triggers were not passed through to the test runner ([0dfe32f](https://github.com/case-contract-testing/contract-case/commit/0dfe32f03a8d4ae60a58cd82e9a7e3307e6227f0))
* Correct issue where verifier didn't pass down all invoker properties ([238b42b](https://github.com/case-contract-testing/contract-case/commit/238b42b87a07abb5ceca337fd9c8459167a13092))
* Correct peer dependency for test-equivalence-matchers ([5c913a0](https://github.com/case-contract-testing/contract-case/commit/5c913a02309118655bd1a72adf9375155463bece))
* Correct problem where not having a broker CI token would not fail the publish ([b22d956](https://github.com/case-contract-testing/contract-case/commit/b22d9565f60a474890aa9fd7962294e87f88d23d))
* Don't throw configuration errors for missing broker details when publish=NEVER ([4893bc3](https://github.com/case-contract-testing/contract-case/commit/4893bc306fb4d4943d4f7be9b9baab76313b5a2e))
* Export MatchContextByExact ([88cc4ae](https://github.com/case-contract-testing/contract-case/commit/88cc4aef1e99eaee1102bba39c29d1c5aeeae208))
* Fix a bug where configuration from environment variables was ignored during contract definition ([2fe5d32](https://github.com/case-contract-testing/contract-case/commit/2fe5d328b2e63e731b7969b63cb1156b668d139c))
* Improve error message if you try to publish verification results for a contract that has no broker ([03714d1](https://github.com/case-contract-testing/contract-case/commit/03714d1e98ccff92e84f35d0d79abd2a97607df7))
* Improve error messages when contract downloader fails ([93eb28b](https://github.com/case-contract-testing/contract-case/commit/93eb28bda6920e9d49c057f9b024c5176cee6649))
* Improve formatting of error output ([04897a4](https://github.com/case-contract-testing/contract-case/commit/04897a421f31a4c7a998b024eb9ca0e2ade2af80))
* Improve logger output ([f68752d](https://github.com/case-contract-testing/contract-case/commit/f68752d774a3d8c5a953a47b164ac0e81bbcc227))
* Include .jsii manifest in release ([cce31c0](https://github.com/case-contract-testing/contract-case/commit/cce31c0f89f55e45579a3c8aa7b20a143f7bf5a4))
* Swap colours for maintainerDebug and deepMaintainerDebug ([c77f6fb](https://github.com/case-contract-testing/contract-case/commit/c77f6fbbffd4d96b3396d408a29dd6456e3fe96a))
* Update previously unused mock definitions to match the prefixed format ([bf693d7](https://github.com/case-contract-testing/contract-case/commit/bf693d7be0fc0ef6fd3c218d72e420086228f030))
* Widen types for `stripMatchers` and `checkMatch` (a side-effect of using the new case-entities-internal package) ([26d5b6e](https://github.com/case-contract-testing/contract-case/commit/26d5b6e90612066d703d359421b8be9995b0009a))


### Code Refactoring

* Make names of matcher interfaces consistently end in Matcher. This change has no effect on non-typescript consumers of the case-entities-internal package ([d6bc4dd](https://github.com/case-contract-testing/contract-case/commit/d6bc4dda780f1836b18640b49882115edee19c42))
* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated ([438fac4](https://github.com/case-contract-testing/contract-case/commit/438fac472f9d58686a705bd57d58696a0499f226))

## [0.3.0](https://github.com/case-contract-testing/case/compare/contract-case-v0.2.0...contract-case-v0.3.0) (2023-05-08)


### ⚠ BREAKING CHANGES

* Make names of matcher interfaces consistently end in Matcher. This change has no effect on non-typescript consumers of the case-entities-internal package

### Features

* Add crash messages when the core fails ([8147c9d](https://github.com/case-contract-testing/case/commit/8147c9d59183d31c212fbba31f468f2b0b2c4a58))
* Map errors appropriately at the boundary ([c9df9ff](https://github.com/case-contract-testing/case/commit/c9df9ffa16aa68183b8410b25c37e6cc03f36182))


### Bug Fixes

* Correct problem where not having a broker CI token would not fail the publish ([b22d956](https://github.com/case-contract-testing/case/commit/b22d9565f60a474890aa9fd7962294e87f88d23d))
* Don't throw configuration errors for missing broker details when publish=NEVER ([4893bc3](https://github.com/case-contract-testing/case/commit/4893bc306fb4d4943d4f7be9b9baab76313b5a2e))


### Code Refactoring

* Make names of matcher interfaces consistently end in Matcher. This change has no effect on non-typescript consumers of the case-entities-internal package ([d6bc4dd](https://github.com/case-contract-testing/case/commit/d6bc4dda780f1836b18640b49882115edee19c42))

## [0.2.0](https://github.com/case-contract-testing/case/compare/contract-case-v0.1.1...contract-case-v0.2.0) (2023-05-06)


### ⚠ BREAKING CHANGES

* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again
* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated

### Features

* Add ability to pass in printer for log lines ([d6d8b7f](https://github.com/case-contract-testing/case/commit/d6d8b7f455a8cb30f80a4db3dbb459e3493502f5))
* Add Case Example Mock Types package ([7f79879](https://github.com/case-contract-testing/case/commit/7f7987951174de9d57f68106e29c7104745a6296))
* Add documentation package ([f5b1f61](https://github.com/case-contract-testing/case/commit/f5b1f615c8c8b1db60c04a9d3cee4c087cf8d9eb))
* Add HttpResponse and HttpRequest matchers ([21cc98a](https://github.com/case-contract-testing/case/commit/21cc98abe8614813ba3196baa0ba6dce31b1bfea))
* Add ILogPrinter interface to allow printing log lines ([f17d1fa](https://github.com/case-contract-testing/case/commit/f17d1fac53dfaf54e9ddd2c0742baa5a75a149a8))
* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type ([861be95](https://github.com/case-contract-testing/case/commit/861be95135b0bdbe2eba615f455163f44ffe6945))
* Add separate package for jest + javascript DSL ([e175bf7](https://github.com/case-contract-testing/case/commit/e175bf7befd9c6a9e1be96f490845289ca248aaf))
* Add StateHandlers type to boundary ([75a2a9b](https://github.com/case-contract-testing/case/commit/75a2a9b3f529a626a1ae49ed20088675b95d7f0c))
* Add triggerAndTest function to the connectors layer ([fd9f1f2](https://github.com/case-contract-testing/case/commit/fd9f1f255919a53e22a52de295738b41aba721f0))
* Add types for states ([55048e1](https://github.com/case-contract-testing/case/commit/55048e1041f73f0edfede8ca2cf605ae6be138f6))
* Allow specification of more options via environment variables ([553a7b1](https://github.com/case-contract-testing/case/commit/553a7b15fbb6ba6069c0bee2c683b57ece942c3c))
* **boundary:** Add initial types for ContractDefiner ([06643c0](https://github.com/case-contract-testing/case/commit/06643c0073f85b960619a0849084d791b7769e99))
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again ([6cfd730](https://github.com/case-contract-testing/case/commit/6cfd730d83d3ad5381479c592d8f3939263a4ea3))
* Export  TestInvoker, MultiTestInvoker and CaseContractDescription ([4818aa8](https://github.com/case-contract-testing/case/commit/4818aa8d2400517ef6ef21fc16f1536b04e99962))
* Export all error types ([8b2ca24](https://github.com/case-contract-testing/case/commit/8b2ca241189d4d51a04d9bfdbbe9e82ad10f5a7d))
* export AnyMatcherOrData and AnyStringMatcher ([e116600](https://github.com/case-contract-testing/case/commit/e11660022ac56ab5a9ee9465921d98025485cc58))
* Export ContractDefinerConnector and ContractVerifierConnector. The ContractDefiner and ContractVerifier classes will be moved to the case-boundaries package soon ([6805f1c](https://github.com/case-contract-testing/case/commit/6805f1c50d72aa9313b767bfc8157614d9924b40))
* Export error and config types ([b46fe4a](https://github.com/case-contract-testing/case/commit/b46fe4a99bce89cd8a14be71de6f710af16d3acd))
* Export LogPrinter type ([77eb3ce](https://github.com/case-contract-testing/case/commit/77eb3ce7a68d5d445bf690c2e054f5d0fb18fd76))
* Export MatchContextByType, DataOrCaseNodeFor and add the HTTP matcher types to the Any* lists ([0ce1ee3](https://github.com/case-contract-testing/case/commit/0ce1ee384017516d3107e8c45e8d308ea6cba4dd))
* Introduce triggerAndTest types for invoking both a trigger and the test together (useful for invoking from other languages) ([855ffd8](https://github.com/case-contract-testing/case/commit/855ffd8a22957c9b12b778fd4f200755e5f2b72d))


### Bug Fixes

* Actually include the jsii manifest ([a1cf72f](https://github.com/case-contract-testing/case/commit/a1cf72f25628d3f1a1d93084ef6dd3334bb6a495))
* Add AnyLeafOrStructure to AnyCaseMatcherOrData, preventing type errors in tests ([b0d3cf0](https://github.com/case-contract-testing/case/commit/b0d3cf0a8a6f1020777ecc53837f1764ccdeb2d3))
* Add contract name to log location for publish contract/verification ([d736689](https://github.com/case-contract-testing/case/commit/d7366896304897c9a7fff6148966d5dbd62ce1f8))
* Correct a bug where the default settings overrode settings provided via environment variables ([9784637](https://github.com/case-contract-testing/case/commit/97846379f0be62cf01c0837dee6261fac66b2c9d))
* Correct an issue where combined triggers were not passed through to the test runner ([0dfe32f](https://github.com/case-contract-testing/case/commit/0dfe32f03a8d4ae60a58cd82e9a7e3307e6227f0))
* Correct issue where verifier didn't pass down all invoker properties ([238b42b](https://github.com/case-contract-testing/case/commit/238b42b87a07abb5ceca337fd9c8459167a13092))
* Correct peer dependency for test-equivalence-matchers ([5c913a0](https://github.com/case-contract-testing/case/commit/5c913a02309118655bd1a72adf9375155463bece))
* Export MatchContextByExact ([88cc4ae](https://github.com/case-contract-testing/case/commit/88cc4aef1e99eaee1102bba39c29d1c5aeeae208))
* Improve error message if you try to publish verification results for a contract that has no broker ([03714d1](https://github.com/case-contract-testing/case/commit/03714d1e98ccff92e84f35d0d79abd2a97607df7))
* Improve error messages when contract downloader fails ([93eb28b](https://github.com/case-contract-testing/case/commit/93eb28bda6920e9d49c057f9b024c5176cee6649))
* Improve formatting of error output ([04897a4](https://github.com/case-contract-testing/case/commit/04897a421f31a4c7a998b024eb9ca0e2ade2af80))
* Improve logger output ([f68752d](https://github.com/case-contract-testing/case/commit/f68752d774a3d8c5a953a47b164ac0e81bbcc227))
* Include .jsii manifest in release ([cce31c0](https://github.com/case-contract-testing/case/commit/cce31c0f89f55e45579a3c8aa7b20a143f7bf5a4))
* Swap colours for maintainerDebug and deepMaintainerDebug ([c77f6fb](https://github.com/case-contract-testing/case/commit/c77f6fbbffd4d96b3396d408a29dd6456e3fe96a))
* Update previously unused mock definitions to match the prefixed format ([bf693d7](https://github.com/case-contract-testing/case/commit/bf693d7be0fc0ef6fd3c218d72e420086228f030))
* Widen types for `stripMatchers` and `checkMatch` (a side-effect of using the new case-entities-internal package) ([26d5b6e](https://github.com/case-contract-testing/case/commit/26d5b6e90612066d703d359421b8be9995b0009a))


### Code Refactoring

* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated ([438fac4](https://github.com/case-contract-testing/case/commit/438fac472f9d58686a705bd57d58696a0499f226))

## [0.1.1](https://github.com/case-contract-testing/case/compare/contract-case-v0.1.0...contract-case-v0.1.1) (2023-05-03)


### Features

* Add separate package for jest + javascript DSL ([e175bf7](https://github.com/case-contract-testing/case/commit/e175bf7befd9c6a9e1be96f490845289ca248aaf))
* Add triggerAndTest function to the connectors layer ([fd9f1f2](https://github.com/case-contract-testing/case/commit/fd9f1f255919a53e22a52de295738b41aba721f0))
* Add types for states ([55048e1](https://github.com/case-contract-testing/case/commit/55048e1041f73f0edfede8ca2cf605ae6be138f6))
* Export  TestInvoker, MultiTestInvoker and CaseContractDescription ([4818aa8](https://github.com/case-contract-testing/case/commit/4818aa8d2400517ef6ef21fc16f1536b04e99962))


### Bug Fixes

* Correct an issue where combined triggers were not passed through to the test runner ([0dfe32f](https://github.com/case-contract-testing/case/commit/0dfe32f03a8d4ae60a58cd82e9a7e3307e6227f0))
* Export MatchContextByExact ([88cc4ae](https://github.com/case-contract-testing/case/commit/88cc4aef1e99eaee1102bba39c29d1c5aeeae208))

## [0.1.0](https://github.com/case-contract-testing/case/compare/contract-case-v0.0.1...contract-case-v0.1.0) (2023-04-26)


### ⚠ BREAKING CHANGES

* Add an IResultPrinter type and make it required as part of the constructor for ContractDefiner
* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again
* Change return type of ILogPrinter to Result
* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated

### Features

* Add ability to pass in printer for log lines ([d6d8b7f](https://github.com/case-contract-testing/case/commit/d6d8b7f455a8cb30f80a4db3dbb459e3493502f5))
* Add an IResultPrinter type and make it required as part of the constructor for ContractDefiner ([f5583d2](https://github.com/case-contract-testing/case/commit/f5583d240df98849eb1e55e4655b789afa600e5e))
* Add Case Example Mock Types package ([7f79879](https://github.com/case-contract-testing/case/commit/7f7987951174de9d57f68106e29c7104745a6296))
* Add documentation package ([f5b1f61](https://github.com/case-contract-testing/case/commit/f5b1f615c8c8b1db60c04a9d3cee4c087cf8d9eb))
* Add HttpResponse and HttpRequest matchers ([21cc98a](https://github.com/case-contract-testing/case/commit/21cc98abe8614813ba3196baa0ba6dce31b1bfea))
* Add ILogPrinter interface to allow printing log lines ([f17d1fa](https://github.com/case-contract-testing/case/commit/f17d1fac53dfaf54e9ddd2c0742baa5a75a149a8))
* Add result printer methods to the defaultPrinter. This means that any custom loggers must be extended to also cover the ResultPrinter type ([861be95](https://github.com/case-contract-testing/case/commit/861be95135b0bdbe2eba615f455163f44ffe6945))
* Add StateHandlers type to boundary ([75a2a9b](https://github.com/case-contract-testing/case/commit/75a2a9b3f529a626a1ae49ed20088675b95d7f0c))
* Add SuccessWithAny result type ([d566a7f](https://github.com/case-contract-testing/case/commit/d566a7fb7c33451214f2159588c86b2b11a232b2))
* Add types for triggerAndTest ([3609024](https://github.com/case-contract-testing/case/commit/360902447e6dcc7e0cd4bd200d27d35d1e56223a))
* Allow specification of more options via environment variables ([553a7b1](https://github.com/case-contract-testing/case/commit/553a7b15fbb6ba6069c0bee2c683b57ece942c3c))
* **boundary:** Add initial types for ContractDefiner ([06643c0](https://github.com/case-contract-testing/case/commit/06643c0073f85b960619a0849084d791b7769e99))
* Change return type of ILogPrinter to Result ([43b3d9c](https://github.com/case-contract-testing/case/commit/43b3d9c3a1e2baa5971b01b9064df790368b087a))
* Exit with a warning and success if there is no broker baseurl when downloading contracts. In the future, this will be an error again ([6cfd730](https://github.com/case-contract-testing/case/commit/6cfd730d83d3ad5381479c592d8f3939263a4ea3))
* Export all error types ([8b2ca24](https://github.com/case-contract-testing/case/commit/8b2ca241189d4d51a04d9bfdbbe9e82ad10f5a7d))
* export AnyMatcherOrData and AnyStringMatcher ([e116600](https://github.com/case-contract-testing/case/commit/e11660022ac56ab5a9ee9465921d98025485cc58))
* Export ContractDefinerConnector and ContractVerifierConnector. The ContractDefiner and ContractVerifier classes will be moved to the case-boundaries package soon ([6805f1c](https://github.com/case-contract-testing/case/commit/6805f1c50d72aa9313b767bfc8157614d9924b40))
* Export error and config types ([b46fe4a](https://github.com/case-contract-testing/case/commit/b46fe4a99bce89cd8a14be71de6f710af16d3acd))
* Export LogPrinter type ([77eb3ce](https://github.com/case-contract-testing/case/commit/77eb3ce7a68d5d445bf690c2e054f5d0fb18fd76))
* Export MatchContextByType, DataOrCaseNodeFor and add the HTTP matcher types to the Any* lists ([0ce1ee3](https://github.com/case-contract-testing/case/commit/0ce1ee384017516d3107e8c45e8d308ea6cba4dd))
* Introduce triggerAndTest types for invoking both a trigger and the test together (useful for invoking from other languages) ([855ffd8](https://github.com/case-contract-testing/case/commit/855ffd8a22957c9b12b778fd4f200755e5f2b72d))


### Bug Fixes

* Actually include the jsii manifest ([a1cf72f](https://github.com/case-contract-testing/case/commit/a1cf72f25628d3f1a1d93084ef6dd3334bb6a495))
* Add AnyLeafOrStructure to AnyCaseMatcherOrData, preventing type errors in tests ([b0d3cf0](https://github.com/case-contract-testing/case/commit/b0d3cf0a8a6f1020777ecc53837f1764ccdeb2d3))
* Add contract name to log location for publish contract/verification ([d736689](https://github.com/case-contract-testing/case/commit/d7366896304897c9a7fff6148966d5dbd62ce1f8))
* Correct a bug where the default settings overrode settings provided via environment variables ([9784637](https://github.com/case-contract-testing/case/commit/97846379f0be62cf01c0837dee6261fac66b2c9d))
* Correct peer dependency for test-equivalence-matchers ([5c913a0](https://github.com/case-contract-testing/case/commit/5c913a02309118655bd1a72adf9375155463bece))
* Improve error message if you try to publish verification results for a contract that has no broker ([03714d1](https://github.com/case-contract-testing/case/commit/03714d1e98ccff92e84f35d0d79abd2a97607df7))
* Improve error messages when contract downloader fails ([93eb28b](https://github.com/case-contract-testing/case/commit/93eb28bda6920e9d49c057f9b024c5176cee6649))
* Improve formatting of error output ([04897a4](https://github.com/case-contract-testing/case/commit/04897a421f31a4c7a998b024eb9ca0e2ade2af80))
* Improve logger output ([f68752d](https://github.com/case-contract-testing/case/commit/f68752d774a3d8c5a953a47b164ac0e81bbcc227))
* Include .jsii manifest in release ([cce31c0](https://github.com/case-contract-testing/case/commit/cce31c0f89f55e45579a3c8aa7b20a143f7bf5a4))
* Swap colours for maintainerDebug and deepMaintainerDebug ([c77f6fb](https://github.com/case-contract-testing/case/commit/c77f6fbbffd4d96b3396d408a29dd6456e3fe96a))
* Update previously unused mock definitions to match the prefixed format ([bf693d7](https://github.com/case-contract-testing/case/commit/bf693d7be0fc0ef6fd3c218d72e420086228f030))
* Widen types for `stripMatchers` and `checkMatch` (a side-effect of using the new case-entities-internal package) ([26d5b6e](https://github.com/case-contract-testing/case/commit/26d5b6e90612066d703d359421b8be9995b0009a))


### Code Refactoring

* Rename all internal fields from "case:*" to "_case:*" for compatibility with JSii. Contract files written before this change will need to be regenerated ([438fac4](https://github.com/case-contract-testing/case/commit/438fac472f9d58686a705bd57d58696a0499f226))
