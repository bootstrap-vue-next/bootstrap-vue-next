<template>
  <li class="nav-item dropdown">
    <b-dropdown v-bind="$props">
      <template v-for="(_, slot) in $slots" #[slot]="scope">
        <slot :name="slot" v-bind="scope || {}" />
      </template>
    </b-dropdown>
  </li>
</template>

<script setup lang="ts">
// import type {BNavItemDropdownProps} from '../types/components'
import type {ButtonVariant, Size} from '../types'
import BDropdown from './BDropdown/BDropdown.vue'

interface BNavItemDropdownProps {
  id?: string
  text?: string
  size?: Size
  offset?: string
  autoClose?: boolean | 'inside' | 'outside'
  dark?: boolean
  dropleft?: boolean
  dropright?: boolean
  dropup?: boolean
  right?: boolean
  left?: boolean | string
  offsetParent?: boolean
  split?: boolean
  splitVariant?: ButtonVariant
  noCaret?: boolean
  variant?: ButtonVariant
}

withDefaults(defineProps<BNavItemDropdownProps>(), {
  autoClose: true,
  dark: false,
  dropleft: false,
  dropright: false,
  dropup: false,
  right: false,
  left: false,
  offsetParent: false,
  split: false,
  noCaret: false,
  variant: 'link',
})
</script>
