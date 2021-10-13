<template>
  <component
    :is="tag"
    :id="id"
    class="tab-pane"
    :class="classes"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <slot v-if="showSlot" />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, inject} from 'vue'
import {injectionKey, ParentData} from './BTabs.vue'

export default defineComponent({
  name: 'BTab',
  props: {
    active: {type: Boolean, default: false},
    buttonId: {type: String, default: null},
    disabled: {type: Boolean, default: false},
    id: {type: String},
    lazy: {type: Boolean, default: false},
    noBody: {type: [Boolean, String], default: false},
    tag: {type: String, default: 'div'},
    title: {type: String},
    titleItemClass: {type: [Array, Object, String], default: null},
    titleLinkAttributes: {type: Object, default: null},
    titleLinkClass: {type: [Array, Object, String], default: null},
  },
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const parentData: ParentData = inject(injectionKey)!

    const computedLazy = computed(() => parentData?.lazy || props.lazy)
    const computedActive = computed(() => props.active && !props.disabled)
    const showSlot = computed(() => computedActive.value || !computedLazy.value)
    const classes = computed(() => ({
      'active': props.active,
      'show': props.active,
      'card-body': parentData.card && props.noBody === false,
    }))

    return {
      classes,
      computedLazy,
      computedActive,
      showSlot,
    }
  },
})
</script>
