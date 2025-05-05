:robot: I have created a release *beep* *boop*
---


<details><summary>nuxt: 0.30.0</summary>

## [0.30.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/nuxt-v0.29.0...nuxt-v0.30.0) (2025-05-05)


###   BREAKING CHANGES

* **BTable:** fix a long standing regression in which the comparer function in btable did not give the item value, instead passing a string fixes #2565
* **useToast:** rename useToast to useToastController fixes #2155
* **BDropdown:** remove props center, dropend, dropstart, dropup, & end -- use single prop placement -- has same rules as popover. placement=top-start placement=bottom-start placement=right-start etc etc fixes #1752
* **BProgress:** fix markup for BProgress to match bootstrap 5.3 recommended fixes #2221 . Manual intervention may not be needed, double check your aria markup (if manually configured), may be automatic
* **BModal:** remove prop backdropVariant
* **BModal:** revert back to using the native `div.modal-backdrop`
* **BOffcanvas:** revert back to native `div.offcanvas-backdrop`
* **BOffcanvas:** remove prop backdropBlur and backdropVariant
* **createBootstrap:** remove automatic import of components and directives fixing an issue with createBootstrap bloating the project size. When components were unused, it bloated the project size -- ie not tree shaking when you only used the plugins
* **createBootstrap:** flatten the params object. The previous "plugins" key is now the top most level object => `{ plugins: { id: {} }` => `{ id: {} }` and so on
* **createBootstrap:** remove alias in createBootstrap, use alias in unplugin-vue-components resolver instead
* remove the default export. Use named export `createBootstrap` instead
* **BOffcanvas:** rename prop backdrop to hideBackdrop to be more in line with standard of bmodal
* remove binputgroupappend binputgroupprepend => use component binputgrouptext
* **BFormInput:** move props lazy, trim & number to v-model modifier. Modifiers should behave more like native Vue modifiers (number modifier with unparseable value returns value as is)
* **BreakpointProps:** strongly type breakpoints. Instead of weak string | number => 1,2,3...'1','2','3'...
* **BDropdown:** replace "container" prop with "teleportTo"
* **BPopover:** replace "container" prop with "teleportTo"
* **BTable:** deprecate noSortReset, use `mustSort`
* **BFormTags:** remove input event -- use https://github.com/update:modelValue

### Features

* **BAlert:** add noResumeOnHoverLeave prop ([69316a5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/69316a565f39f0b17932dcf6691a287f0ce4ed9d))
* **BCarouselSlide:** allow individual interval for slides ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **BDropdown:** add teleportDisabled prop ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BDropdown:** remove props center, dropend, dropstart, dropup, & end -- use single prop placement -- has same rules as popover. placement=top-start placement=bottom-start placement=right-start etc etc fixes [#1752](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1752) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BDropdown:** replace "container" prop with "teleportTo" ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BFormCheckbboxGroup:** spread the input object rather than el.props fixes [#2590](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2590) ([2c3970c](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BFormInput:** move props lazy, trim & number to v-model modifier. Modifiers should behave more like native Vue modifiers (number modifier with unparseable value returns value as is) ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **BFormInput:** type number performs the same as modifier ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **BFormRadioGroup:** spread the input object rather than el.props fixes [#2590](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2590) ([2c3970c](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BFormTags:** remove input event -- use https://github.com/update:modelValue ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* bimg prop tag ([5e511a6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5e511a6a83b2193aa240e1839f1c7a3a3545cae8))
* **BModal:** remove prop backdropVariant ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **BModal:** revert back to using the native `div.modal-backdrop` ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **BOffcanvas:** remove prop backdropBlur and backdropVariant ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **BOffcanvas:** rename prop backdrop to hideBackdrop to be more in line with standard of bmodal ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **BOffcanvas:** revert back to native `div.offcanvas-backdrop` ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **BPopover:** add teleportDisabled prop ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BPopover:** replace "container" prop with "teleportTo" ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BProgress:** fix markup for BProgress to match bootstrap 5.3 recommended fixes [#2221](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2221) . Manual intervention may not be needed, double check your aria markup (if manually configured), may be automatic ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BreakpointProps:** strongly type breakpoints. Instead of weak string | number =&gt; 1,2,3...'1','2','3'... ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **BTable:** add emptyText and emptyFilteredText functionality fixes [#664](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/664) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** add functional syntax for sortAsc/sortDesc/sortDefault `sortAsc(fieldKey)` to specify the sort content for that specific field ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** add prop multisort ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** allow Numberish values =&gt; string is interpreted as is with maxHeight, numbers are converted to ${number}px maxHeight ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** deprecate noSortReset, use `mustSort` ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BToast:** add noResumeOnHoverLeave prop ([69316a5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/69316a565f39f0b17932dcf6691a287f0ce4ed9d))
* **createBootstrap:** flatten the params object. The previous "plugins" key is now the top most level object =&gt; `{ plugins: { id: {} }` =&gt; `{ id: {} }` and so on ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **createBootstrap:** remove alias in createBootstrap, use alias in unplugin-vue-components resolver instead ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **createBootstrap:** remove automatic import of components and directives fixing an issue with createBootstrap bloating the project size. When components were unused, it bloated the project size -- ie not tree shaking when you only used the plugins ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* export component prop types ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* implement a use defaults system fixes [#1607](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1607) ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* implement global alias system fixes [#1753](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1753) ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* implmenet a use defaults system WIP fixes [#1607](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1607)  ([#1889](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1889)) ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **modalController:** make {} default for show/confirm -- param not required ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* namespace out package - bootstrap-vue-next/directives bootstrap-vue-next/components etc ([69316a5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/69316a565f39f0b17932dcf6691a287f0ce4ed9d))
* **nuxt:** add css option to not automatically include css ([f6adcee](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f6adceeb2ce4d994215f7864c1adaf39deaa9160))
* **nuxt:** allow passthrough options to createBootstrap plugin ([5458a5a](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5458a5afd8bb46d3951f3fdee048f85030bc32de))
* **nuxt:** automatically globally set teleportTo to `#teleports` ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **PluginControllers:** Allow for using the prop.id for the items key. Ie if you supply modalController.show({props: {id: 'foo' }}) You can reference it leave('foo') ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* remove binputgroupappend binputgroupprepend =&gt; use component binputgrouptext ([5e511a6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5e511a6a83b2193aa240e1839f1c7a3a3545cae8))
* remove the default export. Use named export `createBootstrap` instead ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **toast:** make {} default for show -- param not required ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* use vues useId fn ([69316a5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/69316a565f39f0b17932dcf6691a287f0ce4ed9d))
* **usePopoverController:** create usePopoverController composable (not fully complete) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **useToast:** rename useToast to useToastController fixes [#2155](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2155) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **utils:** inject getId to allow for custom id generation ([#1836](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1836)) ([c9e60f5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/c9e60f57da5ab703a75433a521ebd55eb26ac569))


### Bug Fixes

* **BAvatar:** avatar style getting literal Size values fixes [#2535](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2535) ([7621aad](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/7621aad0000c9138983315630e35657c6eb97f08))
* **BDropdown:** bdropdown when in button group has class btn-group fixes [#2025](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2025) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BLink:** Link receiving / href when trying to use href prop fixes [#2434](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2434) ([#2438](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2438)) ([aea1798](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/aea179881c27e429b1588a62844fd230ec36df0d))
* **BLink:** nuxt should do full page reloads on to prop fixes [#2445](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2445) ([#2449](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2449)) ([cce9833](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cce9833ebd91bcfe1037ffb6422edfdc03389198))
* **BTable:** busy slot behavior to match bootstrap-vue fixes [#1636](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1636) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** cast formatted items to string fixes [#2227](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2227) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** duplicate labels with both labelstacked and label fixes [#2608](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2608) ([0658251](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/0658251e3a592835c89b829993ea874a54b4ae22))
* **BTable:** fix a long standing regression in which the comparer function in btable did not give the item value, instead passing a string fixes [#2565](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2565) ([05d0b6e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/05d0b6ef7f2561683d06132354616933a0455307))
* **BTable:** fix handleFieldSorting algorithm to properly handle multisort with mustSort ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** generic types ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTableLite:** stacked uses field key instead of defined label fixes [#2591](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2591) ([05d0b6e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/05d0b6ef7f2561683d06132354616933a0455307))
* **BTable:** set sort values to undefined so we dont accidentally wipe user defined comparer functions ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** stacked mode when using breakpoint data-label not rendering fixes [#2595](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2595) ([2c3970c](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BTable:** stickyHeader true causes maxHeight 300px ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* change renderorskip to wrapper, add our own teleport logic. ([#2162](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2162)) ([8c0acbd](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8c0acbd2ca957be27dd618bb7e33b7ff943973be))
* **generics:** use generic constraints for BTable & BTableLite ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* modal transitions fixes  [#1861](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1861) ([5e511a6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5e511a6a83b2193aa240e1839f1c7a3a3545cae8))
* **nuxt:** dont teleport everything to #teleports -- selectively teleport based on body fixes [#1898](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1898) ([e986e94](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e986e94a7a3db64334ecac6927a7d384cbe5882f))
* **nuxt:** module using wrong routerComponentName causing default a tag to do full page reloads ([#2465](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2465)) ([c737ec2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/c737ec255b8eb848a6711eea5383cbf20b002556))
* some migration issues with defineModel ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* Some prop types were build wrong because of vue bug ([3459a54](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3459a54f4242509a6a23e9a48430de5f3d190157))
* types generation -- use interfaces for componentprops ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* update dependencies to fix a bug in vue compiler ([#1866](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1866)) ([b2c56bf](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b2c56bff644177d5653b628a9cbb30ffa5c7055a))
* update deps fixes [#2487](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2487) ([#2617](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2617)) ([5f4416e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5f4416eaf644145cb3f454e051905a851b6a0091))


### Performance Improvements

* **BTable:** use a single array.reduce instead of multiple verbose methods when iterating the items array. Reducing the total number of iterations fixes [#2404](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2404) ([7621aad](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/7621aad0000c9138983315630e35657c6eb97f08))
* **nuxt:** smaller package ([#2012](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2012)) ([cc1e609](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cc1e60973b76575fa2cd3ef12ea919fabf152085))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * bootstrap-vue-next bumped to 0.30.0
  * peerDependencies
    * bootstrap-vue-next bumped to 0.30.0
</details>

<details><summary>bootstrapvuenext: 0.30.0</summary>

## [0.30.0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/compare/bootstrapvuenext-v0.29.0...bootstrapvuenext-v0.30.0) (2025-05-05)


###   BREAKING CHANGES

* **BPopover:** change prop content to body to align with other components
* **BTooltip:** change prop content to body to align with other components
* **useModalController:** move props to main level, add slots
* **useToastController:** remove props obj, the parameters are flat now. Add slots, rename pos -> position
* controller composables functions return promise, with id and chainable functions
* **useModalController:** change of api, check the docs
* **BAlert:** make act like toast, useShowHide.
* **BOffcanvas:** remove nofocus prop and add more versitile focus prop
* **BModal:** remove autofocus and autofocusButton props and add more versitile focus prop
* **BTable:** fix a long standing regression in which the comparer function in btable did not give the item value, instead passing a string fixes #2565
* **BCarousel:** rename 'click:prev' and 'click:next" to 'prev-click' and 'next-click'
* **BDropdown:** rename 'click:split' to 'split-click'
* **BDdropdown:** Replace click event on split button with split-click
* **show/hide:** make components that show/hide use a composable useShowHide
* **show/hide:** add props lazy and unmount-lazy
* **show/hide:** many animation fixes
* **show/hide:** add prop initial-animation to animate on initial render if modelValue is true, otherwise display the component without animation
* **BPopover:** change slot prop showState to visible
* **BPopover:** remove prop persistent, use lazy instead
* many changes to show/hide components (BCollapse,BDropdown,BModal,BOffcanvas,BPopover,BTooltip,BToast) and rename props starting with skip or hide to start with no
* remove html props -- use equivalent slots fixes #1930 ([#2311](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2311))
* **BFormRadioGroup:** add slot option to replace html prop
* **BFormCheckboxGroup:** add slot option to replace html prop
* **useToast:** rename useToast to useToastController fixes #2155
* **BDropdown:** remove props center, dropend, dropstart, dropup, & end -- use single prop placement -- has same rules as popover. placement=top-start placement=bottom-start placement=right-start etc etc fixes #1752
* **BProgress:** fix markup for BProgress to match bootstrap 5.3 recommended fixes #2221 . Manual intervention may not be needed, double check your aria markup (if manually configured), may be automatic
* **BTable:** rename event row-dbl-clicked to row-dblclicked ([#2239](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2239))
* **BModal:** autoFocus prop renamed to autofocus to align with Input elements
* **BFormFloatingLabel:** remove prop text -- didn't make sense
* **package:** move remainder of dependencies to devDependencies -- if using typescript, you may need to install additional dev dependencies so the types are bundled properly
* **package:** move remainder of dependencies to devDependencies -- if using typescript, you may need to install additional dev dependencies so the types are bundled properly
* **BModal:** remove prop backdropVariant
* **BModal:** revert back to using the native `div.modal-backdrop`
* **BOffcanvas:** revert back to native `div.offcanvas-backdrop`
* **BOffcanvas:** remove prop backdropBlur and backdropVariant
* **createBootstrap:** remove automatic import of components and directives fixing an issue with createBootstrap bloating the project size. When components were unused, it bloated the project size -- ie not tree shaking when you only used the plugins
* **createBootstrap:** flatten the params object. The previous "plugins" key is now the top most level object => `{ plugins: { id: {} }` => `{ id: {} }` and so on
* **createBootstrap:** remove alias in createBootstrap, use alias in unplugin-vue-components resolver instead
* remove the default export. Use named export `createBootstrap` instead
* **BOffcanvas:** rename prop backdrop to hideBackdrop to be more in line with standard of bmodal
* **BTable:** remove selected event -- use @update:selectedItems ([#1962](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1962))
* remove binputgroupappend binputgroupprepend => use component binputgrouptext
* **BFormFile:** remove props placement and browser
* **BFormFile:** remove unneeded input-group div
* **Bimg:** converge props start, end, & center into single "placement" prop
* **BCardImg:** converge placment props into single "placement" prop. top, bottom, start,end, center => placement
* **BLink:** remove prop append -- vue router deprecation
* **BTable:** remove prop noSortReset, use mustSort ... by default sortability can be reset by clicking (3) times [asc => desc => undefined => asc...]
* **BAvatar:** remove icon prop - use svg in slot if needed
* **BBadge:** revamp, remove prop textIndicator -- use prop placement (bootstrap also says parent elements should have position-relative class... Not sure how much this affects things)
* **BCard:** remove prop overlay, add it into the imgPlacement prop (imgPlacement="overlay")
* **BAvatar:** remove props badgeTop, badgeStart -- use badgePlacement instead
* **BAvatar:** remove prop badgeOffset, no alternative added
* **BFormInput:** move props lazy, trim & number to v-model modifier. Modifiers should behave more like native Vue modifiers (number modifier with unparseable value returns value as is)
* **BreakpointProps:** strongly type breakpoints. Instead of weak string | number => 1,2,3...'1','2','3'...
* **BDropdown:** replace "container" prop with "teleportTo"
* **BPopover:** replace "container" prop with "teleportTo"
* **BTable:** deprecate noSortReset, use `mustSort`
* **BFormTags:** remove input event -- use https://github.com/update:modelValue

### Features

* add __usedComponents __usedDirectives property to the BootstrapVueNextResolver function ([#2351](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2351)) ([7a0cfa9](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/7a0cfa91e98abff85a9b7b47e54b0dd2a59bf61a))
* add BFormDatalist ([b5b4390](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b5b43905162bda2cdabaf2fad38bb542d6e90fb4))
* add option slot syntax to other group components ([ce01648](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BAlert:** add noResumeOnHoverLeave prop ([69316a5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/69316a565f39f0b17932dcf6691a287f0ce4ed9d))
* **BAlert:** make act like toast, useShowHide. ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **BAvatar:** add prop badgeDotIndicator ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BAvatar:** add prop badgePill ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BAvatar:** remove icon prop - use svg in slot if needed ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BAvatar:** remove prop badgeOffset, no alternative added ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BAvatar:** remove props badgeTop, badgeStart -- use badgePlacement instead ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BBadge:** add prop placement with directions to place on element ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BBadge:** dotindicator follows placement of prop placement ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BBadge:** revamp, remove prop textIndicator -- use prop placement (bootstrap also says parent elements should have position-relative class... Not sure how much this affects things) ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BBadge:** when dotIndicator is true, use class visually-hidden on text ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BBreadcrumb:** allow it to use individual breadcrumb trails with useBreadcrumb by passing prop id to component and id param to composable fixes [#2630](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2630) ([0271b95](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/0271b956b25b5b837698cca81bfe64af9dde8ebd))
* **BCardImg:** converge placment props into single "placement" prop. top, bottom, start,end, center =&gt; placement ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BCard:** remove prop overlay, add it into the imgPlacement prop (imgPlacement="overlay") ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BCarousel:** add aria attributes, add prop labelIndicators ([#2293](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2293)) ([c3f8199](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/c3f8199a609affb46dc5b7b0efc08e8c12c9e973))
* **BCarousel:** add click:prev and click:next events ([228926e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/228926e90d538e7087ad3693733e9f41e494721d))
* **BCarousel:** add noAnimation prop ([#2194](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2194)) ([ff2a1f1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ff2a1f1634f52bd3952684b76bdc6f4cb8fea58e))
* **BCarouselSlide:** allow individual interval for slides ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **BDropdown:** add skipWrapper and wrapperClass props ([bb5cdc5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bb5cdc5b04a6167a757dccd48fa8d29bcd190468))
* **BDropdown:** add teleportDisabled prop ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BDropdown:** add variant, classes and correct attrs to text sub components ([d2d4905](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d2d4905e5506ca7b15aa285a8acd972469db3d38))
* **BDropdown:** add variant, classes and correct attrs to text sub components ([#2258](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2258)) ([d2d4905](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d2d4905e5506ca7b15aa285a8acd972469db3d38))
* **BDropdownForm:** add validated and novalidate to form ([d2d4905](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d2d4905e5506ca7b15aa285a8acd972469db3d38))
* **BDropdown:** id for split and menu elements ([2caf82b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2caf82bfbe894d981d649156ad44dd627d062712))
* **BDropdown:** remove props center, dropend, dropstart, dropup, & end -- use single prop placement -- has same rules as popover. placement=top-start placement=bottom-start placement=right-start etc etc fixes [#1752](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1752) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BDropdown:** replace "container" prop with "teleportTo" ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BFormCheckbboxGroup:** spread the input object rather than el.props fixes [#2590](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2590) ([2c3970c](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BFormCheckboxGroup:** add slot option to replace html prop ([ce01648](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BFormFile:** add option to remove the default button and/or styles ([14534d1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/14534d1e5529483294dcd3f313866d8fb0d17df0))
* **BFormFloatingLabel:** require default slot ([1c2722a](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1c2722a5951f1234cdb576fad473ae75c761d150))
* BFormGroup to SFC -- more a refactor, but be mindful of accidental changes. Please submit issue reports if things look wrong. Also you can now use useDefaults now with BFormGroup ([07daa80](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/07daa80aef41df5b8e31578c2bc695823c2f6510))
* **BFormGroup:** add the ability to automatically get the ids from inputs and apply them to the associated label element ([ce01648](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BFormGroup:** automatically add state to child element fixes [#2476](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2476) ([#2478](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2478)) ([25a77ee](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/25a77eefcb24a002626dbf7422666d36cde6f155))
* **BFormInput:** move props lazy, trim & number to v-model modifier. Modifiers should behave more like native Vue modifiers (number modifier with unparseable value returns value as is) ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **BFormInput:** type number performs the same as modifier ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **BFormRadioGroup:** add slot option to replace html prop ([ce01648](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BFormRadioGroup:** spread the input object rather than el.props fixes [#2590](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2590) ([2c3970c](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BFormTags:** add inputValue to exposed fixes [#2503](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2503) ([9c5129b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9c5129bd49d596efe3e74772e355a67dc8c22356))
* **BFormTags:** remove input event -- use https://github.com/update:modelValue ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BFormTextarea:** add props max-rows & no-auto-shrink fixes [#2077](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2077)  ([#2284](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2284)) ([87cbcb7](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/87cbcb7d7f1b88c3a28658ce44e48bdb4b9eae7a))
* **BFromGroup:** add class b-form-group ([2caf82b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2caf82bfbe894d981d649156ad44dd627d062712))
* **BFromRow:** Require default slot ([1c2722a](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1c2722a5951f1234cdb576fad473ae75c761d150))
* bimg prop tag ([5e511a6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5e511a6a83b2193aa240e1839f1c7a3a3545cae8))
* **BImg:** add class b-img ([2caf82b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2caf82bfbe894d981d649156ad44dd627d062712))
* **Bimg:** converge props start, end, & center into single "placement" prop ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BInput:** Alias BFormInput to BInput ([6ceeac5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/6ceeac5ce479ca758308ccf23f5e5df8673fd89b))
* **BLink:** add prop stretched to add class "stretched-link" ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BLink:** remove prop append -- vue router deprecation ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BLink:** use prop replace ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* BModal - add `backdrop` and `esc` events [#2054](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2054) ([ffda9b6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ffda9b6c3447add72f0ce426c10411f128cc3971))
* **BModal:** add focus trapping to modal fixes https://github.com/bootstrap-vue-next/bootstrap-vue-next/ ([ab8b9a0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ab8b9a019d14b9db263cfde00ad7efae13dffbe3))
* **BModal:** add okClass and cancelClass to add classes to the buttons. ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **BModal:** add prop noStacking fixes https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1182 ([ab8b9a0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ab8b9a019d14b9db263cfde00ad7efae13dffbe3))
* **BModal:** remove autofocus and autofocusButton props and add more versitile focus prop ([e6a89ef](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6a89efb6af359c19d93f70b257a0fb29e906bca))
* **BModal:** remove prop backdropVariant ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **BModal:** return focus to previous element on close ([e6a89ef](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6a89efb6af359c19d93f70b257a0fb29e906bca))
* **BModal:** revert back to using the native `div.modal-backdrop` ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **BNavForm:** add props wrapperAttrs & bind attrs.class to li also add prop formClass ([ce01648](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BOffcanvas:** add opened to breakpoint event ([#2443](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2443)) ([e82be33](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e82be33486a71d0e7412fb20c70e176be4db0d4c))
* **BOffcanvas:** add prop responsive ([bfe7e85](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bfe7e85c2afd6dab714099be3a988c27800cc970))
* **BOffcanvas:** allow specifying a width ([#1903](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1903)) ([01f87b8](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/01f87b8cecab1c66632d64b1d04c9b36f32dbe67))
* **BOffcanvas:** fire breakpoint on mounted & add ref into defineExpose as isOpenByBreakpoint ([083805b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/083805b6b533639b1209b9a312aa541528e74987))
* **BOffcanvas:** remove nofocus prop and add more versitile focus prop ([e6a89ef](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6a89efb6af359c19d93f70b257a0fb29e906bca))
* **BOffcanvas:** remove prop backdropBlur and backdropVariant ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **BOffcanvas:** rename prop backdrop to hideBackdrop to be more in line with standard of bmodal ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **BOffcanvas:** return focus to previous element on close ([e6a89ef](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6a89efb6af359c19d93f70b257a0fb29e906bca))
* **BOffcanvas:** revert back to native `div.offcanvas-backdrop` ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **BPagination:** add keyboard shortcuts fixes [#2153](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2153) ([69cf134](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/69cf134f9b22fe06bd8bc2e43f21617ecd17a296))
* **BPagination:** add small screen support ([#2308](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2308)) ([9764584](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/97645843d0d47afa69286fee4f965841295125ed))
* **BPopover:** Add close-on-hide prop to close the popover when it hides by clipping out of view ([#2040](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2040)) ([0102097](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/010209730e35464f1c3c612d738fdd08c73b2d5a))
* **BPopover:** add hideMargin prop to add margin to the hide boundary ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** add prop hideMargin ([bc4df5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bc4df5ffd9bbab0061ad80ca3d2266b3587b003b))
* **BPopover:** add teleportDisabled prop ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BPopover:** replace "container" prop with "teleportTo" ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BProgress:** fix markup for BProgress to match bootstrap 5.3 recommended fixes [#2221](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2221) . Manual intervention may not be needed, double check your aria markup (if manually configured), may be automatic ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BreakpointProps:** strongly type breakpoints. Instead of weak string | number =&gt; 1,2,3...'1','2','3'... ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **BTable:** add change event -- replaces bv `modelValue` see https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1775#issuecomment-2100837299 ([00b5e95](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/00b5e9594f66d9f99355af9e3a5a21636b2fde83))
* **BTable:** add custom filter functions ([9ec1e04](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9ec1e04e38894e6f8fa73d7cfc83cd5bd28a2244))
* **BTable:** add defineSlots types ([#2300](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2300)) ([cc5af51](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cc5af51327ccbc366a9354cb387b025e5e377904))
* **BTable:** add emptyText and emptyFilteredText functionality fixes [#664](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/664) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** add functional syntax for sortAsc/sortDesc/sortDefault `sortAsc(fieldKey)` to specify the sort content for that specific field ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** add isrowselected method fixes [#1233](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1233) ([#1960](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1960)) ([3f86900](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3f86900897b5868060f0826c92594afd6fb86505))
* **BTable:** add prop multisort ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** add row-contextmenu event fixes [#2238](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2238) ([3f81473](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3f814733a36cb0611597602d2f142caf0c99621b))
* **BTable:** add row-middle-clicked event ([3f81473](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3f814733a36cb0611597602d2f142caf0c99621b))
* **BTable:** adds the ability to filter by formatter Solves [#1413](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1413) ([e7130aa](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e7130aae51adfd108a9d3843bd974513c298ad39))
* **BTable:** Allow dot in sortby key ([08d30ef](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/08d30eff3c1e4f47c1d47d0dbe57ac7a8af63d31))
* **BTable:** allow Numberish values =&gt; string is interpreted as is with maxHeight, numbers are converted to ${number}px maxHeight ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** deprecate noSortReset, use `mustSort` ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** Expose additional functions and document them ([#2632](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2632)) ([2d1ecfd](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2d1ecfda397f0dd67dddd0c2d6a4663baeeda818))
* **BTable:** expose table items ([#2463](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2463)) ([40be163](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/40be16314ef901d3819647ec76445290a38cae26))
* **BTable:** generate ids for tr elements when primary-key exists fixes [#2509](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2509) ([11cd367](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/11cd3672e3b50b2f8f70ba0583bd3e6dfd952b09))
* **BTable:** implement outlined prop fixes [#2507](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2507)  ([#2511](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2511)) ([11cd367](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/11cd3672e3b50b2f8f70ba0583bd3e6dfd952b09))
* **BTableLite:** add class to bottom row tr fixes [#1908](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1908) ([#1987](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1987)) ([1d745d1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1d745d1923c6f2164e2883093d75ca675f65bc3a))
* **BTableLite:** use primary key for v-for loop to prevent rerendering fixes [#2096](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2096) ([#2097](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2097)) ([677bddf](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/677bddf4899921262e446a3d6535bfffc424add0))
* **BTable:** make it possible to style custom footers ([#2314](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2314)) ([264fc9e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/264fc9eca9e1f0951706dbf88087a2da2ba214ea))
* **BTable:** remove prop noSortReset, use mustSort ... by default sortability can be reset by clicking (3) times [asc =&gt; desc =&gt; undefined =&gt; asc...] ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BTable:** remove selected event -- use [@update](https://github.com/update):selectedItems ([#1962](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1962)) ([9350b3d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9350b3dc61aa5d1a2b55c3fbe6cc5d64abfadeee))
* **BTableSImple:** add prop tableAttrs & tableClasses -- previously could not modify table attributes when isResponsive === true ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BTable:** using head(...) slots will now keep the sorting icons, fixes [#1976](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1976) ([#1994](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1994)) ([3098cf2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3098cf2ddb40be812e537cbb754499a051672370))
* **BTabs:** add underline prop ([f464982](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f464982fc78f5f7eec28d23187a8127fd9751859))
* **BTabs:** noKeyNav prop ([85de425](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/85de4253ab98a40d097a49cca52e89b81e95fc47))
* **BToast:** add defineSlots ([ce01648](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* **BToast:** add noResumeOnHoverLeave prop ([69316a5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/69316a565f39f0b17932dcf6691a287f0ce4ed9d))
* **BTooltip:** strongly type slots ([e51461e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e51461e16188e2ea290a6979c75da68edf3cc749))
* clean deprecated classes and props from bootstrap (sr-only =&gt; visually-hidden) ([d3783ec](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d3783ec1d3cfd13e1aed747dbd04005a245b3b11))
* **colorvariant:** add subtle and emphasis variant fixes [#2079](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2079) ([5946219](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5946219512bfbf1a533a23670295ed5a8dfbaba9))
* controller composables functions return promise, with id and chainable functions ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **createBootstrap:** flatten the params object. The previous "plugins" key is now the top most level object =&gt; `{ plugins: { id: {} }` =&gt; `{ id: {} }` and so on ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **createBootstrap:** remove alias in createBootstrap, use alias in unplugin-vue-components resolver instead ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **createBootstrap:** remove automatic import of components and directives fixing an issue with createBootstrap bloating the project size. When components were unused, it bloated the project size -- ie not tree shaking when you only used the plugins ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* **dist:** dont include src files ([bfe7e85](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bfe7e85c2afd6dab714099be3a988c27800cc970))
* export component prop types ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* export plugins from main module ([#1973](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1973)) ([f79c516](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f79c5168b7d43df989546fee78e998a0074c0f99))
* export validatestate type ([#2493](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2493)) ([43f2f5a](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/43f2f5ac8341141f5100a190e81d0a76fe6bba04))
* **form-input:** add invalid/valid background styles to type='range' fixes [#2026](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2026) ([cbb41fa](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cbb41fae2394895ed7f2b088797bab104dfcef99))
* implement a use defaults system fixes [#1607](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1607) ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* implement global alias system fixes [#1753](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1753) ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* implmenet a use defaults system WIP fixes [#1607](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1607)  ([#1889](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1889)) ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* make blink a non fragment fixes [#295](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/295) ([395b100](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/395b100e2c2034024bc292fbaf70ffa3906170b8))
* **modalController:** make {} default for show/confirm -- param not required ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* move unplugin-vue-components component resolver to main package ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* move unplugin-vue-components component resolver to main package ([#1918](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1918)) ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* namespace out package - bootstrap-vue-next/directives bootstrap-vue-next/components etc ([69316a5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/69316a565f39f0b17932dcf6691a287f0ce4ed9d))
* **nuxt:** allow passthrough options to createBootstrap plugin ([5458a5a](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5458a5afd8bb46d3951f3fdee048f85030bc32de))
* **nuxt:** automatically globally set teleportTo to `#teleports` ([8e73b17](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8e73b177051d4403ca7a159e7c11707de15e638c))
* **package:** move remainder of dependencies to devDependencies -- if using typescript, you may need to install additional dev dependencies so the types are bundled properly ([dce4774](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/dce47747ae872edca160bd74a50078b33dade54c))
* **package:** move remainder of dependencies to devDependencies -- if using typescript, you may need to install additional dev dependencies so the types are bundled properly ([dce4774](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/dce47747ae872edca160bd74a50078b33dade54c))
* **package:** move vueuse integrations and focus trap to dev dependencies ([bfe7e85](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bfe7e85c2afd6dab714099be3a988c27800cc970))
* **Placement:** Export additional placement types ([#2532](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2532)) ([220b7e4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/220b7e4feb2e23ffedec4cd75d54e46e0111489c))
* **PluginControllers:** Allow for using the prop.id for the items key. Ie if you supply modalController.show({props: {id: 'foo' }}) You can reference it leave('foo') ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* remove binputgroupappend binputgroupprepend =&gt; use component binputgrouptext ([5e511a6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5e511a6a83b2193aa240e1839f1c7a3a3545cae8))
* remove html props -- use equivalent slots fixes [#1930](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1930) ([#2311](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2311)) ([ce01648](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ce016480358f50653354d27b3d4ad59db58a221f))
* remove the default export. Use named export `createBootstrap` instead ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* rename defaultsPlugin to more generic bootstrapPlugin -- this essential plugin may contain more essential features than just defaults ([#2288](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2288)) ([22440a9](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/22440a9cefd7d1a381c23ac33a07198ae4532ec7))
* rename plugins to namespace out named imports, export 'toast' could be confusing ([c7defef](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/c7defef7240f87c1b39f5827d5521d06cc994d24))
* **show/hide:** add prop backdrop-first to animate backdrop first ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** add prop initial-animation to animate on initial render if modelValue is true, otherwise display the component without animation ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** add prop visible to show without animation ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** add props lazy and unmount-lazy ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** make components that show/hide use a composable useShowHide ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** rename toggle prop to show, it opens the component with animation ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **toast:** make {} default for show -- param not required ([1e88b09](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1e88b09d8992e13948e6f94278c7c51cf4960ec8))
* use vues useId fn ([69316a5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/69316a565f39f0b17932dcf6691a287f0ce4ed9d))
* use vueuse 12 fixes [#2469](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2469) ([#2471](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2471)) ([bf50c30](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bf50c304b1612411311f035e9b1ca3af701fdd19))
* **useActivatedFocusTrap:** set better fallback options fixes [#2095](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2095)  ([#2099](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2099)) ([873e716](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/873e716dc3bc5dbf4f78ae3335a2751dbd539df4))
* **useModalController:** add support for using syntax in ts ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useModalController:** change of api, check the docs ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **usePopoverController:** add slots ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **usePopoverController:** allow more options ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **usePopoverController:** create usePopoverController composable (not fully complete) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **useShowHide:** create triggerRegistry for adding external triggers (like in vBToggle) ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useShowHide:** show returns a promise, resolve on show or hide. ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useToastController:** remove props obj, the parameters are flat now. Add slots, rename pos -&gt; position ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useToast:** rename useToast to useToastController fixes [#2155](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2155) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **useToggle:** add trigger to promise resolve on hide. ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useToggle:** toggle any show/hide component ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **utils:** inject getId to allow for custom id generation ([#1836](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1836)) ([c9e60f5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/c9e60f57da5ab703a75433a521ebd55eb26ac569))


### Bug Fixes

* add class to row details ([#2091](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2091)) ([41bbe11](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/41bbe11ffbdb3410e4ae2f1dba54dd4a38cc3aca))
* add target to BLink RouterLink component ([#2131](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2131)) ([23c38e0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/23c38e0491828246514117a22da215461bbf0693))
* augment global components for IDE inferences fixes [#2534](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2534) ([#2584](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2584)) ([3432f8b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3432f8b293671e4e6900164728eb63d3987e4bc5))
* **b-tab:** broken computed classes ([#1985](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1985)) ([4de1325](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/4de1325eefc915794c30eff0f5d9e706b46e1bd5))
* **BAccordionItem:** fix initial modelValue ([b72b8da](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b72b8da7e503c3395d0f2f4139d392268c0cc5bc))
* **BAvatar:** avatar style getting literal Size values fixes [#2535](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2535) ([7621aad](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/7621aad0000c9138983315630e35657c6eb97f08))
* **BAvatar:** failback on image load error ([#2281](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2281)) ([a51327f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a51327f2721aa373329258ff8e551f57c123b394))
* **BAvatar:** Several fixes from parity pass ([31ac9e6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/31ac9e69008304c57b5bbf3f7c995a2ebda6577b))
* **BAvatar:** Several fixes from parity pass ([#2094](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2094)) ([31ac9e6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/31ac9e69008304c57b5bbf3f7c995a2ebda6577b))
* **BAvatar:** use parentData.square for computedSquare fixes [#1923](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1923) ([2662758](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2662758ae9665f70db1bb8ef07e9d4fd4f2c47ba))
* **BAvatar:** variant being applied to link causing avatar img to become faded and not show svg when using prop href ([#2295](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2295)) ([daecdd9](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/daecdd97953ff675e4c094a18946e45195cf3d9c))
* **BButton:** Consume useColorVariantClasses ([#2640](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2640)) ([379fd9a](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/379fd9acc185f87d806d62e4be4c8045a59da485))
* **BButton:** implement link classes for when btn-link fixes [#2134](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2134) ([d23fdd8](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d23fdd8574b80cc5282a8c17b920eae49e5053f4))
* **BButton:** prevent default and click when href is # fixes [#2133](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2133) ([d23fdd8](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d23fdd8574b80cc5282a8c17b920eae49e5053f4))
* **BCardBody:** unnecessary "card-body" class when props.overlay is true ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* **BCarousel:** fix v-for updates ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **BCarousel:** rename 'click:prev' and 'click:next" to 'prev-click' and 'next-click' ([dc496d0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/dc496d0a017116a89bec4c61250cceb2052b9e24))
* **BDdropdown:** Replace click event on split button with split-click ([a9b59c8](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a9b59c8ee53b7553b9644a4dff90ea4728b77521))
* **BDropdown:** bdropdown when in button group has class btn-group fixes [#2025](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2025) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BDropdown:** change `split-click` to `click:split` ([f27544b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f27544b56fc7bdb72769a9cb2ea57db676cb35f8))
* **BDropdown:** correctly calculate size on some edge cases ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BDropdown:** don't calulcate the position when dropdown is not shown. ([4dd6c89](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/4dd6c89146b9d5a4a089c4af4c2162d577cd7fb4))
* **BDropdown:** fix infinite loop on keyboard navigation ([#2342](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2342)) ([2fd5db7](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2fd5db76eedae23635b23e7f6eead55ce89ee005))
* **BDropdown:** fix wrapper class, skip wrapper in input-group ([bb5cdc5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bb5cdc5b04a6167a757dccd48fa8d29bcd190468))
* **BDropdown:** focus returned to dropdown when escape key hit ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BDropdownForm:** form class not working with string values fixes [#2633](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2633) ([#2634](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2634)) ([65ef49a](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/65ef49ac9b31532f952d1329144694664ce0354c))
* **BDropdownItemButton:** prevent click on disabled button ([#2406](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2406)) ([6c2cd5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/6c2cd5fde6ab4ff8e9d816fa2171fc230ccba004))
* **BDropdown:** point caret the right way ([fed58b5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fed58b59ad3ab79244456d608c00df8872126dd8))
* **BDropdown:** prevent propogation of click events ([3800847](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/380084711e8052e59d83d1ec4ecb85d63e6642c8))
* **BDropdown:** rename 'click:split' to 'split-click' ([48caab3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/48caab3af1d8fd122e60600afce73b10d140bc41))
* **BFormCheckbox:** class attribute should be set on wrapper component (input classes use new prop.inputClass). Use props.wrapperAttrs for attrs to the wrapper element fixes [#2108](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2108) ([a75b5c8](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a75b5c80a686cc846b30dbf28f68933c55c27d4d))
* **BFormCheckbox:** Handle contextual state == false correctly ([5574745](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5574745c55b98777ab9b8eaf487364f7fd70b692))
* **BFormCheckbox:** indeterminate state not working properly fixes [#2271](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2271) ([#2274](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2274)) ([0d2fc28](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/0d2fc2896534f7f00036db8e5cb8339b37117f14))
* **BFormCheckbox:** Prevent empty string being cast to true fixes [#1822](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1822) ([51d7c01](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/51d7c01c71ac8feae76ae934017384d2de27d3f5))
* **BFormFile:** remove capture attrs from dom if not defined. ([#2214](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2214)) ([85b38f3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/85b38f35b81600c05b504738096148afad8db713))
* **BFormFile:** remove props placement and browser ([14534d1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/14534d1e5529483294dcd3f313866d8fb0d17df0))
* **BFormFile:** remove unneeded input-group div ([14534d1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/14534d1e5529483294dcd3f313866d8fb0d17df0))
* **BFormFloatingLabel:** remove prop text -- didn't make sense ([1c2722a](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1c2722a5951f1234cdb576fad473ae75c761d150))
* **BFormGroup:** change labelSrOnly to labelVisuallyHidden as per BS5 ([b4af72f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b4af72febfe8d7cd2350530785a16a93dc914810))
* **BFormGroup:** fix layout problem when label-for is not used ([#2321](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2321)) ([61d2b6b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/61d2b6b2725c5c5e8af1ffdca2440285d411e5b3))
* **BFormGroup:** floating labels not working fixes [#2452](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2452) ([#2455](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2455)) ([aa4b1c6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/aa4b1c6e1be3a75a7ed459f54c89068f2a677ade))
* **BFormInput,BFormTextArea:** Deprecate trim, lazy, number props in favor of modifiers ([#2066](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2066)) ([f5be607](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f5be6074782b31c3db00b9c46fce0424dd021164))
* **BFormInput:** bad model modifier trim behavior fixes [#2253](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2253) ([#2267](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2267)) ([bb0733f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bb0733f20cdc7019bf4feac416a66f1555996d95))
* **BFOrmRadio:** radio in group not able to select null value fixes [#2106](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2106) ([#2129](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2129)) ([8de1b97](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8de1b978bd0d4b008015cd777fa0104b8ef8eb55))
* **BForm:** Remove confusing prevent default on form submit ([1a1105a](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1a1105a58751d760127ed50f1f233c1a6821163c))
* **BFormSelect:** array of numbers or dates ([#1839](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1839)) ([6ea7598](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/6ea759874fd41d3da08ae3cafee052e19b3e51e1))
* **BFormSelect:** Create a SelectValue type for consistency ([993599e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/993599e862461a94124b47a9daa899a7466f52b4))
* **BFormSelect:** prevent options with label from being treated as groups ([#2666](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2666)) ([c1645a9](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/c1645a92d3ede914ef0fc939bed65066e13020ff))
* **BFormSpinButton:** fix lacks default sizing ([#2305](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2305)) ([9e3614f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9e3614fa9e1f3ccb4cdd614d60ba762a08a6a015))
* **BFormTags:** remove CSS declaration. CSS declaration for text colour property making input text unreadable on dark mode when the input is focused ([4ffe220](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/4ffe220e7595c830bb20600fd668b6a64d908e38))
* **BFormTags:** resolve issue with input value when using default slot ([#2061](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2061)) ([4ffe220](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/4ffe220e7595c830bb20600fd668b6a64d908e38))
* **BFormTags:** use ref value in slotAttrs object. Switch inputId and inputValue to use .value to resolve issues causing a console error regarding [object Object] id and causing input value to be set to the same when using the default slot. ([4ffe220](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/4ffe220e7595c830bb20600fd668b6a64d908e38))
* **BLink:** add computed to attribute (to || '') to routerLink fixes [#2429](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2429) ([ae01574](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ae0157491e9126da382272c381e0c402d066c408))
* **BLink:** Allow  "0" as a value for UnderlineLinkOpacity ([75c9e48](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/75c9e48360d29dccc17120e072ad198985a8ab2d))
* **BLink:** Create and export Opacity and Offset types ([#2536](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2536)) ([f2af52f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f2af52fce99034c34c348ae01d3fb27c0833d071))
* **BLink:** fix link-opacity when no underline variant specified ([fed1e13](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fed1e13b40d7b8289883061cbffbce12c4318d87))
* **BLink:** Fixe stretch/stretched property issue ([fed1e13](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fed1e13b40d7b8289883061cbffbce12c4318d87))
* **BLink:** Link receiving / href when trying to use href prop fixes [#2434](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2434) ([#2438](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2438)) ([aea1798](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/aea179881c27e429b1588a62844fd230ec36df0d))
* **BLink:** nuxt should do full page reloads on to prop fixes [#2445](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2445) ([#2449](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2449)) ([cce9833](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cce9833ebd91bcfe1037ffb6422edfdc03389198))
* **BModal,BOffcanvas:** flicker when no animation and double animation when leaving with animation and backdrop-first ([0f5375f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/0f5375f259fd1c750efc265345b46f77fa061106))
* **BModal:** add component to the internal stack during the execution of the setup function if modelValue is true fixes https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1919 ([ab8b9a0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ab8b9a019d14b9db263cfde00ad7efae13dffbe3))
* **BMOdal:** append transition behavior fixes [#1943](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1943) ([#1947](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1947)) ([e10f742](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e10f7429fee2c59824933469efe3c66747df3be0))
* **BModal:** autoFocus prop renamed to autofocus to align with Input elements ([cdb49ac](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cdb49ac9504eca5c7f9e3794a1f5fe8e3ea3a082))
* **BModal:** fallback focus element always present ([#2604](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2604)) ([#2605](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2605)) ([e512190](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e512190bd2ac5e6f55850423e40d880eb2170776))
* **BModal:** fix backdrop click prevention, fix flickering when no-fade ([#2262](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2262)) ([e008cf4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e008cf43645cbf6656beaf9d568f63545db34888))
* **BModal:** fix backdrop when modal is shown using v-if ([#2269](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2269)) ([f317fab](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f317fabbf8a91665bd5f639249850811c5780c18))
* **BModal:** fix backdrop, fade and reduced animation ([#2250](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2250)) ([48cc89c](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/48cc89ca198d811c520e0ca42a38ca9438429ae5))
* **BModal:** fix jumping when scrollbars are present ([#2211](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2211)) ([9ab6132](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9ab613252676524538e2713d5e55e21c0863320a))
* **BModal:** fix scrollLock in stack ([f713aaa](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f713aaa353968b4a0761486b881efadcfddea6e5))
* **BModal:** in coordination with prop noTrap and adding no focus trapping to opened offcanvas, fixes [#1996](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1996) -&gt; as trap has moved to offcanvas ([28c64c9](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/28c64c9a3df563c95956fa871acd5556d62a2336))
* **BModal:** multiple modals backdrop fix ([#2263](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2263)) ([f713aaa](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f713aaa353968b4a0761486b881efadcfddea6e5))
* **BModal:** okTitle default to OK ([61c64c2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/61c64c2085b3e94aa9c02661fbff706000c86b1f))
* **BModal:** remove scrolllock on unmount ([#2277](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2277)) ([cb12723](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cb12723ae7c410116197b5fd2b60fa210156e083))
* **BModal:** respect prop autofocus when using autofocusButton ([cdb49ac](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cdb49ac9504eca5c7f9e3794a1f5fe8e3ea3a082))
* **BModal:** set focus only once ([e6a89ef](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6a89efb6af359c19d93f70b257a0fb29e906bca))
* **BModal:** use focus trap default of 'window.document.body' fixes 2016 ([28c64c9](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/28c64c9a3df563c95956fa871acd5556d62a2336))
* **BNavbarToggle:** toggle default slot doesnt have a scoped argument 'expanded' fixes [#2348](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2348) ([981d684](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/981d68415062b72f92414ec9dd905b6d61f15c38))
* **BNavItem:** pass prop exactActiveClass to router component ([#2188](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2188)) ([f0b49fe](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f0b49fe3410bea6cc5a53d2f66ed2a6413718468))
* **BOffcanvas:** add focus trapping to offcanvas ([28c64c9](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/28c64c9a3df563c95956fa871acd5556d62a2336))
* **BOverlay:** fix noWrap ([#1933](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1933)) ([55672ff](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/55672ff35f1e5e3cb6b046449d9317206943af7f))
* **BPagination:** centering of arrows when using span fixes [#2135](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2135) ([d23fdd8](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d23fdd8574b80cc5282a8c17b920eae49e5053f4))
* **BPagination:** Correctly position ellipses when hideGotoEndButtons=true. ([#2148](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2148)) ([d708aa4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d708aa484200128799f40b69c0e66973d2e0f5f2))
* **BPagination:** fix maximum of 4 page number buttons displayed on small screens ([9764584](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/97645843d0d47afa69286fee4f965841295125ed))
* **BPagination:** Get rid of bad binding on li ([#2150](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2150)) ([182dbc7](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/182dbc7971456e80cdbf257d9700d61d43b106ba))
* **BPagination:** hide-goto-end doesn't hide firstPage or lastPage ([#2171](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2171)) ([a86ec41](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a86ec415ff8cffd5aa71bec58f02983655015c5d))
* **BPagination:** li's need to have role of presentation since parent ul is menubar ([cd4ac4f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cd4ac4fd5b0a5f11d6b756066549a01cebda90be))
* **BPagination:** right/left/up/down arrow keys now operating better after new page chosen ([#2665](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2665)) ([2f05c84](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2f05c8494f6414d071b7e7bb76a75d97d6e2d34c))
* **BPopover and Btooltip:** Fixes bootstrap-vue-next[#1232](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1232) - do not create a new app fro each tooltip or popover ([259a5af](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/259a5af283148a754f71468d35bd9e9c2b196f49))
* **BPopover and Btooltip:** Fixes bootstrap-vue-next[#1232](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1232) - do not create a new app fro each tooltip or popover ([#1837](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1837)) ([259a5af](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/259a5af283148a754f71468d35bd9e9c2b196f49))
* **BPopover:** allow hide without event. ([bc4df5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bc4df5ffd9bbab0061ad80ca3d2266b3587b003b))
* **BPopover:** better hide functionality, called only once ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** calculate mouse and element positions in a performant way ([bc4df5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bc4df5ffd9bbab0061ad80ca3d2266b3587b003b))
* **BPopover:** calculate mouse and element positions in a performant way ([#2252](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2252)) ([bc4df5f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bc4df5ffd9bbab0061ad80ca3d2266b3587b003b))
* **BPopover:** cancel show/hide during delay ([b915a98](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b915a98d8be6f170a404f13eb4c78b865b22313a))
* **BPopover:** change prop content to body to align with other components ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **BPopover:** change slot prop showState to visible ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** Correct color arrow when arrow on top ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** correctly calculate size on some edge cases ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** don't calculate the position when popover is not shown. ([5d34b6d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5d34b6d852c2ff6e61d2ce14c79737090c670730))
* **BPopover:** fire hide event only once ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BPopover:** fix hide on reference hidden, fix close-on-hide. ([0f5375f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/0f5375f259fd1c750efc265345b46f77fa061106))
* **BPopover:** fix injection out of setup context. ([#1848](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1848)) ([fe9b46e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/fe9b46e379d1fc507906bae8692451fb92b9586d))
* **BPopover:** popover breaks flex layouts ([3a243f3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3a243f3aedb98e80c3a62cf0f6082da97834065b))
* **BPopover:** remove prop persistent, use lazy instead ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **BTab:** error in recursion ([#2624](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2624)) ([da6fe97](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/da6fe97c1caf55b52f22c13f2153439e52580793))
* **BTable:** allow for inferred nested objects for items fixes [#1851](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1851) ([b7a4520](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b7a4520b32a8054ae43b74a750d1dfd6864f6c84))
* **BTable:** busy slot behavior to match bootstrap-vue fixes [#1636](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1636) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** busy slot behavior to match bootstrap-vue fixes [#1636](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1636)  ([#2249](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2249)) ([9581572](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/95815728328bc7eedce33e4dc62376b651259f08))
* **BTable:** cast formatted items to string fixes [#2227](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2227) ([e6749a3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e6749a366aa839d2607c1aeba6b786e4e2299abf))
* **BTable:** cast formatted items to string fixes [#2227](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2227) ([#2247](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2247)) ([dabd159](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/dabd1597e1d4775a23a6a9b161065db553a204a6))
* **BTable:** clean up slots to match those from bootstrap-vue fixes #& ([#2303](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2303)) ([e51461e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e51461e16188e2ea290a6979c75da68edf3cc749))
* **BTable:** correct multi-sort to not update sortby in place ([#2644](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2644)) ([8936ff2](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8936ff24f69014c7077c493a51af4f9dbd4b4485))
* **BTable:** duplicate labels with both labelstacked and label fixes [#2608](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2608) ([0658251](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/0658251e3a592835c89b829993ea874a54b4ae22))
* **BTable:** dynamic slots not rendering fixes [#2328](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2328) ([#2329](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2329)) ([6c16a9b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/6c16a9b970adb0607ea6dca9e785937aa001382b))
* **BTable:** Export additional types ([#2519](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2519)) ([9b25255](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9b252551cff82c0ff1be4ba53b3c18d405962b86))
* **BTable:** fix a long standing regression in which the comparer function in btable did not give the item value, instead passing a string fixes [#2565](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2565) ([05d0b6e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/05d0b6ef7f2561683d06132354616933a0455307))
* **BTable:** fix handleFieldSorting algorithm to properly handle multisort with mustSort ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** Fix typescript errors ([#2527](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2527)) ([ef28ba4](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ef28ba48a4cad8c00f9a7e68fa763a2a269cd852))
* **BTable:** fixed aria-sort for th gets changed back to 'none' when no longer sorting ([379b838](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/379b8385fca820ea7c8063867b17a71d44789c5d))
* **BTable:** generic types ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTableLite:** create clone of items thats used internally to fix toggleDetails flipping -- immutable object does not work with the mutation fixes [#1852](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1852) ([b7a4520](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b7a4520b32a8054ae43b74a750d1dfd6864f6c84))
* **BTableLite:** stacked uses field key instead of defined label fixes [#2591](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2591) ([05d0b6e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/05d0b6ef7f2561683d06132354616933a0455307))
* **BTableLite:** value slot scope not using formatItem fixes [#1805](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1805) ([22039e5](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/22039e52c7300f83f7b30ec7a9f9801df575fe79))
* **BTable:** make foot props and slot fall back to head if not defined ([#2614](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2614)) ([05fffbb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/05fffbba869309c07369c7e587ed3870966664cf))
* **BTable:** multi sort wiping comparer function ([#2575](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2575)) ([2817acc](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2817accc607d2d20e8e2f04ab64d4453c2388878))
* **BTable:** Pass through original records to slots in most circumstances ([#1869](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1869)) ([bd5541f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bd5541f096e6240c26715d8833561710316f3b69))
* **BTable:** reflect single select mode on programmatic selection ([#2440](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2440)) ([1ea89dc](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1ea89dca23a80bbc5cc58ea479669663a4da0592))
* **BTable:** rename event row-dbl-clicked to row-dblclicked ([#2239](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2239)) ([3f81473](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3f814733a36cb0611597602d2f142caf0c99621b))
* **BTable:** select mode range when table is sorted fixes [#2229](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2229) ([#2230](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2230)) ([e29a9ef](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e29a9efaee7a26257fa4a18e197b24d0dd819270))
* **BTable:** selectedItems not clearing values properly fixes [#1878](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1878) ([#1879](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1879)) ([3b57599](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3b5759910e640a8f93792b4187082a32cf433015))
* **BTable:** selectedItems with range not displaying class ([3b57599](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3b5759910e640a8f93792b4187082a32cf433015))
* **BTable:** set sort values to undefined so we dont accidentally wipe user defined comparer functions ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** sorting algorithm deleting comparer functions fixes [#2555](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2555) ([#2563](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2563)) ([4ee8552](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/4ee85528393d19a3cd7464d507cf36ee97f74bb2))
* **BTable:** stacked mode when using breakpoint data-label not rendering fixes [#2595](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2595) ([2c3970c](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2c3970ca3ed0c3d312600877c8ec0043a6834144))
* **BTable:** stickyHeader true causes maxHeight 300px ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **BTable:** tablefield&lt;T&gt; fixes [#2023](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2023)  ([#2035](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2035)) ([a5e5cff](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a5e5cffc12010ca72163491fc49c7f3a31fa788e))
* **BTable:** Type check failed for prop tbodyTrClass fixes [#2197](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2197) ([#2198](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2198)) ([1100a75](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1100a759477734f8ec2f8c3d15890b3ea8c318c9))
* **BTable:** use a computed id when no id prop is provided ([11cd367](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/11cd3672e3b50b2f8f70ba0583bd3e6dfd952b09))
* **BTable:** use watcher to compare changes with selectedItems fixes [#2245](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2245) ([#2246](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2246)) ([d48b559](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d48b559c1ecd68a14d523a52bfb96426595f1288))
* **BTabs:** correct class with card and pills ([d34e076](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d34e076e6829fe91ce1c808ecf11da9345425521))
* **BTabs:** correct class with card and pills ([8633804](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/86338043e3b0ebfd99c7ecc196a5936e3b24d1d4))
* **BTabs:** corrent classes on ssr ([2b37c18](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2b37c18dbe64ac430943361e0a67d86206a7e21e))
* **BTabs:** corrent classes on ssr ([#2664](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2664)) ([2b37c18](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2b37c18dbe64ac430943361e0a67d86206a7e21e))
* **BTabs:** fix another recursion error ([2b37c18](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2b37c18dbe64ac430943361e0a67d86206a7e21e))
* **BTabs:** fix recursion on titleLinkAttrs ([#2169](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2169)) ([b607508](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b607508604b22def50028a264ce3d9b0890331ff))
* **BTabs:** make keyboard nav aria compatible. ([6d8de32](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/6d8de3249e61e461a354158fc80f886f865a0e05))
* **BTab:** use correct buttonId ([#1906](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1906)) ([2e20c94](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2e20c94cc7b210fc62126294839b0253b0adfe14))
* **bTh:** removed invalid rowspan/colspan for th elements scope attribute and made it more configurable with inferences to rowgroup/colgroup and default of col ([cd4ac4f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cd4ac4fd5b0a5f11d6b756066549a01cebda90be))
* **BToast:** toast disappearing on hover leave when is a boolean modelvalue ([#2307](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2307)) ([2971f61](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/2971f617ba3a9f082d5a1bf8f1f29f51dc42c558))
* **BToast:** use headerClass fixes [#1977](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1977) ([#1978](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1978)) ([b55583c](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b55583cee54b1740020ec6cadbe68236cb6dc970))
* **BTooltip:** change prop content to body to align with other components ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **BTooltip:** default to 0 delay, fixes [#1938](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1938) ([b6603f1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b6603f1bb59b1022bb43b6921a3a105747960b15))
* change all props starting skip or hide to start with no ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* change renderorskip to wrapper, add our own teleport logic. ([#2162](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2162)) ([8c0acbd](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/8c0acbd2ca957be27dd618bb7e33b7ff943973be))
* **ConditionalWrapper:** don't inherit attrs ([#2205](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2205)) ([6db9e53](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/6db9e5344510e642bd1b235bb25bce49d2bc30a0))
* correctly pass attribute ariabusy fixes [#2378](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2378) ([bccf138](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bccf1387dd381f17f9ee3610e6c8cdd3ede1f73f))
* **focus-trap:** focus trap issues with modal and offcanvas fixes [#2064](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2064) ([91e7d04](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/91e7d041c80acd4988b79a3bd924d00a854107fb))
* **generics:** use generic constraints for BTable & BTableLite ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **grid:** Correct some inconsistencies in breakpoint types ([#2290](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2290)) ([7e7dc7f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/7e7dc7fabf3b39f18e9261b4eb14987d3a92aac1))
* improper import path ([#2189](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2189)) ([bb40e21](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bb40e21aa778bce05e9d89111d4b580172312317))
* incorrect classes and placements on bcardimg and bcard ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
* inline functional style to show toast,modal and dropdown ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* last commit label issue ([#2457](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2457)) ([703eca3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/703eca32c66ffa1ccf2135e0217832ac4d00c1e4))
* make attributes reactive in Accordian, Tab, Dropdown*, etc. ([#2552](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2552)) ([081862d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/081862db996abbb8dbf7ba4ac2d3a824a4c03961))
* modal transitions fixes  [#1861](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1861) ([5e511a6](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5e511a6a83b2193aa240e1839f1c7a3a3545cae8))
* **nuxt:** make injection keys static strings fixes [#2209](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2209) ([#2218](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2218)) ([5634dc3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5634dc3f733bcd414737d5bb92bd56c83972b194))
* pass attributes through in BDropdownItemButton ([#2143](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2143)) ([951bbf0](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/951bbf07bf7f4d99616da965b723014594cd6d41))
* patch regression issue in [#2665](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2665) ([#2670](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2670)) ([59ddc39](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/59ddc3971cb58e88a8e460f2a9f21b47aa7b8d90))
* **RadiusElement:** Add 'md' value ([#2436](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2436)) ([473bc07](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/473bc07a06e2fd6eff9d84bad50be8c393cc7ba5))
* rename ref to avoid Vue warnings (Fix [#2337](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2337)) ([#2353](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2353)) ([f505fe9](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/f505fe992bf2dab57c6e10f42dfa8f0533ec1ad3))
* **resolver:** resolver path for BCloseButton ([173a838](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/173a83816bee87bec6b2f18121775180151cd9e5))
* **show/hide:** emit shown/hidden after transition ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** many animation fixes ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* **show/hide:** prevented emit events restore modelValue ([673529d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/673529d86d35b8052d12ab7d1d8aa73028b269b6))
* some migration issues with defineModel ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* Some prop types were build wrong because of vue bug ([3459a54](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/3459a54f4242509a6a23e9a48430de5f3d190157))
* **Table:** various functional syntaxes in attrs & classes fixes [#2083](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2083) ([#2087](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2087)) ([d8a9782](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/d8a9782e2d9bf5910773afc409732d80870e75fc))
* type popoverController ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* types generation -- use interfaces for componentprops ([de60ce3](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/de60ce3cd2bc3ee8768331ae8ce69b2c5f3eed73))
* **types:** mjs masquerading as cjs -- export mts copy ([#1980](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1980)) ([bfe7e85](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/bfe7e85c2afd6dab714099be3a988c27800cc970))
* update dependencies to fix a bug in vue compiler ([#1866](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1866)) ([b2c56bf](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b2c56bff644177d5653b628a9cbb30ffa5c7055a))
* update deps fixes [#2487](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2487) ([#2617](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2617)) ([5f4416e](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/5f4416eaf644145cb3f454e051905a851b6a0091))
* update vueuse fixes [#1937](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1937) ([6b58a77](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/6b58a771b0d0199c85d81de71de79b805d2f7701))
* useFocusTrap only to run when mounted fixes [#2041](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2041) ([b72b164](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b72b164d9a39684bccf33ae4ac489c79d343107c))
* **useFocusTrap:** dont deactivate focus on esc fixes [#2144](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2144)  ([#2219](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2219)) ([89656ab](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/89656ab96deb986f1674f5ffdef59ff4743a44c5))
* **useModalController:** move props to main level, add slots ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useModal:** fix finding correct lazy modal ([42a1768](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/42a17683fd450d6f67b5913b7d7554630236b42b))
* **useModalManager:** use correct value in comparison ([a70f252](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a70f252a7b3158cce510b58ce520bcfb604bd8fa))
* **useShowHide:** add all the emits ([a8a2481](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a8a24814355ea107671dc2d7178380ce19a36968))
* **useShowHide:** convert collapsePlugin to showHidePlugin ([da64f3f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/da64f3f0306ee818b98603bc2b32ed2e0d8c85af))
* **useShowHide:** don't run show if component already unmounted (ie. BPopover) ([269e8c1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/269e8c17ba2c262aa734acd2aac231f5ea433575))
* **useShowHide:** fix race condition on close ([633ac35](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/633ac35b4b6347e4d8c72b09fc4d38bac5893110))
* **useShowHide:** fix transition triggering in production build ([#2390](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2390)) ([ec07f13](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ec07f13a2b5b67dbdd3e03f5779cc794ca447dee))
* **useShowHide:** fix visible prop, better initial render ([58a0901](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/58a090184ae59e75a21831d94f77a9e10bdf1ed2))
* **useShowHide:** fix visible prop, better initial render ([0957eb1](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/0957eb1f95d6d27f52479ce301eefc94af537a8b))
* **useShowHide:** focustrap off at the begining of leave, pass down the trigger to other hide emits. ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **useShowHide:** render based on initialState, fixes ssr on showhide components ([b889f1a](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/b889f1a19b06a58f594d64ed5404e27c7683e71c))
* useTemplateRef usage throwing errors fixes [#2361](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2361) ([1a03b9b](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/1a03b9b4c089ad80797f22200d02a1f6310714d2))
* **vBPopover:** add position absolute to floating directives ([#2234](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2234)) ([9e4d8b7](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/9e4d8b7b8372a8aa3d6e3ec3fb3298f27e6292e0))
* **vBPopover:** fix vue error with floating directives. ([#2208](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2208)) ([e50a5ba](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/e50a5ba867ac0ad7b1f71a73a8e76d690d58e686))
* **vBPopover:** revert [#2234](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2234) ([#2256](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2256)) ([67ab6c8](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/67ab6c858fbd31a626d4a22e0eae9af49d86d1f7))
* **vBToggle:** find late components, ie. inside ClientOnly ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **vBToggle:** keep track of targets ([99718eb](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/99718eba96d9f32ebac7931cee91bf28c29870dd))
* **vBToggle:** use global showHide registry instead of dom to toggle components. fixes [#2398](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2398) ([da64f3f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/da64f3f0306ee818b98603bc2b32ed2e0d8c85af))
* **vBTooltip:** better default finding closes [#2076](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2076) ([da64f3f](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/da64f3f0306ee818b98603bc2b32ed2e0d8c85af))


### Performance Improvements

* **BTable:** use a single array.reduce instead of multiple verbose methods when iterating the items array. Reducing the total number of iterations fixes [#2404](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2404) ([7621aad](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/7621aad0000c9138983315630e35657c6eb97f08))
* **nuxt:** smaller package ([#2012](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2012)) ([cc1e609](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cc1e60973b76575fa2cd3ef12ea919fabf152085))
* use a composable rather than BTransition component, eliminating a useless fragment ([#2372](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2372)) ([a788a2d](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/a788a2d6f1910221472e0bddb39e9029ec9f1a9b))
* when dynamic spread, use ...undefined rather than ...{} for slightly less memory consumption ([#2430](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2430)) ([ae01574](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/ae0157491e9126da382272c381e0c402d066c408))


### Reverts

* 84ce349 bad update ([cf9b942](https://github.com/bootstrap-vue-next/bootstrap-vue-next/commit/cf9b94214d704e7462ed8ebadf3891e495fbf1f7))
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).