<template>
    <div class="accordion-item">
    <h2 class="accordion-header" :id="`heading${id}`">
      <button class="accordion-button" :class="{ collapsed: !show }" type="button" data-bs-toggle="collapse" :data-bs-target="`#${id}`" :aria-expanded="show ? 'true' : 'false'" :aria-controls="id">
        {{ header }}
      </button>
    </h2>
    <div :id="id" class="accordion-collapse collapse" :class="{ show }" :aria-labelledby="`heading${id}`" :data-bs-parent="parent ? `#${parent}` : null">
      <div class="accordion-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    inheritAttrs: false,
    props: {
        header: { type: String },
        id: { type: String, required: true },
        show: { type: Boolean, default: false }
    },
    inject: [ 'parent' ],
})
</script>
