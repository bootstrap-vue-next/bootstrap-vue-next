<template>
    <div class="accordion" :class="{ 'accordion-flush': flush }" :id="id">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        flush: { type: Boolean, default: false },
        id: { type: String }
    },
    provide() {
        return {
            parent: this.id
        }
    }
})
</script>
