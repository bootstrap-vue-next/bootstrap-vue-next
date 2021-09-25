<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>
<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BCardGroup',
  props: {
    columns: {type: Boolean, default: false},
    deck: {type: Boolean, default: false},
    tag: {type: String, default: 'div'},
  },
  setup(props) {
    const classes = computed(() =>
      props.deck ? 'card-deck' : props.columns ? 'card-columns' : 'card-group'
    )

    return {
      classes,
    }
  },
})
</script>
