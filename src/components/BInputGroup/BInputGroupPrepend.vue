<template>
  <b-input-group-addon :id="id" :is-text="isText" :tag="tag" :append="false">
    <slot />
  </b-input-group-addon>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import BInputGroupAddon from './BInputGroupAddon.vue'

export default defineComponent({
  name: 'BInputGroupPrepend',
  components: {BInputGroupAddon},
  props: {
    id: {type: String, required: false},
    isText: {type: Boolean, default: false},
    tag: {type: String, default: 'div'},
  },
})
</script>
