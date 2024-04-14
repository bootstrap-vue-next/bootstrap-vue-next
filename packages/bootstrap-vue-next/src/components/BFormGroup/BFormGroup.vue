<script lang="ts">
import {useAriaInvalid, useId, useStateClass} from '../../composables'
import {RX_SPACE_SPLIT} from '../../constants/regex'
import {attemptFocus, IS_BROWSER, isVisible, normalizeSlot, suffixPropName} from '../../utils'
import {computed, defineComponent, h, nextTick, onMounted, type PropType, ref, watch} from 'vue'
import BCol from '../BCol.vue'
import BFormInvalidFeedback from '../BForm/BFormInvalidFeedback.vue'
import BFormRow from '../BForm/BFormRow.vue'
import BFormText from '../BForm/BFormText.vue'
import BFormValidFeedback from '../BForm/BFormValidFeedback.vue'
import type {AriaInvalid} from '../../types'

const INPUTS = ['input', 'select', 'textarea']
// Selector for finding first input in the form group
const INPUT_SELECTOR = INPUTS.map((v) => `${v}:not([disabled])`).join()

// A list of interactive elements (tag names) inside `<BFormGroup>`'s legend
const LEGEND_INTERACTIVE_ELEMENTS = [...INPUTS, 'a', 'button', 'label']

export const SLOT_NAME_LABEL = 'label'
export const SLOT_NAME_INVALID_FEEDBACK = 'invalid-feedback'
export const SLOT_NAME_VALID_FEEDBACK = 'valid-feedback'
export const SLOT_NAME_DESCRIPTION = 'description'
export const SLOT_NAME_DEFAULT = 'default'

export default defineComponent({
  components: {BCol, BFormInvalidFeedback, BFormRow, BFormText, BFormValidFeedback},
  props: {
    ariaInvalid: {type: [Boolean, String] as PropType<AriaInvalid>, default: undefined},
    contentCols: {type: [Boolean, String, Number], default: undefined},
    contentColsLg: {type: [Boolean, String, Number], default: undefined},
    contentColsMd: {type: [Boolean, String, Number], default: undefined},
    contentColsSm: {type: [Boolean, String, Number], default: undefined},
    contentColsXl: {type: [Boolean, String, Number], default: undefined},
    description: {type: [String], default: undefined},
    disabled: {type: Boolean, default: false},
    feedbackAriaLive: {type: String, default: 'assertive'},
    id: {type: String, default: undefined},
    invalidFeedback: {type: String, default: undefined},
    label: {type: String, default: undefined},
    labelAlign: {type: [Boolean, String, Number], default: undefined},
    labelAlignLg: {type: [Boolean, String, Number], default: undefined},
    labelAlignMd: {type: [Boolean, String, Number], default: undefined},
    labelAlignSm: {type: [Boolean, String, Number], default: undefined},
    labelAlignXl: {type: [Boolean, String, Number], default: undefined},
    labelClass: {type: [Array, Object, String], default: undefined},
    labelCols: {type: [Boolean, String, Number], default: undefined},
    labelColsLg: {type: [Boolean, String, Number], default: undefined},
    labelColsMd: {type: [Boolean, String, Number], default: undefined},
    labelColsSm: {type: [Boolean, String, Number], default: undefined},
    labelColsXl: {type: [Boolean, String, Number], default: undefined},
    labelFor: {type: String, default: undefined},
    labelSize: {type: String, default: undefined},
    labelSrOnly: {type: Boolean, default: false},
    state: {type: Boolean as PropType<boolean | null>, default: null},
    tooltip: {type: Boolean, default: false},
    validFeedback: {type: String, default: undefined},
    validated: {type: Boolean, default: false},
    floating: {type: Boolean, default: false},
  },
  setup(props) {
    const ariaDescribedby: string | null = null as string | null
    const breakPoints = ['xs', 'sm', 'md', 'lg', 'xl']

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getColProps = (props: any, prefix: string) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      breakPoints.reduce((result: any, breakpoint: string) => {
        const suffix = suffixPropName(breakpoint === 'xs' ? '' : breakpoint, `${prefix}Cols`)
        let propValue = props[suffix]
        // Handle case where the prop's value is an empty string,
        // which represents `true`
        propValue = propValue === '' ? true : propValue || false

        if (!(typeof propValue === 'boolean') && propValue !== 'auto') {
          // Convert to column size to number
          const val = Number.parseInt(propValue)
          propValue = Number.isNaN(val) ? 0 : val
          // Ensure column size is greater than `0`
          propValue = propValue > 0 ? propValue : false
        }

        // Add the prop to the list of props to give to `</BCol>`
        // If breakpoint is '' (`${prefix}Cols` is `true`), then we use
        // the 'col' prop to make equal width at 'xs'
        if (propValue) {
          // Extra care is required for xs since it does not have a BCol breakpoint prop
          // Xs breakpoint is simply 'cols'
          if (breakpoint === 'xs') {
            result[typeof propValue === 'boolean' ? 'col' : 'cols'] = propValue
          } else {
            result[breakpoint || (typeof propValue === 'boolean' ? 'col' : 'cols')] = propValue
          }
        }
        return result
      }, {})

    const content = ref<HTMLElement | null>(null)

    // Sets the `aria-describedby` attribute on the input if `labelFor` is set
    // Optionally accepts a string of Ids to remove as the second parameter
    // Preserves any `aria-describedby` value(s) user may have on input
    const updateAriaDescribedby = (newValue: string | null, oldValue: string | null = null) => {
      if (IS_BROWSER && props.labelFor && content.value !== null) {
        // We need to escape `labelFor` since it can be user-provided
        const $input = content.value.querySelector(`#${CSS.escape(props.labelFor)}`)
        if ($input) {
          const attr = 'aria-describedby'
          const newIds = (newValue || '').split(RX_SPACE_SPLIT)
          const oldIds = (oldValue || '').split(RX_SPACE_SPLIT)

          // Update Id list, preserving any original Ids
          // and ensuring the Id's are unique
          const ids = ($input.getAttribute(attr) || '')
            .split(RX_SPACE_SPLIT)
            .filter((id) => !oldIds.includes(id))
            .concat(newIds)
            .filter((id, index, ids) => ids.indexOf(id) === index)
            .filter((x) => x)
            .join(' ')
            .trim()

          if (ids) {
            $input.setAttribute(attr, ids)
          } else {
            $input.removeAttribute(attr)
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

    const stateClass = useStateClass(() => props.state)

    const computedAriaInvalid = useAriaInvalid(
      () => props.ariaInvalid,
      () => props.state
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

    const onLegendClick = (event: Readonly<MouseEvent>) => {
      // Don't do anything if `labelFor` is set
      if (props.labelFor || content.value === null) return

      const {target} = event
      const tagName = target ? (target as HTMLElement).tagName : ''

      // If clicked an interactive element inside legend,
      // we just let the default happen
      if (LEGEND_INTERACTIVE_ELEMENTS.indexOf(tagName) !== -1) return

      // If only a single input, focus it, emulating label behaviour
      const inputs = [...content.value.querySelectorAll(INPUT_SELECTOR)].filter(isVisible)
      const [inp] = inputs
      if (inputs.length === 1 && inp instanceof HTMLElement) {
        attemptFocus(inp)
      }
    }

    return {
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let $label: any = null
    const labelContent = normalizeSlot(SLOT_NAME_LABEL, {}, slots) || props.label
    const labelId = labelContent ? useId(undefined, '_BV_label_').value : null

    if (labelContent || this.isHorizontal) {
      const labelTag: 'legend' | 'label' = isFieldset ? 'legend' : 'label'
      if (props.labelSrOnly) {
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
    const invalidFeedbackId = invalidFeedbackContent
      ? useId(undefined, '_BV_feedback_invalid_').value
      : undefined

    if (invalidFeedbackContent) {
      $invalidFeedback = h(
        BFormInvalidFeedback,
        {
          ariaLive: props.feedbackAriaLive,
          id: invalidFeedbackId,
          state: props.state,
          tooltip: props.tooltip,
        },
        {default: () => invalidFeedbackContent}
      )
    }

    let $validFeedback = null
    const validFeedbackContent =
      normalizeSlot(SLOT_NAME_VALID_FEEDBACK, {}, slots) || this.validFeedback
    const validFeedbackId = validFeedbackContent
      ? useId(undefined, '_BV_feedback_valid_').value
      : undefined

    if (validFeedbackContent) {
      $validFeedback = h(
        BFormValidFeedback,
        {
          ariaLive: props.feedbackAriaLive,
          id: validFeedbackId,
          state: props.state,
          tooltip: props.tooltip,
        },
        {default: () => validFeedbackContent}
        // validFeedbackContent
      )
    }

    let $description = null
    const descriptionContent = normalizeSlot(SLOT_NAME_DESCRIPTION, {}, slots) || this.description
    const descriptionId = descriptionContent
      ? useId(undefined, '_BV_description_').value
      : undefined
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
        props.state === false ? invalidFeedbackId : null,
        props.state === true ? validFeedbackId : null,
      ]
        .filter((x) => x)
        .join(' ') || null)

    const contentBlocks = [
      normalizeSlot(SLOT_NAME_DEFAULT, {ariaDescribedby, descriptionId, id, labelId}, slots) || '',
      $invalidFeedback,
      $validFeedback,
      $description,
    ]
    if (!this.isHorizontal && props.floating) contentBlocks.push($label)

    let $content = h(
      'div',
      {
        ref: 'content',
        class: [
          {
            'form-floating': !this.isHorizontal && props.floating,
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
        this.stateClass,
        {
          'was-validated': props.validated,
        },
      ],
      'id': useId(() => props.id).value,
      'disabled': isFieldset ? props.disabled : null,
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
        : this.isHorizontal || !props.floating
          ? [$label, $content]
          : [$content]
    )
  },
})
</script>
