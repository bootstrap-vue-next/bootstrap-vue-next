<template>
  <li role="presentation">
    <component
      :is="headerTag"
      :id="headerId"
      class="dropdown-header"
      :class="[classes, headerClasses]"
      :role="headerRole"
    >
      <slot name="header">
        {{ header }}
      </slot>
    </component>
    <ul
      :id="id"
      role="group"
      class="list-unstyled"
      v-bind="$attrs"
      :aria-describedby="ariaDescribedby || headerId"
    >
      <slot />
    </ul>
  </li>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant} from '../../types'

export default defineComponent({
  name: 'BDropdownGroup',
  inheritAttrs: false,
  props: {
    ariaDescribedby: {type: String},
    header: {type: String},
    headerClasses: {type: [String, Array, Object], default: null},
    headerTag: {type: String, default: 'header'},
    headerVariant: {type: String as PropType<ColorVariant>, default: null},
    id: {type: String},
  },
  setup(props) {
    const headerId = computed(() => (props.id ? [props.id, 'group_dd_header'].join('_') : null))

    const headerRole = computed(() => (props.headerTag === 'header' ? null : 'heading'))

    const classes = computed(() => ({
      [`text-${props.headerVariant}`]: props.headerVariant,
    }))

    return {
      classes,
      headerId,
      headerRole,
    }
  },
})
</script>
