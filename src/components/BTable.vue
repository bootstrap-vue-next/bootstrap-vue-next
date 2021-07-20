<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { ColorVariant, TableField } from '../types'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        borderless: { type: Boolean, default: false },
        bordered: { type: Boolean, default: false },
        borderVariant: { type: String as PropType<ColorVariant> },
        dark: { type: Boolean, default: false },
        fields: { type: Array as PropType<TableField[]>, default: () => [] },
        hover: { type: Boolean, default: false },
        items: { type: Array, default: () => [] },
        small: { type: Boolean, default: false },
        striped: { type: Boolean, default: false },
        variant: { type: String as PropType<ColorVariant> },
    },
    setup(props) {
        const classes = computed(() => ({
            [`table-${props.variant}`]: props.variant,
            'table-striped': props.striped,
            'table-hover': props.hover,
            'table-dark': props.dark,
            'table-bordered': props.bordered,
            [`border-${props.borderVariant}`]: props.borderVariant,
            'table-borderless': props.borderless,
            'table-sm': props.small
        }))
    },
})
</script>
