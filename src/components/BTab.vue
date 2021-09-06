<template>
  <component
    :is="tag"
    :id="id"
    class="tab-pane"
    :class="classes"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BTab',
  props: {
    active: {type: Boolean, default: false},
    buttonId: {type: String, default: null},
    disabled: {type: Boolean, default: false},
    id: {type: String},
    // lazy: { type: Boolean, default: false },
    noBody: {type: [Boolean, String], default: false},
    tag: {type: String, default: 'div'},
    title: {type: String},
    titleItemClass: {type: [Array, Object, String], default: null},
    titleLinkAttribute: {type: Object, default: null},
    titleLinkClass: {type: [Array, Object, String], default: null},
  },
  setup(props) {
    const classes = computed(() => ({
      'active': props.active,
      'show': props.active,
      'card-body': props.noBody === false,
    }))

    return {
      classes,
    }
  },
})
</script>
