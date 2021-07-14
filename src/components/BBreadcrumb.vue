<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <slot name="prepend" />
            <b-breadcrumb-item v-for="(item, i) in items" :key="i" v-bind="item">
                {{ item.text }}
            </b-breadcrumb-item>
            <slot name="append" />
        </ol>
    </nav>
</template>

<script lang="ts">
import { BreadcrumbItem } from '../types';
import { defineComponent, PropType } from 'vue'
import { useBreadcrumb } from '../composables/useBreadcrumb';
import BBreadcrumbItem from './BBreadcrumbItem.vue';

export default defineComponent({
    components: {
        BBreadcrumbItem,
    },
    props: {
        items: { type: Array as PropType<BreadcrumbItem[]> },
    },
    setup(props) {
        const breadcrumb = useBreadcrumb();

        return {
            items: props.items || breadcrumb.items || [],
        }
    },
})
</script>
