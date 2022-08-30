<template>
  <component :is="headerTag" class="card-header" :class="[headerClass, classes]">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="!!headerHtml" v-html="headerHtml" />
    <slot v-else>
      {{ header }}
    </slot>
  </component>
</template>

<script setup lang="ts">
// import type {BCardHeaderProps} from '../../types/components'
import {computed} from 'vue'
import type {ColorVariant} from '../../types'

interface BCardHeaderProps {
  header?: string
  headerBgVariant?: ColorVariant
  headerBorderVariant?: ColorVariant
  headerClass?: Array<string> | Record<string, boolean | undefined | null> | string
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: ColorVariant
}

const props = withDefaults(defineProps<BCardHeaderProps>(), {
  headerTag: 'div',
})

const classes = computed(() => ({
  [`text-${props.headerTextVariant}`]: props.headerTextVariant !== undefined,
  [`bg-${props.headerBgVariant}`]: props.headerBgVariant !== undefined,
  [`border-${props.headerBorderVariant}`]: props.headerBorderVariant !== undefined,
}))
</script>
