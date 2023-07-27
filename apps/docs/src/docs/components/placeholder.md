# Placeholder

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Placeholders are components that indicate that something may still be loading.

</div>

## Basic Usage

At the placeholder core, you have the `BPlaceholder` component:

<HighlightCard>
  <BPlaceholder />
  <BPlaceholder width="65" variant="danger" />
  <BPlaceholder cols="6" variant="info" />
  <template #html>

```vue-html
<BPlaceholder cols="7" />
<BPlaceholder width="65" />
<BPlaceholder cols="6" />
```

  </template>
</HighlightCard>

## Width

You can adjust the width using props `width` and `cols`. Cols is a number value 1-12, whereas width is a percentage. Width takes priority over cols.

<HighlightCard>
  <BPlaceholder width="30" cols="12" />
  <BPlaceholder width="75%" variant="danger" />
  <BPlaceholder width="12" variant="warning" />
  <BPlaceholder :cols="6" variant="info" />
  <BPlaceholder cols="8" variant="info" />
  <template #html>

```vue-html
<BPlaceholder width="30" cols="12" />
<BPlaceholder width="75%" variant="danger" />
<BPlaceholder width="12" variant="warning" />
<BPlaceholder :cols="6" variant="info" />
<BPlaceholder cols="8" variant="info" />
```

  </template>
</HighlightCard>

## Placeholder Animations

Bootstrap supports two types of animations, `wave` and `glow`.

- Note: when using `BPlaceholderCard`, the image does not inherit an animation

<HighlightCard>
  <BPlaceholderCard style="max-width: 20rem; " animation="glow" class="mb-3" />
  <BPlaceholderCard style="max-width: 20rem; " animation="wave" class="mb-3" />
  <BPlaceholder animation="glow" />
  <template #html>

```vue-html
<BPlaceholderCard style="max-width: 20rem; " animation="glow" />
<BPlaceholderCard style="max-width: 20rem; " animation="wave" />
<BPlaceholder animation="glow" />
```

  </template>
</HighlightCard>

## Sizing

You can adjust the sizing of a placeholder by using the `size` prop. Acceptable values are 'xs', 'sm', or 'lg'.

<HighlightCard>
  <BPlaceholder size="lg" />
  <BPlaceholder size="sm" />
  <BPlaceholder size="xs" />
  <template #html>

```vue-html
<BPlaceholder size="lg" />
<BPlaceholder size="sm" />
<BPlaceholder size="xs" />
```

  </template>
</HighlightCard>

## Helper Components

`BPlaceholder` has several wrapper components to quickly create larger component sets, such as `BPlaceholderCard`, `BPlaceholderTable`, and `BPlaceholderButton`.

### Placeholder Wrapper

The `BPlaceholderWrapper` is a renderless component that picks between a 'loading' component, and a 'finished' component. It is useful when you have to wait for loading to finish, before rendering the actual content. Depending on the use case, you may prefer to use [Suspense](https://vuejs.org/guide/built-ins/suspense.html) instead.

<HighlightCard>
  <BPlaceholderWrapper :loading="loading">
    <template #loading>
      <BPlaceholderCard style="max-width: 20rem;" no-footer />
    </template>
    <BCard
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <BCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </BCardText>
      <BButton href="#placeholder-wrapper" variant="primary">Go somewhere</BButton>
    </BCard>
  </BPlaceholderWrapper>
  <BButton @click="startLoading">Restart</BButton>
  <template #html>

```vue
<template>
  <BPlaceholderWrapper :loading="loading">
    <template #loading>
      <BPlaceholderCard style="max-width: 20rem;" no-footer />
    </template>
    <BCard
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <BCardText>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </BCardText>
      <BButton href="#placeholder-wrapper" variant="primary">Go somewhere</BButton>
    </BCard>
  </BPlaceholderWrapper>
  <BButton @click="startLoading">Restart</BButton>
</template>

<script setup lang="ts">
const loading = ref(false)

watchEffect(() => {
  if (loading.value === true) {
    setTimeout(() => {
      loading.value = false
    }, 5000)
  }
})

const startLoading = () => {
  if (loading.value === true) return
  loading.value = true
}

onMounted(startLoading)
</script>
```

  </template>
</HighlightCard>

### Placeholder Buttons

You can easily render a placeholder that has the button styling by using `BPlaceholderButton`.

<HighlightCard>
  <BPlaceholderButton cols="3" />
  <template #html>

```vue-html
<BPlaceholderButton cols="3" />
```

  </template>
</HighlightCard>

### Placeholder Cards

Placeholders have built-in support for rendering a placeholder card with `BPlaceholderCard`.

<HighlightCard>
  <BPlaceholderCard style="max-width: 20rem" />
  <template #html>

```vue-html
<BPlaceholderCard style="max-width: 20rem" />
```

  </template>
</HighlightCard>

### Placeholder Tables

You can also render a full placeholder table with `BPlaceholderTable`.

<HighlightCard>
  <BPlaceholderTable />
  <template #html>

```vue-html
<BPlaceholderTable />
```

  </template>
</HighlightCard>

### Advanced Helper Component Usage

#### Advanced Cards

Cards expose various props and slots to make them more personalized.

You can adjust the image using various props, such as `imgBlankColor`, and `imgBottom`, or you can optionally use `imgSrc` to place a real image, rather than a blank.

Each section of the `BPlaceholderCard` exposes its slot elements, so you can easily override the defaults. Available slots are: `img`, `header`, `default`, and `footer`.

The footer also exposes some props that you can use to adjust the behavior of a button. Most notably prop `noButton`. If set to true, it will convert it to a basic placeholder appearance. Alternatively, you can use the `noFooter` prop to remove it altogether.

<HighlightCard>
  <BPlaceholderCard img-src="https://picsum.photos/1024/480/?image=1" img-bottom no-header>
    <template #footer>
      Footer
    </template>
    <template #default>
      <BPlaceholder />
      <BPlaceholder width="65" variant="danger" />
      <BPlaceholder cols="6" variant="info" />
    </template>
  </BPlaceholderCard>
  <template #html>

```vue-html
<BPlaceholderCard img-src="https://picsum.photos/1024/480/?image=1" img-bottom no-header>
  <template #footer>
    Footer
  </template>

  <template #default>
    <BPlaceholder />
    <BPlaceholder width="65" variant="danger" />
    <BPlaceholder cols="6" variant="info" />
  </template>
</BPlaceholderCard>
```

  </template>
</HighlightCard>

#### Advanced Tables

`BPlaceholderTable` comes with various props to adjust the number of rows, columns, header/footer, and their stylings.

You can adjust the number of columns and rows using props `columns` and `rows` respectively. You can use `showFooter` to show the footer, or `hideHeader` to hide the header. Both the footer and header have cellWidth, size, animation, and variant adjustments by prepending the type with the styling, eg: `headerCellWidth`, `headerSize`, `footerAnimation`, `footerVariant`.

Optionally, you can manually adjust any scope of the table using slots. The following slots are available: `thead`, `default`, and `tfoot`. Do note that the slots wrap the **entire** table scope, slot `thead` is the entire thead, and slot `default` is the entire tbody, so you will likely need to manually wrap your slot usages in these elements if you plan on using them.

<HighlightCard>
  <BPlaceholderTable
    columns="3"
    rows="2"
    show-footer
    footer-variant="info"
    header-size="lg"
    footer-size="xs"
    footer-columns="1"
    header-columns="4"
  >
    <template #default>
      <tbody>
          <tr>
            <td>
              <BPlaceholder size="lg" variant="secondary" />
              <BPlaceholder size="sm" variant="secondary" />
              <BPlaceholder size="xs" variant="secondary" />
            </td>
            <td>
              <BPlaceholder variant="warning" />
              <BPlaceholder animation="wave" variant="warning" />
            </td>
            <td>
              <BPlaceholder animation="glow" variant="danger" />
            </td>
          </tr>
      </tbody>
    </template>
  </BPlaceholderTable>
  <template #html>

```vue-html
<BPlaceholderTable
  columns="3"
  rows="2"
  show-footer
  footer-variant="info"
  header-size="lg"
  footer-size="xs"
  footer-columns="1"
  header-columns="4"
>
  <template #default>
    <tbody>
      <tr>
        <td>
          <BPlaceholder size="lg" variant="secondary" />
          <BPlaceholder size="sm" variant="secondary" />
          <BPlaceholder size="xs" variant="secondary" />
        </td>
        <td>
          <BPlaceholder variant="warning" />
          <BPlaceholder animation="wave" variant="warning" />
        </td>
        <td>
          <BPlaceholder animation="glow" variant="danger" />
        </td>
      </tr>
    </tbody>
  </template>
</BPlaceholderTable>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/placeholder.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {
  BPlaceholderButton,
  BPlaceholderTable,
  BPlaceholderWrapper,
  BPlaceholderCard,
  BCard,
  BCardBody,
  BButton,
  BPlaceholder,
  BCardText
} from 'bootstrap-vue-next'
import {ref, onMounted, watchEffect} from 'vue'

const loading = ref(false)

watchEffect(() => {
  if(loading.value === true){
    setTimeout(() => {
      loading.value = false
    }, 5000)
  }
})

const startLoading = () => {
  if(loading.value === true) return
  loading.value = true
}

onMounted(startLoading)
</script>
