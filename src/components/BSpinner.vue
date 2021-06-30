<template>
    <div :class="classes" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type ClassObject = Array<string | Record<string, boolean>>;

export default defineComponent({
    props: {
        grow: { type: Boolean, default: false },
        variant: { type: String },
        small: { type: Boolean, default: false }
    },
    computed: {
        classes(): ClassObject {
            const classes: ClassObject = [
                {
                    'spinner-border': !this.grow,
                    'spinner-border-sm': !this.grow && this.small,
                    'spinner-grow': this.grow,
                    'spinner-grow-sm': this.grow && this.small,
                }
            ]

            if (this.variant) {
                classes.push(`text-${this.variant}`);
            }

            return classes;
        }
    }
})
</script>
