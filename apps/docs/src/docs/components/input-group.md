# Input Group

<PageHeader>

Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs.

</PageHeader>

<<< DEMO ./demo/InputGroupOverview.vue#template{vue-html}

## Usage

You can attach addons using either props, named slots and/or sub-components.

::: info NOTE
Bootstrap 5 dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups.
:::

### Using `prepend` and `append` props

Values will be internally wrapped by a `BInputGroupText` to display correctly.

<<< DEMO ./demo/InputGroupXPend.vue#template{vue-html}

### Using named slots

<<< DEMO ./demo/InputGroupSlots.vue#template{vue-html}

### Using `BInputGroupText`

Use the `BInputGroupText` to add styled text before or after the control.

Do not use `BInputGroupText` to group sub-components as was done in Bootstrap-Vue, see the
[migration guide](/docs/migration-guide#binputgroup) for details.

<<< DEMO ./demo/InputGroupText.vue#template{vue-html}

## Supported form-controls

The following are the form controls supported as the input-group's _main_ input element:

- [`BFormInput`](/docs/components/form-input)
- [`BFormTextarea`](/docs/components/form-textarea)
- [`BFormSelect`](/docs/components/form-select)
- [`BFormFile`](/docs/components/form-file)
- [`BFormRating`](/docs/components/form-rating) <NotYetImplemented />
- [`BFormTags`](/docs/components/form-tags)
- [`BFormSpinbutton`](/docs/components/form-spinbutton)

## Checkbox and radio addons

Place any checkbox or radio within an input group's addon instead of text.

::: info NOTE
Bootstrap v5 recommends adding `.mt-0` to the `.form-check-input` when there’s no visible text next to the input.
It is also possible to use as `BFormRadio` and `BFormCheckbox` with a few utility
classes applied.
:::

### Native checkbox and radio addons

<<< DEMO ./demo/InputGroupNativeCheckbox.vue#template{vue-html}

### Custom radio, checkbox, and switch addons

Using `BFormCheckbox` and `BFormRadio` components as addons, using Bootstrap
[utility classes](/docs/reference/utility-classes) for additional styling to get them to "fit" in
the addon:

<<< DEMO ./demo/InputGroupCustomCheckbox.vue#template{vue-html}

In the above example, we have used the `.visually-hidden` class on a `<span>` to visually hide the custom
control's label content (while making them still accessible to screen reader users), and used the
utility class `.me-n2` to add a negative right margin to compensate for the "gutter" space between
the control and the hidden label.

## Multiple inputs

<<< DEMO ./demo/InputGroupMultipleInputs.vue#template{vue-html}

## Multiple addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

<<< DEMO ./demo/InputGroupMultipleAddons.vue#template{vue-html}

## Dropdown addons

<<< DEMO ./demo/InputGroupDropdown.vue#template{vue-html}

## Control sizing

Set height using the `size` prop to `sm` or `lg` for small or large respectively. There is no need
to set size on the individual inputs or buttons. Note however, you _will be required_ to also set
the size on dropdowns.

<<< DEMO ./demo/InputGroupSizing.vue

To control width, place the input inside standard Bootstrap grid column.

### Sizing custom radio, checkbox and switch addons

If using `BFormRadio` or `BFormCheckbox` as addons, additional utility classes may be
required to make everything fit correctly, depending on the size chosen:

<<< DEMO ./demo/InputGroupCheckboxSize.vue

Specifically, when using the `sm` size on `BInputGroup` you will need to add a negative bottom
margin, via the use of the `.mb-n1` [utility class](/docs/reference/utility-classes).

## Contextual states

Bootstrap v5 currently **does not** support contextual state styling (i.e. valid or invalid) of
input groups. However, the inputs inside the input group do support contextual state.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/inputGroup.data'
</script>
