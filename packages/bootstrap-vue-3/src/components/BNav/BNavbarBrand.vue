<template>
  <component :is="computedTag" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {RouteLocationRaw} from 'vue-router'

interface Props {
  tag?: string
  href?: string
  to?: RouteLocationRaw
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
})

const computedTag = computed<string>(() => (props.to ? 'b-link' : props.href ? 'a' : props.tag))

const attrs = computed(() => ({
  href: props.href,
  to: props.to,
}))
</script>
