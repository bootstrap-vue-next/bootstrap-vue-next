<template>
    <div
        class="progress-bar"
        :class="classes"
        role="progressbar"
        :aria-valuenow="value"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width }"
    >
        <slot>{{ localLabel }}</slot>
    </div>
</template>

<script lang="ts">
import { ColorVariant } from '@/types'
import { computed, defineComponent, h, inject, PropType } from 'vue'

export default defineComponent({
    props: {
        animated: { type: Boolean, default: false },
        label: { type: String },
        labelHtml: { type: String },
        max: { type: [Number, String] },
        precision: { type: [Number, String], default: 0 },
        showProgress: { type: Boolean, default: false },
        showValue: { type: Boolean, default: false },
        striped: { type: Boolean, default: false },
        value: { type: [Number, String], default: 0 },
        variant: { type: String as PropType<ColorVariant> },
    },
    setup(props) {
        const max = inject('max');

        const classes = computed(() => ({
            'progress-bar-animated': props.animated,
            'progress-bar-striped': props.striped,
            [`bg-${props.variant}`]: props.variant,
        }));

        const localLabel = computed(() => {           
            if (props.showValue) {
                return parseFloat(props.value as string).toFixed(props.precision as number);
            }


            if (props.showProgress && props.max) {
                const progress = ((props.value as number * 100) / parseInt(props.max as string)).toString();
                return parseFloat(progress).toFixed(props.precision as number);
            }

            return props.label || '';
        });

        const width = computed(() => {
            if (props.max || max) {
                   return `${(props.value as number * 100 )/ parseInt((props.max || max) as string)}%`;
            }

            return typeof props.value === 'string' ? props.value : `${props.value}%`
        });

        return {
            classes,
            localLabel,
            width
        }
    },
})
</script>
