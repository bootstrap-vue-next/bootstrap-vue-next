<template>
  <div
    class="progress-bar"
    :class="classes"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    :aria-valuemax="max"
    :style="{ width }"
  >
    <slot>{{ computedLabel }}</slot>
  </div>
</template>

<script lang="ts">
import { ColorVariant } from '../types'
import { computed, defineComponent, inject, PropType } from 'vue'
import { injectionKey, ParentData } from './BProgress.vue';

export default defineComponent({
    name: 'BProgressBar',
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
        const parent = inject<ParentData>(injectionKey);

        const classes = computed(() => ({
            'progress-bar-animated': props.animated || parent?.animated,
            'progress-bar-striped': props.striped || props.animated || parent?.striped,
            [`bg-${props.variant}`]: props.variant,
        }));

        const computedLabel = computed(() => {
            // if (props.labelHtml) {
            //     return props.labelHtml;
            // }

            if (props.showValue || parent?.showValue) {
                return parseFloat(props.value as string).toFixed(props.precision as number);
            }


            if (props.showProgress || parent?.showProgress) {
                const progress = ((props.value as number * 100) / parseInt((props.max || 100) as string)).toString();
                return parseFloat(progress).toFixed(props.precision as number);
            }

            return props.label || '';
        });

        const width = computed(() => {
            if (props.max || parent?.max) {
                   return `${(props.value as number * 100 )/ parseInt((props.max || parent?.max) as string)}%`;
            }

            return typeof props.value === 'string' ? props.value : `${props.value}%`
        });

        return {
            classes,
            computedLabel,
            width
        }
    },
})
</script>
