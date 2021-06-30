<template>
    <div class="card">
        <div :class="{'card-body': !noBody}">
            <h5 v-if="title" class="card-title">{{ title }}</h5>
            <h6 v-if="subtitle" class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        noBody: { type: Boolean, default: false },
        subtitle: { type: String },
        title: { type: String },
    }
})
</script>
