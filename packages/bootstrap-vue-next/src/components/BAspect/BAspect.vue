<template>
  <component :is="props.tag" class="b-aspect d-flex">
    <div :style="{paddingBottom: computedPadding, height: 0}" class="b-aspect-sizer flex-grow-1" />
    <div class="b-aspect-content flex-grow-1 w-100 mw-100" style="margin-left: -100%">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BAspectProps} from '../../types/ComponentProps'
import {useDefaults} from '../../composables/useDefaults'

const _props = withDefaults(defineProps<BAspectProps>(), {
  tag: 'div',
  aspect: '1:1',
})
const props = useDefaults(_props, 'BAspect')

const computedPadding = computed(() => {
  const aspect = String(props.aspect)
  let ratio
  if (/^\d+(\.\d*)?[/:x]\d+(\.\d*)?$/.test(aspect)) {
    const [width = 1, height = 1] = aspect.split(/[/:x]/).map((v) => Number.parseFloat(v) || 1)
    ratio = width / height
  } else {
    ratio = Number.parseFloat(aspect) || 1
  }
  return `${100 / Math.abs(ratio)}%`
})
</script>
