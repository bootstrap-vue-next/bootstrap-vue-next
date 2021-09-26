# Pagination

> Quick first, previous, next, last, and page buttons for pagination control of another component
> (such as `<b-table>` or lists).

## Customizing appearance

`<b-pagination>` supports several props/slots that allow you to customize the appearance. All
`*-text` props are text-only and strip out HTML but you can use their equally named slot
counterparts for that.

### Limiting the number of displayed buttons

To restrict the number of page buttons (including the ellipsis, but excluding the first, prev, next,
and last buttons) shown, use the `limit` prop to specify the desired number of page buttons
(including the ellipsis, if shown). The default `limit` is `5`. The minimum supported value is `3`.
When `limit` is set to `3`, no ellipsis indicators will be shown for practical purposes.

The `first` and `last` buttons can be optionally hidden by setting the `hide-goto-end-buttons` prop.

The showing of the `ellipsis` can be optionally disabled by setting the `hide-ellipsis` prop.

#### Small screen support

On smaller screens (i.e. mobile), some of the `<b-pagination>` buttons will be hidden to minimize
the potential of the pagination interface wrapping onto multiple lines:

- The ellipsis indicators will be hidden on screens `xs` and smaller.
- Page number buttons will be limited to a maximum of 3 visible on `xs` screens and smaller.

This ensures that no more than 3 page number buttons are visible, along with the goto _first_,
_prev_, _next_, and _last_ buttons.

### Button content

For a full list of all available slots see the [Slots](#comp-ref-b-pagination-slots) section below.

<ClientOnly>
  <b-card>
  <div class="overflow-auto py-2">
    <!-- Use text in props -->
    <b-pagination
      v-model="ex1CurrentPage"
      :total-rows="ex1Rows"
      :per-page="ex1PerPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
    <!-- Use emojis in props -->
    <b-pagination
      v-model="ex1CurrentPage"
      :total-rows="ex1Rows"
      :per-page="ex1PerPage"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-4"
    ></b-pagination>
    <!-- Use HTML and sub-components in slots -->
    <b-pagination v-model="ex1CurrentPage" :total-rows="ex1Rows" :per-page="ex1PerPage" class="mt-4">
      <template #first-text><span class="text-success">First</span></template>
      <template #prev-text><span class="text-danger">Prev</span></template>
      <template #next-text><span class="text-warning">Next</span></template>
      <template #last-text><span class="text-info">Last</span></template>
      <template #ellipsis-text>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination>
    Current page : {{ ex1CurrentPage }}
  </div>  
  </b-card>
</ClientOnly>

```html
<template>
  <div class="overflow-auto">
    <!-- Use text in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>

    <!-- Use emojis in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-4"
    ></b-pagination>

    <!-- Use HTML and sub-components in slots -->
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" class="mt-4">
      <template #first-text><span class="text-success">First</span></template>
      <template #prev-text><span class="text-danger">Prev</span></template>
      <template #next-text><span class="text-warning">Next</span></template>
      <template #last-text><span class="text-info">Last</span></template>
      <template #ellipsis-text>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        perPage: 10,
        currentPage: 1,
      }
    },
  }
</script>

<!-- b-pagination-appearance.vue -->
```

<script lang='ts' setup>
  import {ref, computed} from 'vue'

  const ex1CurrentPage = ref(1);
  const ex1PerPage = ref(10);
  const ex1Rows = ref(100);
</script>
