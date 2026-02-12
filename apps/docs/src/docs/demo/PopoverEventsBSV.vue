<template>
  <BPopover ref="popover" />
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck -- BSV example demonstrating deprecated $root.$emit pattern
export default {
  methods: {
    showPopover() {
      this.$root.$emit('bv::show::popover', 'my-popover')
    },
  },
}
</script>
