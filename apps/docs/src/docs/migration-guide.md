# Migration Guide

## Overview

`BootstrapVueNext` is an entirely new implementation of [BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/) based on [Vue 3](https://vuejs.org/) and [Bootstrap 5](https://getbootstrap.com/). Therefore, you should not expect this to be a drop-in replacement. Where possible compatibility has been maintained, but providing a clean developer experience when working with `Vue 3`, `Bootstrap 5` and this library is a higher priority.

You should start by familiarizing yourself with the [Vue 3 Migration Guide](https://v3-migration.vuejs.org/), especially
the [breaking changes](https://v3-migration.vuejs.org/breaking-changes/) section and the
[Bootstrap 5 migration guide](https://getbootstrap.com/docs/5.3/migration/#v530). While there are
some places where this library will insulate you from the changes to the underlying libraries,
a general familiarity with the changes in the core dependencies will serve you well.

For instance, there are likely many places where you use `Bootstrap` utility classes in order to style your components.
`Bootstrap 5` made a [breaking change](https://getbootstrap.com/docs/5.3/migration/#utilities-3) to all utility
classes that involve `left` and `right` (or `l` and `r`) to be `start` and `end` (or `s` and `e`). This
will affect components such as `BNavBar` in unexpected ways that BootstrapVueNext has no control over.

Similarly, `left` and `right` props and values in the `bootstrap-vue-next` API are generally replaced by `start` and `end`.

Bootstrap-vue-next will commit to breaking changes whenever Bootstrap marks something as "deprecated". These changes may be resolved automatically, or they might necessitate manual action from the library's users.

### Nuxt

`bootstrap-vue-next` integrates with `nuxt 3` so if you are using `nuxt`, please read their
[migration guide](https://nuxt.com/docs/migration/overview) and our [router link support](/docs/reference/router-links) reference

### Status

This migration guide is a work in progress. We're adding to this guide as we complete the documentation and parity pass and doing
our best to note each component or directive that hasn't been through the full process.

<NotYetDocumented :help-only="true" />

For section of this guide that are not marked as in progress, we're still interested in examples of migrations that you
have found tricky or clarifcation if the details in the guide weren't sufficent.

## Sync modifier

A number of components in `bootstrap-vue` use `v-bind`'s `.sync` modifier. This modifier has been replaced by properties
on the the model (generally named models).

For instance, in order to two-way bind to the `indeterminate` property in `BFormCheckBox` you `v-bind` to the the model
named `indeterminate` rather than adding the sync modifier to the `indeterminate` property:

<<< FRAGMENT ./demo/SyncBefore.vue#template{vue-html}

becomes

<<< FRAGMENT ./demo/SyncAfter.vue#template{vue-html}

See the [Vue 3 migration guide](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
for more info.

## Shared Properties

### Rounding

`BAvatar`, `BAvatarGroup`, `BCardImg`, `BImg` and `BOverlay` all implement
[`RadiusElementExtendables`](/docs/types#radiuselementextendables) in order to support complex
rounding behavior. The `rounded`, `rounded-top`, `rounded-bottom`, `rounded-start`, and `rounded-end`
props each takes a [`RadiusElement`](/docs/types#radiuselement) value to specify how the component
is rounded. The edge specific props such as`rounded-top` override the `rounded` prop for that edge.

This takes the place of `top`, `bottom`, `left`, and `right` values for the `rounded` prop.

### Show and Hide

We have made an effort to standardize the names and behaviors of props that are related to the showing
and hiding of components and sub-components.

The primary reactive way to control the visibility of a component is generally by use of the `v-model` rather
than `visible` as in `BCollapse`, `BModal`, `BToast`. Note that `show` and `visible` are still supported for
specifying the initial visibility of these components.

Rather than using `hide` as a prefix to specify that you don't want a sub-component to be rendered, we've moved to using `no`
as the prefix. For instant in `BPlaceholder`, `hideHeader` becomes `noHeader`. Similarly we use the 'no' prefix in place
of 'skip' in places like `BCollapse` where `skipAnimation` becomes `noAnimation`.

The properties and components that are affected by this change are shown in the following table:

<ShowHideProps/>

### v-html

BootstrapVue provided a number of different props named `html` and `*-html` that passed arbitrary data to Vue's `v-html`.
While a warning was included with each instance of this use, it is not recommended practice to use `v-html` and obscuring
that practice further by passing down other props is ill advised in our opinion. We have instead worked to insure
that you have the ability to access the same functionality via slots. In many cases slots were already available and
took priority over the `[*-]html` props and we've filled in the gaps where there wasn't a direct replacement.
We believe the developer experience in these cases is as good or better than when using props.
Most importantly any use your code makes of `v-html` will be explicit. See the [Vue Documentation](https://vuejs.org/guide/best-practices/security.html#html-injection) for their take on the `HTML Injection` attack that use of `v-html` exposes.

| Component                      | Prop                  | Replacement Slot |
| ------------------------------ | --------------------- | ---------------- |
| `BBreadcrumbItem`              | `html`                | `default`        |
| `BCard`                        | `footer-html`         | `footer`         |
| `BCard`                        | `header-html`         | `header`         |
| `BCardFooter`                  | `html`                | `default`        |
| `BCardHeader`                  | `html`                | `default`        |
| `BCarouselSlide`               | `caption-html`        | `caption`        |
| `BCarouselSlide`               | `text-html`           | `default`        |
| `BDropdown`                    | `html`                | `default`        |
| `BInputGroup`                  | `append-html`         | `append`         |
| `BInputGroup`                  | `prepend-html`        | `prepend`        |
| `BModal`                       | `cancel-title-html`   | `cancel`         |
| `BModal`                       | `ok-title`            | `ok`             |
| `BModal`                       | `title-html`          | `title`          |
| `BNavItemDropdown`             | `html`                | `default`        |
| `BPopover` [\*](#popover-html) | `html`                | `default`        |
| `BProgressBar`                 | `label-html`          | `default`        |
| `BTable`                       | `empty-filtered-html` | `empty-filtered` |
| `BTable`                       | `empty-html`          | `empty`          |
| `BTable`                       | `caption-html`        | `table-caption`  |
| `BTableSimple`                 | `caption-html`        | `table-caption`  |

<a name="popover-html">BootstrapVue `b-popover` didn't have an `html` attribute, but alpha versions of BootstrapVueNext did</a>

`BFormCheckboxGroup` and `BFormRadioGroup` implement a scoped slot `option` which takes a `Record<string, unknown>` parameter. You can add
arbitrary fields to elements of the options array that you pass in and they will be accessible to the slot. The example
below uses the data on the options object to create the html inline in the slot.

<<< DEMO ./demo/CheckboxGroupMigration.vue

Or you can do a straightforward translation of a `BFormRadioGroup` passing an `HTML` string through to its children.
If you're passing user data, this still opens your code uop to <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">
<abbr title="Cross Site Scripting Attacks">XSS attacks</abbr></a>, if you do not first
<a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">sanitize</a> the
user supplied string, but the BootstrapVueNext library isn't adding an extra layer of abstraction to this vulnerability.

<<< DEMO ./demo/RadioGroupMigration.vue

## Components

### Grid

BootstrapVueNext doesn't currently implement the ability to define `breakpoint` names.

See the [Bootstrap 5 migration guide](https://getbootstrap.com/docs/5.3/migration/#grid-updates), in particular
values for `order` on `<BCol>` only provides support for 1 - 5.

### BAccordion

See [Show and Hide](#show-and-hide) shared properties.

#### BAccordionItem

See [Show and Hide](#show-and-hide) shared properties.

### BAlert

As in `bootstrap-vue`, a simple `BAlert` is not visible by default. However, the means of showing the alert are different.
The `bootstrap-vue` `show` prop is deprecated, use `model-value` instead.

<<< FRAGMENT ./demo/AlertBefore.vue#template{vue-html}

becomes

<<< FRAGMENT ./demo/AlertAfter.vue#template{vue-html}

For consistency with other components properties, slots and events that use the term `dismissible` in `bootstrap-vue`
now use the term `close`. For example the `dismissed` event is now the `closed` event and the `dismiss` slot is
now the `close` slot.

### BAspect

<NotYetImplemented/>

### BAvatar

Icon support has been deprecated. Icons support can be implemented using the default slot including
either [unplug icons](/docs/icons) or by embedding an `.svg`.

<<< DEMO ./demo/AvatarIcon.vue#template{vue-html}

#### Badge Positioning

Badge positioning has changed to using a single property `badge-placement` and our
[`CombinedPlacement` utility](/docs/types/combined-placement) rather than individual properties.

For instance, use `badge-placement='top'` in place of `badge-top` or `badge-placement='end'` in place of
`badge-right`. For combined props, rather than using `badge-top` and `badge-right`, use
`badge-placement='top-end'.

#### Rounding Sides

See the [Rounding](#rounding) section.

### BBadge

Badges no longer have focus or hover styles for links. See the
[Bootstrap migration guide](https://getbootstrap.com/docs/5.3/migration/#badges) for more information.

### BBreadcrumb

See the [v-html](#v-html) section for information on deprecation of the `html` prop.

### BButton

The `block` prop is deprecated. See our [`BButton` documentation](/docs/components/button#block-level-buttons)
and [Bootstrap's documentation](https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons) for
details.

### BButtonClose

`BButtonClose` has been renamed to `BCloseButton` for consistency with [Bootstrap](https://getbootstrap.com/docs/5.3/components/close-button/)

The `content` and `text-variant` props have been deprecated since Bootstrap 5 moved to using an
embedded svg for the close icon. See [their migration guide](https://getbootstrap.com/docs/5.3/migration/#close-button-1) for details.

### BButtonToolbar

[Keyboard navigation](https://bootstrap-vue.github.io/bootstrap-vue/docs/components/button-toolbar#keyboard-navigation) is
not implemented.

### BCalendar

<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860#event-14531487213">See issue #1860</BLink></NotYetImplemented>

### BCard

Image placement is accomplished by the single `img-placement` prop, which takes the values
`top`, `bottom`, `start`, `end`, or `overlay`. This allows us to deprecate the `imgBottom`,
`imgEnd`, `imgLeft`, `imgRight`, `imgStart`, and `imgTop` props from `BCard`.

Similarly, the `top`, `bottom`, `left`, and `right` props on `BCardImg` are deprecated in favor
of a single `placement` prop that take the values `top`, `bottom`, `start`, and `end`. Note that
`end` and `start` are not yet implemented.

The `sub-title`, `sub-title-tag` and `sub-title-text-variant` props have been renamed to
`subtitle`, `subtitle-tag` and `subtitle-text-variant`, respectively.

For `BCardBody`, `BCardHeader`, `BCardFooter`, `BCardTitle`, and `BCardText` components the component name specific
props are deprecated and replaced by the generalized props. For example `footer-bg-variant` is replaced by `bg-variant`.
This is true for all of the `body-*`, `header-*`, and `footer-*` props on these components. Note
that the specific props are still retained on the main `BCard` component.

Similarly the `text-tag` and `title-tag` props have been replaced by `tag` on the `BCardText`
and `BCardTitle` components.

`body-border-variant` and `body-variant` are not implemented on `BCard` and `border-variant` is not
implemented on `BCardBody`.

See the [v-html](#v-html) section for information on deprecation of the `footer-html` and `header-html` props on
`BCard` and the `html` props on `BCardFooter` and `BCardHeader`.

### BCardImgLazy

This functionality has been replaced by lazy loading on `<BImg>` see [BImg notes](#bimg) for details.

### BCarousel

The `sliding-start` and `sliding-end` events have been renamed to `slide` and `slid`.
The `label-indicators` prop has been renamed to `indicators-button-label`.

See the [v-html](#v-html) section for information on deprecation of the `caption-html` and `text-html` props
on `BCarouselSlide`.

### BCollapse

The `accordion` prop is deprecated: In `BootstrapVue`/`Bootstrap4`, accordions are implemented via `BCollapse`.
In `BootstrapVueNext`/`Bootstrap5` accordions are first class citizens, so please use the
[`BAccordion`](/docs/components/accordion) instead.

The prop `toggle` has replaced the prop `appear` with slightly different semantics. In order to create a
collapse that is closed and transitions to open on the initial mount, set `visible` to false and `toggle` to true.

The `close` scoped slot element has been replaced by `hide` for consistency with the other props and
events on this component.

`$root` instance events `bv::collapse::state` and `bv::toggle::collapse` are deprecrated.

See [Show and Hide](#show-and-hide) shared properties.

### BDropdown

BootstrapVueNext uses [floating-ui](https://floating-ui.com/) to implemented dropdowns. This affects values and behaviors
for properties such as `boundary` as well as the alignment and placement properties. For fine control, use `floating-middleware`
in place of `popper-opts`. Check out [our documentation](/docs/components/dropdown) and [theirs] for details.

BootstrapVueNext replaces `drop-up`, `drop-left` and `drop-right` props with a single `placement` prop.
Valid values for `placement` are defined in `float-ui`'s docs [here](https://floating-ui.com/docs/computeposition#placement).

The `block` prop is deprecated. See our [`BDropdown` documentation](/docs/components/dropdown#block-level-dropdowns)
and [Bootstrap's documentation](https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons) for
details.

The `right` prop is replaced by `end` see the [overview section](#overview) of this page for details.

The `html` prop has been deprecated, use the `button-content`.

`$root` instance events `bv::dropdown::hide` and `bv::dropdown::show` are deprecated.

The the boolean argument to control returning focus to the toggle button on the `hide` scoped property of the default slot is deprecated.
It is less important in BootstrapVueNext since bootstrap v5 by default doesn't have the focus ring that v4 has.

See [Show and Hide](#show-and-hide) shared properties.

See the [v-html](#v-html) section for information on deprecation of the `html` prop.

The `click` event that was emitted when clicking on the left or button side of a `split` dropdown
has been replaced by a `split-click` which provides the native mouse event. This is because
naming the event 'click' was hiding the native `click` event so supressing the that event for
parents that might have unexpected actions (such as a link navigating to a new page) was difficult.

<NotYetImplemented>`toggleAttrs`</NotYetImplemented>

#### Dropdown sub-components

BootstrapVueNext makes extensive use of inherited attributes to implement customization in dropdown sub-components
in places where BootstrapVue used explicit props on the sub-components. In general the sub-components are
implemented as an `<li>` element wrapping the actual sub-component. In these cases, there is a `wrapper-class` prop
that is used to apply classes to the `<li>` element and an `*-class` prop that is used to apply classes to the
sub-component where `*-class` is related the name of the sub-component. e.g. `BDropdownDivider` has a `divider-class`
prop that is used to add classes to the actual divider element. In addition, the inherited attributes are applied to
the sub-component rather than the wrapper `<li>` tag and there is an explicit `wrapper-attr` tag defined to place
additional attributes on the `<li>` tag.

Looking at the code for
[`BDropdownDivider`](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/packages/bootstrap-vue-next/src/components/BDropdown/BDropdownDivider.vue)
should give a clear picture how how the above fits together and the remainder of this section will give specifics
on how to handle migration from BootstrapVue.

Several of the BootstrapVue sub-components have an explicit `id` prop, which sets the id on the inner component. In
BootstrapVueNext the `id` as well as any other unspecified props will be set will be set on the inner component, having
the same effect as in BootstrapVue.

For example:

<<< FRAGMENT ./demo/DropdownHeaderMigration.vue#template{vue-html}

yields

<<< FRAGMENT ./demo/DropdownHeaderMigration.html#template

The exception to this rule is `<BDropdownGroup>` where we explicitly implement `id` in order to be able to generate
a header id.

##### BDropdownForm

`inline` is deprecated, see the [BForm](#bform) migration information. To add classes to the `<form>` tag in `BdropdownForm`
use the `form-class` prop.

The `disabled` prop is deprecated, set the disabled prop on individual components as you do with `BForm`.

### BEmbed

<NotYetImplemented/>

### BForm

Bootstrap 5 has dropped form-specific layout classes for the grid system. See the
[Bootstrap 5 Changelog](https://getbootstrap.com/docs/5.3/migration/#forms), so we no longer
explicitly implement and `inline` property on the `BForm` component nor is there a `BFormRow` component.
Inline forms are still supported through use of bootstrap classes. See the [inline form](/docs/components/form#inline-form)
documentation for more info.

#### BForm Components

`Vue 3` changed the the way that `v-model` binding works and in the process changed the guidance
when naming the main model property and events for the primary model. `bootstrap-vue-next` follows
this guidance, which affects all of the wrappers for form input. If you're looking for the `value`
property or the `change` and `input` events, you'll find that functionality in the `modelValue`
property and `update:model-value` events. Bootstrap-vue-next no longer provides custom `change` and
`input` events, so the native versions of those events are now exposed.

See the [Vue 3 migration guide](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
for more info.

See the [v-html](#v-html) section for information on deprecation of the `html` prop on
`BFormDatalist`, `BFormRadioGroup`, `BFormSelect`, and`BFormSelectOptionGroup`

### BFormCheckbox

See [BForm Components](bform-components)

### BFormDatePicker

<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860#event-14531487213">See issue #1860</BLink></NotYetImplemented>

### BFormFile

<NotYetDocumented type="component"/>

### BFormGroup

Use `label-visually-hidden` instead of `label-sronly` per
[Bootstrap Migration Guide](https://getbootstrap.com/docs/5.3/migration/#helpers-2)

### BFormInput

Access to the native `input` element is implemented differently due to changes in how Vue 3
handles references. See the [BFormInput documentation](/docs/components/form-input#exposed-input-element) for more details.

<NotYetImplemented>Disabling mousewheel events.</NotYetImplemented>

`trim`, `lazy`, or `number` properties have been deprecated. We support the native modifiers
[`trim`, `lazy`, and `number`](https://vuejs.org/guide/essentials/forms.html#modifiers).
They work as documented in vue.js, so there is no longer a need for the properties.

### BFormRadio

See [BForm Components](bform-components)

### BFormRating

<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2051">See issue #2051</BLink></NotYetImplemented>

### BFormSelect

[Options as an object](https://bootstrap-vue.github.io/bootstrap-vue/docs/components/form-select#options-as-an-object) was deprecated in BootstrapVue and never implemented in BootstrapVueNext

### BFormSpinButton

See [BForm Components](bform-components)

### BFormTags

In BootstrapVue, the event handlers for some of the other input controls, like `BFormSelect`, lined up with
the `inputHandlers` for the default slot's scoped properties such that one could directly bind them. See the
[BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/docs/components/form-tags#advanced-custom-rendering-usage) documentation
for an example. This is no longer the case with BootstrapVueNext.

In general BootstrapVueNext prefered clean APIs to enabling this kind of matching of events, so many of the advanced
examples in the [BFormTags docs](https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/form-tags.html#custom-rendering-with-default-scoped-slot) are more explicit when binding attributes from other controls. Please
take a look at these examples for guidance when migrating.

### BFormTimePicker

<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860#event-14531487213">See issue #1860</BLink></NotYetImplemented>

### BImg

See the [Rounding](#rounding) section.

Lazy loading is now achieved through the native `loading` attribute rather than a separate component. Thus
`BImgLazy` and `BCardImgLazy` are deprecated.

### BImgLazy

This functionality has been replaced by lazy loading on `<BImg>` see [BImg](#bimg) for details.

### BInputGroup

Bootstrap 5 [no longer requires](https://getbootstrap.com/docs/5.3/migration/#forms-1) `input-group-append` or `input-group-prepend`
on elements to append or prepend them to the control, they can just be added as direct children of the input group.
Due to this change `<BInputGroupAppend>`, `<BInputGroupPrepend>`, and `<BInputGroupAddon>` are no longer necessary and have been deprecated.
This also has implications on the use of `<BInputGroupText>` - in BootstrapVue, this component was used form grouping
sub-components. In BootstrapVueNext, `<BInputGroupText>` should only be used to apply styles to textual elements
appended or prepended to a group. Using it to group components breaks the automatic append and prepend stylings.

See the [v-html](#v-html) section for information on deprecation of the `append-html` and `prepend-html` props.

### BInputGroupAddon

Deprecated - See [BInputGroup]

### BInputGroupAppend

Deprecated - See [BInputGroup]

### BInputGroupText

Deprecated - See [BInputGroup]

### BInputGroupPrepend

Deprecated - See [BInputGroup]

### BFormSpinbutton

The locale property in BootstrapVueNext only allows a for a single locale, while BSV allows for an array of locales. If this is
a limitation that affect your scenario, please [file an issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues) with an explanation of the expected behavior.

### BFormTextbox

`trim`, `lazy`, or `number` properties have been deprecated. We support the native modifiers
[`trim`, `lazy`, and `number`](https://vuejs.org/guide/essentials/forms.html#modifiers).
They work as documented in vue.js, so there is no longer a need for the properties.

### BJumbotron

<NotYetImplemented/>

Note that Bootstrap has deprecated their Jumbotron component, but it can be replicated using
utility classes. See their [migration guide](https://getbootstrap.com/docs/5.3/migration/#jumbotron)
for details.

### BLink

Bootstrap Vue used `Vue Router 3`, BootstrapVueNext uses [`Vue Router 4`](https://router.vuejs.org/) please read the
[Vue Router migration guide](https://router.vuejs.org/guide/migration/) if using the router features of `BLink`.

`BLink` no longer supresses the scroll to top default behavior when `href='#'`.

#### append

Vue router deprecated the `append` prop in `<router-link>`, BootstrapVueNext has followed suit and deprecated the `append`
prop on `BLink`. See the [`Vue Router` migration guide](https://router.vuejs.org/guide/migration/#Removal-of-append-prop-in-router-link-) for details.

#### event

Vue router deprecated the `event` prop in `<router-link>`, BootstrapVueNext has followed suit and deprecated the `event`
prop on `BLink`. See the [`Vue Router` migration guide](https://router.vuejs.org/guide/migration/#Removal-of-event-and-tag-props-in-router-link-) for details.

#### exact

Vue router deprecated the `exact` prop in `<router-link>`, BootstrapVueNext has followed suit and deprecated the `exact`, `exact-path`
and `exact-path-active-class` props on `BLink`. See the [`Vue Router` migration guide](https://router.vuejs.org/guide/migration/#Removal-of-the-exact-prop-in-router-link-) for details.

#### $root events

BootstrapVueNext no longer emits the `bv::link::clicked` event on `$root`.

### BListGroup

See [BLink](#blink) for changes to link and router behavior.

### BMedia

<NotYetImplemented/>

Note that Bootstrap has deprecated their Media object, but it can be replicated using
flex utility classes. See their [documentation](https://getbootstrap.com/docs/5.3/utilities/flex/#media-object) for details.

### BModal

<NotYetDocumented type="component"/>

See the [v-html](#v-html) section for information on deprecation of the `cancel-title-html`, `ok-title-html`, and `title-html` props.

#### Replacement for Modal Message boxes

[BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/docs/components/modal#modal-message-boxes) provided two methods on the `this.$bvModal` object called `msgBoxOk` and `msgBoxConfirm`.
In holding with the Vue3 first philosophy, BootstrapVueNext provides a composable called [`useModalController`](/docs/composables/useModalController) that
fills the same needs (and more).

Please read the [`useModalController`](/docs/composables/useModalController) documentation and then come back here for examples of replacements
for `msgBoxOk` and `msgBoxConfirm`.

Example using `useModalController.show` to replace `msgBoxOk` (Remember to include `<BModalOrchestrator />` in your App Root):

<<< DEMO ./demo/ModalMessageBox.vue

Example using `useModalController.confirm` to replace `msgBoxConfirm` (Remember to include `<BModalOrchestrator />` in your App Root):

<<< DEMO ./demo/ModalConfirm.vue

The `show` and `confirm` `props` object accepts all of the properties that are defined on
[BModal](/docs/components/modal#component-reference) except for `modelValue`.

See [Show and Hide](#show-and-hide) shared properties.

#### Replacement for Modal slots

[BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/docs/components/modal#custom-rendering-with-slots) provides different slots to configure some pieces of the modal component. These slots are slightly different in [BootstrapVueNext](http://localhost:8000/bootstrap-vue-next/docs/components/modal.html#comp-reference-bmodal-slots):

| BootstrapVue       | BootstrapVueNext |
| ------------------ | ---------------- |
| default            | default          |
| modal-title        | title            |
| modal-header       | header           |
| modal-footer       | footer           |
| modal-ok           | ok               |
| modal-cancel       | cancel           |
| modal-header-close | header-close     |

### BNav

`align` prop now takes values from [`AlignmentJustifyContent`](/docs/types/alignment): `start`, `center`, `end`, `between`, `around`, and `evenly`

#### BNavItemDropdown

See [`BDropdown`](#bdropdown) for details

See the [v-html](#v-html) section for information on deprecation of the `html` prop.

### BNavbar

The `type` prop is deprecated. Use the the `v-b-color-mode` directive or `useColorMode` composable instead. Details in our [docs](/components/navbar#color-scheme)

#### BNavbarNav

`align` prop now takes values from [`AlignmentJustifyContent`](/docs/types/alignment): `start`, `center`, `end`, `between`, `around`, and `evenly`

### BOffcanvas

<NotYetDocumented type="component"/>

See [Show and Hide](#show-and-hide) shared properties.

### BOverlay

<NotYetDocumented type="component"/>

prop `blur` does not work when the prop `bgColor` is defined. It also will not work if the prop `variant` is anything other than `white` or `transparent`. This overcomes a browser change.

### BPagination

See [Show and Hide](#show-and-hide) shared properties.

### BPaginationNav

<NotYetImplemented/>

### BPopover

See [Show and Hide](#show-and-hide) shared properties.

See the [v-html](#v-html) section for information on deprecation of the `html` prop.

The `content` prop has been renamed to `body` for consistency with other components.

The `container` prop has been deprecated. Use the `teleportTo` prop instead to specify where the popover
should be mounted. See [Vue Teleport documentation](https://vuejs.org/guide/built-ins/teleport.html).

`custom-class` has been changed to `body-class` and a `title-class` has been added for completeness.

`fallback-placement` has been deprecated. Use the various options provided by [floating-ui](https://floating-ui.com/)
to handle placement.

The ability for the `target` prop to take a function has been deprecated.

Triggers work differently as the underlying library we use to manage popovers has changed. See
[our documentation](/docs/components/popover#triggers) and [floating-ui](https://floating-ui.com/)
for details.

The `variant` prop has been deprecated. Use Bootstrap’s color and background utility classes to style
popovers instead. See [Popover custom classes and variants](/docs/components/popover#custom-classes-and-variants)
for details.

The `disabled` prop and
[Programmatically Disabling](https://bootstrap-vue.org/docs/components/popover#programmatically-disabling-popover) have
been deprecated along with the `disabled` and `enabled` events. Use `manual=true` to disable BootstrapVueNext’s automatic
trigger handling and if your own code shows the popover disable those mechanisms as well. If you believe that implementing
full parity with the BootstrapVue feature is useful, please open an issue or propose a pull request.

`delay` now defaults to 100ms for show and 300ms for hide rather than 50ms for both

The default for `placement` is now `top` rather than `right`

`$root` events are deprecated. See [usePopoverController](/docs/composables/usePopoverController) as an alternative.

### BProgressBar

See the [v-html](#v-html) section for information on deprecation of the `label-html` prop.

### BSkeleton

`<BSkeleton*>` components have been replaced by the more appropriately named `<BPlaceholder*>` components.

`<BSkeletonIcon>` is deprecated along with the rest of the the BootstrapVue icon support. See our
[icon documentation](/docs/icons) for details. This functionality can be replicated by using
`<BPlaceholderWrapper>` with your choice of icon replacement in the `loading` slot.

### BTable

<NotYetDocumented type="component"/>

See the [v-html](#v-html) section for information on deprecation of the `html` prop.

The slot `emptyfiltered` has been renamed to `empty-filtered` for consistency.

The following are <NotYetImplemented/> -

- The `filter-debounce`, `fixed`, `no-border-collapse`, `selected-variant`, and `table-footer-sorting` props
- The `filter` prop does not yet support a RegEx object, only a string.
- The `context-changed` and `refreshed` events

`filter-included-fields` have been replaced by a single `filterable` prop. `filter-ignored-fields`
is deprecated.

`no-sort-reset` is deprecated. Use `must-sort`. By default, sortability can be reset by clicking (3) times [asc => desc => undefined => asc...]

`selected-variant` has been renamed to `selection-variant` for internal consistency.

`sort-compare` and `sort-direction` are deprecated, use the `sortBy` prop (or model) as documented [here](/docs/components/table#sorting) instead.

Similarly, the `sort-changed` event is replaced by the `update:sortBy` event

`table-variant` is replaced with `variant` for consistency.

The slot scope for `table-colgroup` slot now only contains the `fields` prop, with the `columns` prop removed.

BootstrapVue used the main v-model binding to expose a readonly version of the displayed items. This is deprecated. Instead,
used the exposed function `displayedItems` as demonstrated in [the documentation](/docs/components/table#complete-example).

The semantics of the `row-selected` event have changed. `row-selected` is now emitted for each selected
row and sends the single row's item as it's parameter. There is a new matching event called `row-unselected`
that is emitted for each row that is unselected. There is also a named model `selectedItems` that behaves
like the BSV `row-selected` event, emitting an array of all seleted rows. An example of this is available
in [the documentation](/docs/components/table#row-select-support)

BootstrapVue adds utility classes to the `<table>` including `b-table-select-single`,`b-table-select-multi`, and `b-table-select-range`, these have been deprecated, as the functionality should be easily replicated by the developer without adding to the API surface.

<NotYetImplemented/>The `aria-multiselect` attribute is not added to `<table>`
<NotYetImplemented/>Automatically adding accessibility attributes `role` and `scope` to helper components

The `filtered` event has a single argument `Items[]` rather than two arguments with an array and length. The semantics haven't changed.

<NotYetImplemented/> Heading and data row accessibility

### Items Provider Functions

To use an items provider, set the `provider` prop to a provider function and leave the
`items` prop undefined (unlike in BootstrapVue, where the `items` prop was overloaded). See
our [documentation](/docs/components/table#using-items-provider-functions) for details.

The items provider function `ctx` parameter now contains `sortBy` array rather than `sortBy` and `sortDesc` fields -
see the [sorting docs](/docs/components/table#sorting) for details

The table prop `api-url` and the items provider function `ctx` parameter `apiUrl` field are both deperecdated
as they are easily replaced by direct management of the api call by the user.

The items provider no longer includes an optional callback parameter, use the async method of calling instead.

### Field Definitions

`formatter` Only the callback function value for this field is implemented, adding the name
of a method in the component is deprecated.

`sortKey` and `sortDirection` are deprecated, use the table's `sortBy` model as documented [here](/docs/components/table#sorting) instead.

`filterByFormatted` is implemented, but does not take a format function as an argument.

### BTableLight

<NotYetDocumented type="component"/>

See the [v-html](#v-html) section for information on deprecation of the `html` prop.

The slot scope for `table-colgroup` slot now only contains the `fields` prop, with the `columns` prop removed.

### BTableSimple

<NotYetDocumented type="component"/>

Use `table-attrs` to apply additional attributes to the `<table>` element in reponsive mode.

See the [v-html](#v-html) section for information on deprecation of the `caption-html` prop.

#### BTBody

<NotYetImplemented>`tbody-transition-props` and `tbody-transition-handlers`</NotYetImplemented>

#### BTFoot

`foot-variant` has been replaced with `variant`, which can used on other table elements.

#### BTHead

`head-variant` has been replaced with `variant`, which can used on other table elements.

### BTabs

`align` prop now takes values from [`AlignmentJustifyContent`](/docs/types/alignment): `start`, `center`, `end`, `between`, `around`, and `evenly`

<NotYetImplemented/>

- `click` event is not implemented on `BTab`
- `changed` event is not implemented on `BTabs`

### BTime

<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860#event-14531487213">See issue #1860</BLink></NotYetImplemented>

### BToast

<NotYetDocumented type="component"/>

See [Show and Hide](#show-and-hide) shared properties.

### BTooltip

<NotYetDocumented type="component"/>

See [Show and Hide](#show-and-hide) shared properties.

See the [v-html](#v-html) section for information on deprecation of the `html` prop.

`content` prop has been renamed to `body` for consistency with other components.

## Directives

### Hover

<NotYetImplemented/>

### Modal

<NotYetDocumented type="directive"/>

### Popover

<NotYetDocumented type="directive"/>

### ScrollSpy

<NotYetDocumented type="directive"/>

### Toggle

<NotYetDocumented type="directive"/>

### Tooltip

<NotYetDocumented type="directive"/>

### Visible

<NotYetImplemented />
