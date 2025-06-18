# Button Group

<PageHeader>

Group a series of buttons together on a single line or stack them in a vertical column with `BButtonGroup`.

</PageHeader>

## Overview

Button Groups are an easy way to group a series of buttons together.

<<< DEMO ./demo/ButtonGroupOverview.vue#template{vue-html}

**Note:**
In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. `bootstrap-vue-next` will put the `role="group"` and `aria-role` attributes on the groups. By default, `aria-role` is set to `group`, but you can override that with the `aria-role` property.

In addition, groups should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use `aria-label`, but alternatives such as `aria-labelledby` can also be used.

## Sizing

Set the `size` prop to `lg` or `sm` to render larger or smaller buttons. There is no need to specify the size on the individual buttons.

<<< DEMO ./demo/ButtonGroupSizing.vue#template{vue-html}

## Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally by setting the `vertical`
prop. Split button dropdowns are not supported here.

<<< DEMO ./demo/ButtonGroupVertical.vue#template{vue-html}

## Dropdown menu support

Add [`BDropdown`](/docs/components/dropdown) menus directly inside your `BButtonGroup`. Note
that split dropdown menus are not supported when prop `vertical` is set.

<<< DEMO ./demo/ButtonGroupDropdown.vue#template{vue-html}

## See also

Also check out the [`BButtonToolbar`](/docs/components/button-toolbar) component for generating
toolbars containing button groups and input groups.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/buttonGroup.data'
</script>
