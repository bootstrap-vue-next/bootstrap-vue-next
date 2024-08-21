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

## Sync modifier

A number of components in `bootstrap-vue` use `v-bind`'s `.sync` modifier. This modifier has been replaced by properties
on the the model (generally named models).

For instance, in order to two-way bind to the `indeterminate` property in `BFormCheckBox` you `v-bind` to the the model
named `indeterminate` rather than adding the sync modifier to the `indeterminate` property:

<HighlightCard>
  <template #html>

```vue-html
    <BFormCheckbox v-model="checked" :indeterminate.sync="indeterminate">
      Click me to see what happens
    </BFormCheckbox>
```

  </template>
</HighlightCard>

becomes

<HighlightCard>
  <template #html>

```vue-html
  <BFormCheckbox v-model="checked" v-model:indeterminate="indeterminate"
    >Click me to see what happens</BFormCheckbox
  >
```

  </template>
</HighlightCard>

See the [Vue 3 migration guide](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
for more info.

## BAlert

As in `bootstrap-vue`, a simple `BAlert` is not visible by default. However, the means of showing the alert are different.
The `bootstrap-vue` `show` prop is deprecated, use `model-value` instead.

<HighlightCard>
  <template #html>

```vue-html
  <BAlert variant="primary" show>A simple primary alert—check it out!</BAlert>
```

  </template>
</HighlightCard>

becomes

<HighlightCard>
  <template #html>

```vue-html
  <BAlert :model-value="true" variant="primary">A simple primary alert—check it out!</BAlert>
```

  </template>
</HighlightCard>

For consistency with other components properties, slots and events that use the term `dismissible` in `bootstrap-vue`
now use the term `close`. For example the `dismissed` event is now the `closed` event and the `dsimiss` slot is
now the `close` slot.

## BAvatar

Icon support has been deprecated. Icons support can be implemented using the default slot including
either [unplug icons](/docs/icons) or by embedding an `.svg`.

<HighlightCard>
  <BAvatar>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80%"
      height="80%"
      fill="currentColor"
      class="bi bi-person-hearts"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
      /></svg
  ></BAvatar>

<template #html>

```vue
<template>
  <BAvatar>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80%"
      height="80%"
      fill="currentColor"
      class="bi bi-person-hearts"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
      /></svg
  ></BAvatar>
</template>
```

  </template>
</HighlightCard>

### Badge Positioning

Badge positioning has changed to using a single property `badge-placement` and our
[`CombinedPlacement` utility](/docs/types/combined-placement) rather than individual properties.

For instance, use `badge-placement='top'` in place of `badge-top` or `badge-placement='end'` in place of
`badge-right`. For combined props, rather than using `badge-top` and `badge-right`, use
`badge-placement='top-end'.

### Rounding Sides

Rounding a specific side of the avatar is now accomplished using the boolean props `rounded-top`,
`rounded-bottom`, `rounded-start`, and `rounded-end` rather than the `top`, `bottom`, `left`, and `right`
values for the `rounded` prop.

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

Datalist and disabling mousewheel events are not yet implemented.

`trim`, `lazy`, or `number` properties have been deprecated. We support the native modifiers
[`trim`, `lazy`, and `number`](https://vuejs.org/guide/essentials/forms.html#modifiers).
They work as documented in vue.js, so there is no longer a need for the properties.

## BFormSelect

[Options as an object](https://bootstrap-vue.org/docs/components/form-select#options-as-an-object) was deprecated in BootstrapVue and never implemented in BootstrapVueNext

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

<HighlightCard>
  <div>
    <BButton @click="okBox">Show Message</BButton>
    <div>Result: {{ okResult }}</div>
  </div>

<template #html>

```vue
<template>
  <div>
    <BButton @click="okBox">Show Message</BButton>
    <div>Result: {{ okResult }}</div>
  </div>
</template>

<script setup lang="ts">
import {BButton} from './components'
import {useModalController} from './composables'
import {ref} from 'vue'

const {confirm, show} = useModalController()

const confirmResult = ref<boolean | null | undefined>(null)

const confirmBox = async () => {
  confirmResult.value = await confirm?.({
    props: {
      body: 'Are you sure you want to do this?',
      title: 'Confirm',
      okTitle: 'Yes',
      cancelTitle: 'No',
    },
  })
}

const okResult = ref<boolean | null | undefined>(undefined)

const okBox = async () => {
  okResult.value = await show?.({
    props: {
      body: 'This is an informational message',
      title: 'Message',
      okOnly: true,
    },
  })
}
</script>
```

  </template>
</HighlightCard>

Example using `useModalController.confirm` to replace `msgBoxConfirm` (Remember to include `<BModalOrchestrator />` in your App Root):

<HighlightCard>
  <div>
    <BButton @click="confirmBox">Show Confirm</BButton>
    <div>Result: {{ confirmResult ?? 'null' }}</div>
  </div>

<template #html>

```vue
<template>
  <div>
    <BButton @click="confirmBox">Show Confirm</BButton>
    <div>Result: {{ confirmResult ?? 'null' }}</div>
  </div>
</template>

<script setup lang="ts">
import {BButton, useModalController} from 'bootstrap-vue-next'
import {ref} from 'vue'

const {confirm} = useModalController()
const confirmResult = ref<boolean | null | undefined>(null)

const confirmBox = async () => {
  confirmResult.value = await confirm?.({
    props: {
      body: 'Are you sure you want to do this?',
      title: 'Confirm',
      okTitle: 'Yes',
      cancelTitle: 'No',
    },
  })
}
</script>
```

  </template>
</HighlightCard>

The `show` and `confirm` `props` object accespts all of the properties that are defined on
[BModal](/docs/components/modal#component-reference) excpet for `modelValue`.

<MigrationWrapper v-for="(item, i) in changes" :key="i" v-bind="item" />

<script setup lang="ts">
import {computed, ref} from 'vue'
import {BAvatar, BButton, BModalOrchestrator, useModalController} from 'bootstrap-vue-next'
import MigrationWrapper from '../components/MigrationWrapper.vue'
import HighlightCard from '../components/HighlightCard.vue'

const changes = computed<{
  component: string
  change: string
  fix: string
}[]>(() => [
  {
    change: 'subTitle prop renamed to subtitle',
    fix: "Any instances of using prop 'subTitle' on BCard should be replaced with 'subtitle'",
    component: 'BCard',
  },
  {
    change: 'subTitleTag prop renamed to subtitleTag',
    fix: "Any instances of using prop 'subTitleTag' on BCard should be replaced with 'subtitleTag'",
    component: 'BCard',
  },
  {
    change: 'subTitleTextVariant prop renamed to subtitleTextVariant',
    fix: "Any instances of using prop 'subTitleTextVariant' on BCard should be replaced with 'subtitleTextVariant'",
    component: 'BCard',
  },
].sort((a, b) => a.component.localeCompare(b.component)))

const {confirm, show} = useModalController()

const okResult = ref<boolean | null | undefined>(undefined)

const okBox = async () => {
  okResult.value = await show?.({
    props: {
      body: 'This is an informational message',
      title: 'Message',
      okOnly: true,
    },
  })
}

const confirmResult = ref<boolean | null | undefined>(null)

const confirmBox = async () => {
  confirmResult.value = await confirm?.({
    props: {
      body: 'Are you sure you want to do this?',
      title: 'Confirm',
      okTitle: 'Yes',
      cancelTitle: 'No',
    },
  })
}
</script>
