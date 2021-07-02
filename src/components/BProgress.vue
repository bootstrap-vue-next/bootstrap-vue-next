<template>
    <div class="progress" :style="{ height }">
        <slot>
            <b-progress-bar v-bind="{
                animated,
                max,
                precision,
                showProgress,
                showValue,
                striped,
                value,
                variant
            }" />
        </slot>
    </div>
</template>

<script lang="ts">
import { ColorVariant } from '@/types'
import { defineComponent, PropType, provide } from 'vue'

export default defineComponent({
    props: {
        animated: { type: Boolean, default: false },
        max: { type: [Number, String] },
        height: { type: String },
        precision: { type: [Number, String], default: 0 },
        showProgress: { type: Boolean, default: false },
        showValue: { type: Boolean, default: false },
        striped: { type: Boolean, default: false },
        value: { type: [Number, String], default: 0 },
        variant: { type: String as PropType<ColorVariant> },
    },
    setup(props) {
        provide('max', props.max);
    },
})
</script>
