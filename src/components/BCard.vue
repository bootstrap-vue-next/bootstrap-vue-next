<template>
    <component :is="tag" class="card">
        <div v-if="header" class="card-header">
            <slot name="header">{{ header }}</slot>
        </div>
        
        <div :class="{'card-body': !noBody}">
            <h5 v-if="title && !noBody" class="card-title">{{ title }}</h5>
            <h6 v-if="subTitle && !noBody" class="card-subtitle mb-2 text-muted">{{ subTitle }}</h6>
            <slot />
        </div>
        
        <div v-if="footer" class="card-footer">
            <slot name="footer">{{ footer }}</slot>
        </div>
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        footer: { type: String },
        header: { type: String },
        noBody: { type: Boolean, default: false },
        subTitle: { type: String },
        tag: { type: String, default: 'div' },
        title: { type: String },
    }
})
</script>
