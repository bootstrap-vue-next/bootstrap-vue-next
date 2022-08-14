# Pagination

> Quick first, previous, next, last, and page buttons for pagination control of another component
> (such as `<b-table>` or lists).

## Customizing appearance

`<b-pagination>` supports several props/slots that allow you to customize the appearance. All
`*-text` props are text-only and strip out HTML, but you can use their equally named slot
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
      <b-pagination
        v-model="ex1CurrentPage"
        :total-rows="ex1Rows"
        :per-page="ex1PerPage"
        class="mt-4"
      >
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
</template>

<script lang="ts" setup>
  import {ref} from 'vue'

  const ex1CurrentPage = ref(1)
  const ex1PerPage = ref(10)
  const ex1Rows = ref(100)
</script>
```

The slot `page` is always scoped, while the slots `first-text`, `prev-text`, `next-text` and
`last-text` are optionally scoped. The `ellipsis-text` slot is not scoped.

**Scoped variables properties available to the `page` slot:**

| Property   | Type    | Description                                          |
| ---------- | ------- | ---------------------------------------------------- |
| `page`     | Number  | Page number (from `1` to `numberOfPages`)            |
| `index`    | Number  | Page number (indexed from `0` to `numberOfPages -1`) |
| `active`   | Boolean | If the page is the active page                       |
| `disabled` | Boolean | If the page button is disabled                       |
| `content`  | String  | Page number as a string                              |

**Scoped variables properties available to the `first-text`, `prev-text`, `next-text` and
`last-text` slots:**

| Property   | Type    | Description                                          |
| ---------- | ------- | ---------------------------------------------------- |
| `page`     | Number  | Page number (from `1` to `numberOfPages`)            |
| `index`    | Number  | Page number (indexed from `0` to `numberOfPages -1`) |
| `disabled` | Boolean | If the page button is disabled                       |

### Goto first/last button type

If you prefer to have buttons with the first and last page number to go to the corresponding page,
use the `first-number` and `last-number` props.

<ClientOnly>
  <b-card>
    <div class="overflow-auto px-2">
      <div>
        <h6>Goto first button number</h6>
        <b-pagination
          v-model="ex2CurrentPage"
          :total-rows="ex2Rows"
          :per-page="ex2PerPage"
          first-number
        ></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Goto last button number</h6>
        <b-pagination
          v-model="ex2CurrentPage"
          :total-rows="ex2Rows"
          :per-page="ex2PerPage"
          last-number
        ></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Goto first and last button number</h6>
        <b-pagination
          v-model="ex2CurrentPage"
          :total-rows="ex2Rows"
          :per-page="ex2PerPage"
          first-number
          last-number
        ></b-pagination>
      </div>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div class="overflow-auto px-2">
      <div>
        <h6>Goto first button number</h6>
        <b-pagination
          v-model="ex2CurrentPage"
          :total-rows="ex2Rows"
          :per-page="ex2PerPage"
          first-number
        ></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Goto last button number</h6>
        <b-pagination
          v-model="ex2CurrentPage"
          :total-rows="ex2Rows"
          :per-page="ex2PerPage"
          last-number
        ></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Goto first and last button number</h6>
        <b-pagination
          v-model="ex2CurrentPage"
          :total-rows="ex2Rows"
          :per-page="ex2PerPage"
          first-number
          last-number
        ></b-pagination>
      </div>
    </div>
  </b-card>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'

  const ex2CurrentPage = ref(5)
  const ex2PerPage = ref(1)
  const ex2Rows = ref(100)
</script>
```

### Button size

Optionally change from the default button size by setting the `size` prop to either `'sm'` for
smaller buttons or `'lg'` for larger buttons.

<ClientOnly>
  <b-card>
    <div class="overflow-auto">
      <div>
        <h6>Small</h6>
        <b-pagination v-model="ex3CurrentPage" :total-rows="ex3Rows" size="sm"></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Default</h6>
        <b-pagination v-model="ex3CurrentPage" :total-rows="ex3Rows"></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Large</h6>
        <b-pagination v-model="ex3CurrentPage" :total-rows="ex3Rows" size="lg"></b-pagination>
      </div>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div class="overflow-auto">
      <div>
        <h6>Small</h6>
        <b-pagination v-model="ex3CurrentPage" :total-rows="ex3Rows" size="sm"></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Default</h6>
        <b-pagination v-model="ex3CurrentPage" :total-rows="ex3Rows"></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Large</h6>
        <b-pagination v-model="ex3CurrentPage" :total-rows="ex3Rows" size="lg"></b-pagination>
      </div>
    </div>
  </b-card>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'

  const ex3CurrentPage = ref(1)
  const ex3Rows = ref(100)
</script>
```

### Pill style

Easily switch to pill style buttons by setting the `pills` prop

<ClientOnly>
  <b-card>
    <div class="overflow-auto">
      <div>
        <h6>Small Pills</h6>
        <b-pagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm"></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Default Pills</h6>
        <b-pagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows"></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Large Pills</h6>
        <b-pagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg"></b-pagination>
      </div>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div class="overflow-auto">
      <div>
        <h6>Small Pills</h6>
        <b-pagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm"></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Default Pills</h6>
        <b-pagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows"></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Large Pills</h6>
        <b-pagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg"></b-pagination>
      </div>
    </div>
  </b-card>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'

  const ex4CurrentPage = ref(1)
  const ex4Rows = ref(100)
</script>
```

**Note:** Pill styling requires Bootstrap-Vue-3's custom CSS/SCSS.

### Alignment

By default, the pagination component is left aligned. Change the alignment to `center`, `end`
or `fill` by setting the prop `align` to the appropriate value.

<ClientOnly>
  <b-card>
    <div class="overflow-auto">
      <div>
        <h6>Left alignment (default)</h6>
        <b-pagination v-model="ex5CurrentPage" :total-rows="ex5Rows"></b-pagination>
      </div>
      <div class="mt-3">
        <h6 class="text-center">Center alignment</h6>
        <b-pagination v-model="ex5CurrentPage" :total-rows="ex5Rows" align="center"></b-pagination>
      </div>
      <div class="mt-3">
        <h6 class="text-end">Right (end) alignment</h6>
        <b-pagination v-model="ex5CurrentPage" :total-rows="ex5Rows" align="end"></b-pagination>
      </div>
      <div class="mt-3">
        <h6 class="text-center">Fill alignment</h6>
        <b-pagination v-model="ex5CurrentPage" :total-rows="ex5Rows" align="fill"></b-pagination>
      </div>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div class="overflow-auto">
      <div>
        <h6>Small Pills</h6>
        <b-pagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm"></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Default Pills</h6>
        <b-pagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows"></b-pagination>
      </div>
      <div class="mt-3">
        <h6>Large Pills</h6>
        <b-pagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg"></b-pagination>
      </div>
    </div>
  </b-card>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'

  const ex5CurrentPage = ref(1)
  const ex5Rows = ref(100)
</script>
```

## Preventing a page from being selected

You can listen for the `page-click` event, which provides an option to prevent the page from being
selected. The event is emitted with two arguments:

- `bvEvent`: The `BvEvent` object. Call `bvEvent.preventDefault()` to cancel page selection
- `page`: Page number to select (starting with `1`)

For accessibility reasons, when using the `page-click` event to prevent a page from being selected,
you should provide some means of notification to the user as to why the page is not able to be
selected. It is recommended to use the `disabled` attribute on the `<b-pagination>` component
instead of using the `page-click` event (as `disabled` is more intuitive for screen reader users).

## Accessibility

The `<b-pagination>` component provides many features to support assistive technology users, such as
`aria-` attributes and keyboard navigation.

### `aria-controls`

When pagination is controlling another component on the page (such as `<b-table>`), set the
`aria-controls` prop to the `id` of the element it is controlling. This will help non-sighted users
know what component is being updated/controlled.

### ARIA labels

`<b-pagination>` provides various `*-label-*` props which are used to set the `aria-label`
attributes on the various elements within the component, which will help users of assistive
technology.

| Prop               | `aria-label` content default                            |
| ------------------ | ------------------------------------------------------- |
| `label-first-page` | "Goto first page"                                       |
| `label-prev-page`  | "Goto previous page"                                    |
| `label-next-page`  | "Goto next page"                                        |
| `label-last-page`  | "Goto last page"                                        |
| `label-page`       | "Goto page", appended with the page number              |
| `aria-label`       | "Pagination", applied to the outer pagination container |

The `label-page` will optionally accept a function to generate the aria-label. The function is
passed a single argument which is the page number (indexed from 1 to number of pages).

You can remove any label by setting the prop to an empty string (`''`), although this is not
recommended unless the content of the button textually conveys its purpose.

### Keyboard navigation support

<ClientOnly>
<ComponentReference></ComponentReference>
</ClientOnly>

#### v-model

| Property           | Type     | Default | Description                          |
| ------------------ | -------- | ------- | ------------------------------------ |
| default modelValue | `Number` |         | Current page number, starting from 1 |

#### Slots

| Name            | Scoped | Description                                                     |
| --------------- | ------ | --------------------------------------------------------------- |
| `ellipsis-text` | No     | The '...' indicator content. Overrides the `ellipsis-text` prop |
| `first-text`    | Yes    | The 'Go to first page' button content                           |
| `last-text`     | Yes    | The 'Go to last page' button content                            |
| `next-text`     | Yes    | The 'Go to next page' button content                            |
| `page`          | Yes    | Page number button content                                      |
| `prev-text`     | Yes    | The 'Go to previous page' button content                        |

#### Events

| Name                | Argument                                                                                    | Description                                        |
| ------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `update:modelValue` | `current page` - Value of he current page                                                   |                                                    |
| `page-click`        | `bvEvent ` - The `BvEvent` object. Call `bvEvent.preventDefault()` to cancel page selection | Emitted when a page button was clicked. Cancelable |

<script lang='ts' setup>
  import {ref, computed} from 'vue'

  const ex1CurrentPage = ref(1);
  const ex1PerPage = ref(10);
  const ex1Rows = ref(100);

  const ex2CurrentPage = ref(5);
  const ex2PerPage = ref(1);
  const ex2Rows = ref(100);

  const ex3CurrentPage = ref(1);
  const ex3Rows = ref(100);

  const ex4CurrentPage = ref(1);
  const ex4Rows = ref(100);

  const ex5CurrentPage = ref(3);
  const ex5Rows = ref(100);
</script>
