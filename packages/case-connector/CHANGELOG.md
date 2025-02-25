# Changelog

## [0.10.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.10.0...@contract-case/case-connector-v0.10.1) (2025-02-25)


### Features

* Add ability for the current version to be generated from the git sha ([dd70365](https://github.com/case-contract-testing/contract-case/commit/dd703650fd058d34f6d772011b74faec10b93074))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core bumped from 0.18.0 to 0.19.0
    * @contract-case/case-connector-proto bumped from 0.9.0 to 0.9.1
    * @contract-case/case-entities-internal bumped from 0.18.0 to 0.19.0
  * devDependencies
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.1 to 0.2.0

## [0.10.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.9.0...@contract-case/case-connector-v0.10.0) (2024-10-17)


### ⚠ BREAKING CHANGES

* Replace the config object in triggers with a clearer SetupInfo type, allowing cross-language function calls as mocks. Note that the function calls now always return json strings, user-facing DSLs will need to parse the strings

### Bug Fixes

* Accurately include version numbers at runtime ([cca80e3](https://github.com/case-contract-testing/contract-case/commit/cca80e32f2dd055388e3cadd0239c883d556bb49))


### Code Refactoring

* Replace the config object in triggers with a clearer SetupInfo type, allowing cross-language function calls as mocks. Note that the function calls now always return json strings, user-facing DSLs will need to parse the strings ([c9ddd93](https://github.com/case-contract-testing/contract-case/commit/c9ddd93782b5e11cd5925ea76e089e0d779fdc11))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core bumped from 0.17.1 to 0.18.0
    * @contract-case/case-connector-proto bumped from 0.8.0 to 0.9.0
    * @contract-case/case-entities-internal bumped from 0.17.1 to 0.18.0

## [0.9.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.8.4...@contract-case/case-connector-v0.9.0) (2024-10-08)


### ⚠ BREAKING CHANGES

* The gRRPC SuccessWithAny type now contains a json string instead of a struct, for ease of mapping

### Bug Fixes

* Improve error message if the invokeable function's return value fails to parse ([3634d5d](https://github.com/case-contract-testing/contract-case/commit/3634d5d5fba4ccfc27b479911322fbe2847c0dba))
* Substantially improve maintainer logging ([30a882b](https://github.com/case-contract-testing/contract-case/commit/30a882b69e971b44285ef74e6da76ccef1a8a1ad))


### Code Refactoring

* The gRRPC SuccessWithAny type now contains a json string instead of a struct, for ease of mapping ([adf66dd](https://github.com/case-contract-testing/contract-case/commit/adf66dd6e42eb85b5c5ece2d06405cb677e684e8))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core bumped from 0.17.0 to 0.17.1
    * @contract-case/case-connector-proto bumped from 0.7.6 to 0.8.0
    * @contract-case/case-entities-internal bumped from 0.17.0 to 0.17.1

## [0.8.4](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.8.3...@contract-case/case-connector-v0.8.4) (2024-10-02)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core bumped from 0.16.3 to 0.17.0
    * @contract-case/case-entities-internal bumped from 0.16.3 to 0.17.0

## [0.8.3](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.8.2...@contract-case/case-connector-v0.8.3) (2024-10-02)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core bumped from 0.16.2 to 0.16.3
    * @contract-case/case-entities-internal bumped from 0.16.2 to 0.16.3

## [0.8.2](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.8.1...@contract-case/case-connector-v0.8.2) (2024-10-02)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core bumped from 0.16.1 to 0.16.2
    * @contract-case/case-entities-internal bumped from 0.16.1 to 0.16.2

## [0.8.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.8.0...@contract-case/case-connector-v0.8.1) (2024-10-01)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core bumped from 0.16.0 to 0.16.1
    * @contract-case/case-entities-internal bumped from 0.16.0 to 0.16.1

## [0.8.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.7.5...@contract-case/case-connector-v0.8.0) (2024-10-01)


### ⚠ BREAKING CHANGES

* BoundarySuccessWithAny is now always a json encoded string. Existing mappers will need to be updated.
* Convert package to pure ESM
* Split HTTP mock and matchers to their own packages

### Features

* Add BoundaryPluginLoader to facilitate loading of plugins ([2242e96](https://github.com/case-contract-testing/contract-case/commit/2242e960c93278d9fafdacce79d568b87200345c))
* Add grpc messages for function invokers and responses ([1a45353](https://github.com/case-contract-testing/contract-case/commit/1a453539bc12bda8ccd1ec69f0d485c197eb43e6))
* Add loadPlugin message to both contract definition and verification grpc streams ([5845808](https://github.com/case-contract-testing/contract-case/commit/584580849cc48eaf990a2b559ab85f29f0b571b6))
* Add mockConfig to configuration object, allowing arbitrary configuration of mocks ([a9aa4f7](https://github.com/case-contract-testing/contract-case/commit/a9aa4f717095dde70e98742dd16dd3e20cc63b1d))
* Expose invokeable functions through the javascript boundary ([39a1920](https://github.com/case-contract-testing/contract-case/commit/39a19206157962dc60e2f216fb13500c1f37b94d))


### Bug Fixes

* Fix issue where failures in verfication could cause the server to die ([6415824](https://github.com/case-contract-testing/contract-case/commit/64158247dccefbe40d41cdcbdc643014e0ef6c75))
* Fix issue where failures were incorrectly mapped across core binary ([5ea3a1f](https://github.com/case-contract-testing/contract-case/commit/5ea3a1f028b2d6cc4b7ddb7edcfb92b228f23590))
* Hardcode error names so that they're robust to minification ([3106196](https://github.com/case-contract-testing/contract-case/commit/3106196f909ef703ecb15e0f076933a987e69fc3))
* Now loading plugins over grpc doesn't throw an error ([0137381](https://github.com/case-contract-testing/contract-case/commit/013738163d79d3fac8a27e88c77a6ee6b0e3fc1f))


### Miscellaneous Chores

* Split HTTP mock and matchers to their own packages ([bfc2e4f](https://github.com/case-contract-testing/contract-case/commit/bfc2e4ff2d464899fd8ce63978048e9f1991ff80))


### Code Refactoring

* BoundarySuccessWithAny is now always a json encoded string. Existing mappers will need to be updated. ([5fc4a7a](https://github.com/case-contract-testing/contract-case/commit/5fc4a7afc4b88ecc70e5d1d86f2e6f42a2486ae4))
* Convert package to pure ESM ([64f5788](https://github.com/case-contract-testing/contract-case/commit/64f5788236d25f70092b6d1e5c4d2f4e0e412bc9))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core bumped from 0.15.7 to 0.16.0
    * @contract-case/case-connector-proto bumped from 0.7.5 to 0.7.6
    * @contract-case/case-entities-internal bumped from 0.15.7 to 0.16.0
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.4 to 0.1.0
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.0 to 0.1.1

## [0.7.5](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.7.4...@contract-case/case-connector-v0.7.5) (2024-05-16)


### Features

* Add case-boundary into the connector package ([072222f](https://github.com/case-contract-testing/contract-case/commit/072222f4b4f1eeddef461b0007bc5f431217fb7b))
* Add internal config parameters to control whether verification is async or not ([6882739](https://github.com/case-contract-testing/contract-case/commit/68827393b0b766e753aeb77dcab123a2a01672fe))
* Implement and expose contract verifier ([ea460cd](https://github.com/case-contract-testing/contract-case/commit/ea460cd5a915975673b2f22d98e05fab3b2b1cba))


### Bug Fixes

* Correct typing issue with trigger handles ([c7c4b47](https://github.com/case-contract-testing/contract-case/commit/c7c4b47b1d43d98235ac188c6444e27913b1b121))
* Ensure that response ID is present in the maintainer logs ([bcda125](https://github.com/case-contract-testing/contract-case/commit/bcda1258520a87a358fb9369fe1a4b9e77356a9c))
* Fix issue where the verification endpoint wasn't exposed ([df36ba3](https://github.com/case-contract-testing/contract-case/commit/df36ba38fcd91fb3b263f88a17d6314fc93a6095))
* Remove call to deprecated function, avoiding warning ([6b7ea08](https://github.com/case-contract-testing/contract-case/commit/6b7ea08dc06776fb3377f1ef9a0dc24dd594a935))
* Start the ContractCase server on a random port ([4c5d431](https://github.com/case-contract-testing/contract-case/commit/4c5d431848cb026701510cf7248f0c48ff5f8b75))
* Use case-connector instead of case-boundary ([ecc1c9a](https://github.com/case-contract-testing/contract-case/commit/ecc1c9a02f1afc7caadaf1844d9b49eb1843a014))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core bumped from 0.15.6 to 0.15.7
    * @contract-case/case-entities-internal bumped from 0.15.6 to 0.15.7
  * devDependencies
    * @contract-case/eslint-config-case-maintainer bumped from 0.0.3 to 0.1.0

## [0.7.4](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.7.3...@contract-case/case-connector-v0.7.4) (2024-02-11)


### Bug Fixes

* Bump version of case-boundary to 0.10.4 ([a15aac9](https://github.com/case-contract-testing/contract-case/commit/a15aac9a1337b77831c9f0baf425b6e3f4e2fa17))

## [0.7.3](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.7.2...@contract-case/case-connector-v0.7.3) (2024-02-11)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.15.5 to 0.15.6

## [0.7.2](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.7.1...@contract-case/case-connector-v0.7.2) (2024-01-30)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-entities-internal bumped from 0.15.4 to 0.15.5

## [0.7.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.7.0...@contract-case/case-connector-v0.7.1) (2024-01-23)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-boundary bumped from 0.10.0 to 0.10.1

## [0.7.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.6.7...@contract-case/case-connector-v0.7.0) (2024-01-23)


### ⚠ BREAKING CHANGES

* replace all response types that only return a single result with one unified type

### Bug Fixes

* Correct issue where the version string was double printed ([d59596a](https://github.com/case-contract-testing/contract-case/commit/d59596a2a4199994769bb056a2795f5eb39f3008))
* Don't double count case-connector version in maintainer debug logs ([dd1edd0](https://github.com/case-contract-testing/contract-case/commit/dd1edd08460e459311527041075877337732f7e3))


### Code Refactoring

* replace all response types that only return a single result with one unified type ([53909f1](https://github.com/case-contract-testing/contract-case/commit/53909f16ad13e1d136aed953b207b9c3feea35f3))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-boundary bumped from 0.9.2 to 0.10.0
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.3 to 0.0.4

## [0.6.7](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.6.6...@contract-case/case-connector-v0.6.7) (2024-01-06)


### Bug Fixes

* Update documentation slightly ([1845322](https://github.com/case-contract-testing/contract-case/commit/18453227b712ec6209a40d450f290f639d37f06e))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-boundary bumped from 0.9.1 to 0.9.2

## [0.6.6](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-v0.6.5...@contract-case/case-connector-v0.6.6) (2024-01-06)


### Features

* Add full connector layer for the case-boundary ([651d55d](https://github.com/case-contract-testing/contract-case/commit/651d55dd2641aa3ebaea5cd4f998b7871271ccdf))


### Bug Fixes

* Correct error messages ([29caeff](https://github.com/case-contract-testing/contract-case/commit/29caeffa5fcd60e489f176e7daae7facf5187b0b))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-boundary bumped from 0.9.0 to 0.9.1

## Changelog

### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-boundary bumped from 0.7.0 to 0.8.0
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.2 to 0.0.3
    * @contract-case/eslint-config-case-maintainer bumped from 0.0.2 to 0.0.3

## Changelog

### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-boundary bumped from 0.6.3 to 0.7.0
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.1 to 0.0.2
    * @contract-case/eslint-config-case-maintainer bumped from 0.0.1 to 0.0.2
