<template>
    <table class="table" :class="classes">
        <thead>
            <tr>
                <th scope="col" v-for="(th, i) in headerTable" :key="i">
                    {{ th }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tr, i) in items" :key="i" :class="{ [`table-${tr._rowVariant}`]: tr._rowVariant }">
                <td v-for="(value, key, index) in tr" :key="index">
                    <slot :name="`cell(${key})`" v-bind="{ value, items }">{{ value }}</slot>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { ColorVariant, TableField } from '../types'
import { computed, defineComponent, PropType } from 'vue'

interface Item {
    [key: string]: any,
    _rowVariant?: string,
    _cellVariants?: Record<string, string>
}

export default defineComponent({
    props: {
        borderless: { type: Boolean, default: false },
        bordered: { type: Boolean, default: false },
        borderVariant: { type: String as PropType<ColorVariant> },
        dark: { type: Boolean, default: false },
        fields: { type: Array as PropType<TableField[]>, default: () => [] },
        hover: { type: Boolean, default: false },
        items: { type: Array as PropType<Item[]>, default: () => [] },
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

        const headerTable = computed(() => {
            if (props.items.length > 0) {
                return Object.keys(props.items[0]).map(th => th.replaceAll('_', ' '));
            }

            return [];
        })

        return {
            classes,
            headerTable
        }
    },
})
</script>
