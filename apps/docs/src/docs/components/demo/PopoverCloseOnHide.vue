<template>
  <div class="d-flex gap-2">
    <BPopover :click="true" :close-on-hide="true" :delay="{show: 0, hide: 0}">
      <template #target>
        <BButton>Click me. Popover closes when clipped</BButton>
      </template>
      Scroll me out of view
    </BPopover>
    <BPopover
      :click="true"
      :close-on-hide="true"
      :delay="{show: 0, hide: 0}"
      :boundary-padding="{top: navHeight}"
    >
      <template #title>Scroll me out of view</template>
      <template #target>
        <BButton>This popover gets hidden by the top nav</BButton>
      </template>
    </BPopover>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'

const navRef = ref<Element | null>(null)
onMounted(() => {
  navRef.value = document.body.querySelector('#app > nav')
})
const navHeight = computed(() => navRef.value?.clientHeight)
</script>
