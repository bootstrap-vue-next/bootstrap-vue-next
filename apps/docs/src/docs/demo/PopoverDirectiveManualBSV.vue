<template>
  <button
    ref="btn"
    v-b-popover.manual="popoverConfig"
  >
    Manual
  </button>
</template>
<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck -- BSV example demonstrating deprecated $root.$emit pattern
export default {
  data() {
    return {
      popoverConfig: {
        title: 'Title',
        content: 'Content',
      },
    }
  },
  methods: {
    showPopover() {
      this.$root.$emit('bv::show::popover', 'btn')
    },
  },
}
</script>
