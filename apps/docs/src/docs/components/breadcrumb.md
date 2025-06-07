# Breadcrumb

<PageHeader>

Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.

</PageHeader>

## Overview

<<< DEMO ./demo/BreadcrumbOverview.vue

## Breadcrumb items

Items are rendered using `:items` prop. It can be an array of objects to provide link and active
state or an array of strings. Links can be `href`'s for anchor tags, or `to`'s for router-links.
The active state of last element is automatically set if it is `undefined`.

### Breadcrumb items as array of strings

<<< DEMO ./demo/BreadcrumbAsArray.vue

## Manually placed items

You may also manually place individual `BBreadcrumbItem` child components in the default slot of
the `BBreadcrumb` component, as an alternative to using the `items` prop, for greater control
over the content of each item:

<<< DEMO ./demo/BreadcrumbManual.vue

Remember to set the `active` prop on the last item.

`BBreadcrumbItem` also supports the various `RouterLink` props such as `to`, etc. See the
[Router Links](/docs/reference/router-links) refererence page for more information.

## Slots

Two slots are provided to put additional content before and after the breadcrumb.
Use slot `prepend` to put content before the breadcrumb. Use slot `append` to put content after the breadcrumb.

<<< DEMO ./demo/BreadcrumbSlots.vue#template{vue-html}

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/breadcrumb.data'
</script>
