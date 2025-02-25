# Changelog

## [0.9.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-proto-v0.9.0...@contract-case/case-connector-proto-v0.9.1) (2025-02-25)


### Features

* Add ability for the current version to be generated from the git sha ([dd70365](https://github.com/case-contract-testing/contract-case/commit/dd703650fd058d34f6d772011b74faec10b93074))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.1 to 0.2.0

## [0.9.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-proto-v0.8.0...@contract-case/case-connector-proto-v0.9.0) (2024-10-17)


### ⚠ BREAKING CHANGES

* Replace the config struct in triggers with a fully specified SetupInfo object

### Code Refactoring

* Replace the config struct in triggers with a fully specified SetupInfo object ([5d76d84](https://github.com/case-contract-testing/contract-case/commit/5d76d8478f505fe04801c5ed11199aee82e86e4f))

## [0.8.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-proto-v0.7.6...@contract-case/case-connector-proto-v0.8.0) (2024-10-08)


### ⚠ BREAKING CHANGES

* The gRRPC SuccessWithAny type now contains a json string instead of a struct, for ease of mapping

### Code Refactoring

* The gRRPC SuccessWithAny type now contains a json string instead of a struct, for ease of mapping ([adf66dd](https://github.com/case-contract-testing/contract-case/commit/adf66dd6e42eb85b5c5ece2d06405cb677e684e8))

## [0.7.6](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-connector-proto-v0.7.5...@contract-case/case-connector-proto-v0.7.6) (2024-10-01)


### Features

* Add grpc messages for function invokers and responses ([1a45353](https://github.com/case-contract-testing/contract-case/commit/1a453539bc12bda8ccd1ec69f0d485c197eb43e6))
* Add mockConfig to configuration object, allowing arbitrary configuration of mocks ([a9aa4f7](https://github.com/case-contract-testing/contract-case/commit/a9aa4f717095dde70e98742dd16dd3e20cc63b1d))
* Extract proto to its own package ([6a64dbe](https://github.com/case-contract-testing/contract-case/commit/6a64dbe019d01b0477361cb9571b87dbcaddcb08))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.4 to 0.1.0
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.0 to 0.1.1
