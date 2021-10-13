<template>
  <component :is="computedTag" class="list-group" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, InjectionKey, PropType, provide, ref, watch} from 'vue'
import {Breakpoint} from '../../types'

export interface ParentData {
  numbered: boolean
}

export const injectionKey: InjectionKey<ParentData> = Symbol()

export default defineComponent({
  name: 'BListGroup',
  props: {
    flush: {type: Boolean, default: false},
    horizontal: {type: [Boolean, String] as PropType<boolean | Breakpoint>, default: false},
    numbered: {type: Boolean, default: false},
    tag: {type: String, default: 'div'},
  },
  setup(props) {
    const classes = computed(() => {
      const horizontal = props.flush ? false : props.horizontal
      return {
        'list-group-flush': props.flush,
        'list-group-horizontal': horizontal === true,
        [`list-group-horizontal-${horizontal}`]: typeof horizontal === 'string',
        'list-group-numbered': props.numbered,
      }
    })
    //    const computedTag = () => (props.numbered === true ? 'div' : props.tag)

    const calculateTag = () => (props.numbered === true ? 'ol' : props.tag)
    const computedTag = ref(calculateTag())

    // for some reason a computed for tag calculation does not always work. So I used watches
    watch(
      () => props.tag,
      () => (computedTag.value = calculateTag())
    )
    watch(
      () => props.numbered,
      () => (computedTag.value = calculateTag())
    )

    provide(injectionKey, {
      numbered: props.numbered,
    })

    return {
      classes,
      computedTag,
    }
  },
})
</script>
