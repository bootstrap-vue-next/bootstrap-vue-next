<template>
  <component :is="tag" :id="id" class="d-flex" :class="computedClasses">
    <b-input-group-text v-if="isText">
      <slot></slot>
    </b-input-group-text>
    <slot v-if="!isText" />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import BInputGroupText from './BInputGroupText.vue'

export default defineComponent({
  name: 'BInputGroupAddon',
  components: {BInputGroupText},
  props: {
    append: {type: Boolean, default: false},
    id: {type: String, required: false},
    isText: {type: Boolean, default: false},
    tag: {type: String, default: 'div'},
  },
  setup(props) {
    const computedClasses = computed(() => ({
      'input-group-append': props.append,
      'input-group-prepend': !props.append,
    }))

    return {
      computedClasses,
    }
  },
})
</script>
