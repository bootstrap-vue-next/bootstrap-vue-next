<template>
    <div class="collapse" :class="{ show }">
        <slot/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        show: { type: Boolean, default: false }
    }
})
</script>
