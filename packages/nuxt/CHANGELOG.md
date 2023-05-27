# Changelog

## [0.1.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.0.7...nuxt-v0.1.0) (2023-05-26)


### ⚠ BREAKING CHANGES

* **useBreadcrumb:** no longer require createBreadcrumb to be called for global state to work... It will now work out of the box. No extra calls needed. Simply use useBreadcrumb throughout the app and enjoy global state. A remedy is to global search for createBreadcrumb and remove it, it is not needed and not exported.

### Features

* **useBreadcrumb:** no longer require createBreadcrumb to be called for global state to work... It will now work out of the box. No extra calls needed. Simply use useBreadcrumb throughout the app and enjoy global state. A remedy is to global search for createBreadcrumb and remove it, it is not needed and not exported. ([4c6275d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/4c6275df98907f50e3b348d9cdd50070f2d80e52))

## [0.0.7](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.0.6...nuxt-v0.0.7) (2023-05-17)


### ⚠ BREAKING CHANGES

* **nuxt:** remove nuxt.ts from main package & @nuxt/kit from dependencies -- use package @bootstrap-vue-next/nuxt (readme coming soon)
* **nuxt:** create explicit nuxt module
* **BDropdown:** do not use internal state to modify dropdown instead expose vmodel

### Features

* add in nuxt module ([1ba6298](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1ba62983649b0e55e2a8dd037b12daa07268de7c))
* **BDropdown:** do not use internal state to modify dropdown instead expose vmodel ([ebdd1ee](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ebdd1ee5c201d709463c2fbaf9d31a47b5a02fc1))
* finalize nuxt module ([4a8a106](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/4a8a1060735f8f2b4fbff37c77570fa2858f3c2f))
* **nuxt:** create explicit nuxt module ([00af3e4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/00af3e4713eea2d8098eeb2083915a9868d2231d))
* **nuxt:** remove nuxt.ts from main package & @nuxt/kit from dependencies -- use package @bootstrap-vue-next/nuxt (readme coming soon) ([00af3e4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/00af3e4713eea2d8098eeb2083915a9868d2231d))
* start nuxt package ([a04563e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a04563ee704a017184f1de6c792f789a7c725677))


### Bug Fixes

* build issues ([a04563e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a04563ee704a017184f1de6c792f789a7c725677))


### Miscellaneous Chores

* release 0.6.6 ([857f5b3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/857f5b329aac31601f380843ea69a6a0df267378))
* release 0.6.7 ([5619a7b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5619a7b087b691264aae579ebe603d4e74922afc))
