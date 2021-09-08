import {computed, ComputedRef} from 'vue'

const getClasses = (props: any): ComputedRef => {
  return computed(() => ({
    'form-check': !props.plain && !props.button,
    'form-check-inline': !props.plain && props.inline,
    'form-switch': props.switchCheck,
    [`form-control-${props.size}`]: props.size !== 'md'
  }))
}

const getInputClasses = (props: any): ComputedRef => {
  return computed(() => ({
    'form-check-input': !props.plain && !props.button,
    'is-valid': props.state === true,
    'is-invalid': props.state === false,
    'btn-check': props.button,
  }))
}

const getLabelClasses = (props: any): ComputedRef => {
  return computed(() => ({
    'form-check-label': !props.plain && !props.button,
    'btn': props.button,
    [`btn-${props.buttonVariant}`]: props.button
  }))
}

export {
  getClasses,
  getInputClasses,
  getLabelClasses
}
