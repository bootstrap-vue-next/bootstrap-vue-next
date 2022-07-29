<!-- eslint-disable vue/no-v-html -->
<template>
  <component :is="headerTag" class="card-header" :class="[headerClass, classes]">
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
  headerClass?: Array<unknown> | Record<string, unknown> | string
  headerHtml?: string
  headerTag?: string
  headerTextVariant?: ColorVariant
}

const props = withDefaults(defineProps<BCardHeaderProps>(), {
  headerTag: 'div',
})

const classes = computed(() => ({
  [`text-${props.headerTextVariant}`]: props.headerTextVariant,
  [`bg-${props.headerBgVariant}`]: props.headerBgVariant,
  [`border-${props.headerBorderVariant}`]: props.headerBorderVariant,
}))
</script>
