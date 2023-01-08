<template>
  <li class="nav-item dropdown">
    <b-dropdown v-bind="props" is-nav>
      <template v-for="(_, slot, index) in $slots" :key="index" #[slot]="scope">
        <slot :name="slot" v-bind="scope || {}" />
      </template>
    </b-dropdown>
  </li>
</template>

<script setup lang="ts">
// import type {BNavItemDropdownProps} from '../types/components'
import type {ButtonVariant, ClassValue, Size} from '../../types'
import BDropdown from '../BDropdown/BDropdown.vue'

// Unsure of how to include booleanish here
interface BNavItemDropdownProps {
  id?: string
  text?: string
  toggleClass?: ClassValue
  size?: Size
  offset?: string
  autoClose?: boolean | 'inside' | 'outside'
  dark?: boolean
  dropleft?: boolean
  dropright?: boolean
  dropup?: boolean
  right?: boolean
  left?: boolean | string
  // offsetParent?: boolean // Breaks tests, does not exist on BDropdown
  split?: boolean
  splitVariant?: ButtonVariant
  noCaret?: boolean
  variant?: ButtonVariant
}

const props = withDefaults(defineProps<BNavItemDropdownProps>(), {
  autoClose: true,
  dark: false,
  dropleft: false,
  dropright: false,
  dropup: false,
  right: false,
  left: false,
  // offsetParent: false,
  split: false,
  noCaret: false,
  variant: 'link',
})
</script>
