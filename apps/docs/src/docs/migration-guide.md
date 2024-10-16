# Migration Guide

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

## Overview

`bootstrap-vue-next` is an entirely new implementation of [bootrap-vue](https://bootstrap-vue.org/) based on [Vue 3](https://vuejs.org/) and [Bootstrap 5](https://getbootstrap.com/). Therefore, you should not expect this to be a drop-in replacement. Where possible compatibility has been maintained, but providing a clean developer experience when working with `Vue 3`, `Bootstrap 5` and this library is a higher priority.

You should start by familiarizing yourself with the [Vue 3 Migration Guide](https://v3-migration.vuejs.org/), espectially
the [breaking changes](https://v3-migration.vuejs.org/breaking-changes/) section and the
[Bootstrap 5 migration guide](https://getbootstrap.com/docs/5.3/migration/#v530). While there are
some places where this library will insulate you from the changes to the underlying libraries,
a general familiarity with the changes in the core dependencies will serve you well.

For instance, there are likely many places where you use `Bootstrap` utility classes in order to style your components.
`Bootstrap 5` change made a [breaking change](https://getbootstrap.com/docs/5.3/migration/#utilities-3) to all utility
classes that involve `left` and `right` (or `l` and `r`) to be `start` and `end` (or `s` and `e`). This
will affect compents such as `BNavBar` in unexpected ways that BSVN has no control over.

Similarly, `left` and `right` props and values in the `bootstrap-vue-next` API are generally replaced by `start` and `end`.

Bootstrap-vue-next will commit to breaking changes whenever Bootstrap marks something as "deprecated". These changes may be resolved automatically, or they might necessitate manual action from the library's users.

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
[`RadiusElementExtendables`](/docs/types#radius-element-extendables) in order to support complex
rounding behavior. The `rounded`, `rounded-top`, `rounded-bottom`, `rounded-start`, and `rounded-end`
props each takes a [`RadiusElement](/docs/types#radius-element) value to specify how the component
is rounded. The edge specific props such as`rounded-top` override the `rounded` prop for that edge.

This takes the place of `top`, `bottom`, `left`, and `right` values for the `rounded` prop.

## BAlert

As in `bootstrap-vue`, a simple `BAlert` is not visible by default. However, the means of showing the alert are different.
The `bootstrap-vue` `show` prop is deprecated, use `model-value` instead.

<<< FRAGMENT ./demo/AlertBefore.vue#template{vue-html}

becomes

<<< FRAGMENT ./demo/AlertAfter.vue#template{vue-html}

For consistency with other components properties, slots and events that use the term `dismissible` in `bootstrap-vue`
now use the term `close`. For example the `dismissed` event is now the `closed` event and the `dsimiss` slot is
now the `close` slot.

## BAvatar

Icon support has been deprecated. Icons support can be implemented using the default slot including
either [unplug icons](/docs/icons) or by embedding an `.svg`.

<<< DEMO ./demo/AvatarIcon.vue#template{vue-html}

### Badge Positioning

Badge positioning has changed to using a single property `badge-placement` and our
[`CombinedPlacement` utility](/docs/types/combined-placement) rather than individual properties.

For instance, use `badge-placement='top'` in place of `badge-top` or `badge-placement='end'` in place of
`badge-right`. For combined props, rather than using `badge-top` and `badge-right`, use
`badge-placement='top-end'.

### Rounding Sides

See the [Rounding](#rounding) section.

## BBadge

Badges no longer have focus or hover styles for links. See the
[Bootstrap migration guide](https://getbootstrap.com/docs/5.3/migration/#badges) for more information.

## BBreadcrumb

The `html` prop on `BBreadcrumbItem` is deprecated. Use the default slot instead.

## BButton

The `block` prop is deprecated. See our [`BButton` documentation](/docs/components/button#block-level-buttons)
and [Bootstrap's documentation](https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons) for
details.

## BButtonClose

`BButtonClose` has been renamed to `BCloseButton` for consistency with [Bootstrap](https://getbootstrap.com/docs/5.3/components/close-button/)

The `content` and `text-variant` props have been deprecated since Bootstrap 5 moved to using an
embedded svg for the close icon. See [their migration guide](https://getbootstrap.com/docs/5.3/migration/#close-button-1) for details.

## BButtonToolbar

[Keyboard navigation](https://bootstrap-vue.org/docs/components/button-toolbar#keyboard-navigation) is
not implemented.

## BCard

Image placement is accomplished by the single `img-placement` prop, which takes the values
`top`, `bottom`, `start`, `end`, or `overlay`. This allows us to deprecate the `imgBottom`,
`imgEnd`, `imgLeft`, `imgRight`, `imgStart`, and `imgTop` props from `BCard`.

Similarly, the `top`, `bottom`, `left`, and `right` props on `BCardImg` are deprecated in favor
of a single `placement` prop that take the values `top`, `bottom`, `start`, and `end`. Note that
`end` and `start` are not yet imnplemented.

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

## BCarousel

The `sliding-start` and `sliding-end` events have been renamed to `slide` and `slid`.
The `label-indicators` prop has been renamed to `indicators-button-label`.
<NotYetImplemented>The `label-goto-slide`and `no-animation` props.</NotYetImplemented>

## BCollapse

The `accordian` prop is deprecated: In `bootstrap-vue`/`bootstrap4`, accordians are implemented via `BCollapse`.
In `boostrap-vue-nexst`/`bootstrap5` accordians are first class citizens, so please use the
[`BAccordian`](/docs/components/accordian) instead.

The prop `toggle` has replaced the prop `appear` with slightly different semantics. In order to create a
collapse that is closed and transitions to open on the initial mount, set `visible` to false and `toggle` to true.

The `close` scoped slot element has been replaced by `hide` for consistency with the other props and
events on this component.

`$root` instance events `bv::collapse::state` and `bv::toggle::collapse` are deprecrated.

<NotYetImplemented>The `appear` prop.</NotYetImplemented>

## BDropdown

BootstrapVueNext uses [floating-ui](https://floating-ui.com/) to implemented dropdowns. This affects values and behaviors
for properties souch as `boundary` as well as the alignent and placement properties. For fine control, use `floating-middleware`
in place of `popper-opts`. Check out [our documentation](/docs/components/dropdown) and [theirs] for details.

The `block` prop is deprecated. See our [`BDropdown` documentation](/docs/components/dropdown#block-level-dropdowns)
and [Bootstrap's documentation](https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons) for
details.

The `right` prop is replaced by `end` see the [overview section](#overview) of this page for details.

The `html` prop has been deprecated, use the `button-content`.

`$root` instance events `bv::dropdown::hide` and `bv::dropdown::show` are deprecrated.

<NotYetImplemented>`toggleAttrs`</NotYetImplemented>

### Dropdown sub-components

BootstrapVueNext makes extensive use of inherrited attributes to implement customization in dropdown sub-components
in places where BootstrapVue used explicit props on the sub-components. In general the sub-components are
implemented as an `<li>` element wrapping the actual sub-component. In these cases, there is a `wrapper-class` prop
that is used to apply classes to the `<li>` element and an `*-class` prop that is used to apply classes to the
sub-component where `*-class` is related the name of the sub-component. e.g. `BDropdownDivier` has a `divider-class`
prop that is used to add classes to the actual divider element. In addition, the inheritted attributes are applied to
the subcomonent rather than the wrapper `<li>` tag and there is an explicit `wrapper-attr` tag defined to place
additional attributes on the `<li>` tag.

Looking at the code for
[`BDropdownDivider`](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/packages/bootstrap-vue-next/src/components/BDropdown/BDropdownDivider.vue)
should give a clear picture how how the above fits together and the remainder of this section will give specifics
on how to handle migration from BootstrapVue.

Several of the BootstrapVue sub-components have an explicit `id` prop, which sets the id on the inner component. In
BootstrapVueNext the `id` as well as any other unspecified props will be set will be set on the inner component, having
the same effect as in BootstrapVue.

For example:

<<< FRAGMENT ./demo/DropdownHeader.vue#template{vue-html}

yields

<<< FRAGMENT ./demo/DropdownHeader.html#template

The exception to this rule is `<BDropdownGroup>` where we explicitly implement `id` in order to be able to generate
a header id.

#### BDropdownForm

`inline` is deprectated, see the [BForm](#bform) migration information. To add classes to the `<form>` tag in `BdropdownForm`
use the `form-class` prop.

The `disabled` prop is deprecated, set the disabled prop on individual components as you do with `BForm`.

## BForm

Bootstrap 5 has dropped form-specific layout classes for the grid system. See the
[Bootstrap 5 Changelog](https://getbootstrap.com/docs/5.3/migration/#forms), so we no longer
explicitly implemnt and `inline` property on the `BForm` component. Inline forms are still
supported through use of bootstrap classes. See the [inline form](/docs/components/form#inline-form)
documentation for more info.

### BForm Components

`Vue 3` changed the the way that `v-model` binding works and in the process changed the guidance
when naming the main model property and events for the primary model. `bootstrap-vue-next` follows
this guidance, which affects all of the wrappers for form input. If you're looking for the `value`
property or the `change` and `input` events, you'll find that functionality in the `modelValue`
property and `update:model-value` events. Bootstrap-vue-next no longer provides custom `change` and
`input` events, so the native versions of those events are now exposed.

See the [Vue 3 migration guide](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
for more info.

## BFormGroup

Use `label-visually-hidden` instead of `label-sronly` per
[Bootstrap Migration Guide](https://getbootstrap.com/docs/5.3/migration/#helpers-2)

## BFormInput

Access to the native `input` element is implemented differently due to changes in how Vue 3
handles references. See the [BFormInput documentation](/docs/components/form-input#exposed-input-element) for more details.

<NotYetImplemented>Disabling mousewheel events.</NotYetImplemented>

`trim`, `lazy`, or `number` properties have been deprecated. We support the native modifiers
[`trim`, `lazy`, and `number`](https://vuejs.org/guide/essentials/forms.html#modifiers).
They work as documented in vue.js, so there is no longer a need for the properties.

## BFormSelect

[Options as an object](https://bootstrap-vue.org/docs/components/form-select#options-as-an-object) was deprecated in BootstrapVue and never implemented in BootstrapVueNext

## BImg

See the [Rounding](#rounding) section.

Lazy loading is now achieved through the native `loading` attribute rather than a seperate component. Thus
`BImgLazy` and `BCardImgLazy` are deprecated.

## BInputGroup

Bootstrap 5 [no longer requires](https://getbootstrap.com/docs/5.3/migration/#forms-1) `input-group-append` or `input-group-prepend`
on elements to append or prepend them to the control, they can just be added as direct children of the input group.
Due to this change `<BInputGroupAppend>`, `<BInputGroupPrepend>`, and `<BInputGroupAddon>` are no longer necessary and have been deprecated.
This also has implications on the use of `<BInputGroupText>` - in BootstrapVue, this component was used form grouping
sub-components. In BootstrapVueNext, `<BInputGroupText>` should only be used to apply styles to textual elements
appended or prepended to a group. Using it to group components breaks the automatic append and prepend stylings.

## BInputGroupAddon

Deprectated - See [BInputGroup]

## BInputGroupAppend

Deprectated - See [BInputGroup]

## BInputGroupText

Deprectated - See [BInputGroup]

## BInputGroupPrepend

Deprectated - See [BInputGroup]

## BFormSpinbutton

The locale property in BSVN only allows a for a single locale, while BSV allows for an array of locales. If this is
a limitation that affect your scenario, please [file an issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues) with an explanation of the expected behavior.

## BFormTextbox

`trim`, `lazy`, or `number` properties have been deprecated. We support the native modifiers
[`trim`, `lazy`, and `number`](https://vuejs.org/guide/essentials/forms.html#modifiers).
They work as documented in vue.js, so there is no longer a need for the properties.

## BLink

Bootstrap Vue used `Vue Router 3`, BSVN uses [`Vue Router 4`](https://router.vuejs.org/) please read the
[Vue Router migration guide](https://router.vuejs.org/guide/migration/) if using the router features of `BLink`.

`BLink` no longer supresses the scroll to top default behavior when `href='#'`.

### append

Vue router deprecated the `append` prop in `<router-link>`, BSVN has followed suit and deprecated the `append`
prop on `BLink`. See the [`Vue Router` migration guide](https://router.vuejs.org/guide/migration/#Removal-of-append-prop-in-router-link-) for details.

### event

Vue router deprecated the `event` prop in `<router-link>`, BSVN has followed suit and deprecated the `event`
prop on `BLink`. See the [`Vue Router` migration guide](https://router.vuejs.org/guide/migration/#Removal-of-event-and-tag-props-in-router-link-) for details.

### exact

Vue router deprecated the `exact` prop in `<router-link>`, BSVN has followed suit and deprecated the `exact`, `exact-path`
and `exact-path-active-class` props on `BLink`. See the [`Vue Router` migration guide](https://router.vuejs.org/guide/migration/#Removal-of-the-exact-prop-in-router-link-) for details.

### $root events

BSVN no longer emits the `bv::link::clicked` event on `$root`.

## BModal

### Replacement for Modal Message boxes

[BootstrapVue](https://bootstrap-vue.org/docs/components/modal#modal-message-boxes) provided two methods on the `this.$bvModal` object called `msgBoxOk` and `msgBoxConfirm`.
In holding with the Vue3 first philosophy, BootstrapVueNext provides a composable called [`useModalController`](/docs/composables/useModalController) that
fills the same needs (and more).

Please read the [`useModalController`](/docs/composables/useModalController) documentation and then come back here for examples of replacements
for `msgBoxOk` and `msgBoxConfirm`.

Example using `useModalController.show` to replace `msgBoxOk` (Remember to include `<BModalOrchestrator />` in your App Root):

<<< DEMO ./demo/ModalMessageBox.vue

Example using `useModalController.confirm` to replace `msgBoxConfirm` (Remember to include `<BModalOrchestrator />` in your App Root):

<<< DEMO ./demo/ModalConfirm.vue

The `show` and `confirm` `props` object accespts all of the properties that are defined on
[BModal](/docs/components/modal#component-reference) excpet for `modelValue`.

## BPagination

Keyboard Navigation and Small Screen Support.

## BPaginationNav

<NotYetImplemented/>
