<template>
    <li class="breadcrumb-item" :class="classes">
        <a v-if="href" :href="href">
            <slot />
        </a>
        <slot v-else />
    </li>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    props: {
        active: { type: Boolean, default: false },
        href: { type: String },
        text: { type: String },
        disabled: { type: Boolean, default: false },
        to: { type: String }
    },
    setup(props) {
        const classes = computed(() => ({
            active: props.active,            
        }))

        return {
            classes
        }
    },
})
</script>
