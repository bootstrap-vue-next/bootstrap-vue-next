# Pagination

Quick Pagination Control of another component

## Overview

`<b-pagination>` is an input control using `v-model:currentPage` to navigate pages for a paginatable component.
Page numbers are indexed from 1. The number of pages is computed from the provided prop values for `total-rows` and `per-page.`

## Customzing Appearance

`<b-pagination>` can be customized via various props and slots.

To restrict the number of page buttons (including the ellipsis, but excluding the first, prev, next, and last buttons) shown, use the `limit` prop to specify the desired number of page buttons (including the ellipsis, if shown). The default `limit` is `5`. The minimum supported value is 3. When limit is set to 3, no ellipsis indicators will be shown for practical purposes.

The showing of the ellipsis can be optionally disabled by setting the `hide-ellipsis` prop.

## Slots and Button Contents

For a full list of all available slots see the [Slots](#comp-ref-b-pagination-slots) section below.

<ClientOnly>
  <b-pagination
      v-model:currentPage="paginationPageNumber"
      :limit="paginationLimit"
      :total-rows="paginationRows"
      :per-page="paginationPerPage"
      next-text="Next"
      prev-text="Prev"
      first-number
      last-number
    >
    </b-pagination>
  <b-pagination
      v-model:currentPage="paginationPageNumber"
      :limit="paginationLimit"
      :total-rows="paginationRows"
      :per-page="paginationPerPage"
    >
      <template #prev-text><span class="text-danger">Prev</span></template>
      <template #next-text><span class="text-warning">Next</span></template>
    </b-pagination>
    
  <b-pagination
      v-model:currentPage="paginationPageNumber"
      :total-rows="paginationRows"
      :per-page="paginationPerPage"
      prev-text="⏪"
      next-text="⏩"
      :limit="paginationLimit"
    ></b-pagination>

</ClientOnly>

<script lang="ts" setup>
    import {ref} from 'vue'

    const paginationPageNumber = ref(1)
    const paginationLimit = ref(8)
    const paginationPerPage = ref(2)
    const paginationRows = ref(40)
</script>

```html
<!-- Use of Props -->
<b-pagination
  v-model:currentPage="paginationPageNumber"
  :limit="paginationLimit"
  :total-rows="paginationRows"
  :per-page="paginationPerPage"
  next-text="Next"
  prev-text="Prev"
  first-number
  last-number
>
</b-pagination>
<!-- Use of Slots -->
<b-pagination
  v-model:currentPage="paginationPageNumber"
  :limit="paginationLimit"
  :total-rows="paginationRows"
  :per-page="paginationPerPage"
>
  <template #prev-text><span class="text-danger">Prev</span></template>
  <template #next-text><span class="text-warning">Next</span></template>
</b-pagination>
<!-- Emojis in Props -->
<b-pagination
  v-model:currentPage="paginationPageNumber"
  :total-rows="paginationRows"
  :per-page="paginationPerPage"
  prev-text="⏪"
  next-text="⏩"
  :limit="paginationLimit"
></b-pagination>

<script lang="ts" setup>
  import {ref} from 'vue'

  const paginationPageNumber = ref(1)
  const paginationLimit = ref(8)
  const paginationPerPage = ref(2)
  const paginationRows = ref(40)
</script>
```

### Goto first/last button type

If you prefer to have buttons with the first and last page number to go to the corresponding page,
use the `first-number` and `last-number` props.

<ClientOnly>

  <h6>Goto first button number</h6>
  <b-pagination
        v-model:currentPage="paginationPageNumber"
        :total-rows="paginationRows"
        :per-page="paginationPerPage"
        first-number
        last-number
      ></b-pagination>
    <div class="mt-3">

  <h6>Goto last button number</h6>
  <b-pagination
        v-model:currentPage="paginationPageNumber"
        :total-rows="paginationRows"
        :per-page="paginationPerPage"
        last-number
      ></b-pagination>
</div>
    <div class="mt-3">

  <h6>Goto first and last button number</h6>
  <b-pagination
        v-model:currentPage="paginationPageNumber"
        :total-rows="paginationRows"
        :per-page="paginationPerPage"
        last-number
        first-number
      ></b-pagination>
</div>
      
</ClientOnly>

```html
  <div class="overflow-auto">
    <div>
      <h6>Goto first button number</h6>
      <b-pagination
        v-model:currentPage="paginationPageNumber"
        :total-rows="rows"
        :per-page="perPage"
        first-number
      ></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Goto last button number</h6>
      <b-pagination
        v-model:currentPage="paginationPageNumber"
        :total-rows="rows"
        :per-page="perPage"
        last-number
      ></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Goto first and last button number</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
      ></b-pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'

  const paginationPageNumber = ref(1)
  const paginationLimit = ref(8)
  const paginationPerPage = ref(2)
  const paginationRows = ref(40)
</script>

```
