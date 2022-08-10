<template>
  <li class="nav-item" :class="classes">
    <b-link
      :href="href"
      :to="to"
      class="nav-link"
      :class="classes"
      :tabindex="disabledBoolean ? -1 : undefined"
      :aria-disabled="disabledBoolean ? true : undefined"
    >
      <slot />
    </b-link>
  </li>
</template>

<script setup lang="ts">
// import type {BNavItemProps} from '../types/components'
import BLink from '../BLink/BLink.vue'
import {computed, toRef} from 'vue'
import type {RouteLocationRaw} from 'vue-router'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'

interface BNavItemProps {
  active?: Booleanish
  disabled?: Booleanish
  href?: string
  to?: RouteLocationRaw
}

const props = withDefaults(defineProps<BNavItemProps>(), {
  active: false,
  disabled: false,
})

const activeBoolean = useBooleanish(toRef(props, 'active'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

const classes = computed(() => ({
  active: activeBoolean.value,
  disabled: disabledBoolean.value,
}))
</script>
