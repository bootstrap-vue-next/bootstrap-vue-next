# Progress

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.

</div>

## Basic Usage

<HighlightCard>
  <BCard>
    <BProgress :value="0" />
    <BProgress class="mt-3" :value="25" />
    <BProgress class="mt-3" :value="50" />
    <BProgress class="mt-3" :value="75" />
    <BProgress class="mt-3" :value="100" />
  </BCard>
  <template #html>

```vue-html
<BProgress :value="0" />
<BProgress :value="25" />
<BProgress :value="50" />
<BProgress :value="75" />
<BProgress :value="100" />
```

  </template>
</HighlightCard>

## Value

Set the maximum value with the `max` prop (default is `100`), and the current value via the `value` prop (default `0`).

When creating multiple bars in a single process, place the value prop on the individual `BProgressBar` sub-components (see the Multiple Bars section below for more details)

## Labels

Add labels to your progress bars by either enabling `show-progress` (percentage of max) or `show-value` for the current absolute value. You may also set the precision (number of digits after the decimal) via the `precision` prop (default is `0` digits after the decimal).

<HighlightCard>
  <BCard>
    <h5>No label</h5>
    <BProgress :value="33.3333" :max="50" class="mb-3" />
    <h5>Value label</h5>
    <BProgress :value="33.3333" :max="50" show-value class="mb-3" />
    <h5>Progress label</h5>
    <BProgress :value="33.3333" :max="50" show-progress class="mb-3" />
    <h5>Value label with precision</h5>
    <BProgress :value="33.3333" :max="50" :precision="2" show-value class="mb-3" />
    <h5>Progress label with precision</h5>
    <BProgress :value="33.3333" :max="50" :precision="2" show-progress class="mb-3" />
  </BCard>
  <template #html>

```vue-html
<h5>No label</h5>
<BProgress :value="33.3333" :max="50" />
<h5>Value label</h5>
<BProgress :value="33.3333" :max="50" show-value />
<h5>Progress label</h5>
<BProgress :value="33.3333" :max="50" show-progress />
<h5>Value label with precision</h5>
<BProgress :value="33.3333" :max="50" :precision="2" show-value />
<h5>Progress label with precision</h5>
<BProgress :value="33.3333" :max="50" :precision="2" show-progress />
```

  </template>
</HighlightCard>

### Custom progress label

Need more control over the label? Provide your own label by using the default slot within a `BProgressBar` sub-component, or by using the `label` or `label-html` property on `BProgressBar`:

<HighlightCard>
  <BCard>
    <h5>Custom label via default slot</h5>
    <BProgress :max="50" height="2rem">
      <BProgressBar :value="33.333333">
        <span>Progress: <strong>{{ (33.333333).toFixed(2) }} / {{ 50 }}</strong></span>
      </BProgressBar>
    </BProgress>
    <h5 class="mt-3">Custom label via property</h5>
    <BProgress :max="50">
      <BProgressBar :value="33.333333" :label="`${((33.333333 / 50) * 100).toFixed(2)}%`" />
    </BProgress>
    <h5 class="mt-3">Custom label via property (HTML support)</h5>
    <BProgress :max="50">
      <BProgressBar :value="33.333333" :label-html="`<del>${33.333333}</del>`" />
    </BProgress>
  </BCard>
  <template #html>

```vue-html
<h5>Custom label via default slot</h5>
<BProgress :max="50" height="2rem">
  <BProgressBar :value="33.333333">
    <span>Progress: <strong>{{ (33.333333).toFixed(2) }} / {{ 50 }}</strong></span>
  </BProgressBar>
</BProgress>

<h5 class="mt-3">Custom label via property</h5>
<BProgress :max="50">
  <BProgressBar
    :value="33.333333"
    :label="`${((33.333333 / 50) * 100).toFixed(2)}%`"
  />
</BProgress>

<h5 class="mt-3">Custom label via property (HTML support)</h5>
<BProgress :max="50">
  <BProgressBar :value="33.333333" :label-html="`<del>${33.333333}</del>`" />
</BProgress>
```

  </template>
</HighlightCard>

## Height

The height of the progress bar can be controlled with the height prop. The height value should be a standard CSS dimension (px, rem, em, etc.). The default height is 1rem.

<HighlightCard>
  <BCard>
    <BProgress :value="25" height="1px" />
    <BProgress class="mt-3" :value="25" height="20px" />
  </BCard>
  <template #html>

```vue-html
<BProgress :value="25" height="1px" />
<BProgress :value="25" height="20px" />
```

  </template>
</HighlightCard>

## Backgrounds

Use background variants to change the appearance of individual progress bars. The default variant is `primary`.

<HighlightCard>
  <BCard>
    <BProgress variant="success" :value="25" />
    <BProgress class="mt-3" variant="info" :value="50" />
    <BProgress class="mt-3" variant="warning" :value="75" />
    <BProgress class="mt-3" variant="danger" :value="100" />
  </BCard>
  <template #html>

```vue-html
<BProgress variant="success" :value="25" />
<BProgress variant="info" :value="50" />
<BProgress variant="warning" :value="75" />
<BProgress variant="danger" :value="100" />
```

  </template>
</HighlightCard>

## Multiple bars

Include multiple `BProgressBar` sub-components in a `BProgress` component to build a horizontally stacked set of progress bars.

<HighlightCard>
  <BCard>
    <BProgress>
      <BProgressBar :value="15" />
      <BProgressBar :value="30" variant="success" />
      <BProgressBar :value="20" variant="info" />
    </BProgress>
  </BCard>
  <template #html>

```vue-html
<BProgress>
  <BProgressBar :value="15" />
  <BProgressBar :value="30" variant="success" />
  <BProgressBar :value="20" variant="info" />
</BProgress>
```

  </template>
</HighlightCard>

## Striped

Set `striped` to apply a stripe via CSS gradient over the progress bar's background variant.

<HighlightCard>
  <BCard>
    <BProgress striped :value="10" />
    <BProgress striped class="mt-3" variant="success" :value="25" />
    <BProgress striped class="mt-3" variant="info" :value="50" />
    <BProgress striped class="mt-3" variant="warning" :value="75" />
    <BProgress striped class="mt-3" variant="danger" :value="100" />
  </BCard>
  <template #html>

```vue-html
<BProgress striped :value="10" />
<BProgress striped :value="25" variant="success" />
<BProgress striped :value="50" variant="info" />
<BProgress striped :value="75" variant="warning" />
<BProgress striped :value="100" variant="danger" />
```

  </template>
</HighlightCard>

## Animated stripes

The striped gradient can also be animated by setting the `animated` prop.

<HighlightCard>
  <BCard>
    <BProgress :value="75" striped :animated="animate" />
    <BButton class="mt-3" @click="animate = !animate">Toggle animation</BButton>
  </BCard>
  <template #html>

```vue
<template>
  <BProgress :value="75" striped :animated="animate" />
  <BButton class="mt-3" @click="animate = !animate">Toggle animation</BButton>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const animate = ref(false)
</script>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/progress.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BButton, BProgressBar, BCard, BProgress} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import { ref } from 'vue';

const animate = ref(false);
</script>
