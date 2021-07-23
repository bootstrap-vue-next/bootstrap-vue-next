<template>
  <input
    :class="classes"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :list="list ? computedId : null"
    @input="$emit('update:modelValue', $event.target.value)"
  >
  <datalist
    v-if="list"
    :id="computedId"
  >
    <option
      v-for="item in list"
      :key="item"
      :value="item"
    />
  </datalist>
</template>

<script lang="ts">
import { InputType } from '../types';
import { computed, defineComponent, PropType } from 'vue'
import useId from '../composables/useId';

export default defineComponent({
    name: 'BFormInput',
    props: {
        modelValue: { type: String },
        id: { type: String },
        type: { type: String as PropType<InputType>, default: 'text' },
        list: { type: Array as PropType<string[]> },
        placeholder: { type: String },
    },
    emits: [
      'update:modelValue'
    ],
    setup(props) {
        const computedId = useId(props.id, 'input');
        const classes = computed(() => ({
            'form-control': props.type !== 'range',
            'form-control-color': props.type === 'color',
            'form-range': props.type === 'range',

        }));

        return {
            computedId,
            classes,
        }
    },
})
</script>
