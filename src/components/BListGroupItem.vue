<template>
  <component
    :is="tagComputed"
    class="list-group-item"
    :class="classes"
    :aria-current="active ? true : null"
    :aria-disabled="disabled ? true : null"
    v-bind="attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ColorVariant } from '../types';

const ACTION_TAGS = ['a', 'router-link', 'button', 'b-link']

export default defineComponent({
    name: 'BListGroupItem',
    props: {
        action: { type: Boolean, default: null },
        active: { type: Boolean, default: false },
        button: { type: Boolean, default: null },
        disabled: { type: Boolean, default: false },
        tag: { type: String, default: 'div' },
        variant: { type: String as PropType<ColorVariant> },
    },
    setup(props, context) {
        const link = false;//!!(props.href || props.to);
        const tagComputed = computed(() => props.button ? 'button' : !link ? props.tag : ''/*BLink*/);

        const classes = computed(() => {
            const { button, variant, active, disabled } = props;
            const action = props.action || link || button || ACTION_TAGS.includes(props.tag);
            return {
                [`list-group-item-${variant}`]: variant,
                'list-group-item-action': action,
                active,
                disabled
            };
        });

        const attrs = computed(() => {
            const attrs = {} as { type?: string, disabled?: boolean };
            if (props.button) {
                if (!context.attrs || !context.attrs.type) {
                    // Add a type for button is one not provided in passed attributes
                    attrs.type = 'button';
                }
                if (props.disabled) {
                    // Set disabled attribute if button and disabled
                    attrs.disabled = true;
                }
            }
            return attrs;
        });

        return {
            tagComputed,
            classes,
            attrs,
        };
    },
})
</script>
