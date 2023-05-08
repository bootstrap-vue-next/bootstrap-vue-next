# Changelog

## [0.8.11](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.10...v0.8.11) (2023-05-08)


### Bug Fixes

* **BCollapse:** auto close only if inside a navbar ([31fd586](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/31fd5860ba91dce96918de65bf60ba331125c949))

## [0.8.10](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.9...v0.8.10) (2023-05-06)


### Bug Fixes

* **BModal:** defineExpose({show, hide}) fixes [#1068](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1068) ([8cd8abf](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/8cd8abf11d5c512763739b8b5e14ab36d68880b2))
* **BOverlay:** 'blur' being confused with window.blur, when it should be using props.blur ([713d692](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/713d692ae1279d0f6e5be7c0feb058f4e685eb90))
* update btable selection behavior to match original component ([d5e8394](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d5e83945b530a7414b49dc8418f694df7ba93a4b))

## [0.8.9](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.8...v0.8.9) (2023-05-03)


### Bug Fixes

* **carousel:** duplicate div with slots ([68e3b61](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/68e3b61334e99a592002f31f75ab8f5c20066846))
* **carousel:** v-for on transition ([68e3b61](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/68e3b61334e99a592002f31f75ab8f5c20066846))
* **package.json:** missing types from exports ([68e3b61](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/68e3b61334e99a592002f31f75ab8f5c20066846))

## [0.8.8](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.7...v0.8.8) (2023-04-30)


### Bug Fixes

* **BModal:** multiple open modals and performance issues ([02b9ac8](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/02b9ac8c3659889efe6b8a6aa70197d25ad3d3d6))

## [0.8.7](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.6...v0.8.7) (2023-04-25)


### Features

* **BButton:** add prop block ([f5f1cca](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/f5f1ccaf16dc2492a2f41840c5d30efb0d44523e))
* update vueuse ([2745f9b](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/2745f9bef558a5c510d644874226907a4dd9286d))

## [0.8.6](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.5...v0.8.6) (2023-04-19)


### Bug Fixes

* remove b-table item prop mutation by pagination ([89cffb8](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/89cffb895de011314a35480cd1bd673fa32ebab4))

## [0.8.5](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.4...v0.8.5) (2023-04-18)


### Bug Fixes

* **BDropdownItem:** add attrs when no to props is present ([fe12588](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/fe12588a1879328c4ab960449fbfc9668cc7321d))
* **BFormTags:** split on separator before adding tag ([2b90c58](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/2b90c5822a172dcc66dd734a361989f60cf02b70))
* remove last of InputSize ([7a04e47](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/7a04e4706192cb34f67e24c96a73a56ff05f52bb))
* standardize Size & remove InputSize. Let sizing defaults match bootstrap-vue fixes [#1041](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1041) ([8c81416](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/8c81416dfd422e8a1a6d323f7aa72627df60976d))

## [0.8.4](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.3...v0.8.4) (2023-04-12)


### Features

* **BFormGroup:** remove mb-3 class being set on row fixes [#370](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/370) ([f091df5](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/f091df5c09108aefe4027ad40bc410be63219a6f))

## [0.8.3](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.2...v0.8.3) (2023-04-12)


### Features

* **BModal:** add class modal-open to body when modal is open fixes [#976](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/976) ([a3aa36f](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a3aa36fc0d5028bae404ca5575e74606a9e9e17a))
* **Common_input_props:** add null as an option fixes [#1015](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1015) ([a3aa36f](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a3aa36fc0d5028bae404ca5575e74606a9e9e17a))
* **Group Items, [select, checkbox etc]:** add null option to value/unchecked value/modelValue fixes # [#962](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/962) ([a3aa36f](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a3aa36fc0d5028bae404ca5575e74606a9e9e17a))
* **state:** add null as an option to "state" props, make their default null fixes [#807](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/807) ([a3aa36f](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a3aa36fc0d5028bae404ca5575e74606a9e9e17a))

## [0.8.2](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.1...v0.8.2) (2023-04-11)


### Bug Fixes

* **BFormCheckboxGroup & BFormRadioGroup:** groups not emitting their change & input events fixes [#1022](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1022) ([33b75e2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/33b75e2bb2838868d73e6b67c78f3ffbe4f65be9))
* **BFormCheckboxGroup:** emitting update:modelValue correctly as it didn't show a reactive change ([33b75e2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/33b75e2bb2838868d73e6b67c78f3ffbe4f65be9))
* **BFormRadio:** modelValue never being set back to false when radio group changes ([33b75e2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/33b75e2bb2838868d73e6b67c78f3ffbe4f65be9))
* **BFormRadio:** value not being assigned correctly when value === 0 ([33b75e2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/33b75e2bb2838868d73e6b67c78f3ffbe4f65be9))

## [0.8.1](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.8.0...v0.8.1) (2023-04-10)


### Features

* **BAlert:** add closeVariant prop ([bd0c9e2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bd0c9e2e8a3c7568fcb106ef2b7dcbb17dbd3aa1))
* **BFormRadio & BFormCheckbox:** external controls through v-model when in a group will cause parentData to update on their changes ([9a8139f](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/9a8139f2c4ca7371a3462813b2caa7ecda254690))
* **BReadcrumbItemObject:** uses RouteLocationRaw for 'to' ([9a8139f](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/9a8139f2c4ca7371a3462813b2caa7ecda254690))
* export directive vBModal fixes [#1005](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1005) ([7aa0abd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/7aa0abd21cb88a20e05410dc4bb364eb964a6a3e))


### Bug Fixes

* $attrs explicit inheritance on single root components fixes [#1010](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1010) ([0de3a7c](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/0de3a7ccf8127ec411071997c316d6f5035379c5))
* **BFormCheckbox & BFormRadio:** size & buttonVariant is initially undefined, but has a default in class usage -- this allows for you to use parentData & also overwrite parentData when you want one specific to have size/buttonVariant fixes [#1012](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1012) ([590a9fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/590a9fda496334d8f9c5d43235cbd37a263f25bc))
* **BFormRadio & BFormCheckbox:** nextTick the change emit... This was being emitted before the emit update, causing odd behavior fixes [#1011](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1011) ([590a9fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/590a9fda496334d8f9c5d43235cbd37a263f25bc))
* **BFormRadioGroup:** set default modelValue to null. Fixes [#1003](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1003) ([1e196fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/1e196fdf272664b5426a22e95f7923ecff757b8a))
* **BFormTags:** shouldRemoveOnDelete being set in onMounted cb, causing a false value in between the time of being onMounted, and after the onMounted cb finishes ([590a9fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/590a9fda496334d8f9c5d43235cbd37a263f25bc))
* **BModal:** buttonVariants with incorrect type as ColorVariant, when they should be ButtonVariant ([bd0c9e2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bd0c9e2e8a3c7568fcb106ef2b7dcbb17dbd3aa1))
* **BModal:** isActive default value is modelValue, rather than false -&gt; (then onMounted) is set to modelValue --- elimintating a 'waiting issue' of being set to false, then onMounted set to it's correct value ([590a9fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/590a9fda496334d8f9c5d43235cbd37a263f25bc))
* **BModal:** set focus when initial modelValue is true ([590a9fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/590a9fda496334d8f9c5d43235cbd37a263f25bc))
* **BOffcanvas:** focus not being applied at correct times -- should be focused after the animation, (during the animation, it would not apply focus) ([590a9fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/590a9fda496334d8f9c5d43235cbd37a263f25bc))
* **BOffcanvas:** isActive being set in onMounted cb, as to be in the wrong state in between onMounted and the finishing of the onMounted cb ([590a9fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/590a9fda496334d8f9c5d43235cbd37a263f25bc))
* circumvent 'activeValue' on group items and replace it with direct modelValue updates fixes [#1009](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1009) ([1e196fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/1e196fdf272664b5426a22e95f7923ecff757b8a))
* expose BTable refresh method ([cb10d72](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/cb10d7261a9d69a0c86ccf305ef2d40f3bf0303b))
* precision typo ([37351cf](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/37351cf14441bc36c00cdbb9bbd5f78fce508382))
* remove onUnmounted methods from group items fixes [#1007](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/1007) ([1e196fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/1e196fdf272664b5426a22e95f7923ecff757b8a))
* **useFormCheck/getClasses:** class form-control-{size} getting incorrectly applied when value is a button fixes [#857](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/857) ([e8219f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/e8219f26839a33c4be8a71fe990bca0e47f77e6e))
* **useFormCheck/getGroupClasses:** don't apply btn-group-vertical when not buttons ([4cdad44](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4cdad4429d6e98de5f65eda77bd716b145885581))


### Reverts

* **BFormSelect:** don't change BFormSelect just yet. ([a21156b](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a21156bc779a461ba515ecb24b8fb5739ed3fe8c))

## [0.8.0](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.7.3...v0.8.0) (2023-04-03)


### ⚠ BREAKING CHANGES

* **nuxt:** remove nuxt.ts from main package & @nuxt/kit from dependencies -- use package @bootstrap-vue-next/nuxt (readme coming soon)
* **nuxt:** create explicit nuxt module
* **BFormRadioGroup:** remove prop switch, this must have been an accidental inclusion
* remove Alignment namespace
* **BVisible:** remove BVisible directive. Use @vueuse/core 'useElementVisibility' instead https://vueuse.org/core/useElementVisibility/#useelementvisibility
* **BFocus:** remove the BFocus directive. Use @vueuse/core 'useFocus' instead https://vueuse.org/core/useFocus/#usefocus
* **BModal:** rename prop noFocus to prop autoFocus
* remove deprecated BSkeleton components -- replaced with BPlaceholder, review docs
* **BDropdown:** do not use internal state to modify dropdown instead expose vmodel
* **BCard:** remove prop imgRight -- use imgEnd
* **BImg:** remove prop left -- use prop start
* **BImg:** remove prop right -- use prop end
* **BCardImg:** remove prop left -- use prop start
* **BCardImg:** remove prop right -- use prop end
* **BNavItemDropdown:** remove prop dropleft -- use dropstart
* **BNavItemDropdown:** remove prop dropright -- use dropend
* **BNavItemDropdown:** remove prop right -- use alignEnd
* **BNavItemDropdown:** remove prop left -- use alignStart
* **BDropdown:** remove prop right -- use alignEnd
* **BCard:** remove prop imgLeft -- use imgStart
* **BDropdown:** remove boundary prop
* **BDropdown:** remoe popperOpts prop
* **BDropdown:** remove 'right' prop -- use prop 'end'
* **BDropdown:** remove 'dropright' prop -- use prop 'dropend'
* **Dropdown:** remove 'left' prop -- use 'start'
* **BDropdown:** remove 'dropleft' prop -- use 'dropstart'
* **BDropdown:** replaace popper usage with floating-ui/vue

### Features

* add description onto self: symbol() ([457e8da](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/457e8da0fdd9e559703fd2de34b2c3d74c603e5a))
* **BAccordion:** add header-tag prop on BAccordionItem ([afb5eec](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/afb5eecda09f4e0ebef6d2ffed2cbf79ee509242))
* **BCardImg:** remove prop left -- use prop start ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BCardImg:** remove prop right -- use prop end ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BCard:** remove prop imgLeft -- use imgStart ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BCard:** remove prop imgRight -- use imgEnd ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BCarousel:** don't require v-model to function ([3c2ce06](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/3c2ce0602b613ff26283b239acc3a2a33775053e))
* **BDropdown:** add alignEnd prop ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** add alignStart prop ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** add floatingMiddleware prop ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** add lazy prop ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** add offset prop ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **Bdropdown:** add prop noShift ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** add splitDisabled proop ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** add strategy prop ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** close on esc ([d94959e](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d94959e95201cb56e69f14227651260b922314d9))
* **BDropdown:** do not use internal state to modify dropdown instead expose vmodel ([ebdd1ee](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/ebdd1ee5c201d709463c2fbaf9d31a47b5a02fc1))
* **BDropdown:** emit BvEvent on hide (event is preventable) ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** emit BvEvent on show (event is preventable) ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** emit hide-prevented and show-prevented ([565e428](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/565e428ae8ed425d556710f4ae9579eb4f2d97d5))
* **BDropdown:** remoe popperOpts prop ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** remove 'dropleft' prop -- use 'dropstart' ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** remove 'dropright' prop -- use prop 'dropend' ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** remove 'right' prop -- use prop 'end' ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** remove boundary prop ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **BDropdown:** remove prop right -- use alignEnd ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BDropdown:** replaace popper usage with floating-ui/vue ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* begin using @flating-ui/vue for positioning instead of popper ([2c3da40](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/2c3da4035ae24eceb6941b58cc1c43bb0b59297a))
* **BFocus:** remove the BFocus directive. Use @vueuse/core 'useFocus' instead https://vueuse.org/core/useFocus/#usefocus ([4f01fbc](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4f01fbc314428a41b1376f3c6981301713e4ce15))
* **BFormCheckboxGroup:** autofocus (This implementation focuses the div... I'm not sure this is right) ([457e8da](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/457e8da0fdd9e559703fd2de34b2c3d74c603e5a))
* **BFormRadioGroup:** refactor to use provide/inject instead of slot manipulation... Allowing for nested children ([457e8da](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/457e8da0fdd9e559703fd2de34b2c3d74c603e5a))
* **BImg:** remove prop left -- use prop start ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BImg:** remove prop right -- use prop end ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BModal:** add prop autoFocusButton ([1a65391](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/1a65391b1756aa03d14a07ca1c9635ca4a4c460a))
* **BModal:** rename prop noFocus to prop autoFocus ([1a65391](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/1a65391b1756aa03d14a07ca1c9635ca4a4c460a))
* **BNavItemDropdown:** aadad prop floatingMiddleware ([057fb00](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/057fb0090f397350f3cf82b2d14c2d0998318fb3))
* **BNavItemDropdown:** add prop lazy ([057fb00](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/057fb0090f397350f3cf82b2d14c2d0998318fb3))
* **BNavItemDropdown:** add prop menuClass ([057fb00](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/057fb0090f397350f3cf82b2d14c2d0998318fb3))
* **BNavItemDropdown:** add prop noFlip ([057fb00](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/057fb0090f397350f3cf82b2d14c2d0998318fb3))
* **BNavItemDropdown:** add prop noShift ([057fb00](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/057fb0090f397350f3cf82b2d14c2d0998318fb3))
* **BNavItemDropdown:** add prop strategy ([057fb00](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/057fb0090f397350f3cf82b2d14c2d0998318fb3))
* **BNavItemDropdown:** boolean props are now Booleanish for convenience ([057fb00](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/057fb0090f397350f3cf82b2d14c2d0998318fb3))
* **BNavItemDropdown:** remove prop dropleft -- use dropstart ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BNavItemDropdown:** remove prop dropright -- use dropend ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BNavItemDropdown:** remove prop left -- use alignStart ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BNavItemDropdown:** remove prop right -- use alignEnd ([4d4b087](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d4b087570a9a44f1f2f39ec0d1162ca987e3642))
* **BVisible:** remove BVisible directive. Use @vueuse/core 'useElementVisibility' instead https://vueuse.org/core/useElementVisibility/#useelementvisibility ([4f01fbc](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4f01fbc314428a41b1376f3c6981301713e4ce15))
* **ClassValue:** ClassValue is ts 'any' ([321eafa](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/321eafa689994dd6e54b5683d7684b7f8da5d1c0))
* **Dropdown:** remove 'left' prop -- use 'start' ([bc401f2](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bc401f27a97a3752e461e842670ac07dc0df4fc8))
* **nuxt:** create explicit nuxt module ([00af3e4](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/00af3e4713eea2d8098eeb2083915a9868d2231d))
* **nuxt:** remove nuxt.ts from main package & @nuxt/kit from dependencies -- use package @bootstrap-vue-next/nuxt (readme coming soon) ([00af3e4](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/00af3e4713eea2d8098eeb2083915a9868d2231d))
* remove deprecated BSkeleton components -- replaced with BPlaceholder, review docs ([682bb84](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/682bb84f4aca9d6a0a26d2fc448060bb8c4acbc6))
* start nuxt package ([a04563e](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a04563ee704a017184f1de6c792f789a7c725677))


### Bug Fixes

* **#971:** directive imports being strange ([4d6e200](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4d6e20025933723576d1a10b39373385c1d6bf8e))
* **BAccordionItem:** use a reactive value from parent on provide() ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BAccordion:** provide a reactive value ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BAvatarGroup:** provide a reactive value ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BAvatar:** use a reactive value from parent on provide() ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BButton:** fix failing checks from updated pressed prop ([1270b26](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/1270b2663b58e203edfa7b0e0b16575ca2449c06))
* **BButton:** isToggle computed property use type of pressedBoolean ([9754a47](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/9754a474da2e627f8fc37630b0ffdd350df36a8e)), closes [#973](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/973)
* **BButton:** removed deprecated exact prop ([42ba27a](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/42ba27a89635953e366b87eca77d5b09ac987dac))
* **BButton:** removed exactActiveClass prop ([ae261b8](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/ae261b88397a925d13287c796447eddfb66f28c9))
* **BCarousel:** number parser is parseInt ([9ec9c46](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/9ec9c466e1b089f43cf2f23bef31c2454a70d793))
* **BCarousel:** provide a reactive value ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BCarouselSlide:** use a reactive value from parent on provide() ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BCarousel:** threshold -&gt; touchThreshold prop ([7de1bdd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/7de1bdd05d574d51dc9bd9b529b36cec5b495beb))
* **BCarousel:** touch swiping system for mobile ([89f04fd](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/89f04fd37eb501840957b35a32cf7d208b839703))
* **BDropdown:** emits boolean ([057fb00](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/057fb0090f397350f3cf82b2d14c2d0998318fb3))
* **BDropdown:** remove unused class ([2fd5d4f](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/2fd5d4f8d8527211e9315f1310b6a1998379fb1c))
* **BFormCheckbox:** aria-required & required take parentData into account ([457e8da](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/457e8da0fdd9e559703fd2de34b2c3d74c603e5a))
* **BFormcheckbox:** inherit name,   form, & disabled attrs from parent as well ([457e8da](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/457e8da0fdd9e559703fd2de34b2c3d74c603e5a))
* **BFormCheckbox:** strongly type emit values ([457e8da](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/457e8da0fdd9e559703fd2de34b2c3d74c603e5a))
* **BFormCheckbox:** use provide/inject logic instead of slot manipulation. Allows for nested BFormCheckbox children in Groups ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BFormRadioGroup:** remove prop switch, this must have been an accidental inclusion ([457e8da](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/457e8da0fdd9e559703fd2de34b2c3d74c603e5a))
* **BFormTags:** wrong tags being removed due to remove button not re-rendering ([ec54ffb](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/ec54ffb88a7a0dd4913feb30d4abdfc63aa8db33))
* **BLink:** prefer passed active and exact prop over isActive slot props from RouterLink ([1c4e958](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/1c4e958310c3717fd6d4bcd9e601d76eca835c43))
* **BLink:** removed exactActiveClass prop ([ae261b8](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/ae261b88397a925d13287c796447eddfb66f28c9))
* **BListGroupItem:** use a reactive value from parent on provide() ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BListGroup:** provide a reactive value ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BModal:** correctly assign focus to element after transition has stopped fixes [#964](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/964) ([1a65391](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/1a65391b1756aa03d14a07ca1c9635ca4a4c460a))
* **BModal:** hide.prevent not functioning correctly ([4f80470](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4f804704700f37091994bd76de84e5d718ac4292))
* **BModal:** Modal not appearing when default value is true on mounted ([4f80470](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4f804704700f37091994bd76de84e5d718ac4292))
* **BNavItemDropdown:** usage after breaking dropdown changes ([057fb00](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/057fb0090f397350f3cf82b2d14c2d0998318fb3))
* **BOffcanvas:** hide.prevent not functioning correctly ([565e428](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/565e428ae8ed425d556710f4ae9579eb4f2d97d5))
* **BOffcanvas:** inheritted attributes not being placed on root element ([21c5fec](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/21c5fec5b0b435a30879bf38cedb920a13919e85))
* **BPlaceholder:** animations not being applied correctly ([4ff5501](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4ff550114a7ed433d8157f91e636bbae39ad39a5))
* **BPlaceholderCard:** attributes from props not being applied on the default slot BPlaceholder elements ([4ff5501](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4ff550114a7ed433d8157f91e636bbae39ad39a5))
* **BPlaceholder:** plaaceholder width is cols default 12 ([4ff5501](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/4ff550114a7ed433d8157f91e636bbae39ad39a5))
* **BProgressBar:** use a reactive value from parent on provide() ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BProgress:** provide a reactive value ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BTabs:** provide a reactive value ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **BTab:** use a reactive value from parent on provide() ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* build issues ([a04563e](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a04563ee704a017184f1de6c792f789a7c725677))
* **dts:** issue with floating-ui/core not being recognized, add it as a top level dev dependency with tsconfig path ([d625755](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d6257550f7907800e06e5b42b2605a3e567ee31d))
* **provide/inject:** set default values for inject when no parentData is found in the tree fixes: [#936](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/936) fixes: [#932](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/932) ([da0bf96](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/da0bf962537a50bd00b6715c0a3224f2f9d71aeb))
* remove explicit roles on items that don't need them (BTh, BTr, etc) ([ed62031](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/ed6203128581477c96ad834a91947206de4f8641))


### Code Refactoring

* remove Alignment namespace ([bab9145](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/bab914528540c27dd57e66cb313a6fe540849660))

## [0.7.3](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.7.2...v0.7.3) (2023-02-05)


### Bug Fixes

* fixes [#916](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/916) Carousel issues when using v-if and v-for ([#921](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/921)) ([5590bb4](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/5590bb4de1236b4ef127dfd7de5c80f3b067665f))

## [0.7.2](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.7.1...v0.7.2) (2023-02-04)


### Features

* **BCarousel:** expose prev and next methods ([6ef55cf](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/6ef55cf0e8d731aa22c6f372ae6fafeebaf71bd3))


### Bug Fixes

* **BCarousel:** odd behavior when moving modelValue too fast. The Carousel should not allow for more events while transitioning. ([6ef55cf](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/6ef55cf0e8d731aa22c6f372ae6fafeebaf71bd3))

## [0.7.1](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.7.0...v0.7.1) (2023-02-01)


### Bug Fixes

* **BTransition:** TransitionProps is interface, import type to stop trying to import unexistent elements ([7c7b1ff](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/7c7b1ff8dba069ac190d9f3911a3b75c79d0b753))

## [0.7.0](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.6.7...v0.7.0) (2023-02-01)


### ⚠ BREAKING CHANGES

* **BCarousel:** rename sliding-start to slide for Bootstrap compatibiliity
* **BCarousel:** rename sliding-end to slid for Bootstrap compatibility
* **BCarousel:** emit events use BvCarouselEvent

### Features

* **BCarousel:** add keyboard prop to prevent key actions -- equals keyboard: false for Bootstrap Carousel options ([2ab7da9](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/2ab7da9c76fa503d9a0420eb565839b4b38a990b))
* **BCarousel:** create BvCarouselEvent that mimics Bootstrap ({from: number; to: number; direction: left | right}) ([2ab7da9](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/2ab7da9c76fa503d9a0420eb565839b4b38a990b))
* **BCarousel:** emit events use BvCarouselEvent ([2ab7da9](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/2ab7da9c76fa503d9a0420eb565839b4b38a990b))
* **BCarousel:** rename sliding-end to slid for Bootstrap compatibility ([2ab7da9](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/2ab7da9c76fa503d9a0420eb565839b4b38a990b))
* **BCarousel:** rename sliding-start to slide for Bootstrap compatibiliity ([2ab7da9](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/2ab7da9c76fa503d9a0420eb565839b4b38a990b))

## [0.6.7](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.6.6...v0.6.7) (2023-01-31)


### ⚠ BREAKING CHANGES

* **BOffcanvas:** remove footer slot -- it is not in Bootstrap V5 (It was Bootstrap _sidebar_ prop, but this is not sidebar)

### Features

* **BOffcanvas:** remove footer slot -- it is not in Bootstrap V5 (It was Bootstrap _sidebar_ prop, but this is not sidebar) ([d9bd678](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d9bd6784630730106ee862de77488bb4bdb92218))


### Bug Fixes

* **BOffcanvas:** offcanvas not displaying when mounting with modelValue true ([d9bd678](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d9bd6784630730106ee862de77488bb4bdb92218))
* **isEmptySlot:** fix checking for empty slots ([6652a4c](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/6652a4cbdea0defabc6074b11d023ce876802b9f))
* issues with using "isEmptySlot" causing improper values in slot scopes ([324ddb9](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/324ddb9b590ca586805bbe55cb5b7ca95f66aecc))


### Reverts

* **debde2104983a60a718147ee84593590ad80ec4e:** add back in footer slot on Offcanvas ([6612049](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/661204912ef8d511e9fac9f521436155a13c0a2d))


### Miscellaneous Chores

* release 0.6.6 ([857f5b3](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/857f5b329aac31601f380843ea69a6a0df267378))
* release 0.6.7 ([5619a7b](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/5619a7b087b691264aae579ebe603d4e74922afc))

## [0.6.6](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.6.6...v0.6.6) (2023-01-30)


### ⚠ BREAKING CHANGES

* **BOffcanvas:** remove footer slot -- it is not in Bootstrap V5 (It was Bootstrap _sidebar_ prop, but this is not sidebar)

### Features

* **BOffcanvas:** remove footer slot -- it is not in Bootstrap V5 (It was Bootstrap _sidebar_ prop, but this is not sidebar) ([d9bd678](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d9bd6784630730106ee862de77488bb4bdb92218))


### Bug Fixes

* **BOffcanvas:** offcanvas not displaying when mounting with modelValue true ([d9bd678](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d9bd6784630730106ee862de77488bb4bdb92218))
* issues with using "isEmptySlot" causing improper values in slot scopes ([324ddb9](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/324ddb9b590ca586805bbe55cb5b7ca95f66aecc))


### Reverts

* **debde2104983a60a718147ee84593590ad80ec4e:** add back in footer slot on Offcanvas ([6612049](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/661204912ef8d511e9fac9f521436155a13c0a2d))


### Miscellaneous Chores

* release 0.6.6 ([857f5b3](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/857f5b329aac31601f380843ea69a6a0df267378))

## [0.6.6](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.6.5...v0.6.6) (2023-01-28)


### Bug Fixes

* move @vueuse/shared to dev dependency ([ee65801](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/ee65801a51184b068071cba1eb068fa12d683b81))

## [0.6.5](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.6.4...v0.6.5) (2023-01-28)


### Bug Fixes

* pnpm/dts issues causing missing files that require @vueuse/shared ([648fe41](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/648fe41ccdb866ae7a32babe66c53100186416d8))

## [0.6.4](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.6.3...v0.6.4) (2023-01-28)


### Features

* **BAlert:** add noHoverPause prop to pause countdown on hover ([a0d3e19](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a0d3e191863cd6e91c288287bf8f91699122e01b))
* **BCarousel:** add noHoverPause to stop pausing on hovering ([a0d3e19](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a0d3e191863cd6e91c288287bf8f91699122e01b))
* **BCarousel:** add prop fade, to use crossfade animation instead ([a0d3e19](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a0d3e191863cd6e91c288287bf8f91699122e01b))
* **BCarousel:** add prop ride to indicate to use "ride", or "carousel" as shown on bootstrap docs ([a0d3e19](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a0d3e191863cd6e91c288287bf8f91699122e01b))
* **BCarousel:** add prop rideReverse, so when carousel riding, tell it to go in reverse order ([a0d3e19](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a0d3e191863cd6e91c288287bf8f91699122e01b))
* **BCarousel:** usage should be more straightforward. Active items are directly modified through the vmodel only ([a0d3e19](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a0d3e191863cd6e91c288287bf8f91699122e01b))


### Reverts

* App.vue to default ([e51972a](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/e51972a5dfcf8f07a288729ef74de207fc52492f))

## [0.6.3](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.6.2...v0.6.3) (2023-01-27)


### Bug Fixes

* **BTabs:** add role="presentation" ([465eb7a](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/465eb7ad692081d0423dc1520c186b8dd1c02b76))

## [0.6.2](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.6.1...v0.6.2) (2023-01-16)


### Bug Fixes

* **nuxt.ts:** psuedo placeholder code causes issues when using nuxt.ts ([#880](https://github.com/bootstrap-vue/bootstrap-vue-next/issues/880)) ([87d326a](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/87d326ad0553319706c2ca0e83557b365258a469))

## [0.6.1](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.6.0...v0.6.1) (2023-01-15)


### Features

* **_offcanvas.scss:** add custom scss ([96da79f](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/96da79f2d1a03743334624116e1177b3091620cb))
* **BOffcanvas:** add id prop ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOffcanvas:** add lazy prop for lazy loading functionality ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOffcanvas:** add noCloseOnBackdrop prop ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOffcanvas:** add noCloseOnEsc prop ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOffcanvas:** add noFocus prop ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOffcanvas:** add prop backdropVariant ([177261c](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/177261c70a95841f14fe4c652c35b061171ef2fd))
* **BOffcanvas:** add prop responsive ([177261c](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/177261c70a95841f14fe4c652c35b061171ef2fd))
* **BOffcanvas:** add prop static to prevent teleporting ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOffcanvas:** create preventable closing on component ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOffcanvas:** expose a preventable Event when emitting show/shown/hide/hidden etc ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOffcanvas:** revert responsive prop as it's not functional ([c549633](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/c549633b5ba8e0e747db18c18399541de7998ecf))
* **BOffcanvas:** teleport to body by default ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOverlay:** add noSpinner prop to remove the default spinner ([a98f9d0](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a98f9d0220c6e2b40b0a25e4318c0c38e518681b))


### Bug Fixes

* **BOffcanvas:** add aria-modal="true" ([177261c](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/177261c70a95841f14fe4c652c35b061171ef2fd))
* **BOffcanvas:** add role="dialog" ([177261c](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/177261c70a95841f14fe4c652c35b061171ef2fd))
* **BOffcanvas:** fix transition states ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOffcanvas:** remove spinner when opened ([e618207](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/e618207d6893751354cf4efcfe4c25891b5bc3e2))
* **BOffcanvas:** strongly type offcanvas placement ([a25d0c6](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/a25d0c63eb6b5b4e4f58062d63a5cc6a1be0ce52))
* **BOverlay:** accidentally leaving out toRef ([d4ca177](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/d4ca177388eedddf97d044f9e27cd26e9cf52229))
* **BOverlay:** invert no-spinner prop ([964066f](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/964066f241b00604e77df348ab21bda54a558445))


### Performance Improvements

* **BModal:** use flush: 'post' instead of nextTick ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))
* **BOffcanvas:** replace nextTick with flush: 'post' in watcher ([234ab31](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/234ab31feba213bf99d8589dd5cde4656dd03d1a))

## [0.6.0](https://github.com/bootstrap-vue/bootstrap-vue-next/compare/v0.5.1...v0.6.0) (2023-01-14)


### ⚠ BREAKING CHANGES

* rename package to bootstrap-vue-next
* change exports to match new name

### Bug Fixes

* **vitre.config:** add @popperjs/core to external deps ([3133871](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/31338714fbea3fe8ffb353a19305327de193f7a3))


### Code Refactoring

* change exports to match new name ([089da12](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/089da12e6c88477420adf873639d54837c96a06c))
* rename package to bootstrap-vue-next ([089da12](https://github.com/bootstrap-vue/bootstrap-vue-next/commit/089da12e6c88477420adf873639d54837c96a06c))

## [0.5.1](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.5.0...v0.5.1) (2023-01-04)

### Bug Fixes

- persistence in useColorMode ([c0e8e96](https://github.com/cdmoro/bootstrap-vue-3/commit/c0e8e968856acfc0e5249e6096787ccd72da5926))
- **useColorMode:** disable persistence by default ([43e2460](https://github.com/cdmoro/bootstrap-vue-3/commit/43e246058e03d9a2a10695457d5fe460ffaa9398))
- **useColorMode:** remove broken modes option ([30e9729](https://github.com/cdmoro/bootstrap-vue-3/commit/30e9729806f9d3579af6e1c2987cfe6e5942ff89))

## [0.5.0](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.15...v0.5.0) (2023-01-02)

### ⚠ BREAKING CHANGES

- **Icons:** remove Icons package indefinitely, please review new documentation section on how to include bootstrap-icons into your vue app!
- **BAlert:** remake timer system to be standard accross all components (not implemented in other components yet) - read section on new docs
- **BAlert:** fix timer system - read section on new docs
- **BAlert:** close-count-down event renamed to close-countdown as it is one word
- **BAlert:** remove show prop - use v-model and read docs

### Features

- **BAlert:** add immediate, interval & showOnPause timer props ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))
- **BAlert:** remake timer system to be standard accross all components (not implemented in other components yet) - read section on new docs ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))
- **BAlert:** remove show prop - use v-model and read docs ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))
- **BColorMode:** create a color mode directive ([e30aeaa](https://github.com/cdmoro/bootstrap-vue-3/commit/e30aeaa51f286d9e47c97cd7d41be458e78d4cc0))
- create useColorMode composable in anticipation of Bootstrap v5.3 ([e30aeaa](https://github.com/cdmoro/bootstrap-vue-3/commit/e30aeaa51f286d9e47c97cd7d41be458e78d4cc0))
- export useColorMode ([e30aeaa](https://github.com/cdmoro/bootstrap-vue-3/commit/e30aeaa51f286d9e47c97cd7d41be458e78d4cc0))
- **Icons:** remove Icons package indefinitely, please review new documentation section on how to include bootstrap-icons into your vue app! ([d3c13e0](https://github.com/cdmoro/bootstrap-vue-3/commit/d3c13e03fa53932541a9f3bd99e27bdec4d12a80))
- **table:** Add formatter support to table component ([41f2f0b](https://github.com/cdmoro/bootstrap-vue-3/commit/41f2f0b312cd621f73b0ccceafb78629f1579a8f))
- **table:** Add support for non-string fields in formatting ([e2e2597](https://github.com/cdmoro/bootstrap-vue-3/commit/e2e25978aa29f70b503fb3a2c45245de4e5265d2))
- **useCountdown:** reactivity issues when using composable parameters ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))

### Bug Fixes

- **BAlert:** close-count-down event renamed to close-countdown as it is one word ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))
- **BAlert:** fix timer system - read section on new docs ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))
- BPopover events is not emitted correctly [#282](https://github.com/cdmoro/bootstrap-vue-3/issues/282) ([3dee9c8](https://github.com/cdmoro/bootstrap-vue-3/commit/3dee9c8185443810a0c23db363d113389ec65827))
- **useCountdown:** pausing while stopped showing if prop showOnPause is true ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))
- **useCountdown:** remainingMs showing 0 if paused ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))
- **useCountdown:** resuming when stopped rendering ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))
- **useCountdown:** showing on paused ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))
- **useFormCheck:** remove ts any ([e30aeaa](https://github.com/cdmoro/bootstrap-vue-3/commit/e30aeaa51f286d9e47c97cd7d41be458e78d4cc0))

### Performance Improvements

- **useAlignment:** use eagerComputed instead ([e30aeaa](https://github.com/cdmoro/bootstrap-vue-3/commit/e30aeaa51f286d9e47c97cd7d41be458e78d4cc0))

### Reverts

- **App.vue:** put playground app.vue back to default ([26010f3](https://github.com/cdmoro/bootstrap-vue-3/commit/26010f3a0f04d6e602248ee6fb270e1870eed37c))

## [0.4.15](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.14...v0.4.15) (2022-12-12)

### Bug Fixes

- **nuxt:** include new files when packing ([ae7a998](https://github.com/cdmoro/bootstrap-vue-3/commit/ae7a998640cb573128cd0f63db734d3947e7e7e2))

## [0.4.14](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.13...v0.4.14) (2022-12-10)

### Features

- **BModal:** add the ability to prevent closing using Event.PreventDefault ([ed668f8](https://github.com/cdmoro/bootstrap-vue-3/commit/ed668f819dd3c0fcd807704f0f7a600e67aa14c3))
- **BvEvent:** improve BvEvent and BvModalEvent event classes ([ed668f8](https://github.com/cdmoro/bootstrap-vue-3/commit/ed668f819dd3c0fcd807704f0f7a600e67aa14c3))
- improve nuxt opts ([9a76d1e](https://github.com/cdmoro/bootstrap-vue-3/commit/9a76d1ed9c4ee854e72551023d6040d2ea8cdfb3))
- improve nuxt.ts file ([ed668f8](https://github.com/cdmoro/bootstrap-vue-3/commit/ed668f819dd3c0fcd807704f0f7a600e67aa14c3))

### Bug Fixes

- **BModal:** backdrop and esc events not caring when hide is prevented ([dcd3bfe](https://github.com/cdmoro/bootstrap-vue-3/commit/dcd3bfe991bd6cdb177ef404f17b9dfdc41e1af8))
- **BvEvent:** remove vueTarget from event ([ed668f8](https://github.com/cdmoro/bootstrap-vue-3/commit/ed668f819dd3c0fcd807704f0f7a600e67aa14c3))
- export BvModalEvent ([f219c44](https://github.com/cdmoro/bootstrap-vue-3/commit/f219c449a813101c549e354856e2ff104b866405))
- ignore ban-ts-comment inline ([ed668f8](https://github.com/cdmoro/bootstrap-vue-3/commit/ed668f819dd3c0fcd807704f0f7a600e67aa14c3))

## [0.4.13](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.12...v0.4.13) (2022-12-05)

### Bug Fixes

- **#828:** BButtonGroup missing btn-group class when prop size ([0897270](https://github.com/cdmoro/bootstrap-vue-3/commit/0897270bfec9889880f08b1a6ee0d0f315486ac5))

## [0.4.12](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.11...v0.4.12) (2022-12-04)

### Bug Fixes

- **modal:** maybe fix modal... if it was even broken ([fc31444](https://github.com/cdmoro/bootstrap-vue-3/commit/fc3144466c41f7292bb5433fd3c3eccbfac71d35))

## [0.4.11](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.10...v0.4.11) (2022-12-01)

### Bug Fixes

- Tabs Content will update with reactive components ([06c0663](https://github.com/cdmoro/bootstrap-vue-3/commit/06c066357ed2ada8e209258a57d5508bbb07ba98)), closes [#778](https://github.com/cdmoro/bootstrap-vue-3/issues/778)
- update tests ([069511f](https://github.com/cdmoro/bootstrap-vue-3/commit/069511fb948e17166aa2461c81cd86c68e5a6738)), closes [#778](https://github.com/cdmoro/bootstrap-vue-3/issues/778)

## [0.4.10](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.9...v0.4.10) (2022-11-23)

### Features

- **Popover:** Allow html modifier in directive ([9e85b80](https://github.com/cdmoro/bootstrap-vue-3/commit/9e85b80e0ff4b791a1e2e1a05babec487ca97e8e))

### Bug Fixes

- remove package icons ([efb7a18](https://github.com/cdmoro/bootstrap-vue-3/commit/efb7a1894107abc60df8aca8615d6a728ec17b17)), closes [#815](https://github.com/cdmoro/bootstrap-vue-3/issues/815)

## [0.4.9](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.8...v0.4.9) (2022-11-21)

### Features

- **SpinButton:** Adjust BV3 Package.json Dependencies ([41452a7](https://github.com/cdmoro/bootstrap-vue-3/commit/41452a7e25fa06a684bb7a5fd43031f437d271da))
- **SpinButton:** Final fixes ([a233d1f](https://github.com/cdmoro/bootstrap-vue-3/commit/a233d1f684d2e714b9fff3d4db5e94a9b8310c4e))
- **SpinButton:** Remove Utils, Use hasValue for Value Checking ([1dcfc0e](https://github.com/cdmoro/bootstrap-vue-3/commit/1dcfc0edcc98788e8864aaa3585f9dc779edd3ec))

### Bug Fixes

- on balert create, start counter ([b35e299](https://github.com/cdmoro/bootstrap-vue-3/commit/b35e299abf98024d4297edfa10006fcb9673c7a0)), closes [#810](https://github.com/cdmoro/bootstrap-vue-3/issues/810)

## [0.4.8](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.7...v0.4.8) (2022-11-12)

### Features

- **BPagination:** Extend justify content types for between, around and evenly ([91cf4a8](https://github.com/cdmoro/bootstrap-vue-3/commit/91cf4a89f91b59ff3dc77b0ae9f0401976b17619))
- refactor icons ([76baf45](https://github.com/cdmoro/bootstrap-vue-3/commit/76baf45c60e7a6782ddfa97b18c8634dee1f62f7))

### Bug Fixes

- **BCard:** Set correct align types. ([91cf4a8](https://github.com/cdmoro/bootstrap-vue-3/commit/91cf4a89f91b59ff3dc77b0ae9f0401976b17619))
- **BNavbarNav:** Set correct align types. ([91cf4a8](https://github.com/cdmoro/bootstrap-vue-3/commit/91cf4a89f91b59ff3dc77b0ae9f0401976b17619))
- **BNav:** Set correct align types. ([91cf4a8](https://github.com/cdmoro/bootstrap-vue-3/commit/91cf4a89f91b59ff3dc77b0ae9f0401976b17619))
- **BPagination:** Set correct align types. ([91cf4a8](https://github.com/cdmoro/bootstrap-vue-3/commit/91cf4a89f91b59ff3dc77b0ae9f0401976b17619))
- **BRow:** Set correct align types. ([91cf4a8](https://github.com/cdmoro/bootstrap-vue-3/commit/91cf4a89f91b59ff3dc77b0ae9f0401976b17619))
- **BTabs:** Set correct align types. ([91cf4a8](https://github.com/cdmoro/bootstrap-vue-3/commit/91cf4a89f91b59ff3dc77b0ae9f0401976b17619))
- **BTooltip:** Error toString if value is undefined. ([91cf4a8](https://github.com/cdmoro/bootstrap-vue-3/commit/91cf4a89f91b59ff3dc77b0ae9f0401976b17619))

### Reverts

- **BContainer:** revert to fix usage with toast ([818865c](https://github.com/cdmoro/bootstrap-vue-3/commit/818865cdf32de1a68342ded7674b96fdd81252db))

## [0.4.7](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.6...v0.4.7) (2022-11-10)

### Features

- add the ability to extend certain built in types ([4bd4bee](https://github.com/cdmoro/bootstrap-vue-3/commit/4bd4beefddfba524be31e77c7078340ea85f08b0))

### Bug Fixes

- **BModal:** moved the modal's css props to global style file to fix modal not showing up & backdrop not appearing correctly in some cases ([c20da57](https://github.com/cdmoro/bootstrap-vue-3/commit/c20da573595b02bdae74177b2c60a274f5f24427))

## [0.4.6](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.5...v0.4.6) (2022-11-04)

### Miscellaneous Chores

- release 0.4.6 ([7c281ac](https://github.com/cdmoro/bootstrap-vue-3/commit/7c281acfcd73aec2d2d20abd529221759a8c143c))

## [0.4.5](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.4...v0.4.5) (2022-11-04)

### Miscellaneous Chores

- release 0.4.5 ([07e20c0](https://github.com/cdmoro/bootstrap-vue-3/commit/07e20c0a0ea135557ef6673c47faa954aa355490))

## [0.4.4](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.3...v0.4.4) (2022-11-03)

### Features

- **BToast:** Add options autoHide, noCloseButton ([338cc1e](https://github.com/cdmoro/bootstrap-vue-3/commit/338cc1e1c4d3903c8bb9e66a0144610f92b9e568))
- **BToast:** Add options autoHide, noCloseButton. ([24110d0](https://github.com/cdmoro/bootstrap-vue-3/commit/24110d05aaabc2fc1187d93d30187fc771f972cf))

## [0.4.3](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.2...v0.4.3) (2022-10-30)

### Features

- **BTable:** added `label-stacked` prop to label the stacked rows with the field's label ([f967d4b](https://github.com/cdmoro/bootstrap-vue-3/commit/f967d4b0301e1c7e246f23058b2e21af9c3b8172))

### Bug Fixes

- **BTable, BTableSimple:** Added the needed CSS to make the `stacked` prop take effect from a specific screen-size breakpoint. ([f967d4b](https://github.com/cdmoro/bootstrap-vue-3/commit/f967d4b0301e1c7e246f23058b2e21af9c3b8172))
- **BTable:** fixed `filtered` event being emitted when using pagination (more details: https://github.com/cdmoro/bootstrap-vue-3/issues/768). ([f967d4b](https://github.com/cdmoro/bootstrap-vue-3/commit/f967d4b0301e1c7e246f23058b2e21af9c3b8172))
- **BTable:** fixed filtering undefined table item values (more details: https://github.com/cdmoro/bootstrap-vue-3/issues/770). ([f967d4b](https://github.com/cdmoro/bootstrap-vue-3/commit/f967d4b0301e1c7e246f23058b2e21af9c3b8172))
- **BTable:** provided typescript hints for a stacked prop. ([f967d4b](https://github.com/cdmoro/bootstrap-vue-3/commit/f967d4b0301e1c7e246f23058b2e21af9c3b8172))

## [0.4.2](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.1...v0.4.2) (2022-10-28)

### Miscellaneous Chores

- release 0.4.2 ([01c1172](https://github.com/cdmoro/bootstrap-vue-3/commit/01c1172e05c4fb3359c17faf579f2e4600843646))

## [0.4.1](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.4.0...v0.4.1) (2022-10-28)

### Miscellaneous Chores

- release 0.4.1 ([ea745b8](https://github.com/cdmoro/bootstrap-vue-3/commit/ea745b8a4bfbaf5f5699cde8264d328047579256))

## [0.4.0](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.12...v0.4.0) (2022-10-24)

### ⚠ BREAKING CHANGES

- **BContainer:** remove toast props as they didn't work

### Features

- add static prop ability ([41d752a](https://github.com/cdmoro/bootstrap-vue-3/commit/41d752ac786510a2022e2160d815487a2961dbcc))
- begin development of bootstrap-vue-3-icons ([c1dac9c](https://github.com/cdmoro/bootstrap-vue-3/commit/c1dac9cd641236aea9510a4bb931f86fb0ca7080))
- **BFormInput:** added highlight method to active a simple highlight animation for a few seconds ([2d34305](https://github.com/cdmoro/bootstrap-vue-3/commit/2d343056fdf2bc0d0954abf11df04ffec18a82ef))
- **BModal:** :bug: warning prop lazy does not currently work due to a constrant with updating to remove bootstrap js ([af2e95b](https://github.com/cdmoro/bootstrap-vue-3/commit/af2e95b8a2fc1bd4204bdc6cc52c45aa629129c2))
- **BModal:** remove bootstrapjs ([af2e95b](https://github.com/cdmoro/bootstrap-vue-3/commit/af2e95b8a2fc1bd4204bdc6cc52c45aa629129c2))
- create eagerComputed component ([c038674](https://github.com/cdmoro/bootstrap-vue-3/commit/c038674d712615bb04512a86969580c74aec15a6))

### Bug Fixes

- **BCol:** incorrectly keeps col class when also has col-{n} class ([7619630](https://github.com/cdmoro/bootstrap-vue-3/commit/7619630e14b387549f676405b083f9907041628b))
- **BContainer:** remove toast props as they didn't work ([c91801d](https://github.com/cdmoro/bootstrap-vue-3/commit/c91801dee1e9264588d88d8998288d13b3a64402))
- better checking for when a slot is empty ([ded0e69](https://github.com/cdmoro/bootstrap-vue-3/commit/ded0e6906b5293f85e0c177924ace52595ef4171))
- **BListGroupItem:** stop giving a TS breaking null attr and use undefined instead ([ded0e69](https://github.com/cdmoro/bootstrap-vue-3/commit/ded0e6906b5293f85e0c177924ace52595ef4171))
- **BModal:** explicit check for empty slot ([760c013](https://github.com/cdmoro/bootstrap-vue-3/commit/760c013d3b0febee8c21bea56561c36d6b0a257e))
- **BModal:** fixed lazy rendering ([65e14f0](https://github.com/cdmoro/bootstrap-vue-3/commit/65e14f0a8b0c12a1323bcde908eb963470a396e0))
- **BModal:** fixes the visibility issue where having more than one modal will overlap each other ([f8b83dc](https://github.com/cdmoro/bootstrap-vue-3/commit/f8b83dcc7297b097f33f69890732f1edce4fd86c))
- **BRow:** rowClasses are computed... Unsure if this was an accident before or my mistake now ([ded0e69](https://github.com/cdmoro/bootstrap-vue-3/commit/ded0e6906b5293f85e0c177924ace52595ef4171))
- some v-fors in docs missing :key attr ([c91801d](https://github.com/cdmoro/bootstrap-vue-3/commit/c91801dee1e9264588d88d8998288d13b3a64402))

### Performance Improvements

- remove possible duplicate computeds ([7fb7342](https://github.com/cdmoro/bootstrap-vue-3/commit/7fb7342bd1e9339bc2d35ba2b68da5be74e3d672))
- **useBooleanish:** use eagerComputed instead since the resolved type usually can benefit from it ([c038674](https://github.com/cdmoro/bootstrap-vue-3/commit/c038674d712615bb04512a86969580c74aec15a6))

### Reverts

- **BToast:** revert btoast changes move to other branch ([012d441](https://github.com/cdmoro/bootstrap-vue-3/commit/012d4413f4f2d164e8be49f0153f24ec45220fee))
- some previous eagerComputed changes ([ab663ec](https://github.com/cdmoro/bootstrap-vue-3/commit/ab663ecc6865567f5aceb6b728776a41b60963ed))

## [0.3.12](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.11...v0.3.12) (2022-10-11)

### Features

- **BFormTags:** Add tag scoped slot ([600c129](https://github.com/cdmoro/bootstrap-vue-3/commit/600c129f64aa6e10bbcfc639ef00632fd6209cf7))

### Bug Fixes

- BOverlay build issues ([b7106f4](https://github.com/cdmoro/bootstrap-vue-3/commit/b7106f400e37aeaa9c2e8295eaafe5c296625d53))
- **BOverlay:** strongly type some props ([53e6777](https://github.com/cdmoro/bootstrap-vue-3/commit/53e67776b8b7c632e9b2bd3f0aba5280411e355f))
- **BTable:** [[#742](https://github.com/cdmoro/bootstrap-vue-3/issues/742)] BTable with provider never hides the busy loader ([affcacf](https://github.com/cdmoro/bootstrap-vue-3/commit/affcacffe47261000deca775e4be8dc6dc22ac8a))
- **BTransition:** allowTransProps to work ([dd17957](https://github.com/cdmoro/bootstrap-vue-3/commit/dd179573e97b9335cdcf707c84ea0a48d1df304a))
- transProps working in BTransition cascades fixes for components that rely on it, ex: Overlay noFade ([dd17957](https://github.com/cdmoro/bootstrap-vue-3/commit/dd179573e97b9335cdcf707c84ea0a48d1df304a))

### Performance Improvements

- **BTransition:** replace ref with cached computed properties ([dd17957](https://github.com/cdmoro/bootstrap-vue-3/commit/dd179573e97b9335cdcf707c84ea0a48d1df304a))

## [0.3.11](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.10...v0.3.11) (2022-10-03)

### Features

- **BPlaceholderButton:** create BPlaceholderButton ([51c2532](https://github.com/cdmoro/bootstrap-vue-3/commit/51c25327befe4fd21617007d888442247c2054ee))
- **BPlaceholderTable:** props columns and rows can now be string or number ([51c2532](https://github.com/cdmoro/bootstrap-vue-3/commit/51c25327befe4fd21617007d888442247c2054ee))

## [0.3.10](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.9...v0.3.10) (2022-10-03)

### Features

- **BCard:** add img slot above or below header ([ac71dee](https://github.com/cdmoro/bootstrap-vue-3/commit/ac71dee331da231884411b875f6d4049189ffbc2))
- **BPlaceholderCard:** add placeholder img ([041156d](https://github.com/cdmoro/bootstrap-vue-3/commit/041156d92177760c20fd13fe1789c8cb8a272e02))
- **BPlaceholderTable:** bplaceholder tfoot attrs are separated ([4c6dd4d](https://github.com/cdmoro/bootstrap-vue-3/commit/4c6dd4db91fc91b9c528f99df557eba9e07d596b))
- **BPlaceholderTable:** bplaceholder thead attrs are separated ([4c6dd4d](https://github.com/cdmoro/bootstrap-vue-3/commit/4c6dd4db91fc91b9c528f99df557eba9e07d596b))
- **BPlaceholderTable:** slot tfoot to overwrite default tfoot ([4c6dd4d](https://github.com/cdmoro/bootstrap-vue-3/commit/4c6dd4db91fc91b9c528f99df557eba9e07d596b))
- **BPlaceholderTable:** slot thead to overwrite default thead ([4c6dd4d](https://github.com/cdmoro/bootstrap-vue-3/commit/4c6dd4db91fc91b9c528f99df557eba9e07d596b))

### Bug Fixes

- **BPlaceholderCard:** remove unnecessary inner div on body ([4c6dd4d](https://github.com/cdmoro/bootstrap-vue-3/commit/4c6dd4db91fc91b9c528f99df557eba9e07d596b))

## [0.3.9](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.8...v0.3.9) (2022-10-03)

### Features

- **BModal:** :sparkles: Add modal-header slot and rename footer slot ([8e0da98](https://github.com/cdmoro/bootstrap-vue-3/commit/8e0da985a1039548111792ffb8e6af992c853473))

## [0.3.8](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.7...v0.3.8) (2022-09-30)

### Bug Fixes

- **#697:** labelCols class not working ([5162eb9](https://github.com/cdmoro/bootstrap-vue-3/commit/5162eb9987e3bd654286dd5a6cf2d40adad54f07))
- **BLink:** has class activeClass when prop active ([064fef9](https://github.com/cdmoro/bootstrap-vue-3/commit/064fef9624448c5fd711086e519d66bf83eefff7))
- **BLink:** has class exactActiveClass when prop exact ([064fef9](https://github.com/cdmoro/bootstrap-vue-3/commit/064fef9624448c5fd711086e519d66bf83eefff7))
- **BModal:** dispose modal before unmount ([1c54484](https://github.com/cdmoro/bootstrap-vue-3/commit/1c54484d2f60a32dedd541966c9c8d360976c295))
- **BNavItem:** passes activeClass to be active ([5e1348a](https://github.com/cdmoro/bootstrap-vue-3/commit/5e1348a6b2c552197f8d651043d22a310249846c))

## [0.3.7](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.6...v0.3.7) (2022-09-28)

### Bug Fixes

- dts build error on breadcrumbitem ([8ee6b8e](https://github.com/cdmoro/bootstrap-vue-3/commit/8ee6b8e98c631fca1b82757e9568dcfd376f1973))

## [0.3.6](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.5...v0.3.6) (2022-09-28)

### ⚠ BREAKING CHANGES

- **BAlert:** rename slot dismissible to close
- rename component card-sub-title to card-subtitle
- remove last remants of SubTitle to Subtitle
- **BAlert:** rename dismiss event to close
- remove last remants of SubTitle to Subtitle
- **BAlert:** rename slot dismissible to close
- **BAlert:** rename dismiss event to close
- **BInputGroupPrepend:** remove useless props
- **BInputGroupAppend:** remove useless props

### Features

- **BAlert:** rename slot dismissible to close ([44657a7](https://github.com/cdmoro/bootstrap-vue-3/commit/44657a70b05937cb4eff1331d39ef52efc846736))
- **BAlert:** rename slot dismissible to close ([fa63831](https://github.com/cdmoro/bootstrap-vue-3/commit/fa63831a93d706fc8452730fb9e7d93ba43ee55f))
- **BCardImg:** add blank img options to cardimg ([f737fc3](https://github.com/cdmoro/bootstrap-vue-3/commit/f737fc3417f991b68ad67a3b62cefe8db93b627c))
- **BCardImg:** add prop sizes and srcset ([f737fc3](https://github.com/cdmoro/bootstrap-vue-3/commit/f737fc3417f991b68ad67a3b62cefe8db93b627c))
- **BCardImg:** emit up load event ([f737fc3](https://github.com/cdmoro/bootstrap-vue-3/commit/f737fc3417f991b68ad67a3b62cefe8db93b627c))
- **BImg:** add start and end props ([d6d354b](https://github.com/cdmoro/bootstrap-vue-3/commit/d6d354b7c3894c4e93e4c7db1400c4a6793abdd8))
- **BInputGroupAppend:** remove useless props ([b9b3fd3](https://github.com/cdmoro/bootstrap-vue-3/commit/b9b3fd316b62d4c7e0910bf26eaa74232713e883))
- **BInputGroupPrepend:** remove useless props ([b9b3fd3](https://github.com/cdmoro/bootstrap-vue-3/commit/b9b3fd316b62d4c7e0910bf26eaa74232713e883))
- BPlaceholder.vue ([f826406](https://github.com/cdmoro/bootstrap-vue-3/commit/f8264069a50962f2e11e5ccf317e8523b7b4d299))
- **BPlaceholder:** allow any width ([9153b43](https://github.com/cdmoro/bootstrap-vue-3/commit/9153b437c9592e6144c71644ac4dc9723a4eeedc))
- **BPlaceholder:** allow any width ([355b774](https://github.com/cdmoro/bootstrap-vue-3/commit/355b7743299a5df969ed3433fe5ddd78e088637f))
- BPlaceholderCard.vue -- work in progress ([f826406](https://github.com/cdmoro/bootstrap-vue-3/commit/f8264069a50962f2e11e5ccf317e8523b7b4d299))
- BPlaceholderTable.vue ([f826406](https://github.com/cdmoro/bootstrap-vue-3/commit/f8264069a50962f2e11e5ccf317e8523b7b4d299))
- BPlaceholderWrapper.vue ([f826406](https://github.com/cdmoro/bootstrap-vue-3/commit/f8264069a50962f2e11e5ccf317e8523b7b4d299))
- **ButtonToolbar:** make prop role ([44657a7](https://github.com/cdmoro/bootstrap-vue-3/commit/44657a70b05937cb4eff1331d39ef52efc846736))
- **ButtonToolbar:** make prop role ([fa63831](https://github.com/cdmoro/bootstrap-vue-3/commit/fa63831a93d706fc8452730fb9e7d93ba43ee55f))
- **CloseButton:** emit click event up ([44657a7](https://github.com/cdmoro/bootstrap-vue-3/commit/44657a70b05937cb4eff1331d39ef52efc846736))
- **CloseButton:** emit click event up ([fa63831](https://github.com/cdmoro/bootstrap-vue-3/commit/fa63831a93d706fc8452730fb9e7d93ba43ee55f))

### Bug Fixes

- **#470:** no rounded corners when using BInputGrooupPrepend or BInputGroupAppend ([b9b3fd3](https://github.com/cdmoro/bootstrap-vue-3/commit/b9b3fd316b62d4c7e0910bf26eaa74232713e883))
- **#714:** v-bind={text} causes breaking items to not display text in nested BLink component ([9153b43](https://github.com/cdmoro/bootstrap-vue-3/commit/9153b437c9592e6144c71644ac4dc9723a4eeedc))
- **#714:** v-bind={text} causes breaking items to not display text in nested BLink component ([9d4060f](https://github.com/cdmoro/bootstrap-vue-3/commit/9d4060fa5d41a52c4aba623d1ed6ac40b420d72c))
- **BAlert:** rename dismiss event to close ([44657a7](https://github.com/cdmoro/bootstrap-vue-3/commit/44657a70b05937cb4eff1331d39ef52efc846736))
- **BAlert:** rename dismiss event to close ([534bfa5](https://github.com/cdmoro/bootstrap-vue-3/commit/534bfa59ed83f8785b18ef234f25bbd9f337dbe3))
- **BAvatar:** fix tag to be button and has attr type when prop button and prop buttonType ([0448cfa](https://github.com/cdmoro/bootstrap-vue-3/commit/0448cfa34b5bbeac3376d00b9b02b4ac2e672a71))
- **BInputGroup:** fixed BInputGroup awareness of its nested children borders radius ([5679c29](https://github.com/cdmoro/bootstrap-vue-3/commit/5679c29df6869773fb89e296ec831b9fa93f9994))
- **BPlaceholder:** limit when both cols and width ([78b2dba](https://github.com/cdmoro/bootstrap-vue-3/commit/78b2dba4f004edbcd330ccc783b35150ed23ea78))
- remove last remants of SubTitle to Subtitle ([44657a7](https://github.com/cdmoro/bootstrap-vue-3/commit/44657a70b05937cb4eff1331d39ef52efc846736))
- remove last remants of SubTitle to Subtitle ([ac66fe4](https://github.com/cdmoro/bootstrap-vue-3/commit/ac66fe441e3a9b90bd37a22e0244f7f7294f159c))
- rename component card-sub-title to card-subtitle ([44657a7](https://github.com/cdmoro/bootstrap-vue-3/commit/44657a70b05937cb4eff1331d39ef52efc846736))
- workaround for git being dumb ([2ac043f](https://github.com/cdmoro/bootstrap-vue-3/commit/2ac043ff59378bf49cced314047344f3f43589f9))
- workaround for git being dumb ([3ced7ef](https://github.com/cdmoro/bootstrap-vue-3/commit/3ced7ef3c0e9ba7110735916c040a156cfa7082c))
- workaround for git being dumb ([06f1581](https://github.com/cdmoro/bootstrap-vue-3/commit/06f1581e09f849837a8df5ab6b084cbf0d05156e))
- workaround for git being dumb ([4dbdc3d](https://github.com/cdmoro/bootstrap-vue-3/commit/4dbdc3dce6505140143ccb1c6ed3febc3c3a8d86))

### Miscellaneous Chores

- release 0.3.6 ([17ceb11](https://github.com/cdmoro/bootstrap-vue-3/commit/17ceb11477897bdd44e7545a3710dc169703ff7f))

## [0.3.5](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.4...v0.3.5) (2022-09-23)

### Features

- **BTable:** added a simple version of sort-compare prop ([7373350](https://github.com/cdmoro/bootstrap-vue-3/commit/7373350d72759582c83651f3d1f88da08ab17708))
- **Carousel:** create a startingSlide prop ([4a34ade](https://github.com/cdmoro/bootstrap-vue-3/commit/4a34adea10d9d732ce53cfa018d045faf7469d87))

### Bug Fixes

- **BFormGroup:** label-align prop not working ([398744a](https://github.com/cdmoro/bootstrap-vue-3/commit/398744aebb65fb8f2c3a814b51a4840f9277c8cd))
- **BModal:** strongly type props ([8776e40](https://github.com/cdmoro/bootstrap-vue-3/commit/8776e40c9677c1493ed214f8cb68e1934f960a51))
- **Card:** subTitle prop renamed to subtitle as it is one word ([8776e40](https://github.com/cdmoro/bootstrap-vue-3/commit/8776e40c9677c1493ed214f8cb68e1934f960a51))
- **Carousel:** get it to work again due to broken useSlot() features ([4a34ade](https://github.com/cdmoro/bootstrap-vue-3/commit/4a34adea10d9d732ce53cfa018d045faf7469d87))
- non imported items in dts files ([5981902](https://github.com/cdmoro/bootstrap-vue-3/commit/598190280758fd532f75290646a4435cd4741fb2))

## [0.3.4](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.3...v0.3.4) (2022-09-20)

### Features

- add props toggleClass to BnavItemDropdown ([d90611a](https://github.com/cdmoro/bootstrap-vue-3/commit/d90611aef4bb2652562bb482deaf2344cf1b59ec))
- **BAlert:** slot dismissible overwrites close ([804e8b2](https://github.com/cdmoro/bootstrap-vue-3/commit/804e8b2cab3fa4fe8e27a46f53faae572e32e7a7))
- **BCloseButton:** add in optional prop type to override type=button default ([804e8b2](https://github.com/cdmoro/bootstrap-vue-3/commit/804e8b2cab3fa4fe8e27a46f53faae572e32e7a7))
- **BTable:** added emptyText and emptyFilteredText props to customize the shown message when the table is empty and show-empty prop is set to true ([1336537](https://github.com/cdmoro/bootstrap-vue-3/commit/1336537aa2fbd572e3a3e84b606d2e14b29ffef8))
- **BTable:** added no-provider-paging, no-provider-sorting, and no-provider-filtering props for an easier switch from BSV2 (can be used with/without or replace the no-provider prop) ([82b0b36](https://github.com/cdmoro/bootstrap-vue-3/commit/82b0b36ea9c379ba8890f0ff1cf3aa74caf25bc2))
- **BTable:** added no-providing prop which is an alternative to the no-provider-.. props of BSV2 ([c40ac06](https://github.com/cdmoro/bootstrap-vue-3/commit/c40ac06c146ee7a9bb794e49763f4f9740e29cc5))
- **BTable:** added show-empty prop along with the #empty slot to customize the empty message ([0918583](https://github.com/cdmoro/bootstrap-vue-3/commit/0918583e2f4ff7f94b91502beae5fd959d7cd9b2))
- **BTable:** added sortIcon slot, the slot allows you to customize the table's sort icons by providing you some info about the applied sort ([24cd37f](https://github.com/cdmoro/bootstrap-vue-3/commit/24cd37fe1e0f9acb8a795835e0864ea85ccdb899))
- **Offcanvas:** add noHeader prop ([94fdebd](https://github.com/cdmoro/bootstrap-vue-3/commit/94fdebdcfa5dbddb91b50eefb1a96b2ce8d01be9))
- **Offcanvas:** add noHeaderClose prop ([94fdebd](https://github.com/cdmoro/bootstrap-vue-3/commit/94fdebdcfa5dbddb91b50eefb1a96b2ce8d01be9))
- **Offcanvas:** add slot footer ([94fdebd](https://github.com/cdmoro/bootstrap-vue-3/commit/94fdebdcfa5dbddb91b50eefb1a96b2ce8d01be9))
- **Offcanvas:** add slot for header ([94fdebd](https://github.com/cdmoro/bootstrap-vue-3/commit/94fdebdcfa5dbddb91b50eefb1a96b2ce8d01be9))

### Bug Fixes

- **BAvatarGroup:** attempted mutation of readonly ([f2fcd74](https://github.com/cdmoro/bootstrap-vue-3/commit/f2fcd74c9f91f1195da909e90fcf06e93b783f10))
- **BModal:** Fixed escape key close event not updating v-model prop ([57801a4](https://github.com/cdmoro/bootstrap-vue-3/commit/57801a4643453e2ab0ab1b4561ffe897e73a2226))
- **BModal:** fixed the modal's close button located in the header where the button click was not updating `v-model` value ([35a11da](https://github.com/cdmoro/bootstrap-vue-3/commit/35a11da233e1ddfc9420916342bc96d9aaec6b70))
- **BModal:** fixed the modal's close button located in the header where the button click was not updating v-model value ([fe00e61](https://github.com/cdmoro/bootstrap-vue-3/commit/fe00e61879655d324cb49e200d6a23faf59797e9))
- **BModal:** include explicit import of BCloseButton ([fd445e0](https://github.com/cdmoro/bootstrap-vue-3/commit/fd445e09181e73e9e44433f54df76c73e369bb29))
- **BTableContainer:** fix up new classes prop ([75509ef](https://github.com/cdmoro/bootstrap-vue-3/commit/75509ef112e259f30125c3d5d0935078acfba93e))
- **BTable:** fixed anchor tags not working inside the table rows ([7d521dd](https://github.com/cdmoro/bootstrap-vue-3/commit/7d521ddfab45177ac3afb5e1f360603a03b480ee))
- **directives:** export proper naming schemes ([f8adcaa](https://github.com/cdmoro/bootstrap-vue-3/commit/f8adcaa162a7d3b2109847da6e5985fd54621256))
- **pluckProps:** fix wrong ts ([f2fcd74](https://github.com/cdmoro/bootstrap-vue-3/commit/f2fcd74c9f91f1195da909e90fcf06e93b783f10))
- prop name ([a72cd1d](https://github.com/cdmoro/bootstrap-vue-3/commit/a72cd1df5eed621a94292c0cbf9881f1f6d9e34b))
- renamed bootstrap 5 utilities classes ([a68bb52](https://github.com/cdmoro/bootstrap-vue-3/commit/a68bb5250a96bb50de0d337e0244af5e5b568ac8))

## [0.3.3](https://github.com/cdmoro/bootstrap-vue-3/compare/v0.3.2...v0.3.3) (2022-09-13)

### Features

- adds slots to component reference docs ([1e9026b](https://github.com/cdmoro/bootstrap-vue-3/commit/1e9026b943acc0b303655801a287aaea209cdd9d))
- **b-dropdown-item:** :sparkles: Bind class attribute to the root ([f0063ef](https://github.com/cdmoro/bootstrap-vue-3/commit/f0063efa8c0744a0528ce4249ae695f69d6a5e70))
- **BNavText:** add optional text prop ([d77abc5](https://github.com/cdmoro/bootstrap-vue-3/commit/d77abc517a503bed1656d1f3ab33cce9720ac6ab))
- **BTab:** added new lazyOnce prop, The prop works similar to the lazy prop but it mounts the child component only once. ([5f4240b](https://github.com/cdmoro/bootstrap-vue-3/commit/5f4240b0eb2bae717440187241dddb95f6853ee3))
- **BTable:** added filter prop to filter the table content, added filterable prop to specify which fields should be filtered ([2e37dc1](https://github.com/cdmoro/bootstrap-vue-3/commit/2e37dc154ebb4e4b4da89da922cf30b452b641e8))
- **BTable:** added functionality to current-page prop, The prop shows a specific page of the given items when the per-page prop is passed. ([f177563](https://github.com/cdmoro/bootstrap-vue-3/commit/f177563eca1a015c90ada2be9ad9c52536845dfe))
- **BTable:** implemented per page prop ([f5d52d3](https://github.com/cdmoro/bootstrap-vue-3/commit/f5d52d3b8be8a95a33b588d76b4d0d7932063b82))
- **Btable:** sortable tables now have the sort icon added using CSS which makes it globally customizable ([0639fce](https://github.com/cdmoro/bootstrap-vue-3/commit/0639fcea30017b6576feccdc20466344a399e149))
- **BTable:** sortInternal default to true ([aac2b68](https://github.com/cdmoro/bootstrap-vue-3/commit/aac2b68f7bc8672246107c650e7c928dd336c201))

### Bug Fixes

- **BButtonGroup:** strong type prop size ([d77abc5](https://github.com/cdmoro/bootstrap-vue-3/commit/d77abc517a503bed1656d1f3ab33cce9720ac6ab))
- **BDropdown:** click event emits MouseEvent ([d77abc5](https://github.com/cdmoro/bootstrap-vue-3/commit/d77abc517a503bed1656d1f3ab33cce9720ac6ab))
- **BNavbarToggle:** click event emits MouseEvent ([d77abc5](https://github.com/cdmoro/bootstrap-vue-3/commit/d77abc517a503bed1656d1f3ab33cce9720ac6ab))
- **BNavForm:** pass submit event up ([d77abc5](https://github.com/cdmoro/bootstrap-vue-3/commit/d77abc517a503bed1656d1f3ab33cce9720ac6ab))
- **BTable:** fixed incorrect responsive-class prop name which was disabling the responsive functionality ([eb3ca5c](https://github.com/cdmoro/bootstrap-vue-3/commit/eb3ca5cf110063185a014f6d4a2eb2bcccacc3b6))
- **BTable:** Fixed sorting when sorting had no effect when trying to sort an object-formed column that includes multiple properties (ex: name: { first: 'Dickerson', last: 'Macdonald' }) ([658d2ec](https://github.com/cdmoro/bootstrap-vue-3/commit/658d2ec776775ff5137b70832128b0a2e403beed))
- **BTable:** header display changed to be inline to allow few abilties such as centering text using CSS ([caf495e](https://github.com/cdmoro/bootstrap-vue-3/commit/caf495e9e8575cc2279680b94324d86dd7cd1b59))

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
