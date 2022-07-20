<!-- eslint-disable vue/no-v-html -->
<template>
  <component :is="footerTag" class="card-footer" :class="[footerClass, classes]">
    <div v-if="!!footerHtml" v-html="footerHtml" />
    <slot v-else>
      {{ footer }}
    </slot>
  </component>
</template>

<script setup lang="ts">
// import type {BCardFooterProps} from '../../types/components'
import type {ColorVariant, TextColorVariant} from '../../types'
import {computed} from 'vue'

interface BCardFooterProps {
  footer?: string
  footerBgVariant?: ColorVariant
  footerBorderVariant?: ColorVariant
  footerClass?: Array<unknown> | Record<string, unknown> | string
  footerHtml?: string
  footerTag?: string
  footerTextVariant?: TextColorVariant
}

const props = withDefaults(defineProps<BCardFooterProps>(), {
  footerTag: 'div',
})

const classes = computed(() => ({
  [`text-${props.footerTextVariant}`]: props.footerTextVariant,
  [`bg-${props.footerBgVariant}`]: props.footerBgVariant,
  [`border-${props.footerBorderVariant}`]: props.footerBorderVariant,
}))
</script>
