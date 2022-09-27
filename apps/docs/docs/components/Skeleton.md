# Skeleton

`<b-skeleton>` is a BootstrapVue3 custom component, that allows you to display a loading state for several component types while your data is being fetched or computed.

## Deprecation warning

This component is soon to be deprecated in favor of native using Bootstrap [placeholder](https://getbootstrap.com/docs/5.2/components/placeholders/) components. Scheduled for removal in v0.4.0

**Example: Basic usage**

<ClientOnly>
<div class="d-flex align-items-center mb-3">
  <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem">
    <b-progress-bar :value="loadingTime" :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"></b-progress-bar>
  </b-progress>
  <b-button class="ms-3" @click="startLoading()">Reload</b-button>
</div>

<b-skeleton-wrapper :loading="loading">
  <template #loading>
    <b-card>
      <b-skeleton width="85%"></b-skeleton>
      <b-skeleton width="55%"></b-skeleton>
      <b-skeleton width="70%"></b-skeleton>
    </b-card>
  </template>
  <b-card>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien,
    non rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie,
    massa diam imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
    turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis quam,
    sit amet sollicitudin neque sodales in.
  </b-card>
</b-skeleton-wrapper>
</ClientOnly>

```vue
<template>
  <div class="d-flex align-items-center mb-3">
    <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem">
      <b-progress-bar
        :value="loadingTime"
        :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"
      ></b-progress-bar>
    </b-progress>

    <b-button class="ms-3" @click="startLoading()">Reload</b-button>
  </div>

  <b-skeleton-wrapper :loading="loading">
    <template #loading>
      <b-card>
        <b-skeleton width="85%"></b-skeleton>
        <b-skeleton width="55%"></b-skeleton>
        <b-skeleton width="70%"></b-skeleton>
      </b-card>
    </template>

    <b-card>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien, non
      rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie, massa diam
      imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at
      consequat dui. Aenean tristique sagittis quam, sit amet sollicitudin neque sodales in.
    </b-card>
  </b-skeleton-wrapper>
</template>

<script setup lang="ts">
import {ref, watch, onMounted} from 'vue'

const loadingTimeInterval = ref(null)
const loading = ref(false)
const loadingTime = ref(0)
const maxLoadingTime = ref(3)

onMounted(() => {
  startLoading()
})

watch(loading, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    clearLoadingTimeInterval()

    if (newValue) {
      loadingTimeInterval.value = setInterval(() => {
        loadingTime.value++
      }, 1000)
    }
  }
})

watch(loadingTime, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    if (newValue === maxLoadingTime.value) {
      loading.value = false
    }
  }
})

function startLoading() {
  loading.value = true
  loadingTime.value = 0
}

function clearLoadingTimeInterval() {
  clearInterval(loadingTimeInterval.value)
  loadingTimeInterval.value = null
}
</script>
```

## Types

`<b-skeleton>` supports various basic types, to represent various components in your project.

<ClientOnly>
  <h5 class="m-0 mb-2 p-0">Text (default)</h5>
  <b-skeleton></b-skeleton>
  
  <h5 class="m-0 mb-2 mt-3 p-0">Avatar</h5>
  <b-skeleton type="avatar"></b-skeleton>
  
  <h5 class="m-0 mb-2 mt-3 p-0">Input</h5>
  <b-skeleton type="input"></b-skeleton>
  
  <h5 class="m-0 mb-2 mt-3 p-0">Button</h5>
  <b-skeleton type="button"></b-skeleton>
</ClientOnly>

```html
<h5>Text (default)</h5>
<b-skeleton></b-skeleton>

<h5>Avatar</h5>
<b-skeleton type="avatar"></b-skeleton>

<h5>Input</h5>
<b-skeleton type="input"></b-skeleton>

<h5>Button</h5>
<b-skeleton type="button"></b-skeleton>
```

## Skeleton animations

`<b-skeleton>` supports different animations.

<ClientOnly>
<h5 class="m-0 mb-2 p-0">Wave (default)</h5>
<b-card>
  <b-skeleton animation="wave" width="85%"></b-skeleton>
  <b-skeleton animation="wave" width="55%"></b-skeleton>
  <b-skeleton animation="wave" width="70%"></b-skeleton>
</b-card>

<h5 class="m-0 mt-3 mb-2 p-0">Fade</h5>
<b-card>
  <b-skeleton animation="fade" width="85%"></b-skeleton>
  <b-skeleton animation="fade" width="55%"></b-skeleton>
  <b-skeleton animation="fade" width="70%"></b-skeleton>
</b-card>

<h5 class="m-0 mt-3 mb-2 p-0">Throb</h5>
<b-card>
  <b-skeleton animation="throb" width="85%"></b-skeleton>
  <b-skeleton animation="throb" width="55%"></b-skeleton>
  <b-skeleton animation="throb" width="70%"></b-skeleton>
</b-card>

<h5 class="m-0 mt-3 mb-2 p-0">None</h5>
<b-card>
  <b-skeleton animation width="85%"></b-skeleton>
  <b-skeleton animation width="55%"></b-skeleton>
  <b-skeleton animation width="70%"></b-skeleton>
</b-card>
</ClientOnly>

```html
<h5>Wave (default)</h5>
<b-card>
  <b-skeleton animation="wave" width="85%"></b-skeleton>
  <b-skeleton animation="wave" width="55%"></b-skeleton>
  <b-skeleton animation="wave" width="70%"></b-skeleton>
</b-card>

<h5>Fade</h5>
<b-card>
  <b-skeleton animation="fade" width="85%"></b-skeleton>
  <b-skeleton animation="fade" width="55%"></b-skeleton>
  <b-skeleton animation="fade" width="70%"></b-skeleton>
</b-card>

<h5>Throb</h5>
<b-card>
  <b-skeleton animation="throb" width="85%"></b-skeleton>
  <b-skeleton animation="throb" width="55%"></b-skeleton>
  <b-skeleton animation="throb" width="70%"></b-skeleton>
</b-card>

<h5>None</h5>
<b-card>
  <b-skeleton animation width="85%"></b-skeleton>
  <b-skeleton animation width="55%"></b-skeleton>
  <b-skeleton animation width="70%"></b-skeleton>
</b-card>
```

## Helper components

Utilize `<b-skeleton>` helper components to quickly scaffold existing components.

## Table

`<b-skeleton-table>` allows you to scaffold a basic table structure by utilizing the rows and columns props to define the size of the table. You can pass props directly to the table via the table-props property, which supports the same props as `<b-table-simple>`. Refer to the `<b-table-simple>` [documentation](Table.md#simple-tables) for a complete list.

<ClientOnly>
<b-skeleton-table
  :rows="5"
  :columns="4"
  :table-props="{ bordered: true, striped: true }"
></b-skeleton-table>
</ClientOnly>

```html
<b-skeleton-table
  :rows="5"
  :columns="4"
  :table-props="{ bordered: true, striped: true }"
></b-skeleton-table>
```

## Icons

`<b-skeleton-icon>` can also be used as placeholder for icons. And, since we drop `bootstrap-icon` package, for any SVG image. Any custom properties has to be written inside the SVG element.

<ClientOnly>
  <b-skeleton-icon>
    <svg
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      focusable="false"
      role="img"
      aria-label="person"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      style="font-size: 200%"
    >
      <g>
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
        ></path>
      </g>
    </svg>
  </b-skeleton-icon>
  <b-skeleton-icon>
    <svg
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      focusable="false"
      role="img"
      aria-label="person fill"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="text-primary"
      style="font-size: 200%"
    >
      <g>
        <path
          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        ></path>
      </g>
    </svg>
  </b-skeleton-icon>
</ClientOnly>

```html
<b-skeleton-icon>
  <svg
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    focusable="false"
    role="img"
    aria-label="person"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="bi-person b-skeleton-icon b-icon bi"
    style="font-size: 200%"
  >
    <g>
      <path
        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
      ></path>
    </g>
  </svg>
</b-skeleton-icon>
<b-skeleton-icon>
  <svg
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    focusable="false"
    role="img"
    aria-label="person fill"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="bi-person-fill b-skeleton-icon b-icon bi"
    style="font-size: 200%"
  >
    <g>
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    </g>
  </svg>
</b-skeleton-icon>
```

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const loadingTimeInterval = ref(null)
const loading = ref(false)
const loadingTime = ref(0)
const maxLoadingTime = ref(3)

onMounted(() => {
  startLoading()
})

watch(loading, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    clearLoadingTimeInterval()

    if (newValue) {
      loadingTimeInterval.value = setInterval(() => {
        loadingTime.value++
      }, 1000)
    }
  }
})

watch(loadingTime, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    if (newValue === maxLoadingTime.value) {
      loading.value = false
    }
  }
})

function startLoading() {
  loading.value = true
  loadingTime.value = 0
}

function clearLoadingTimeInterval() {
  clearInterval(loadingTimeInterval.value)
  loadingTimeInterval.value = null
}
</script>
