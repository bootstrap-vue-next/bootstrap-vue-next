<template>
  <div
    class="tab-pane fade"
    :class="{ active, show: active }"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BTab',
    props: {
        active: { type: Boolean, default: false },
        title: { type: String },
    },
})
</script>
