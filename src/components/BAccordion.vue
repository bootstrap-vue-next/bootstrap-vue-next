<template>
  <div :id="computedId" class="accordion" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, InjectionKey, provide} from 'vue'
import useId from '../composables/useId'

export const injectionKey: InjectionKey<string> = Symbol()

export default defineComponent({
  name: 'BAccordion',
  props: {
    flush: {type: Boolean, default: false},
    free: {type: Boolean, default: false},
    id: {type: String, default: undefined},
  },
  setup(props) {
    const computedId = useId(props.id, 'accordion')
    const classes = computed(() => ({
      'accordion-flush': props.flush,
    }))

    if (!props.free) {
      provide(injectionKey, `#${computedId.value}`)
    }

    return {
      computedId,
      classes,
    }
  },
})
</script>
