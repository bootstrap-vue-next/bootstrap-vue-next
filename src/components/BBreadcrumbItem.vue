<template>
  <li class="breadcrumb-item" :class="classes" @click="clicked">
    <a v-if="href" :href="href" :target="target">
      <slot />
    </a>
    <slot v-else />
  </li>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BBreadcrumbItem',
  props: {
    active: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    href: {type: String, required: false},
    target: {type: String, default: '_self'},
    text: {type: String, required: false},
    to: {type: String, required: false},
  },
  emits: ['click'],
  setup(props, {emit}) {
    const classes = computed(() => ({
      active: props.active,
      disabled: props.disabled,
    }))

    const clicked = function (e: MouseEvent) {
      if (!props.disabled) emit('click', e)
    }
    return {
      classes,
      clicked,
    }
  },
})
</script>
