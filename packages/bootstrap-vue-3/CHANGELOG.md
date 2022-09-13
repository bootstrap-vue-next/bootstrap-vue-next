# Changelog

## [0.3.3](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.2...v0.3.3) (2022-09-13)


### Features

* adds slots to component reference docs ([1e9026b](https://github.com/cdmoro/bootstrap-vue-3/commit/1e9026b943acc0b303655801a287aaea209cdd9d))
* **b-dropdown-item:** :sparkles: Bind class attribute to the root ([f0063ef](https://github.com/cdmoro/bootstrap-vue-3/commit/f0063efa8c0744a0528ce4249ae695f69d6a5e70))
* **BNavText:** add optional text prop ([d77abc5](https://github.com/cdmoro/bootstrap-vue-3/commit/d77abc517a503bed1656d1f3ab33cce9720ac6ab))
* **BTab:** added new lazyOnce prop, The prop works similar to the lazy prop but it mounts the child component only once. ([5f4240b](https://github.com/cdmoro/bootstrap-vue-3/commit/5f4240b0eb2bae717440187241dddb95f6853ee3))
* **BTable:** added filter prop to filter the table content, added filterable prop to specify which fields should be filtered ([2e37dc1](https://github.com/cdmoro/bootstrap-vue-3/commit/2e37dc154ebb4e4b4da89da922cf30b452b641e8))
* **BTable:** added functionality to current-page prop, The prop shows a specific page of the given items when the per-page prop is passed. ([f177563](https://github.com/cdmoro/bootstrap-vue-3/commit/f177563eca1a015c90ada2be9ad9c52536845dfe))
* **BTable:** implemented per page prop ([f5d52d3](https://github.com/cdmoro/bootstrap-vue-3/commit/f5d52d3b8be8a95a33b588d76b4d0d7932063b82))
* **Btable:** sortable tables now have the sort icon added using CSS which makes it globally customizable ([0639fce](https://github.com/cdmoro/bootstrap-vue-3/commit/0639fcea30017b6576feccdc20466344a399e149))
* **BTable:** sortInternal default to true ([aac2b68](https://github.com/cdmoro/bootstrap-vue-3/commit/aac2b68f7bc8672246107c650e7c928dd336c201))


### Bug Fixes

* **BButtonGroup:** strong type prop size ([d77abc5](https://github.com/cdmoro/bootstrap-vue-3/commit/d77abc517a503bed1656d1f3ab33cce9720ac6ab))
* **BDropdown:** click event emits MouseEvent ([d77abc5](https://github.com/cdmoro/bootstrap-vue-3/commit/d77abc517a503bed1656d1f3ab33cce9720ac6ab))
* **BNavbarToggle:** click event emits MouseEvent ([d77abc5](https://github.com/cdmoro/bootstrap-vue-3/commit/d77abc517a503bed1656d1f3ab33cce9720ac6ab))
* **BNavForm:** pass submit event up ([d77abc5](https://github.com/cdmoro/bootstrap-vue-3/commit/d77abc517a503bed1656d1f3ab33cce9720ac6ab))
* **BTable:** fixed incorrect responsive-class prop name which was disabling the responsive functionality ([eb3ca5c](https://github.com/cdmoro/bootstrap-vue-3/commit/eb3ca5cf110063185a014f6d4a2eb2bcccacc3b6))
* **BTable:** Fixed sorting when sorting had no effect when trying to sort an object-formed column that includes multiple properties (ex: name: { first: 'Dickerson', last: 'Macdonald' }) ([658d2ec](https://github.com/cdmoro/bootstrap-vue-3/commit/658d2ec776775ff5137b70832128b0a2e403beed))
* **BTable:** header display changed to be inline to allow few abilties such as centering text using CSS ([caf495e](https://github.com/cdmoro/bootstrap-vue-3/commit/caf495e9e8575cc2279680b94324d86dd7cd1b59))

## [0.3.2](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.1...v0.3.2) (2022-09-09)

### Bug Fixes

- **BTable:** row.index is now correctly passed to the cell slot template ([69f4777](https://github.com/cdmoro/bootstrap-vue-3/commit/69f4777657083f30f1db5d7334daeac60b6660cc))

## [0.3.1](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.0...v0.3.1) (2022-09-07)

### Features

- **BFormFloatingLabel:** make props for text opti ([dea872d](https://github.com/cdmoro/bootstrap-vue-3/commit/dea872d674979910e0a4c3983c4453c9a062c9f3))
- **BFormInvalidFeedback:** make props for text option ([dea872d](https://github.com/cdmoro/bootstrap-vue-3/commit/dea872d674979910e0a4c3983c4453c9a062c9f3))
- **BFormText:** make props for text option ([dea872d](https://github.com/cdmoro/bootstrap-vue-3/commit/dea872d674979910e0a4c3983c4453c9a062c9f3))
- **BFormValidFeedback:** make props for text option ([dea872d](https://github.com/cdmoro/bootstrap-vue-3/commit/dea872d674979910e0a4c3983c4453c9a062c9f3))
- **BInputGroupText:** add optional text prop ([c3ba8e4](https://github.com/cdmoro/bootstrap-vue-3/commit/c3ba8e4fec28e019016f4d1db01795d12a2ebe25))
- **BModal:** emit hide and show on modal ([f478f5e](https://github.com/cdmoro/bootstrap-vue-3/commit/f478f5efc633eca63b13936a5c02e0b8baf88ef0))
- **BTable:** added busy prop logic, the prop shows a spinner and message that can be replaced through a slot template #table-busy ([8d91f6c](https://github.com/cdmoro/bootstrap-vue-3/commit/8d91f6c6fee27397ad3f552997764b3c05ca6b49))
- **BTable:** added sticky-header prop feature, according to bootstrap-vue2 docs ([899f316](https://github.com/cdmoro/bootstrap-vue-3/commit/899f3167b3db53c0403406a6efdc074a7819f122))
- **BTable:** completed the Table Item -> sticky-column feature, according to bootstrap-vue2 docs ([d493002](https://github.com/cdmoro/bootstrap-vue-3/commit/d493002e74f2a09a979ae03360e63af7ace515b4))
- **BTable:** new sticky-select prop was added, the prop converts the selection column to the sticky mode when the selectable prop is passed as true to the table ([6889dbb](https://github.com/cdmoro/bootstrap-vue-3/commit/6889dbb3a84aa71d5fbf71f6c9ba4e9bede13de4))
- **BTable:** row's \_showDetails prop logic was completed ([33f30a5](https://github.com/cdmoro/bootstrap-vue-3/commit/33f30a55eafa009d5329109cd33b4e6d60df1d2a))

### Bug Fixes

- **BCard:** bodyClass prop renamed to bodyClasses ([83f5e53](https://github.com/cdmoro/bootstrap-vue-3/commit/83f5e53bbd5686fc426681523105c0252986bc62))
- **BCard:** footerClass prop renamed to footerClasses ([83f5e53](https://github.com/cdmoro/bootstrap-vue-3/commit/83f5e53bbd5686fc426681523105c0252986bc62))
- **BCard:** headerClass renamed to headerClasses ([83f5e53](https://github.com/cdmoro/bootstrap-vue-3/commit/83f5e53bbd5686fc426681523105c0252986bc62))
- **BDropdown:** event to be MouseEvent on click ([df957f5](https://github.com/cdmoro/bootstrap-vue-3/commit/df957f51ab5403319e38034ffafada101517fd61))
- **BDropdownGroup:** rename headerClasses prop to headerClass ([3c72126](https://github.com/cdmoro/bootstrap-vue-3/commit/3c721260160970fe3898b196ae6365a67745828e))
- **BDropdownItem:** contains disabled on button ([972c452](https://github.com/cdmoro/bootstrap-vue-3/commit/972c452efe168bfcbfb926b51e47031bfed81ac0))
- **Bdropdown:** slot button-content to not render both prop text andslot ([df957f5](https://github.com/cdmoro/bootstrap-vue-3/commit/df957f51ab5403319e38034ffafada101517fd61))
- **Bdropdown:** toggleText prop given additional slot opt ([df957f5](https://github.com/cdmoro/bootstrap-vue-3/commit/df957f51ab5403319e38034ffafada101517fd61))
- **BTableContainer:** rename prop responsiveClasses to responsiveClass ([3c72126](https://github.com/cdmoro/bootstrap-vue-3/commit/3c721260160970fe3898b196ae6365a67745828e))
- **composables:** Do not spread array inside `concat` function ([f9841f5](https://github.com/cdmoro/bootstrap-vue-3/commit/f9841f511c1370a6ac09fd5eedc7648cfff91f25))
- **composables:** Spread out children from Fragment slots ([963f7a6](https://github.com/cdmoro/bootstrap-vue-3/commit/963f7a6c680a40409c0987ceb674a32cd971df84))
- **composables:** Use correct properties to check for types ([91d97b0](https://github.com/cdmoro/bootstrap-vue-3/commit/91d97b0bf2a1c34ca121147fd3e09e4453850eec))

### Performance Improvements

- **BDropdownGroup:** array.join replaced with template literal ([83f5e53](https://github.com/cdmoro/bootstrap-vue-3/commit/83f5e53bbd5686fc426681523105c0252986bc62))

### Reverts

- **83f5e53:** rename to remove 'es' at end ([3c72126](https://github.com/cdmoro/bootstrap-vue-3/commit/3c721260160970fe3898b196ae6365a67745828e))

## [0.3.0](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.14...v0.3.0) (2022-09-03)

### ⚠ BREAKING CHANGES

- **BCardFooter:** footerClass prop was removed instead use :class
- **BCardBody:** bodyClass was removed instead use :class
- **BCardHeader:** headerClass removed instead use :class
- **BCardSubTitle:** prop subtitle replaced with text
- **BCardSubTitle:** prop subTitleTag replaced with tag
- **BCardSubTitle:** prop subTitleTextVariant replace with textVariant
- **BCardFooter:** prop footer replaced with prop text
- **BCardFooter:** prop footerBgVariant replaced with bgVariant
- **BCardFooter:** prop footerBorderVariant replaced with borderVariant
- **BCardFooter:** footerHtml replaced with html
- **BCardFooter:** footerTag removed use tag
- **BCardFooter:** footerTextVariant removed use textVariant
- **BCardTitle:** prop title replaced with prop text
- **BCardTitle:** prop titleTag replaced with prop tag
- many of the components in the BCard space have props that prepend their name, for example, footerBgVariant, footerBorderVariant, footerHtml, etc. These have been replaced with each corresponding prop, without it's appended name to follow simplicity and single responsiblity.
- The event output value was changed to an object with 'sort[string]' and 'desc[boolean]' for better ts type support.

### Features

- Added 'tag' prop to BContainer ([a4363b4](https://github.com/cdmoro/bootstrap-vue-3/commit/a4363b482fff78a8b3edf87c06b1a857ffc952a1))
- Added Btable select-head prop to show an extra Head & Cell to the table, Added selectHead & selectCell slots to customize the selection extra head & cells. ([9ecc735](https://github.com/cdmoro/bootstrap-vue-3/commit/9ecc735d99372a8cb5c82570c3c125c1df843b7e))
- Added BTable selectable prop that adds the selection functionality to the table, Added select-mode prop with value of [multi, single, range] to expend the table selection can be used with. ([9ecc735](https://github.com/cdmoro/bootstrap-vue-3/commit/9ecc735d99372a8cb5c82570c3c125c1df843b7e))
- added titleCase utility to stringUtils ([60aa7ff](https://github.com/cdmoro/bootstrap-vue-3/commit/60aa7ff1bdd2f295915a39864e3cf76119b07da1))
- **BCardBody:** bodyClass was removed instead use :class ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardBody:** can also use prop text instead of default slot ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardBody:** prop overlay actually causes affect ([d998f7b](https://github.com/cdmoro/bootstrap-vue-3/commit/d998f7ba7fc8332fc0b102f200b709e1f5cae22d))
- **BCardFooter:** footerClass prop was removed instead use :class ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardFooter:** footerHtml replaced with html ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardFooter:** footerTag removed use tag ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardFooter:** footerTextVariant removed use textVariant ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardFooter:** prop footer replaced with prop text ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardFooter:** prop footerBgVariant replaced with bgVariant ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardFooter:** prop footerBorderVariant replaced with borderVariant ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardHeader:** headerClass removed instead use :class ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- BCardImg includes lazy ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardSubTitle:** prop subtitle replaced with text ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardSubTitle:** prop subTitleTag replaced with tag ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardSubTitle:** prop subTitleTextVariant replace with textVariant ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardText:** expand to include dynamic tag ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardText:** expand to include prop text ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardTitle:** prop title replaced with prop text ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BCardTitle:** prop titleTag replaced with prop tag ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))
- **BDropdownText:** Can use text prop in place of slot ([1067d4f](https://github.com/cdmoro/bootstrap-vue-3/commit/1067d4ff74a94d59787f4e9246b8ae6c0b9812c2))
- BTable selection-variant prop was added, gives the ability to use bootstrap's colors as bg to the selected rows ([b4a9d4b](https://github.com/cdmoro/bootstrap-vue-3/commit/b4a9d4b82fea63686453ad4ec47993ae0bc0a671))
- **BTable:** added clearSelected method that unselect all of the selected items and notify the updates through rowUnselectedand selection events ([1b38e4c](https://github.com/cdmoro/bootstrap-vue-3/commit/1b38e4c92c4d70efe71b3acdca5b6068d51d62c4))
- **BTable:** added head-clicked event functionality, according to the docs of vue2-bootstrap ([c3adc35](https://github.com/cdmoro/bootstrap-vue-3/commit/c3adc35929bfd577eba4761c5916061746495a4a))
- **BTable:** added row-clicked event functionality, according to the docs of vue2-bootstrap ([a975610](https://github.com/cdmoro/bootstrap-vue-3/commit/a97561046b2b5b940ac32f716b4611f3f812d6bd))
- **BTable:** added row-unhovered events functionality, according to the docs of vue2-bootstrap ([86a27fc](https://github.com/cdmoro/bootstrap-vue-3/commit/86a27fc90f62c39a3bbb9af3744fd7071d36ccb8))
- **BTable:** added selectAllRows method that select all of the give items when selectable prop is 'true' ([1cce4cd](https://github.com/cdmoro/bootstrap-vue-3/commit/1cce4cd5478e09a95e71ab028aa71624e1730c29))
- **BTable:** added selectRow and unselectRow methods, both methods take a number input which is the index of the item to either select or unselect its row. ([48c4291](https://github.com/cdmoro/bootstrap-vue-3/commit/48c4291b5eb76af82558dfad4126f1134858e884))
- **BTable:** Fields keys now appear in the headers when the given field has no Label. ([7fa842f](https://github.com/cdmoro/bootstrap-vue-3/commit/7fa842f4d31b365815266c8fe73d2265e59cc689))
- standardize props in multiple comps ([e86b6e0](https://github.com/cdmoro/bootstrap-vue-3/commit/e86b6e089b53005079b41c77e69bd1c9979f0afe))

### Bug Fixes

- **#613:** separate computed breaks reactivity ([3534780](https://github.com/cdmoro/bootstrap-vue-3/commit/3534780bfe22114dee615ad3d723db171b6965cc))
- added few missing props to the BTable.d.ts file ([9ecc735](https://github.com/cdmoro/bootstrap-vue-3/commit/9ecc735d99372a8cb5c82570c3c125c1df843b7e))
- **BButton:** import child component BSpinner ([3cf3524](https://github.com/cdmoro/bootstrap-vue-3/commit/3cf3524f287d1069e1a29f252f4026eecfcc1467))
- **BButton:** loading checks against resolved boolean ([3cf3524](https://github.com/cdmoro/bootstrap-vue-3/commit/3cf3524f287d1069e1a29f252f4026eecfcc1467))
- **BCard:** footer border variant uses footer prop ([1defb70](https://github.com/cdmoro/bootstrap-vue-3/commit/1defb70a22d30004549a90e54ae75cef70841105))
- **BTable:** fix(BTable): fixed 'selection' event not being emitted when selecting the row by index through 'selectRow' method. ([54aa0c2](https://github.com/cdmoro/bootstrap-vue-3/commit/54aa0c272abb14c89892658a39af5941ba6d3998))
- **BTable:** fixes 'sorted' event not emitted with fully synced values ([77fb7f4](https://github.com/cdmoro/bootstrap-vue-3/commit/77fb7f4d6914b459b7b3dde2e9d1b093df66ceb4))
- **BTable:** fixes sorted event not being emitted with the correct values. ([e6a72de](https://github.com/cdmoro/bootstrap-vue-3/commit/e6a72deb5c544b0cbd4cdd4a2d7c94104ac59800))
- **BTable:** Hotfix to selectAllRows method, Calling the method now emits the selection events correctly. ([40b30a0](https://github.com/cdmoro/bootstrap-vue-3/commit/40b30a01922a437921764a4e5f004b6182a1c184))
- **BTable:** include prop field in slot cell ([012289d](https://github.com/cdmoro/bootstrap-vue-3/commit/012289d58c89b6b60d3268699f4ef9ac21c09c0e))
- **carousel.spec.ts:** cannot use internal method ([cadbca6](https://github.com/cdmoro/bootstrap-vue-3/commit/cadbca6c660d3d20bd09181108afcfa922c3ee53))
- include prop field in slot cell. ([e4850c7](https://github.com/cdmoro/bootstrap-vue-3/commit/e4850c7e40a5d4520f124d01f11809778dcc4b73))
- **Option:** prevent casting null to empty string ([3cf3524](https://github.com/cdmoro/bootstrap-vue-3/commit/3cf3524f287d1069e1a29f252f4026eecfcc1467))
- replaced BTable emits definition array with a typescript interface for better type support ([9ecc735](https://github.com/cdmoro/bootstrap-vue-3/commit/9ecc735d99372a8cb5c82570c3c125c1df843b7e))
- **Table:** update field labeled key to use titleCase from stringUtils ([60aa7ff](https://github.com/cdmoro/bootstrap-vue-3/commit/60aa7ff1bdd2f295915a39864e3cf76119b07da1))
- update date type of few of BTable props ([24292ba](https://github.com/cdmoro/bootstrap-vue-3/commit/24292ba3bd375d3e552d84958509ae3a4c64b422))
- updated the data type of a few of BTable props ([7992762](https://github.com/cdmoro/bootstrap-vue-3/commit/799276299bd3f09648bc88eb62b9db5b464d6e44))

### Miscellaneous Chores

- release 0.2.15 ([2d53fbb](https://github.com/cdmoro/bootstrap-vue-3/commit/2d53fbbb6596a9a1302d3bc3a32a1b55708eb4e3))
- release 0.3.0 ([6b6ea80](https://github.com/cdmoro/bootstrap-vue-3/commit/6b6ea80775b533430fc9b8ca25d4ab9837241dcd))

## [0.2.14](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.13...v0.2.14) (2022-08-30)

### ⚠ BREAKING CHANGES

- BButton content is now wrapped into an inline-block div

### Features

- added BButton #loading slot to replace the standard spinner with your own creative element. ([dffb4b0](https://github.com/cdmoro/bootstrap-vue-3/commit/dffb4b0201dce101c8e4068f4a9415c452bf9010))
- added BButton loading-mode, loading modes are [inline, fill]. ([dffb4b0](https://github.com/cdmoro/bootstrap-vue-3/commit/dffb4b0201dce101c8e4068f4a9415c452bf9010))
- **BButton:** add loading prop that makes spinner ([a91df8b](https://github.com/cdmoro/bootstrap-vue-3/commit/a91df8ba1347f72e9c0f9197f85c613d602eebb0))
- **BModal:** lazily load entire modal when prop lazy ([a91df8b](https://github.com/cdmoro/bootstrap-vue-3/commit/a91df8ba1347f72e9c0f9197f85c613d602eebb0))

### Bug Fixes

- expand classes prop object to null & undefine ([9fc780b](https://github.com/cdmoro/bootstrap-vue-3/commit/9fc780ba9c0f30536b89054308fad79ee9e474f2))
- explicit checks for dynamic classes ([ada6fe8](https://github.com/cdmoro/bootstrap-vue-3/commit/ada6fe8228575c9091a4433404ba3692b909608b))
- strongly type prop _class_ in various comps ([ada6fe8](https://github.com/cdmoro/bootstrap-vue-3/commit/ada6fe8228575c9091a4433404ba3692b909608b))

### Miscellaneous Chores

- release 0.2.14 ([cec0a3c](https://github.com/cdmoro/bootstrap-vue-3/commit/cec0a3cc70385d434bb5ee6112aa4f03ea617b52))

## [0.2.13](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.12...v0.2.13) (2022-08-29)

### Bug Fixes

- **\_table.scss:** duplicate rules ([9235143](https://github.com/cdmoro/bootstrap-vue-3/commit/92351435c82f8d1df17bee758704485e96057a62))
- **#592:** update modelValue before emit input ([84fe96d](https://github.com/cdmoro/bootstrap-vue-3/commit/84fe96da73211bcf22795512e17033a3b2a242fb))
- **BButton:** prop pressed is default false was null ([71cbd15](https://github.com/cdmoro/bootstrap-vue-3/commit/71cbd15947b511041716cb64140d9315cb996753))
- **BButton:** prop rel is default undefined was null ([71cbd15](https://github.com/cdmoro/bootstrap-vue-3/commit/71cbd15947b511041716cb64140d9315cb996753))
- **BButton:** prop type is strongly typed ButtonType ([71cbd15](https://github.com/cdmoro/bootstrap-vue-3/commit/71cbd15947b511041716cb64140d9315cb996753))
- **BModal:** emit shown always emits value Event ([07fba08](https://github.com/cdmoro/bootstrap-vue-3/commit/07fba08a931d1da34be915b06524f684d65a287b))
- **BModal:** use slot ([9235143](https://github.com/cdmoro/bootstrap-vue-3/commit/92351435c82f8d1df17bee758704485e96057a62))
- **BTable:** classes is not array of object ([9235143](https://github.com/cdmoro/bootstrap-vue-3/commit/92351435c82f8d1df17bee758704485e96057a62))
- **BTableContainer:** unnecessary assignment ([9235143](https://github.com/cdmoro/bootstrap-vue-3/commit/92351435c82f8d1df17bee758704485e96057a62))
- **BTable:** v-for missing :key ([07fba08](https://github.com/cdmoro/bootstrap-vue-3/commit/07fba08a931d1da34be915b06524f684d65a287b))
- field variant undefined rather than empty str ([07fba08](https://github.com/cdmoro/bootstrap-vue-3/commit/07fba08a931d1da34be915b06524f684d65a287b))
- **ignore:** test commit please ignore ([ef8b9e4](https://github.com/cdmoro/bootstrap-vue-3/commit/ef8b9e4b5529cfe014f821a6742f0d71930163e2))
- **ItemHelper:** unnecessary console.log ([9235143](https://github.com/cdmoro/bootstrap-vue-3/commit/92351435c82f8d1df17bee758704485e96057a62))

### Reverts

- test commit still ignore ([dd285ea](https://github.com/cdmoro/bootstrap-vue-3/commit/dd285eaa87b51147f78de2dc76c6d613a1d452e6))

## [0.2.12](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.11...v0.2.12) (2022-08-26)

### Features

- BImg add lazy prop ([6d2b03e](https://github.com/cdmoro/bootstrap-vue-3/commit/6d2b03e376737a192e014b75223688f4c8dd4063))
- formcheckboxgroup modelvalue sorts by option ([c9b4b75](https://github.com/cdmoro/bootstrap-vue-3/commit/c9b4b756c969b93747081213fd1675e5aec6342b))

### Bug Fixes

- ariaRole replaced with ariaLabel on Groups ([4d0c242](https://github.com/cdmoro/bootstrap-vue-3/commit/4d0c242d01bb97dca95cacaaff8dcce01786df2d))
- bbreadcrumbitem aria-current prop was object ([68a1494](https://github.com/cdmoro/bootstrap-vue-3/commit/68a149460d90cee73f5f5c74bbc3fc6ad727f228))
- export BREADCRUMB_SYMBOL for tests to use ([68a1494](https://github.com/cdmoro/bootstrap-vue-3/commit/68a149460d90cee73f5f5c74bbc3fc6ad727f228))

## [0.2.11](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.10...v0.2.11) (2022-08-25)

### Features

- **#585:** add noGutter prop to BRow ([66425bd](https://github.com/cdmoro/bootstrap-vue-3/commit/66425bda520096cda5d3f61488df74b737c712bb))
- BCloseButton dynamic ariaLabel prop ([3891fb5](https://github.com/cdmoro/bootstrap-vue-3/commit/3891fb526a5a5d6bbf4a65aee665635f01f74127))

### Bug Fixes

- BToaster direct import of BToast ([3891fb5](https://github.com/cdmoro/bootstrap-vue-3/commit/3891fb526a5a5d6bbf4a65aee665635f01f74127))
- ensure all components import their children ([3d7d1e7](https://github.com/cdmoro/bootstrap-vue-3/commit/3d7d1e7e3caa7e6fb0d163bd6352d7f9b0be9a35))
- navitemdropdown has nav classes ([4547f17](https://github.com/cdmoro/bootstrap-vue-3/commit/4547f1718c545625335622794c34106f621ce064))
- specific gx/y classes can coexist with noGutt ([3c00885](https://github.com/cdmoro/bootstrap-vue-3/commit/3c00885b9245bcc78942fc29fc0e5977e10cdc80))
- table comps with incorrect variant prop ([e27eca4](https://github.com/cdmoro/bootstrap-vue-3/commit/e27eca447f5abee929c64129c81abfbdbaac1026))

## [0.2.10](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.9...v0.2.10) (2022-08-22)

### Bug Fixes

- BCol classes persisting after prop change ([b8ed3db](https://github.com/cdmoro/bootstrap-vue-3/commit/b8ed3dbb0840a10ba80f731a3aa53973f78a815e))
- BOffcanvas dynamic aria-label on child button ([9b5e0fc](https://github.com/cdmoro/bootstrap-vue-3/commit/9b5e0fc7950c26963098a9885b48f3865fe040da))
- drop{type} props are camelCase ([a0bf0ac](https://github.com/cdmoro/bootstrap-vue-3/commit/a0bf0ac9e6cb9fa74987a4da3137919b932fe552))

### Reverts

- **a0bf0ac:** dropup, etc is valid bootstrap ([b542d99](https://github.com/cdmoro/bootstrap-vue-3/commit/b542d9939b2d6eeb4afc7a9b1421bd12d81e0f9f))

## [0.2.9](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.8...v0.2.9) (2022-08-18)

### Features

- add bnavitem/form/text ([70a300c](https://github.com/cdmoro/bootstrap-vue-3/commit/70a300c912ebc512771bfad122740cd59e2324c3))
- bnavbartoggle can use array of ids ([3a92aff](https://github.com/cdmoro/bootstrap-vue-3/commit/3a92aff7390c4e37b1fa4ca1a6525041d3c48b48))
- create courtesy container prop ([4a03357](https://github.com/cdmoro/bootstrap-vue-3/commit/4a03357e2fdb5d835f8d10df3974c474d83f30e1))
- finish bnavbartoggle and navitem ([b8ebc29](https://github.com/cdmoro/bootstrap-vue-3/commit/b8ebc2923dac2d02b255d0ef61970e8988adb7e6))
- finish up more nav components ([a75b388](https://github.com/cdmoro/bootstrap-vue-3/commit/a75b388ffb9b37af61efffdeae438372ba5e697b))

### Bug Fixes

- bnavitem dts build error ([17302db](https://github.com/cdmoro/bootstrap-vue-3/commit/17302db22b41e091e440a241da222e8c3bc57a71))
- emits click when target is undefined ([7191128](https://github.com/cdmoro/bootstrap-vue-3/commit/71911283c0e90c099b16e635c65b9e90bc27bf63))
- explicit import to BForm ([2a054be](https://github.com/cdmoro/bootstrap-vue-3/commit/2a054bea638cfa2ccb9de291782c2218174d7006))
- further fix 289c168 to extend to Booleanish ([1ee080a](https://github.com/cdmoro/bootstrap-vue-3/commit/1ee080aec0f853d69b546ec478515fd6ce836b62))
- include explicit imports of components ([f4767ec](https://github.com/cdmoro/bootstrap-vue-3/commit/f4767ecf1e49e5bd82e03b1912381c3b019bf19f))
- no possible way to not have navbar-expand ([4a03357](https://github.com/cdmoro/bootstrap-vue-3/commit/4a03357e2fdb5d835f8d10df3974c474d83f30e1))
- prop type replaced with prop dark Booleanish ([329cc3b](https://github.com/cdmoro/bootstrap-vue-3/commit/329cc3bab4eb4331c73a8125a1f11d69cfc92911))
- props not available to template ([7a97401](https://github.com/cdmoro/bootstrap-vue-3/commit/7a974019f4f86cf565760d20e673e0a9bf3b3faa))
- remove offsetParent prop ([3c4ac6a](https://github.com/cdmoro/bootstrap-vue-3/commit/3c4ac6abccc660d6221dcfdbd655dc1aa1099a2f))
- tests causing breaking build ([17302db](https://github.com/cdmoro/bootstrap-vue-3/commit/17302db22b41e091e440a241da222e8c3bc57a71))
- unify aria-invalid behavior ([de65efe](https://github.com/cdmoro/bootstrap-vue-3/commit/de65efefc554b02d3c63faf6a34d16e0784c2b4f))
- warn proclaiming string not allowed in some ([289c168](https://github.com/cdmoro/bootstrap-vue-3/commit/289c16877f15fb2608c79947fd23257c3d6bc16a))

## [0.2.8](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.7...v0.2.8) (2022-08-10)

### Bug Fixes

- [#550](https://github.com/cdmoro/bootstrap-vue-3/issues/550) remove debugging leftovers ([2325396](https://github.com/cdmoro/bootstrap-vue-3/commit/2325396be41b8400d5e4f70af04b50a3628e9143))

## [0.2.7](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.6...v0.2.7) (2022-08-10)

### Bug Fixes

- [#540](https://github.com/cdmoro/bootstrap-vue-3/issues/540) prop w/ no value empty string is true ([203b42b](https://github.com/cdmoro/bootstrap-vue-3/commit/203b42b09b7b815c53c52ac506488396149c7149))
- [#547](https://github.com/cdmoro/bootstrap-vue-3/issues/547) use reactive items for composables ([8a002ee](https://github.com/cdmoro/bootstrap-vue-3/commit/8a002ee6c59011757f2184d2ef5771b146836b58))
- getClasses and related composables ([3e2d617](https://github.com/cdmoro/bootstrap-vue-3/commit/3e2d6177726f5105ea9b50bc5bd9a4ce1aed01a4))
- useId not reactive if id is dynamic ([7ed7c52](https://github.com/cdmoro/bootstrap-vue-3/commit/7ed7c524a06755b69169176bdd22d5bced487bce))

## [0.2.6](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.5...v0.2.6) (2022-08-07)

### Features

- add a booleanish type predicate func ([89d9399](https://github.com/cdmoro/bootstrap-vue-3/commit/89d93990fee92feb6256de7b31a8be6023087ef0))
- add bformselectoption booleanish props optio ([90f211d](https://github.com/cdmoro/bootstrap-vue-3/commit/90f211d8da61c4ceb68b3f37ee454cb26b366fdb))
- add blistgroup/ booleanish prop options ([c8d266c](https://github.com/cdmoro/bootstrap-vue-3/commit/c8d266c80ba380f267f5e7209de26f8afd7c338e))
- add booleanish option to bcarousel/ ([fc52ea2](https://github.com/cdmoro/bootstrap-vue-3/commit/fc52ea2e4199c4a24e374556fdeefb5c9bbb54f1))
- add booleanish prop option to bkskeleton/ ([b22b2b7](https://github.com/cdmoro/bootstrap-vue-3/commit/b22b2b7c0074eb31edc82289c32eec89b2f86f31))
- add booleanish prop options to all remaining ([4fba7e2](https://github.com/cdmoro/bootstrap-vue-3/commit/4fba7e241f43860ade68d190200cecfa6972e8c7))
- add booleanish to BCard/ ([a37b92b](https://github.com/cdmoro/bootstrap-vue-3/commit/a37b92b306052df7f1c2d422daff0e4534ea250b))
- add booleanish to bpagination ([16c3c02](https://github.com/cdmoro/bootstrap-vue-3/commit/16c3c029cae7ebadeadb167aa1a41ced2150bf17))
- bdropdown/ add booleanish props ([c713ca3](https://github.com/cdmoro/bootstrap-vue-3/commit/c713ca34fa3dbb6f7c9a46599dcb1b381d584e1c))
- bform/ add booleanish props option ([f46c010](https://github.com/cdmoro/bootstrap-vue-3/commit/f46c010a19229c393fd78912c18298b10e87d78d))
- bformcheckbox add booleanish props option ([c29ed46](https://github.com/cdmoro/bootstrap-vue-3/commit/c29ed461a707e2ca3066d1e59dae20c253fb73ed))
- bformgroup add booleanish prop options ([267b310](https://github.com/cdmoro/bootstrap-vue-3/commit/267b310bd97b4119cc7dfa7c399bd9319aa79764))
- bformradio add booleanish prop options ([c16c741](https://github.com/cdmoro/bootstrap-vue-3/commit/c16c7411f429571a1c97d8e14d87bbe236554f80))
- bformtag/ booleanish prop options ([6859d43](https://github.com/cdmoro/bootstrap-vue-3/commit/6859d43df60c5af110dbcb49de23f230b2c3c8f3))
- bformtextarea/ booleanish prop options ([8a758f8](https://github.com/cdmoro/bootstrap-vue-3/commit/8a758f80172e8a126b38647e716da757c5590b1f))
- binputgroup/ booleanish prop options ([793fffa](https://github.com/cdmoro/bootstrap-vue-3/commit/793fffa437d7e98969d9dfd2de2c9e3239e1fbb8))
- blink uses booleanish prop options ([8094cc9](https://github.com/cdmoro/bootstrap-vue-3/commit/8094cc93eb18b72c3851a73f503f51272798c5d3))
- bnav/ add booleanish prop options ([c3a1060](https://github.com/cdmoro/bootstrap-vue-3/commit/c3a106035a4863dbe8060a1db9b5128683cfe2fc))
- boverlay add booleanish prop option ([3f62a20](https://github.com/cdmoro/bootstrap-vue-3/commit/3f62a2074d47428ca7216a7e0642fe46c8318ec0))
- BProgress/ add booleanish prop option ([88cffc7](https://github.com/cdmoro/bootstrap-vue-3/commit/88cffc7fa7f8cdda90ab8fc966185b1403e03a97))
- btab/ booleanish prop options ([497b85c](https://github.com/cdmoro/bootstrap-vue-3/commit/497b85cfadaf656188f7ba58fc6a769123bc2d9a))
- btable/ add booleanish prop options ([decf141](https://github.com/cdmoro/bootstrap-vue-3/commit/decf1419de7fb273d388294a27bf1c03963097b3))

### Bug Fixes

- binputgroup/ isText false by default ([793fffa](https://github.com/cdmoro/bootstrap-vue-3/commit/793fffa437d7e98969d9dfd2de2c9e3239e1fbb8))
- explicit set to undefined causes type loss ([c12de9d](https://github.com/cdmoro/bootstrap-vue-3/commit/c12de9dc1b0d6e7ab9d3c136d325ffeace87aff3))
- one more missing explicit undefined ([ef7cf42](https://github.com/cdmoro/bootstrap-vue-3/commit/ef7cf4201fb1d84d13c73968b059933f61a2eef3))

### Reverts

- **3f62a20:** fix undefined boolean behavior ([d03c097](https://github.com/cdmoro/bootstrap-vue-3/commit/d03c0971b5e645b5c0b5071f6f935046fd7345c4))

## [0.2.5](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.4...v0.2.5) (2022-08-04)

### Features

- add booleanish to bbuttongroup ([e9256c1](https://github.com/cdmoro/bootstrap-vue-3/commit/e9256c145adca1f653fc49f5da6895e236e2c30e))
- add booleanish to more bbutton\* ([a4a72ea](https://github.com/cdmoro/bootstrap-vue-3/commit/a4a72ea12db6d14e2df18d266baf34838e2902a9))
- bbutton booleanish added ([83785cc](https://github.com/cdmoro/bootstrap-vue-3/commit/83785cc458ea7c574e9bd83054e5d7a0119bda43))

### Bug Fixes

- add @popperjs/core to peerDependencies ([821b3a8](https://github.com/cdmoro/bootstrap-vue-3/commit/821b3a8853279ff3391e4c87adb305414bf52ac4))
- **BButton:** BButton link props non-reactive ([99d271f](https://github.com/cdmoro/bootstrap-vue-3/commit/99d271ff09c6f5ae5ffcd04ff7275adf70ab17a8))

## [0.2.4](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.3...v0.2.4) (2022-08-03)

### Bug Fixes

- **BNavbarBrand:** component fixed and finished ([626cb2c](https://github.com/cdmoro/bootstrap-vue-3/commit/626cb2cfb6d41c85c18a5c707ffdd3998f92dba1))

## [0.2.3](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.2...v0.2.3) (2022-08-03)

### Bug Fixes

- test commit force workflows ([2d2efae](https://github.com/cdmoro/bootstrap-vue-3/commit/2d2efaed85eee3a3be677f0b8d3d4062b0293f02))
- test commit force workflows ([9ff64d7](https://github.com/cdmoro/bootstrap-vue-3/commit/9ff64d761950bb93d3a8fd8a353374f2e1c7f16b))
- test commit force workflows ([b9ccf0b](https://github.com/cdmoro/bootstrap-vue-3/commit/b9ccf0b5de486303c008dfefc524760ec49681f5))
- test commit force workflows ([e2fb5e9](https://github.com/cdmoro/bootstrap-vue-3/commit/e2fb5e928fae5d9b284fc9ed7b3a4c35f29bbcc9))
- test commit force workflows ([a3cefbd](https://github.com/cdmoro/bootstrap-vue-3/commit/a3cefbda5da75d16d5e69da9a64c00c7a9e046c7))

### Reverts

- changelog accidental changes ([c04df8b](https://github.com/cdmoro/bootstrap-vue-3/commit/c04df8b8c78037030a10a254894213049fc802e9))
- previous test commit bad additions ([2838d07](https://github.com/cdmoro/bootstrap-vue-3/commit/2838d070fdbf7442b46e0da20f481d179da23f39))

## [0.2.2](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.1...v0.2.2) (2022-08-02)

### Features

- bnav components ([17baaf2](https://github.com/cdmoro/bootstrap-vue-3/commit/17baaf2adb0d8dd10a79c5a8a2611437acdf34ef))

### Bug Fixes

- breaking test suite ([9e1a1d8](https://github.com/cdmoro/bootstrap-vue-3/commit/9e1a1d84014d5b4ca7954e344c02f1fd39ba637d))

## [0.2.1](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.2.0...v0.2.1) (2022-08-02)

### ⚠ BREAKING CHANGES

- vue considered peerDependency

### Miscellaneous Chores

- vue considered peerDependency ([197ae39](https://github.com/cdmoro/bootstrap-vue-3/commit/197ae390767d4db867d1a39abe29ad475d36c34f))

## [0.2.0](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.1.21...v0.2.0) (2022-08-01)

### Features

- use pnpm and workspaces, dev duplicate ([bbc7312](https://github.com/cdmoro/bootstrap-vue-3/commit/bbc73120dd7bd29d62a3c44a751375accfdb13c1))

### Bug Fixes

- **#505:** move import into script setup ([d2ee360](https://github.com/cdmoro/bootstrap-vue-3/commit/d2ee36034a7ba0c59c02574b9c2ca51b38a5dde7))
- remove duplicate builtin script ([48c6ac4](https://github.com/cdmoro/bootstrap-vue-3/commit/48c6ac44d2752d6bbc924a724950a1ce20f9e7b6))

### Reverts

- add back in app.vue in /package/bootstrap\* ([9e80d24](https://github.com/cdmoro/bootstrap-vue-3/commit/9e80d24dc214eb23304cad8a800e48ea929890ef))

### Miscellaneous Chores

- release 0.2.0 ([c43ece7](https://github.com/cdmoro/bootstrap-vue-3/commit/c43ece7390c25706e097004eeb4cc3525c71f6af))
