# Changelog

## [0.1.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/mcp-v0.0.1...mcp-v0.1.0) (2026-08-14)


### ⚠ BREAKING CHANGES

* **orchestrator_composables:** disallow object of nested refs, instead prefer single mayberef object
* **orchestrator_composables:** nested ref resolution causing props passed in to be called when used by toValue, we no longer use toValue and instead simplify into a ref fixes https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2937
* **orchestrator_composables:** internally keep track via a object&map instead of massive array
* **BFormRating:** aria text of ambiguous 'x' clarified to be 'clear rating'
* ESM only package. Remove cjs variant (previously mislabeled as umd)

### Features

* **BFormRating:** add props for i18n aria text ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
* **BFormRating:** aria text of ambiguous 'x' clarified to be 'clear rating' ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
* bootstrap mcp monorepo package with eslint support ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
* ESM only package. Remove cjs variant (previously mislabeled as umd) ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
* **mcp:** add docs-backed migration resources and planning tools ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
* **nuxt-integrations:** automatically detect and use nuxtimg internally for images (option disabled) ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
* **nuxt-integrations:** automatically detect nuxtjs/color-mode and add bootstrap defaults (option disabled) ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
* publish @bootstrap-vue-next/mcp package ([#3257](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/3257)) ([fde7cec](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fde7cece2dccb3f1f2db3313b0dcdc466606e478))


### Bug Fixes

* **BFormGroup:** slot default scope ariaDescribedBy set to actual value ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
* **BFormTags:** use isLimitReached computed instead of props.limit in template ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
* **orchestrator_composables:** nested ref resolution causing props passed in to be called when used by toValue, we no longer use toValue and instead simplify into a ref fixes https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2937 ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))


### Performance Improvements

* **floating-ui:** update floating-ui/vue v2, allows getter function insteaed of needing an excess ref ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))


### Code Refactoring

* **orchestrator_composables:** disallow object of nested refs, instead prefer single mayberef object ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
* **orchestrator_composables:** internally keep track via a object&map instead of massive array ([9f65405](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9f654050fb82f2ab367d196d513f42b5a15f496a))
