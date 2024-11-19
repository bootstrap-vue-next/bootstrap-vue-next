<template>
  <component
    :is="isFieldset ? 'fieldset' : 'div'"
    :id="computedId"
    :disabled="isFieldset ? props.disabled : null"
    :role="isFieldset ? null : 'group'"
    :aria-invalid="computedAriaInvalid"
    :aria-labelledby="isFieldset && isHorizontal ? labelId : null"
    :class="[stateClass, {'was-validated': props.validated}]"
    class="b-form-group"
  >
    <ContentTemplate.define>
      <BFormInvalidFeedback
        v-if="slots['invalid-feedback'] || props.invalidFeedback"
        :id="invalidFeedbackId"
        :aria-live="props.feedbackAriaLive"
        :state="props.state"
        :tooltip="props.tooltip"
      >
        <slot name="invalid-feedback">{{ props.invalidFeedback }}</slot>
      </BFormInvalidFeedback>
      <BFormValidFeedback
        v-if="slots['valid-feedback'] || props.validFeedback"
        :id="validFeedbackId"
        :aria-live="props.feedbackAriaLive"
        :state="props.state"
        :tooltip="props.tooltip"
      >
        <slot name="valid-feedback">{{ props.validFeedback }}</slot>
      </BFormValidFeedback>
      <BFormText v-if="slots.description || props.description" :id="descriptionId">
        <slot name="description">{{ props.description }}</slot>
      </BFormText>
    </ContentTemplate.define>
    <LabelContentTemplate.define>
      <template v-if="slots.label || props.label || isHorizontal">
        <BCol v-if="isHorizontal" v-bind="labelColProps">
          <component
            :is="labelTag"
            :id="labelId"
            :for="computedLabelFor || null"
            :tabindex="isFieldset ? '-1' : null"
            :class="labelClasses"
            @click="isFieldset ? onLegendClick : null"
          >
            <slot name="label">{{ props.label }}</slot>
          </component>
        </BCol>
        <component
          :is="labelTag"
          v-else
          :id="labelId"
          :for="computedLabelFor || null"
          :tabindex="isFieldset ? '-1' : null"
          :class="labelClasses"
          @click="isFieldset ? onLegendClick : null"
        >
          <slot name="label">{{ props.label }}</slot>
        </component>
      </template>
    </LabelContentTemplate.define>
    <BFormRow v-if="isHorizontal">
      <LabelContentTemplate.reuse />
      <BCol v-bind="contentColProps" ref="content">
        <slot
          :id="computedId"
          :aria-describedby="null"
          :description-id="descriptionId"
          :label-id="labelId"
        />
        <ContentTemplate.reuse />
      </BCol>
    </BFormRow>
    <template v-else>
      <LabelContentTemplate.reuse />
      <div v-if="!isHorizontal && props.floating" ref="content" class="form-floating">
        <slot
          :id="computedId"
          :aria-describedby="null"
          :description-id="descriptionId"
          :label-id="labelId"
        />
        <ContentTemplate.reuse />
      </div>
      <template v-else>
        <slot
          :id="computedId"
          :aria-describedby="null"
          :description-id="descriptionId"
          :label-id="labelId"
        />
        <ContentTemplate.reuse />
      </template>
    </template>
  </component>
</template>

<script setup lang="ts">
import {computed, provide, type Ref, ref, useTemplateRef} from 'vue'
import {useAriaInvalid} from '../../composables/useAriaInvalid'
import {attemptFocus, isVisible} from '../../utils/dom'
import BCol from '../BContainer/BCol.vue'
import BFormInvalidFeedback from '../BForm/BFormInvalidFeedback.vue'
import BFormRow from '../BForm/BFormRow.vue'
import BFormText from '../BForm/BFormText.vue'
import BFormValidFeedback from '../BForm/BFormValidFeedback.vue'
import {suffixPropName} from '../../utils/props'
import {useStateClass} from '../../composables/useStateClass'
import {useId} from '../../composables/useId'
import {createReusableTemplate} from '@vueuse/core'
import type {BFormGroupProps} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import {formGroupPluginKey} from '../../utils/keys'

const INPUTS = ['input', 'select', 'textarea']

const _props = withDefaults(defineProps<BFormGroupProps>(), {
  ariaInvalid: undefined,
  contentCols: undefined,
  contentColsLg: undefined,
  contentColsMd: undefined,
  contentColsSm: undefined,
  contentColsXl: undefined,
  description: undefined,
  disabled: false,
  feedbackAriaLive: 'assertive',
  floating: false,
  id: undefined,
  invalidFeedback: undefined,
  label: undefined,
  labelAlign: undefined,
  labelAlignLg: undefined,
  labelAlignMd: undefined,
  labelAlignSm: undefined,
  labelAlignXl: undefined,
  labelClass: undefined,
  labelCols: undefined,
  labelColsLg: undefined,
  labelColsMd: undefined,
  labelColsSm: undefined,
  labelColsXl: undefined,
  labelFor: undefined,
  labelSize: undefined,
  labelVisuallyHidden: false,
  state: null,
  tooltip: false,
  validFeedback: undefined,
  validated: false,
})
const props = useDefaults(_props, 'BFormGroup')

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'invalid-feedback'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'valid-feedback'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'description'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'label'?: (props: Record<string, never>) => any
  'default'?: (props: {
    id: string
    ariaDescribedby: string | null
    descriptionId: string | undefined
    labelId: string | null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
}>()

const LabelContentTemplate = createReusableTemplate()
const ContentTemplate = createReusableTemplate()

const childId = ref<Ref<string>[]>([])
provide(formGroupPluginKey, (id) => {
  childId.value = [id]
})
const computedLabelFor = computed(() => {
  if (props.labelFor !== undefined) return props.labelFor
  if (childId.value[0] && childId.value[0].value) return childId.value[0].value
  return null
})

const breakPoints = ['xs', 'sm', 'md', 'lg', 'xl']

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getColProps = (props: any, prefix: string) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  breakPoints.reduce((result: any, breakpoint: string) => {
    const suffix = suffixPropName(breakpoint === 'xs' ? '' : breakpoint, `${prefix}Cols`)
    let propValue = props[suffix]
    propValue = propValue === '' ? true : propValue || false

    if (!(typeof propValue === 'boolean') && propValue !== 'auto') {
      const val = Number.parseInt(propValue)
      propValue = Number.isNaN(val) ? 0 : val
      propValue = propValue > 0 ? propValue : false
    }

    if (propValue) {
      if (breakpoint === 'xs') {
        result[typeof propValue === 'boolean' ? 'col' : 'cols'] = propValue
      } else {
        result[breakpoint || (typeof propValue === 'boolean' ? 'col' : 'cols')] = propValue
      }
    }
    return result
  }, {})

const content = useTemplateRef<HTMLElement>('content')

const contentColProps = computed(() => getColProps(props, 'content'))
const labelAlignClasses = computed(() =>
  ((props: BFormGroupProps, prefix: string) =>
    breakPoints.reduce((result: string[], breakpoint) => {
      const suffix = suffixPropName(
        breakpoint === 'xs' ? '' : breakpoint,
        `${prefix}Align`
      ) as keyof BFormGroupProps
      const propValue: string = props[suffix] || null
      if (propValue) {
        breakpoint === 'xs'
          ? result.push(`text-${propValue}`)
          : result.push(`text-${breakpoint}-${propValue}`)
      }
      return result
    }, []))(props, 'label')
)
const labelColProps = computed(() => getColProps(props, 'label'))
const isHorizontal = computed(
  () => Object.keys(contentColProps.value).length > 0 || Object.keys(labelColProps.value).length > 0
)

const stateClass = useStateClass(() => props.state)

const computedAriaInvalid = useAriaInvalid(
  () => props.ariaInvalid,
  () => props.state
)

const onLegendClick = (event: Readonly<MouseEvent>) => {
  if (computedLabelFor.value || content.value === null) return

  const {target} = event
  const tagName = target ? (target as HTMLElement).tagName : ''

  if ([...INPUTS, 'a', 'button', 'label'].indexOf(tagName) !== -1) return

  const inputs = [
    ...content.value.querySelectorAll(INPUTS.map((v) => `${v}:not([disabled])`).join()),
  ].filter(isVisible)
  const [inp] = inputs
  if (inputs.length === 1 && inp instanceof HTMLElement) {
    attemptFocus(inp)
  }
}

const computedId = useId(() => props.id)
const labelId = useId(undefined, '_BV_label_')
const labelTag = computed(() => (!computedLabelFor.value ? 'legend' : 'label'))
const labelClasses = computed(() => [
  isHorizontal.value ? 'col-form-label' : 'form-label',
  {
    'bv-no-focus-ring': !computedLabelFor.value,
    'col-form-label': isHorizontal.value || !computedLabelFor.value,
    'pt-0': !isHorizontal.value && !computedLabelFor.value,
    'd-block': !isHorizontal.value && computedLabelFor.value,
    [`col-form-label-${props.labelSize}`]: !!props.labelSize,
    'visually-hidden': props.labelVisuallyHidden,
  },
  labelAlignClasses.value,
  props.labelClass,
])

const invalidFeedbackId = useId(undefined, '_BV_feedback_invalid_')

const validFeedbackId = useId(undefined, '_BV_feedback_valid_')
const descriptionId = useId(undefined, '_BV_description_')

const isFieldset = computed(() => !computedLabelFor.value)
</script>
