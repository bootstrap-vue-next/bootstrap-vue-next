<template>
  <component :is="subTitleTag" class="card-subtitle mb-2" :class="classes">
    <slot>
      {{ subTitle }}
    </slot>
  </component>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BCardSubTitle',
  props: {
    subTitle: {type: String},
    subTitleTag: {type: String, default: 'h6'},
    subTitleTextVariant: {type: String, default: 'muted'},
  },
  setup(props) {
    const classes = computed(() => ({
      [`text-${props.subTitleTextVariant}`]: props.subTitleTextVariant,
    }))

    return {
      classes,
    }
  },
})
</script>
