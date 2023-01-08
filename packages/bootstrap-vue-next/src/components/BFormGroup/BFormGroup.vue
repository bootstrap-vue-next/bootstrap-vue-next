<script lang="ts">
import {useBooleanish, useId} from '../../composables'
import {RX_SPACE_SPLIT} from '../../constants/regex'
import {
  attemptFocus,
  cssEscape,
  getAttr,
  getId,
  IS_BROWSER,
  isVisible,
  normalizeSlot,
  removeAttr,
  resolveAriaInvalid,
  select,
  selectAll,
  setAttr,
  stringToInteger,
  suffixPropName,
} from '../../utils'
import {
  computed,
  defineComponent,
  h,
  nextTick,
  onMounted,
  type PropType,
  ref,
  toRef,
  watch,
} from 'vue'
import BCol from '../BCol.vue'
import BFormInvalidFeedback from '../BForm/BFormInvalidFeedback.vue'
import BFormRow from '../BForm/BFormRow.vue'
import BFormText from '../BForm/BFormText.vue'
import BFormValidFeedback from '../BForm/BFormValidFeedback.vue'
import type {AriaInvalid, Booleanish} from '../../types'

const INPUTS = ['input', 'select', 'textarea']
// Selector for finding first input in the form group
const INPUT_SELECTOR = INPUTS.map((v) => `${v}:not([disabled])`).join()

// A list of interactive elements (tag names) inside `<b-form-group>`'s legend
const LEGEND_INTERACTIVE_ELEMENTS = [...INPUTS, 'a', 'button', 'label']

export const SLOT_NAME_LABEL = 'label'
export const SLOT_NAME_INVALID_FEEDBACK = 'invalid-feedback'
export const SLOT_NAME_VALID_FEEDBACK = 'valid-feedback'
export const SLOT_NAME_DESCRIPTION = 'description'
export const SLOT_NAME_DEFAULT = 'default'

export default defineComponent({
  components: {BCol, BFormInvalidFeedback, BFormRow, BFormText, BFormValidFeedback},
  props: {
    contentCols: {type: [Boolean, String, Number], required: false},
    contentColsLg: {type: [Boolean, String, Number], required: false},
    contentColsMd: {type: [Boolean, String, Number], required: false},
    contentColsSm: {type: [Boolean, String, Number], required: false},
    contentColsXl: {type: [Boolean, String, Number], required: false},
    description: {type: [String], required: false},
    disabled: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    feedbackAriaLive: {type: String, default: 'assertive'},
    id: {type: String, required: false},
    invalidFeedback: {type: String, required: false},
    label: {type: String, required: false},
    labelAlign: {type: [Boolean, String, Number], required: false},
    labelAlignLg: {type: [Boolean, String, Number], required: false},
    labelAlignMd: {type: [Boolean, String, Number], required: false},
    labelAlignSm: {type: [Boolean, String, Number], required: false},
    labelAlignXl: {type: [Boolean, String, Number], required: false},
    labelClass: {type: [Array, Object, String], required: false},
    labelCols: {type: [Boolean, String, Number], required: false},
    labelColsLg: {type: [Boolean, String, Number], required: false},
    labelColsMd: {type: [Boolean, String, Number], required: false},
    labelColsSm: {type: [Boolean, String, Number], required: false},
    labelColsXl: {type: [Boolean, String, Number], required: false},
    labelFor: {type: String, required: false},
    labelSize: {type: String, required: false},
    labelSrOnly: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    state: {type: [Boolean, String] as PropType<Booleanish>, default: null},
    tooltip: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    validFeedback: {type: String, required: false},
    validated: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    floating: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  },
  setup(props, {attrs}) {
    const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
    const labelSrOnlyBoolean = useBooleanish(toRef(props, 'labelSrOnly'))
    const stateBoolean = useBooleanish(toRef(props, 'state'))
    const tooltipBoolean = useBooleanish(toRef(props, 'tooltip'))
    const validatedBoolean = useBooleanish(toRef(props, 'validated'))
    const floatingBoolean = useBooleanish(toRef(props, 'floating'))

    const ariaDescribedby: string | null = null as string | null
    const breakPoints = ['xs', 'sm', 'md', 'lg', 'xl']

    const getAlignClasses = (props: any, prefix: string) =>
      breakPoints.reduce((result: string[], breakpoint) => {
        const suffix = suffixPropName(breakpoint === 'xs' ? '' : breakpoint, `${prefix}Align`)
        const propValue: string = props[suffix] || null
        if (propValue) {
          breakpoint === 'xs'
            ? result.push(`text-${propValue}`)
            : result.push(`text-${breakpoint}-${propValue}`)
        }

        return result
      }, [])

    const getColProps = (props: any, prefix: string) =>
      breakPoints.reduce((result: any, breakpoint: string) => {
        const suffix = suffixPropName(breakpoint === 'xs' ? '' : breakpoint, `${prefix}Cols`)
        let propValue = props[suffix]
        // Handle case where the prop's value is an empty string,
        // which represents `true`
        propValue = propValue === '' ? true : propValue || false

        if (!(typeof propValue === 'boolean') && propValue !== 'auto') {
          // Convert to column size to number
          propValue = stringToInteger(propValue, 0)
          // Ensure column size is greater than `0`
          propValue = propValue > 0 ? propValue : false
        }

        // Add the prop to the list of props to give to `<b-col>`
        // If breakpoint is '' (`${prefix}Cols` is `true`), then we use
        // the 'col' prop to make equal width at 'xs'
        if (propValue) {
          // Extra care is required for xs since it does not have a BCol breakpoint prop
          // Xs breakpoint is simply 'cols'
          if (breakpoint === 'xs') {
            result.cols = propValue
          } else {
            result[breakpoint || (typeof propValue === 'boolean' ? 'col' : 'cols')] = propValue
          }
        }
        return result
      }, {})

    const content = ref()

    // Sets the `aria-describedby` attribute on the input if `labelFor` is set
    // Optionally accepts a string of Ids to remove as the second parameter
    // Preserves any `aria-describedby` value(s) user may have on input
    const updateAriaDescribedby = (newValue: string | null, oldValue: string | null = null) => {
      if (IS_BROWSER && props.labelFor) {
        // We need to escape `labelFor` since it can be user-provided
        const $input = select(`#${cssEscape(props.labelFor)}`, content)
        if ($input) {
          const attr = 'aria-describedby'
          const newIds = (newValue || '').split(RX_SPACE_SPLIT)
          const oldIds = (oldValue || '').split(RX_SPACE_SPLIT)

          // Update Id list, preserving any original Ids
          // and ensuring the Id's are unique
          const ids = (getAttr($input, attr) || '')
            .split(RX_SPACE_SPLIT)
            .filter((id) => !oldIds.includes(id))
            .concat(newIds)
            .filter((id, index, ids) => ids.indexOf(id) === index)
            .filter((x) => x)
            .join(' ')
            .trim()

          if (ids) {
            setAttr($input, attr, ids)
          } else {
            removeAttr($input, attr)
          }
        }
      }
    }

    const contentColProps = computed(() => getColProps(props, 'content'))
    const labelAlignClasses = computed(() => getAlignClasses(props, 'label'))
    const labelColProps = computed(() => getColProps(props, 'label'))
    const isHorizontal = computed(
      () =>
        // Determine if the form group will be rendered horizontal
        // based on the existence of 'content-col' or 'label-col' props
        Object.keys(contentColProps.value).length > 0 || Object.keys(labelColProps.value).length > 0
    )
    const computedState = computed(() =>
      // If not a boolean, ensure that value is null
      typeof stateBoolean.value === 'boolean' ? stateBoolean.value : null
    )
    const stateClass = computed(() => {
      const state = computedState.value
      return state === true ? 'is-valid' : state === false ? 'is-invalid' : null
    })
    const computedAriaInvalid = computed(() =>
      resolveAriaInvalid(attrs.ariaInvalid as unknown as AriaInvalid, stateBoolean.value)
    )

    watch(
      () => ariaDescribedby,
      (newValue: string | null, oldValue: string | null) => {
        if (newValue !== oldValue) {
          updateAriaDescribedby(newValue, oldValue)
        }
      }
    )

    onMounted(() => {
      nextTick(() => {
        // Set `aria-describedby` on the input specified by `labelFor`
        // We do this in a `$nextTick()` to ensure the children have finished rendering
        updateAriaDescribedby(ariaDescribedby)
      })
    })

    const onLegendClick = (event: MouseEvent) => {
      // Don't do anything if `labelFor` is set
      if (props.labelFor) {
        return
      }

      const {target} = event
      const tagName = target ? (target as HTMLElement).tagName : ''

      // If clicked an interactive element inside legend,
      // we just let the default happen
      if (LEGEND_INTERACTIVE_ELEMENTS.indexOf(tagName) !== -1) {
        return
      }

      // If only a single input, focus it, emulating label behaviour
      const inputs = selectAll(INPUT_SELECTOR, content).filter(isVisible)
      if (inputs.length === 1) {
        attemptFocus(inputs[0])
      }
    }

    return {
      disabledBoolean,
      labelSrOnlyBoolean,
      stateBoolean,
      tooltipBoolean,
      validatedBoolean,
      floatingBoolean,
      ariaDescribedby,
      computedAriaInvalid,
      contentColProps,
      isHorizontal,
      labelAlignClasses,
      labelColProps,
      onLegendClick,
      stateClass,
    }
  },
  render() {
    const props = this.$props
    const slots = this.$slots

    const id = useId()
    const isFieldset = !props.labelFor

    let $label: any = null
    const labelContent = normalizeSlot(SLOT_NAME_LABEL, {}, slots) || props.label
    const labelId = labelContent ? getId('_BV_label_') : null

    if (labelContent || this.isHorizontal) {
      const labelTag: 'legend' | 'label' = isFieldset ? 'legend' : 'label'
      if (this.labelSrOnlyBoolean) {
        if (labelContent) {
          $label = h(
            labelTag,
            {
              class: 'visually-hidden',
              id: labelId,
              for: props.labelFor || null,
            },
            labelContent
          )
        }
        if (this.isHorizontal) {
          $label = h(BCol, this.labelColProps, {default: () => $label})
        } else {
          $label = h('div', {}, [$label])
        }
      } else {
        const renderProps = {
          onClick: isFieldset ? this.onLegendClick : null,
          ...(this.isHorizontal ? this.labelColProps : {}),
          tag: this.isHorizontal ? labelTag : null,
          id: labelId,
          for: props.labelFor || null,
          tabIndex: isFieldset ? '-1' : null,
          class: [
            this.isHorizontal ? 'col-form-label' : 'form-label',
            {
              'bv-no-focus-ring': isFieldset,
              'col-form-label': this.isHorizontal || isFieldset,
              'pt-0': !this.isHorizontal && isFieldset,
              'd-block': !this.isHorizontal && !isFieldset,
              [`col-form-label-${props.labelSize}`]: !!props.labelSize,
            },
            this.labelAlignClasses,
            props.labelClass,
          ],
        }
        if (this.isHorizontal) {
          $label = h(BCol, renderProps, {default: () => labelContent})
        } else {
          $label = h(labelTag, renderProps, labelContent)
        }
      }
    }

    let $invalidFeedback = null
    const invalidFeedbackContent =
      normalizeSlot(SLOT_NAME_INVALID_FEEDBACK, {}, slots) || this.invalidFeedback
    const invalidFeedbackId = invalidFeedbackContent ? getId('_BV_feedback_invalid_') : undefined

    if (invalidFeedbackContent) {
      $invalidFeedback = h(
        BFormInvalidFeedback,
        {
          ariaLive: props.feedbackAriaLive,
          id: invalidFeedbackId,
          state: this.stateBoolean,
          tooltip: this.tooltipBoolean,
        },
        {default: () => invalidFeedbackContent}
      )
    }

    let $validFeedback = null
    const validFeedbackContent =
      normalizeSlot(SLOT_NAME_VALID_FEEDBACK, {}, slots) || this.validFeedback
    const validFeedbackId = validFeedbackContent ? getId('_BV_feedback_valid_') : undefined

    if (validFeedbackContent) {
      $validFeedback = h(
        BFormValidFeedback,
        {
          ariaLive: props.feedbackAriaLive,
          id: validFeedbackId,
          state: this.stateBoolean,
          tooltip: this.tooltipBoolean,
        },
        {default: () => validFeedbackContent}
        // validFeedbackContent
      )
    }

    let $description = null
    const descriptionContent = normalizeSlot(SLOT_NAME_DESCRIPTION, {}, slots) || this.description
    const descriptionId = descriptionContent ? getId('_BV_description_') : undefined
    if (descriptionContent) {
      $description = h(
        BFormText,
        {
          id: descriptionId,
        },
        {default: () => descriptionContent}
      )
    }

    // Update `ariaDescribedby`
    // Screen readers will read out any content linked to by `aria-describedby`
    // even if the content is hidden with `display: none;`, hence we only include
    // feedback Ids if the form group's state is explicitly valid or invalid
    const ariaDescribedby = (this.ariaDescribedby =
      [
        descriptionId,
        this.stateBoolean === false ? invalidFeedbackId : null,
        this.stateBoolean === true ? validFeedbackId : null,
      ]
        .filter((x) => x)
        .join(' ') || null)

    const contentBlocks = [
      normalizeSlot(SLOT_NAME_DEFAULT, {ariaDescribedby, descriptionId, id, labelId}, slots) || '',
      $invalidFeedback,
      $validFeedback,
      $description,
    ]
    if (!this.isHorizontal && this.floatingBoolean) contentBlocks.push($label)

    let $content = h(
      'div',
      {
        ref: 'content',
        class: [
          {
            'form-floating': !this.isHorizontal && this.floatingBoolean,
          },
        ],
      },
      contentBlocks
    )
    if (this.isHorizontal) {
      $content = h(BCol, {ref: 'content', ...this.contentColProps}, {default: () => contentBlocks})
    }

    // Return it wrapped in a form group
    // Note: Fieldsets do not support adding `row` or `form-row` directly
    // to them due to browser specific render issues, so we move the `form-row`
    // to an inner wrapper div when horizontal and using a fieldset
    const rowProps = {
      'class': [
        // TODO consider removing this static class when refactored to <template> syntax
        'mb-3',
        this.stateClass,
        {
          'was-validated': this.validatedBoolean,
        },
      ],
      'id': useId(toRef(props, 'id')).value,
      'disabled': isFieldset ? this.disabledBoolean : null,
      'role': isFieldset ? null : 'group',
      'aria-invalid': this.computedAriaInvalid,
      // Only apply `aria-labelledby` if we are a horizontal fieldset
      // as the legend is no longer a direct child of fieldset
      'aria-labelledby': isFieldset && this.isHorizontal ? labelId : null,
    }

    if (this.isHorizontal && !isFieldset) {
      return h(BFormRow, rowProps, {default: () => [$label, $content]})
    }

    return h(
      isFieldset ? 'fieldset' : 'div',
      rowProps,
      this.isHorizontal && isFieldset
        ? [h(BFormRow, null, {default: () => [$label, $content]})]
        : this.isHorizontal || !this.floatingBoolean
        ? [$label, $content]
        : [$content]
    )
  },
})
</script>
