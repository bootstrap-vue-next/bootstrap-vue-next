<template>
    <input
        v-bind="$attrs"
        class="form-control"
        :value="modelValue"
        :list="list ? computedId : null"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <datalist v-if="list" :id="computedId">
        <option v-for="item in list" :key="item" :value="item"></option>
    </datalist>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useId from '@/composables/useId';

export default defineComponent({
    props: {
        modelValue: { type: String },
        id: { type: String },
        list: { type: Array as PropType<string[]> },
    },
    setup(props) {
        const computedId = useId(props.id, 'input');

        return {
            computedId
        }
    },
})
</script>
