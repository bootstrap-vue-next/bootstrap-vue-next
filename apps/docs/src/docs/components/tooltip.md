# Tooltip

## Tooltip is a wrapper for Popover

Tooltip is a wrapper for Popover, providing a simple way to create tooltips in your application. It uses the same API as Popover, but with some default properties set for tooltips.

## Usage

To use the tooltip, simply wrap your target element with the `<BTooltip>` component and provide the necessary props.

<HighlightCard>
  <BTooltip>
    <template #target>
      <BButton>Hover me</BButton>
    </template>
    Hello World!
  </BTooltip>

<template #html>

```vue
<template>
  <BTooltip>
    <template #target>
      <BButton>Hover me</BButton>
    </template>
    Hello World!
  </BTooltip>
</template>
```

  </template>
</HighlightCard>

## Differences with Popover

The delay is zero, hideMargin is 0, and it is noninteractive by default. You can override these properties if needed.

`BTooltip` has an interactive prop, which allows you to set the tooltip to be interactive. This means that the tooltip will remain open when the mouse is over it or focus is in it, allowing users to interact with its content.

<HighlightCard>
<BTooltip interactive>
  <template #target>
    <BButton>Hover me</BButton>
  </template>
  <span>{{ count }}</span>
  <BButton @click="count++">+</BButton>
</BTooltip>

<template #html>

```vue
<template>
  <BTooltip interactive>
    <template #target>
      <BButton>Hover me</BButton>
    </template>
    <span>{{ count }}</span>
    <BButton @click="count++">+</BButton>
  </BTooltip>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const count = ref(0)
</script>
```

</template>

</HighlightCard>

## Additional Notes

Make sure to check the Popover documentation for more details on customization options.

see [Popover](/docs/components/popover)

<script setup lang="ts">
import {BButton, BTooltip} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import {ref, onMounted} from 'vue'

const count = ref(0)
</script>
