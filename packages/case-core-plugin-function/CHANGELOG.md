# Changelog

## [0.19.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-plugin-function-v0.18.0...@contract-case/case-core-plugin-function-v0.19.0) (2025-02-25)


### ⚠ BREAKING CHANGES

* Add ability for matchers to validate their own content. This is a breaking change for any plugin authors, as matcher Executor implementations now need to provide validation functions

### Features

* Add ability for matchers to validate their own content. This is a breaking change for any plugin authors, as matcher Executor implementations now need to provide validation functions ([afaa8d7](https://github.com/case-contract-testing/contract-case/commit/afaa8d75d81e45ca7609f89b1e17819183bc59b2))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-function-dsl bumped from ^0.18.0 to ^0.19.0
    * @contract-case/case-plugin-base bumped from ^0.18.0 to ^0.19.0
    * @contract-case/case-plugin-dsl-types bumped from ^0.18.0 to ^0.19.0
  * devDependencies
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.1 to 0.2.0

## [0.18.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-plugin-function-v0.17.1...@contract-case/case-core-plugin-function-v0.18.0) (2024-10-17)


### ⚠ BREAKING CHANGES

* Replace the config object in triggers with a clearer SetupInfo type, allowing cross-language function calls as mocks. Note that the function calls now always return json strings, user-facing DSLs will need to parse the strings

### Code Refactoring

* Replace the config object in triggers with a clearer SetupInfo type, allowing cross-language function calls as mocks. Note that the function calls now always return json strings, user-facing DSLs will need to parse the strings ([c9ddd93](https://github.com/case-contract-testing/contract-case/commit/c9ddd93782b5e11cd5925ea76e089e0d779fdc11))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-function-dsl bumped from ^0.17.1 to ^0.18.0
    * @contract-case/case-plugin-base bumped from ^0.17.1 to ^0.18.0
    * @contract-case/case-plugin-dsl-types bumped from ^0.17.1 to ^0.18.0

## [0.17.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-plugin-function-v0.17.0...@contract-case/case-core-plugin-function-v0.17.1) (2024-10-08)


### Miscellaneous Chores

* **@contract-case/case-core-plugin-function:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-function-dsl bumped from ^0.17.0 to ^0.17.1
    * @contract-case/case-plugin-base bumped from ^0.17.0 to ^0.17.1
    * @contract-case/case-plugin-dsl-types bumped from ^0.17.0 to ^0.17.1

## [0.17.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-plugin-function-v0.16.3...@contract-case/case-core-plugin-function-v0.17.0) (2024-10-02)


### Miscellaneous Chores

* **@contract-case/case-core-plugin-function:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-function-dsl bumped from ^0.16.3 to ^0.17.0
    * @contract-case/case-plugin-base bumped from ^0.16.3 to ^0.17.0
    * @contract-case/case-plugin-dsl-types bumped from ^0.16.3 to ^0.17.0

## [0.16.3](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-plugin-function-v0.16.2...@contract-case/case-core-plugin-function-v0.16.3) (2024-10-02)


### Miscellaneous Chores

* **@contract-case/case-core-plugin-function:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-function-dsl bumped from ^0.16.2 to ^0.16.3
    * @contract-case/case-plugin-base bumped from ^0.16.2 to ^0.16.3

## [0.16.2](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-plugin-function-v0.16.1...@contract-case/case-core-plugin-function-v0.16.2) (2024-10-02)


### Miscellaneous Chores

* **@contract-case/case-core-plugin-function:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-function-dsl bumped from ^0.16.1 to ^0.16.2
    * @contract-case/case-plugin-base bumped from ^0.16.1 to ^0.16.2

## [0.16.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-plugin-function-v0.16.0...@contract-case/case-core-plugin-function-v0.16.1) (2024-10-01)


### Miscellaneous Chores

* **@contract-case/case-core-plugin-function:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-function-dsl bumped from ^0.16.0 to ^0.16.1
    * @contract-case/case-plugin-base bumped from ^0.16.0 to ^0.16.1

## [0.16.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-core-plugin-function-v0.15.7...@contract-case/case-core-plugin-function-v0.16.0) (2024-10-01)


### Features

* Add function caller mocks ([e05b370](https://github.com/case-contract-testing/contract-case/commit/e05b370380d67f1b0774631bbd83d5e0c83d6a59))
* Add function plugin for mocking function execution ([de74428](https://github.com/case-contract-testing/contract-case/commit/de74428f60945a754bf7da1fadc0f813bb5fa3f3))


### Bug Fixes

* Improve location reporting when function return types don't match ([1f32560](https://github.com/case-contract-testing/contract-case/commit/1f325600c7690c8124750fa9e1e3bc4fffb05aca))
* Improve plugin configuration error messages ([11d44bb](https://github.com/case-contract-testing/contract-case/commit/11d44bb8e951df8197ce3a7abaf9ca1d3e2a817d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-core-plugin-function-dsl bumped from ^0.15.7 to ^0.16.0
    * @contract-case/case-plugin-base bumped from ^0.15.7 to ^0.16.0
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.4 to 0.1.0
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.0 to 0.1.1
