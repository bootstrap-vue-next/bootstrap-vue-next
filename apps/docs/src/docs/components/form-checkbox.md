# Form Checkbox

<PageHeader>

For cross browser consistency, `BFormCheckboxGroup` and `BFormCheckbox` use Bootstrap's custom checkbox input to replace the browser default checkbox input. It is built on top of semantic and accessible markup, so it is a solid replacement for the default checkbox input.

</PageHeader>

## Single checkbox

<<< DEMO ./demo/CheckboxExample1.vue

## Multiple choice checkboxes

<<< DEMO ./demo/CheckboxExample2.vue

## Options property

<!--@include: ./_options.md{5,}-->

<<< DEMO ./demo/CheckboxCustomFields.vue

## Checkbox values and `v-model`

By default, `BFormCheckbox` value will be true when checked and false when unchecked. You can customize the checked and unchecked values by specifying the `value` and `unchecked-value` properties, respectively.

When you have multiple checkboxes that bind to a single data state variable, you must provide an array reference (`[ ]`) to your v-model.

Note that when `v-model` is bound to multiple checkboxes (i.e an array ref), the `unchecked-value` is **not used**. Only the value(s) of the checked checkboxes will be returned in the `v-model` bound array. You should provide a unique `value` for each checkbox's `value` prop (the default of `true` will not work when bound to an array).

To pre-check any checkboxes, set the `v-model` to the value(s) of the checks that you would like pre-selected.

When placing individual `BFormCheckbox` components within a `BFormCheckboxGroup`, most
props and the `v-model` are inherited from the `BFormCheckboxGroup`.

::: info NOTE
The `unchecked-value` prop does not affect the native `<input>`'s `value` attribute, because browsers do not include unchecked boxes in form submissions. To guarantee that one of two values is submitted in a native `<form>` submit (e.g. `'yes'` or `'no'`), use radio inputs instead. This is the same limitation that [Vue has with native checkbox inputs](https://vuejs.org/guide/essentials/forms.html#checkbox-1).
:::

<<< DEMO ./demo/CheckboxModel.vue

### Multiple checkboxes and accessibility

When binding multiple checkboxes together, you must set the `name` prop to the same value for all `BFormCheckbox`s in the group individually. This will inform users of assistive technologies that the checkboxes are related and enables native browser keyboard navigation.

Whenever using multiple checkboxes, it is recommended that the checkboxes be placed in a [`BFormGroup`](/docs/components/form-group) component to associate a label with the entire group of checkboxes. See examples above.

## Inline and stacked checkboxes

`BFormCheckboxGroup` components render inline checkboxes by default, while `BFormCheckbox`
renders block-level (stacked) checkboxes.

Set the prop `stacked` on `BFormCheckboxGroup` to place each form control one over the other,
or if using individual checkboxes not inside a `BFormCheckboxGroup`, set the `inline` prop on
`BFormCheckbox`.

<<< DEMO ./demo/CheckboxInline.vue

## Control sizing

Use the `size` prop to control the size of the checkbox. The default size is medium. Supported size values are `sm` (small) and `lg` (large).

<<< DEMO ./demo/CheckboxSize.vue#template{vue-html}

## Reverse

Use the `reverse` prop to put your checkboxes and switches on the opposite side of the label.

<<< DEMO ./demo/CheckboxReverse.vue#template{vue-html}

## Without Labels

In order to omit labels as described in the
[bootstrap documentation](https://getbootstrap.com/docs/5.3/forms/checks-radios/#without-labels)
just leave the default slot empty. Remember to still provide some form of accessible name for
assistive technologies (for instance, using aria-label).

<<< DEMO ./demo/CheckboxNoLabel.vue#template{vue-html}

## Button style checkboxes

You can optionally render checkboxes to appear as buttons, either individually, or in a group.

Button style checkboxes will have the class `.active` automatically applied to the label when they are in the checked state.

### Individual checkbox button style

A single checkbox can be rendered with a button appearance by setting the prop `button` to `true`.

Change the button variant by setting the `button-variant` prop to one of the standard Bootstrap button variants
(see [`BButton`](/docs/components/button) for supported variants). The default variant is `secondary`.

<<< DEMO ./demo/CheckboxButton.vue

### Grouped button style checkboxes

Render groups of checkboxes with the look of a button-group by setting the prop `buttons` on
`BFormCheckboxGroup`. Change the button variant by setting the `button-variant` prop to one of
the standard Bootstrap button variants (see [`BButton`](/docs/components/button) for supported
variants). The default `button-variant` is `secondary`.

<<< DEMO ./demo/CheckboxButtonGroup.vue

## Switch style checkboxes

Switch styling is supported on `BFormCheckbox` and `BFormCheckboxGroup` components.

::: info NOTE
If the checkbox is in [button mode](#button-style-checkboxes), switch mode will have no
effect.
:::

### Individual checkbox switch style

A single checkbox can be rendered with a switch appearance by setting the prop `switch` to `true`.

<<< DEMO ./demo/CheckboxSwitch.vue

### Grouped switch style checkboxes

Render groups of checkboxes with the look of a switches by setting the prop `switches` on
`BFormCheckboxGroup`.

<<< DEMO ./demo/CheckboxSwitchGroup.vue

### Switch sizing

Use the `size` prop to control the size of the switch. The default size is medium. Supported size
values are `sm` (small) and `lg` (large).

<<< DEMO ./demo/CheckboxSwitchSize.vue#template{vue-html}

Sizes can be set on individual `BFormCheckbox` components, or inherited from the size setting of
`BFormCheckboxGroup`.

::: info NOTE
Bootstrap v5.x does not natively support sizes for the custom switch control. However,
bootstrap-vue-next includes custom SCSS/CSS that adds support for sizing the custom switches.
:::

## Non-custom check inputs (plain)

You can have `BFormCheckboxGroup` or `BFormCheckbox` render a browser native checkbox input
by setting the `plain` prop.

<<< DEMO ./demo/CheckboxPlain.vue

::: info NOTE
The `plain` prop has no effect when `button` or `buttons` is set.
:::

## Contextual states

Bootstrap includes validation styles for valid and invalid states on most form controls.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there is a blocking or required field. A user must fill in this field properly to submit the form
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields
- `null` Displays no validation state (neither valid nor invalid)

To apply one of the contextual state icons on `BFormCheckbox`, set the `state` prop to `false`
(for invalid), `true` (for valid), or `null` (no validation state).

::: info NOTE
Contextual states are **not** supported when in button mode.
:::

### Contextual state and validation example

<<< DEMO ./demo/CheckboxValidation.vue

### Required constraint

When using individual `BFormCheckbox` components (not in a `BFormCheckboxGroup`), and you
want the checkbox(es) to be `required` in your form, you **must** provide a `name` on each
`BFormCheckbox` in order for the required constraint to work. All `BFormCheckbox` components
tied to the same `v-model` **must** have the same `name`.

The `name` is required in order for Assistive Technologies (such as screen readers, and keyboard
only users) to know which checkboxes belong to the same form variable (the name also automatically
enables native browser keyboard navigation), hence `required` will only work if `name` is set.
`BFormCheckboxGroup` will automatically generate a unique input name if one is not provided on
the group.

## Autofocus

When the `autofocus` prop is set on `BFormCheckbox`, the input will be auto-focused when it is
inserted (i.e. **mounted**) into the document, or re-activated when inside a Vue `KeepAlive`
component. Note that this prop **does not** set the `autofocus` attribute on the input, nor can it
tell when the input becomes visible.

## Indeterminate (tri-state) support

Normally a checkbox input can only have two states: checked or unchecked. They can have any value, but they either submit that value (checked) or do not (unchecked) with a form submission (although BootstrapVueNext allows a value for the unchecked state on a single checkbox).

Visually, there are actually three states a checkbox can be in: _checked_, _unchecked_, or **_indeterminate_**.

The _indeterminate_ state is **visual only**. The checkbox is still either checked or unchecked as a value. That means the visual indeterminate state masks the real value of the checkbox, so that better make sense in your UI!.

`BFormCheckbox` supports setting this visual indeterminate state via a secondary named model called `indeterminate` (defaults to `undefined`). Clicking the checkbox will clear the `indeterminate` state and emit an `update:indeterminate=false` event. To reset the state set `v-model:indeterminate` value to `true`.

<<< DEMO ./demo/CheckboxTriState.vue

**Indeterminate checkbox use-case example:**

<<< DEMO ./demo/CheckboxIndeterminate.vue

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formCheckbox.data'
</script>
