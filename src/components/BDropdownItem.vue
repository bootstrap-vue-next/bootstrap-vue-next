<template>
  <li role="presentation">
    <component
      :is="tag"
      class="dropdown-item"
      :class="classes"
      v-bind="{ ...$attrs, ...attrs }"
    >
      <slot />
    </component>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'BDropdownItem',
    inheritAttrs: false,
    props: {
        active: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        href: { type: String }
    },
    setup(props) {
        const classes = computed(() => ({
            active: props.active,
            disabled: props.disabled,
        }))

        const tag = computed(() => props.href ? 'a' : 'button');

        const attrs = computed(() => ({
            href: tag.value === 'a' ? props.href : null,
            type: tag.value === 'button' ? 'button' : null,
            'aria-current': props.active ? 'true' : null
        }));

        return {
            classes,
            tag,
            attrs
        }
    },
})
</script>
