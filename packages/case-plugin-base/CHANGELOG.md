# Changelog

## [0.19.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-plugin-base-v0.18.0...@contract-case/case-plugin-base-v0.19.0) (2025-02-25)


### ⚠ BREAKING CHANGES

* Add ability for matchers to validate their own content. This is a breaking change for any plugin authors, as matcher Executor implementations now need to provide validation functions

### Features

* Add ability for matchers to validate their own content. This is a breaking change for any plugin authors, as matcher Executor implementations now need to provide validation functions ([afaa8d7](https://github.com/case-contract-testing/contract-case/commit/afaa8d75d81e45ca7609f89b1e17819183bc59b2))
* Add ability for the current version to be generated from the git sha ([dd70365](https://github.com/case-contract-testing/contract-case/commit/dd703650fd058d34f6d772011b74faec10b93074))
* Run parameter validators ahead of the self-check, allowing early warning of configuration mistakes in example interactions ([186d2e5](https://github.com/case-contract-testing/contract-case/commit/186d2e58eff512d37e53425ac353b231d15250a8))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-plugin-dsl-types bumped from 0.18.0 to 0.19.0
  * devDependencies
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.1 to 0.2.0

## [0.18.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-plugin-base-v0.17.1...@contract-case/case-plugin-base-v0.18.0) (2024-10-17)


### Miscellaneous Chores

* **@contract-case/case-plugin-base:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-plugin-dsl-types bumped from 0.17.1 to 0.18.0

## [0.17.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-plugin-base-v0.17.0...@contract-case/case-plugin-base-v0.17.1) (2024-10-08)


### Miscellaneous Chores

* **@contract-case/case-plugin-base:** Synchronize ContractCase versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-plugin-dsl-types bumped from 0.17.0 to 0.17.1

## [0.17.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-plugin-base-v0.16.3...@contract-case/case-plugin-base-v0.17.0) (2024-10-02)


### ⚠ BREAKING CHANGES

* Separate case-plugin-base into case-plugin-base and case-plugin-dsl-types to make working with bundled dependencies easier. Some imports may need to be updated.

### Code Refactoring

* Separate case-plugin-base into case-plugin-base and case-plugin-dsl-types to make working with bundled dependencies easier. Some imports may need to be updated. ([6659218](https://github.com/case-contract-testing/contract-case/commit/6659218c053146c2c1171fa3c9621c6aa8399aac))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @contract-case/case-plugin-dsl-types bumped from 0.16.3 to 0.17.0

## [0.16.3](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-plugin-base-v0.16.2...@contract-case/case-plugin-base-v0.16.3) (2024-10-02)


### Miscellaneous Chores

* **@contract-case/case-plugin-base:** Synchronize ContractCase versions

## [0.16.2](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-plugin-base-v0.16.1...@contract-case/case-plugin-base-v0.16.2) (2024-10-02)


### Miscellaneous Chores

* **@contract-case/case-plugin-base:** Synchronize ContractCase versions

## [0.16.1](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-plugin-base-v0.16.0...@contract-case/case-plugin-base-v0.16.1) (2024-10-01)


### Miscellaneous Chores

* **@contract-case/case-plugin-base:** Synchronize ContractCase versions

## [0.16.0](https://github.com/case-contract-testing/contract-case/compare/@contract-case/case-plugin-base-v0.15.7...@contract-case/case-plugin-base-v0.16.0) (2024-10-01)


### ⚠ BREAKING CHANGES

* Split HTTP mock and matchers to their own packages

### Features

* Add ability for plugins to specify their own configuration ([bf636c2](https://github.com/case-contract-testing/contract-case/commit/bf636c22a2564cfc2e4ebdac179835b32fa3a964))
* Add getPluginConfig convenience method for extracting the value of `mockConfig[pluginName]` ([50de742](https://github.com/case-contract-testing/contract-case/commit/50de74239f0a384043309986e7ce033f204d5865))


### Bug Fixes

* Hardcode error names so that they're robust to minification ([3106196](https://github.com/case-contract-testing/contract-case/commit/3106196f909ef703ecb15e0f076933a987e69fc3))
* Improve hasErrors function ([9b82033](https://github.com/case-contract-testing/contract-case/commit/9b8203359419ffc1be723e54228445df040be1d4))
* Improve plugin configuration error messages ([11d44bb](https://github.com/case-contract-testing/contract-case/commit/11d44bb8e951df8197ce3a7abaf9ca1d3e2a817d))
* Improve plugin configuration errors and documentation ([30e5987](https://github.com/case-contract-testing/contract-case/commit/30e5987f52d0743b751c9ec57858e739260ac2fc))
* Support null responses, eg for void returns in functions ([1c2eeb1](https://github.com/case-contract-testing/contract-case/commit/1c2eeb1d72aabbaccbe67eec820e12463bdb84e0))


### Miscellaneous Chores

* Split HTTP mock and matchers to their own packages ([bfc2e4f](https://github.com/case-contract-testing/contract-case/commit/bfc2e4ff2d464899fd8ce63978048e9f1991ff80))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @contract-case/case-maintainer-config bumped from 0.0.4 to 0.1.0
    * @contract-case/eslint-config-case-maintainer bumped from 0.1.0 to 0.1.1
