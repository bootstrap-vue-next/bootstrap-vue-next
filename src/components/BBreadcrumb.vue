<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <b-breadcrumb-item v-for="(item, i) in items" :key="i" v-bind="item">
                {{ item.text }}
            </b-breadcrumb-item>
            <slot />
        </ol>
    </nav>
</template>

<script lang="ts">
import { BreadcrumbItem } from '@/types';
import { defineComponent, PropType } from 'vue'
import BBreadcrumbItem from './BBreadcrumbItem.vue';

export default defineComponent({
    components: {
        BBreadcrumbItem,
    },
    props: {
        items: { type: Array as PropType<BreadcrumbItem[]>, default: [] },
    },
    setup() {
        
    },
})
</script>
