# Changelog

## [0.17.6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.17.5...nuxt-v0.17.6) (2024-05-08)


### Miscellaneous Chores

* **nuxt:** Synchronize main group versions


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.17.6
  * peerDependencies
    * bootstrap-vue-next bumped to 0.17.6

## [0.17.5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.17.4...nuxt-v0.17.5) (2024-05-04)


### Miscellaneous Chores

* **nuxt:** Synchronize main group versions


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.17.5
  * peerDependencies
    * bootstrap-vue-next bumped to 0.17.5

## [0.17.4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.17.3...nuxt-v0.17.4) (2024-04-30)


### Miscellaneous Chores

* **nuxt:** Synchronize main group versions


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.17.4
  * peerDependencies
    * bootstrap-vue-next bumped to 0.17.4

## [0.17.3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.17.2...nuxt-v0.17.3) (2024-04-29)


### Bug Fixes

* update dependencies to fix a bug in vue compiler ([#1866](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1866)) ([b2c56bf](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b2c56bff644177d5653b628a9cbb30ffa5c7055a))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.17.3
  * peerDependencies
    * bootstrap-vue-next bumped to 0.17.3

## [0.17.2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.17.1...nuxt-v0.17.2) (2024-04-20)


### Miscellaneous Chores

* **nuxt:** Synchronize main group versions


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.17.2
  * peerDependencies
    * bootstrap-vue-next bumped to 0.17.2

## [0.17.1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.17.0...nuxt-v0.17.1) (2024-04-18)


### Bug Fixes

* Some prop types were build wrong because of vue bug ([3459a54](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3459a54f4242509a6a23e9a48430de5f3d190157))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.17.1
  * peerDependencies
    * bootstrap-vue-next bumped to 0.17.1

## [0.17.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.16.6...nuxt-v0.17.0) (2024-04-14)


### ⚠ BREAKING CHANGES

* **BDropdown:** replace "container" prop with "teleportTo"
* **BPopover:** replace "container" prop with "teleportTo"
* **BTable:** deprecate noSortReset, use `mustSort`
* **BFormTags:** remove input event -- use https://github.com/update:modelValue

### Features

* **BDropdown:** add teleportDisabled prop ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BDropdown:** replace "container" prop with "teleportTo" ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BFormTags:** remove input event -- use https://github.com/update:modelValue ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BPopover:** add teleportDisabled prop ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BPopover:** replace "container" prop with "teleportTo" ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** add functional syntax for sortAsc/sortDesc/sortDefault `sortAsc(fieldKey)` to specify the sort content for that specific field ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** add prop multisort ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** allow Numberish values =&gt; string is interpreted as is with maxHeight, numbers are converted to ${number}px maxHeight ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** deprecate noSortReset, use `mustSort` ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* export component prop types ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **utils:** inject getId to allow for custom id generation ([#1836](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1836)) ([c9e60f5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/c9e60f57da5ab703a75433a521ebd55eb26ac569))


### Bug Fixes

* **BTable:** fix handleFieldSorting algorithm to properly handle multisort with mustSort ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** generic types ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** set sort values to undefined so we dont accidentally wipe user defined comparer functions ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** stickyHeader true causes maxHeight 300px ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **generics:** use generic constraints for BTable & BTableLite ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* some migration issues with defineModel ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* types generation -- use interfaces for componentprops ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.17.0
  * peerDependencies
    * bootstrap-vue-next bumped to 0.17.0

## [0.16.6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.16.5...nuxt-v0.16.6) (2024-02-22)


### Miscellaneous Chores

* **nuxt:** Synchronize main group versions


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.16.6
  * peerDependencies
    * bootstrap-vue-next bumped to 0.16.6

## [0.16.5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.16.4...nuxt-v0.16.5) (2024-02-19)


### Miscellaneous Chores

* **nuxt:** Synchronize main group versions


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.16.5
  * peerDependencies
    * bootstrap-vue-next bumped to 0.16.5

## [0.16.4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.16.3...nuxt-v0.16.4) (2024-02-16)


### Miscellaneous Chores

* **nuxt:** Synchronize main group versions


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.16.4
  * peerDependencies
    * bootstrap-vue-next bumped to 0.16.4

## [0.16.3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.16.2...nuxt-v0.16.3) (2024-02-13)


### Features

* **nuxt:** auto import directives ([#1770](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1770)) ([228e0f7](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/228e0f7a61f92176f4aba78ddd2150dc4467d6cb))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.16.3
  * peerDependencies
    * bootstrap-vue-next bumped to 0.16.3

## [0.16.2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.16.1...nuxt-v0.16.2) (2024-02-11)

### Bug Fixes

- **nuxt:** optimize `bootstrap-vue-next` fixes [#1758](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1758) ([1aba0d1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1aba0d1501f815dd7a1a15ed14e874a578d1db9f))

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.16.2
  - peerDependencies
    - bootstrap-vue-next bumped to 0.16.2

## [0.16.1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.16.0...nuxt-v0.16.1) (2024-02-03)

### Bug Fixes

- **nuxt:** defineNuxtPlugin is not defined fixes [#1741](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1741) ([a5e76d6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a5e76d6111d06d3555e6677f128ed9b84af1a66f))

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.16.1
  - peerDependencies
    - bootstrap-vue-next bumped to 0.16.1

## [0.16.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.15.5...nuxt-v0.16.0) (2024-01-28)

### ⚠ BREAKING CHANGES

- use createBootstrap function for the plugin definition
- **useBreadcrumb:** return a ref instead of reactive
- **BToast:** rebuild events to match https://getbootstrap.com/docs/5.3/components/toasts/#events (hide, hidden, show, shown)
- **BToast:** close event no longer is start of transition, use "hide" event. Close event now corresponds to when close button is clicked during the hide process
- **BootstrapVuePlugin:** components default is now false. The plugin WILL NOT automatically load all components into global scope (perf) - use option "true" to change
- **BootstrapVuePlugin:** directives default is now false. The plugin WILL NOT automatically load all directives into global scope (perf) - use option "true" to change
- **BootstrapVueNextPlugin:** named export renamed from BootstrapVueNext to BootstrapVueNextPlugin
- rebuild "global variable" system to use app-level provide inject. Review documentation installation guide ([#1719](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1719))
- **useToast:** redefine the parameters of "show". Instead of many parameters, we simply use a single object
- **useModalController:** redefine the parameters of "show" and "confirm" Instead of many parameters, we simply use a single object
- **useToast:** redefine the parameters of "show". Instead of many p… ([#1712](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1712))
- required vue 3.4
- rename "Toast" type to OrchestratedToast
- **useToast:** rename "hide" to "remove" to be more in line with useModalController

### Features

- **BootstrapVueNextPlugin:** named export renamed from BootstrapVueNext to BootstrapVueNextPlugin ([afd7e5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/afd7e5fbd1e8d4decb626c726590225d67804ba1))
- **BootstrapVuePlugin:** components default is now false. The plugin WILL NOT automatically load all components into global scope (perf) - use option "true" to change ([afd7e5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/afd7e5fbd1e8d4decb626c726590225d67804ba1))
- **BootstrapVuePlugin:** directives default is now false. The plugin WILL NOT automatically load all directives into global scope (perf) - use option "true" to change ([afd7e5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/afd7e5fbd1e8d4decb626c726590225d67804ba1))
- rename "Toast" type to OrchestratedToast ([ca16a16](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ca16a168687dc0e17d6dc5c6210205c1911dd793))
- required vue 3.4 ([ca16a16](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ca16a168687dc0e17d6dc5c6210205c1911dd793))
- use createBootstrap function for the plugin definition ([f10fc5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f10fc5f1c3e6305d7c109d92c2c6995178372649))
- **useBreadcrumb:** return a ref instead of reactive ([afd7e5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/afd7e5fbd1e8d4decb626c726590225d67804ba1))
- **useModalController:** add confirm/show methods to globally create modals ([ca16a16](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ca16a168687dc0e17d6dc5c6210205c1911dd793))
- **useModalController:** add confirm/show methods to globally create modals ([#1701](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1701)) ([ca16a16](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ca16a168687dc0e17d6dc5c6210205c1911dd793))
- **useModalController:** redefine the parameters of "show" and "confirm" Instead of many parameters, we simply use a single object ([c542416](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/c5424161be549cf11d73af4fca2ef1789ea2a201))
- **useModalController:** show/confirm accept reactive inputs ([ca16a16](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ca16a168687dc0e17d6dc5c6210205c1911dd793))
- **useToast:** redefine the parameters of "show". Instead of many p… ([#1712](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1712)) ([c542416](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/c5424161be549cf11d73af4fca2ef1789ea2a201))
- **useToast:** redefine the parameters of "show". Instead of many parameters, we simply use a single object ([c542416](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/c5424161be549cf11d73af4fca2ef1789ea2a201))
- **useToast:** rename "hide" to "remove" to be more in line with useModalController ([ca16a16](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ca16a168687dc0e17d6dc5c6210205c1911dd793))
- **useToast:** show to accept reactive inputs ([ca16a16](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ca16a168687dc0e17d6dc5c6210205c1911dd793))

### Bug Fixes

- **BToast:** close event no longer is start of transition, use "hide" event. Close event now corresponds to when close button is clicked during the hide process ([afd7e5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/afd7e5fbd1e8d4decb626c726590225d67804ba1))
- **BToast:** rebuild events to match https://getbootstrap.com/docs/5.3/components/toasts/#events (hide, hidden, show, shown) ([afd7e5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/afd7e5fbd1e8d4decb626c726590225d67804ba1))
- rebuild "global variable" system to use app-level provide inject. Review documentation installation guide ([#1719](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1719)) ([afd7e5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/afd7e5fbd1e8d4decb626c726590225d67804ba1))

### Performance Improvements

- **BTabs:** more efficient unregisterTab function ([ca16a16](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ca16a168687dc0e17d6dc5c6210205c1911dd793))
- **useToast:** use shallowRef ([ca16a16](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ca16a168687dc0e17d6dc5c6210205c1911dd793))

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.16.0
  - peerDependencies
    - bootstrap-vue-next bumped to 0.16.0

## [0.15.5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.15.4...nuxt-v0.15.5) (2023-11-23)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.15.5
  - peerDependencies
    - bootstrap-vue-next bumped to 0.15.5

## [0.15.4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.15.3...nuxt-v0.15.4) (2023-11-22)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.15.4
  - peerDependencies
    - bootstrap-vue-next bumped to 0.15.4

## [0.15.3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.15.2...nuxt-v0.15.3) (2023-11-22)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.15.3
  - peerDependencies
    - bootstrap-vue-next bumped to 0.15.3

## [0.15.2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.15.1...nuxt-v0.15.2) (2023-11-22)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.15.2
  - peerDependencies
    - bootstrap-vue-next bumped to 0.15.2

## [0.15.1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.15.0...nuxt-v0.15.1) (2023-11-20)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.15.1
  - peerDependencies
    - bootstrap-vue-next bumped to 0.15.1

## [0.15.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.10...nuxt-v0.15.0) (2023-11-18)

### ⚠ BREAKING CHANGES

- **BImg:** rounded none by default
- **BOverlay:** rounded none by default

### Features

- **BFormCheckbox:** use a different value/uncheckedValue system under the hood streamlining the code and process ([fc1edfb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fc1edfb672c665c320618a85b16a90c96c798b8d))
- **BFormSpinbutton:** remove render functions, fix docs ([fc1edfb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fc1edfb672c665c320618a85b16a90c96c798b8d))
- **BTable:** selectedItems becomes a v-modelable prop ([fc1edfb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fc1edfb672c665c320618a85b16a90c96c798b8d))
- **BTable:** WIP fix reactivity engine ([fc1edfb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fc1edfb672c665c320618a85b16a90c96c798b8d))
- **BToaster:** expose show method ([fc1edfb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fc1edfb672c665c320618a85b16a90c96c798b8d))
- WIP table improvements ([fc1edfb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fc1edfb672c665c320618a85b16a90c96c798b8d))

### Bug Fixes

- BFormRadio use native [@change](https://github.com/change) & [@input](https://github.com/input) events ([fc1edfb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fc1edfb672c665c320618a85b16a90c96c798b8d))
- **BImg:** rounded none by default ([f259f78](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f259f78cbaef9bb56a813351a64a52c315a56806))
- **BOverlay:** rounded none by default ([f259f78](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f259f78cbaef9bb56a813351a64a52c315a56806))
- **BTable:** selectModel default value single =&gt; multi ([fc1edfb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fc1edfb672c665c320618a85b16a90c96c798b8d))
- **Directives:** use TS satisfies over TS as -- surprisingly had an affect ([fc1edfb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fc1edfb672c665c320618a85b16a90c96c798b8d))
- **nuxt:** do not transformasseturls for img -- Fixed by nuxt ([f259f78](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f259f78cbaef9bb56a813351a64a52c315a56806))
- **nuxt:** resolution of img not working fixes [#1539](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1539) ([ff63f2c](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ff63f2c490e3068f61760e5ba59b283c40acedc7))
- **useModal:** not working due to registry value not existing when code ran ([f259f78](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f259f78cbaef9bb56a813351a64a52c315a56806))

### Performance Improvements

- **useModalManager:** use shallowRef for stack & registry ([f259f78](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f259f78cbaef9bb56a813351a64a52c315a56806))

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.15.0
  - peerDependencies
    - bootstrap-vue-next bumped to 0.15.0

## [0.14.10](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.9...nuxt-v0.14.10) (2023-10-16)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.10
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.10

## [0.14.9](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.8...nuxt-v0.14.9) (2023-10-14)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.9
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.9

## [0.14.8](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.7...nuxt-v0.14.8) (2023-10-04)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.8
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.8

## [0.14.7](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.6...nuxt-v0.14.7) (2023-10-01)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.7
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.7

## [0.14.6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.5...nuxt-v0.14.6) (2023-09-28)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.6
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.6

## [0.14.5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.4...nuxt-v0.14.5) (2023-09-24)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.5
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.5

## [0.14.4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.3...nuxt-v0.14.4) (2023-09-24)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.4
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.4

## [0.14.3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.2...nuxt-v0.14.3) (2023-09-24)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.3
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.3

## [0.14.2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.1...nuxt-v0.14.2) (2023-09-23)

### Features

- **nuxt:** automatically transform asset urls for vite fixes [#1470](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1470) ([#1478](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1478)) ([3b61ee1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3b61ee181313a5fb0897b36a89fdb1fed456ef41))

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.2
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.2

## [0.14.1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.14.0...nuxt-v0.14.1) (2023-09-23)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.1
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.1

## [0.14.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.13.3...nuxt-v0.14.0) (2023-09-23)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.14.0
  - peerDependencies
    - bootstrap-vue-next bumped to 0.14.0

## [0.13.3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.13.2...nuxt-v0.13.3) (2023-09-19)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.13.3
  - peerDependencies
    - bootstrap-vue-next bumped to 0.13.3

## [0.13.2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.13.1...nuxt-v0.13.2) (2023-09-17)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.13.2
  - peerDependencies
    - bootstrap-vue-next bumped to 0.13.2

## [0.13.1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.13.0...nuxt-v0.13.1) (2023-09-16)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.13.1
  - peerDependencies
    - bootstrap-vue-next bumped to 0.13.1

## [0.13.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.12.4...nuxt-v0.13.0) (2023-09-15)

### Features

- **BToast:** I did not eat today and I I have been working for 12 hours straight on this. Enjoy donate at https://opencollective.com/bootstrap-vue-next ([a393473](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a393473373337e29914d93ace838587e2d829a55))

### Miscellaneous Chores

- release 0.13.0 ([77dfebc](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/77dfebc30d9a3f6f9f990f6128e8405368ffb16a))

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.13.0
  - peerDependencies
    - bootstrap-vue-next bumped to 0.13.0

## [0.12.4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.12.3...nuxt-v0.12.4) (2023-09-14)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.12.4
  - peerDependencies
    - bootstrap-vue-next bumped to 0.12.4

## [0.12.3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.12.2...nuxt-v0.12.3) (2023-09-12)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.12.3
  - peerDependencies
    - bootstrap-vue-next bumped to 0.12.3

## [0.12.2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.12.1...nuxt-v0.12.2) (2023-09-10)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.12.2
  - peerDependencies
    - bootstrap-vue-next bumped to 0.12.2

## [0.12.1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.12.0...nuxt-v0.12.1) (2023-09-06)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.12.1
  - peerDependencies
    - bootstrap-vue-next bumped to 0.12.1

## [0.12.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.2.0...nuxt-v0.12.0) (2023-09-04)

### Miscellaneous Chores

- **nuxt:** Synchronize main group versions

### Dependencies

- The following workspace dependencies were updated
  - devDependencies
    - bootstrap-vue-next bumped to 0.12.0
  - peerDependencies
    - bootstrap-vue-next bumped to 0.12.0

## [0.2.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.1.3...nuxt-v0.2.0) (2023-08-29)

### ⚠ BREAKING CHANGES

- release for 0.11.0

### Features

- release for 0.11.0 ([5be4a7e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5be4a7e942f94212ae86c364678bcc65977db7a7))

### Bug Fixes

- release 0.1.5 ([0b6efe5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/0b6efe59a14bf460e5bfda8c02e605d26da8890f))

### Miscellaneous Chores

- release ([18278f7](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/18278f7912f4142786204633d35c94c531dd6784))

## [0.1.3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.1.2...nuxt-v0.1.3) (2023-07-01)

### Features

- BOffcanvas & BModal body scrolling prevented ([af0a97d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/af0a97df8a2a4b44bd0364de6e262db5b1809d3d))

### Bug Fixes

- **BFormFile:** ModelValue not synced up when using reset ([af0a97d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/af0a97df8a2a4b44bd0364de6e262db5b1809d3d))
- **BFormFile:** unnecessary wrapper element ([af0a97d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/af0a97df8a2a4b44bd0364de6e262db5b1809d3d))
- readonly some refs ([af0a97d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/af0a97df8a2a4b44bd0364de6e262db5b1809d3d))

## [0.1.2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.1.1...nuxt-v0.1.2) (2023-06-25)

### Bug Fixes

- scss ([02750f5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/02750f5e5c2d93d3486a5cdaa363763a6a18c239))

## [0.1.1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.1.0...nuxt-v0.1.1) (2023-06-25)

### Bug Fixes

- defineSlot issues ([bb72530](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bb725308fe5805f3a78318613d538171a9d3ee29))
- import interface from other vue file ([bb72530](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bb725308fe5805f3a78318613d538171a9d3ee29))
- no-dupe-keys issues ([bb72530](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bb725308fe5805f3a78318613d538171a9d3ee29))
- types generation ([9537680](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/953768011c1f49a560c878babcf400ef765b8190))

## [0.1.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.0.7...nuxt-v0.1.0) (2023-05-26)

### ⚠ BREAKING CHANGES

- **useBreadcrumb:** no longer require createBreadcrumb to be called for global state to work... It will now work out of the box. No extra calls needed. Simply use useBreadcrumb throughout the app and enjoy global state. A remedy is to global search for createBreadcrumb and remove it, it is not needed and not exported.

### Features

- **useBreadcrumb:** no longer require createBreadcrumb to be called for global state to work... It will now work out of the box. No extra calls needed. Simply use useBreadcrumb throughout the app and enjoy global state. A remedy is to global search for createBreadcrumb and remove it, it is not needed and not exported. ([4c6275d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/4c6275df98907f50e3b348d9cdd50070f2d80e52))

## [0.0.7](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.0.6...nuxt-v0.0.7) (2023-05-17)

### ⚠ BREAKING CHANGES

- **nuxt:** remove nuxt.ts from main package & @nuxt/kit from dependencies -- use package @bootstrap-vue-next/nuxt (readme coming soon)
- **nuxt:** create explicit nuxt module
- **BDropdown:** do not use internal state to modify dropdown instead expose vmodel

### Features

- add in nuxt module ([1ba6298](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1ba62983649b0e55e2a8dd037b12daa07268de7c))
- **BDropdown:** do not use internal state to modify dropdown instead expose vmodel ([ebdd1ee](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ebdd1ee5c201d709463c2fbaf9d31a47b5a02fc1))
- finalize nuxt module ([4a8a106](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/4a8a1060735f8f2b4fbff37c77570fa2858f3c2f))
- **nuxt:** create explicit nuxt module ([00af3e4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/00af3e4713eea2d8098eeb2083915a9868d2231d))
- **nuxt:** remove nuxt.ts from main package & @nuxt/kit from dependencies -- use package @bootstrap-vue-next/nuxt (readme coming soon) ([00af3e4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/00af3e4713eea2d8098eeb2083915a9868d2231d))
- start nuxt package ([a04563e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a04563ee704a017184f1de6c792f789a7c725677))

### Bug Fixes

- build issues ([a04563e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a04563ee704a017184f1de6c792f789a7c725677))

### Miscellaneous Chores

- release 0.6.6 ([857f5b3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/857f5b329aac31601f380843ea69a6a0df267378))
- release 0.6.7 ([5619a7b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5619a7b087b691264aae579ebe603d4e74922afc))
