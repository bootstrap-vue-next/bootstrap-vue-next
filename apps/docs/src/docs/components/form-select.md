# Form Select

<PageHeader>

Bootstrap custom `<select>` using custom styles. Optionally specify options based on an array, array of objects, or an object.

</PageHeader>

## Overview

Generate your select options by passing an array or object to the `options` props:

<<< DEMO ./demo/SelectOverview.vue

You can even define option groups with the `options` prop:

<<< DEMO ./demo/SelectOptionsGroup.vue

Or manually provide your options and option groups:

<<< DEMO ./demo/SelectOptionsManual.vue

Feel free to mix the `options` prop with `BFormSelectOption` and
`BFormSelectOptionGroup`. Manually placed options and option groups will appear _below_ the
options generated via the `options` prop. To place manual options and option groups _above_ the
options specified by the `options` prop, use the named slot `first`.

<<< DEMO ./demo/SelectOptionsMixed.vue

## Options property

<!--@include: ./_options.md{5,}-->

<<< DEMO ./demo/SelectCustomFields.vue

### Options groups

To define option groups, just add an object with a `label` prop as the groups name and a `options` property with the array of options of the group.

<<< FRAGMENT ./demo/OptionsGroups.ts#snippet{ts}

### Option notes

If the initial value of your `v-model` expression does not match any of the options, the
`BFormSelect` component (which is a native HTML5 `<select>` under the hood) will render in an
_unselected_ state. On iOS this will cause the user not being able to select the first item because
iOS does not fire a change event in this case. It is therefore recommended providing a disabled
option with an empty value as your first option.

```vue-html
<BFormSelect v-model="selected" :options="options">
  <template #first>
    <BFormSelectOption value="" disabled>-- Please select an option --</BFormSelectOption>
  </template>
</BFormSelect>
```

See the [Vue select](https://v3.vuejs.org/guide/forms.html#select) documentation for more details.

## Standard (single) select

By default, Bootstrap v5's custom select styling is applied.

### Value in single mode

In non `multiple` mode, `BFormSelect` returns the single `value` of the currently selected
option.

<<< DEMO ./demo/SelectSingleValue.vue

### Select sizing (displayed rows)

You can use the `select-size` prop to switch the custom select into a select list-box, rather than a
dropdown. Set the `select-size` prop to a numerical value greater than 1 to control how many rows of
options are visible.

Note when `select-size` is set to a value greater than 1, the Bootstrap v5 custom styling will
**not** be applied, unless the `multiple` prop is also set.

Note that not all mobile browsers will show the select as a list-box.

<<< DEMO ./demo/SelectSizing.vue

## Multiple select support

Enable multiple select mode by setting the prop `multiple`, and control how many rows are displayed
in the multiple select list-box by setting `select-size` to the number of rows to display. The
default is to let the browser use its default (typically 4).

### Value in multiple mode

In `multiple` mode, `BFormSelect` always returns an array of option values. You **must** provide
an array reference as your `v-model` when in `multiple` mode.

<<< DEMO ./demo/SelectMultiValue.vue

## Control sizing

Set the form-control text size using the `size` prop to `sm` or `lg` for small or large
respectively.

By default, `BFormSelect` will occupy the full width of the container that it appears in. To
control the select width, place the input inside standard Bootstrap grid column.

## Autofocus

When the `autofocus` prop is set on `BFormSelect`, the select will be auto-focused when it is
inserted (i.e. **mounted**) into the document or re-activated when inside a Vue `KeepAlive`
component. Note that this prop **does not** set the `autofocus` attribute on the select, nor can it
tell when the select becomes visible.

## Contextual states

Bootstrap includes validation styles for `valid` and `invalid` states on most form controls.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there is a blocking or required field. A user
  must fill in this field properly to submit the form
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout
  a form and want to encourage a user through the rest of the fields
- `null` Displays no validation state (neither valid nor invalid)

To apply one of the contextual state icons on `BFormSelect`, set the `state` prop to `false`
(for invalid), `true` (for valid), or `null` (no validation state).

### Conveying contextual validation state to assistive technologies and colorblind users

Using these contextual states to denote the state of a form control only provides a visual,
color-based indication, which will not be conveyed to users of assistive technologies - such as
screen readers - or to colorblind users.

Ensure that an alternative indication of state is also provided. For instance, you could include a
hint about state in the form control's `<label>` text itself, or by providing an additional help
text block (via `BFormGroup` or `BForm*Feedback`). Specifically for assistive technologies,
invalid form controls can also be assigned an `aria-invalid="true"` attribute (see below).

### ARIA `aria-invalid` attribute

When `BFormSelect` has an invalid contextual state (i.e. state = `false`) you may also want to
set the `BFormSelect` prop `aria-invalid` to `true`.

Supported `invalid` values are:

- `false` (default) No errors detected
- `true` The value has failed validation

When `state` is set to `false`, aria-invalid will also be set to true.

## Non custom style select

Set the prop `plain` to have a native browser `<select>` rendered (although the class
`.form-control` will always be placed on the select).

A `plain` select will always be rendered for non `multiple` selects which have the `select-size`
prop set to a value greater than 1.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formSelect.data'
</script>
