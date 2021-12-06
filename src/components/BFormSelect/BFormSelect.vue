<template>
  <select
    :id="computedId"
    ref="input"
    :class="classes"
    :name="name"
    :form="form || null"
    :multiple="multiple || null"
    :size="computedSelectSize"
    :disabled="disabled"
    :required="required"
    :aria-required="required ? 'true' : null"
    :aria-invalid="computedAriaInvalid"
    v-bind="$attrs"
    :value="modelValue"
    @change="onChange($event)"
  >
    <slot name="first" />
    <template v-for="(option, index) in formOptions">
      <b-form-select-option-group
        v-if="Array.isArray(option.options)"
        :key="`option_${index}`"
        :label="option.label"
        :options="option.options"
      />
      <!-- eslint-disable vue/no-v-html -->
      <b-form-select-option
        v-else
        :key="`option_${index}`"
        :value="option.value"
        :disabled="option.disabled"
        v-text="option.text"
        v-html="option.html"
      />
      <!--eslint-enable-->
    </template>
    <slot />
  </select>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onActivated,
  onMounted,
  PropType,
  ref,
  watch,
} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'
import useId from '../../composables/useId'
import {Size} from '../../types'
import {normalizeOptions} from '../../composables/useFormSelect'

export default defineComponent({
  name: 'BFormSelect',
  components: {BFormSelectOption, BFormSelectOptionGroup},
  props: {
    ariaInvalid: {
      type: [Boolean, String] as PropType<boolean | 'false' | 'true' | 'grammar' | 'spelling'>,
      default: false,
    },
    autofocus: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    disabledField: {type: String, default: 'disabled'},
    form: {type: String, required: false},
    htmlField: {type: String, default: 'html'},
    id: {type: String, required: false},
    labelField: {type: String, default: 'label'},
    multiple: {type: Boolean, default: false},
    name: {type: String, required: false},
    options: {type: [Array, Object], default: () => []},
    optionsField: {type: String, default: 'options'},
    plain: {type: Boolean, default: false},
    required: {type: Boolean, default: false},
    selectSize: {type: Number, default: 0},
    size: {type: String as PropType<Size>, required: false},
    state: {
      type: Boolean as PropType<boolean | null | undefined>,
      default: null,
    },
    textField: {type: String, default: 'text'},
    valueField: {type: String, default: 'value'},
    modelValue: {type: [String, Array, Object, Number], default: ''},
  },
  emits: ['update:modelValue', 'change', 'input'],
  setup(props, {emit}) {
    const input = ref<HTMLElement>()
    const computedId = useId(props.id, 'input')

    // lifecycle events
    const handleAutofocus = () => {
      nextTick(() => {
        if (props.autofocus) input.value?.focus()
      })
    }
    onMounted(handleAutofocus)
    onActivated(handleAutofocus)
    // /lifecycle events

    // computed
    const classes = computed(() => ({
      'form-control': props.plain,
      [`form-control-${props.size}`]: props.size && props.plain,
      'form-select': !props.plain,
      [`form-select-${props.size}`]: props.size && !props.plain,
      'is-valid': props.state === true,
      'is-invalid': props.state === false,
    }))

    const computedSelectSize = computed(() => {
      if (props.selectSize || props.plain) {
        return props.selectSize
      }
      return null
    })

    const computedAriaInvalid = computed(() => {
      if (props.ariaInvalid) {
        return props.ariaInvalid.toString()
      }
      return props.state === false ? 'true' : null
    })

    const formOptions = computed(() => normalizeOptions(props.options, 'BFormSelect', props))
    // /computed

    // methods

    const onChange = (evt: any) => {
      const {target} = evt
      const selectedVal = Array.from(target.options)
        .filter((o: any) => o.selected)
        .map((o: any) => ('_value' in o ? o._value : o.value))
      nextTick(() => {
        emit('change', target.multiple ? selectedVal : selectedVal[0])
        emit('update:modelValue', target.multiple ? selectedVal : selectedVal[0])
      })
    }

    const focus = () => {
      if (!props.disabled) input.value?.focus()
    }

    const blur = () => {
      if (!props.disabled) {
        input.value?.blur()
      }
    }
    // /methods

    watch(
      () => props.modelValue,
      (newValue) => {
        emit('input', newValue)
      }
    )

    return {
      input,
      computedId,
      computedSelectSize,
      computedAriaInvalid,
      classes,
      formOptions,
      onChange,
      focus,
      blur,
    }
  },
})
</script>
