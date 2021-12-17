<template>
  <div></div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  name: 'BToast',
  props: {
    appendToast: {type: Boolean, default: false},
    autoHideDelay: {type: Number, default: 5000},
    bodyClagitss: {type: String},
    headerClass: {type: String},
    headerTag: {type: String, default: 'header'},
    // Switches role to 'status' and aria-live to 'polite'
    isStatus: {type: Boolean, default: false},
    noAutoHide: {type: Boolean, default: false},
    noCloseButton: {type: Boolean, default: false},
    noFade: {type: Boolean, default: false},
    noHoverPause: {type: Boolean, default: false},
    solid: {type: Boolean, default: false},
    // Render the toast in place, rather than in a portal-target
    static: {type: Boolean, default: false},
    title: {type: String},
    toastClass: {type: Array as PropType<Array<string>>},
    toaster: {type: String, default: 'b-toaster-top-right'},
    variant: {type: String},
  },
  setup() {
    return {}
  },
})
</script>
