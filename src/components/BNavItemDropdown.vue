<template>
  <li class="nav-item dropdown">
    <b-dropdown v-bind="$props">
      <slot />
    </b-dropdown>
  </li>
</template>

<script lang="ts">
import {ButtonVariant, Size} from '../types'
import {defineComponent, PropType} from 'vue'
import BDropdown from './BDropdown.vue'

export default defineComponent({
  name: 'BNavItemDropdown',
  components: {
    BDropdown,
  },
  props: {
    autoClose: {type: String, default: 'true'},
    id: {type: String},
    dark: {type: Boolean, default: false},
    dropleft: {type: Boolean, default: false},
    dropright: {type: Boolean, default: false},
    dropup: {type: Boolean, default: false},
    right: {type: [Boolean, String], default: false},
    left: {type: [Boolean, String], default: false},
    text: {type: String},
    offset: {type: String},
    offsetParent: {type: Boolean, default: false},
    split: {type: Boolean, default: false},
    splitVariant: {type: String as PropType<ButtonVariant>},
    size: {type: String as PropType<Size>},
    variant: {type: String as PropType<ButtonVariant>, default: 'link'},
  },
  setup(props) {
    return {
      props,
    }
  },
})
</script>
