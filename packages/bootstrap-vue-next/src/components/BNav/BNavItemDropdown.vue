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
  dropstart?: boolean
  dropend?: boolean
  dropup?: boolean
  alignEnd?: boolean
  alignStart?: boolean
  split?: boolean
  splitVariant?: ButtonVariant
  noCaret?: boolean
  variant?: ButtonVariant
}

const props = withDefaults(defineProps<BNavItemDropdownProps>(), {
  autoClose: true,
  dark: false,
  dropstart: false,
  dropend: false,
  dropup: false,
  alignEnd: false,
  alignStart: false,
  // offsetParent: false,
  split: false,
  noCaret: false,
  variant: 'link',
})
</script>
