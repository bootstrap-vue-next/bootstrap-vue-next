// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _getNested = (obj: any, path: string): any => {
  if (!obj) return obj
  if (path in obj) return obj[path]

  const paths = path.split('.')

  return _getNested(obj[paths[0]], paths.splice(1).join('.'))
}

const _normalizeOption = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  option: any,
  key: string | null = null,
  componentName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
) => {
  if (Object.prototype.toString.call(option) === '[object Object]') {
    const value = _getNested(option, props.valueField)
    const text = _getNested(option, props.textField)
    const html = _getNested(option, props.htmlField)
    const disabled = _getNested(option, props.disabledField)

    const options = option[props.optionsField] || null
    if (options !== null) {
      return {
        label: String(_getNested(option, props.labelField) || text),
        options: normalizeOptions(options, componentName, props),
      }
    }

    return {
      value: typeof value === 'undefined' ? key || text : value,
      text: String(typeof text === 'undefined' ? key : text),
      html,
      disabled: Boolean(disabled),
    }
  }
  return {
    value: key || option,
    text: String(option),
    disabled: false,
  }
}

const normalizeOptions = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[],
  componentName: string,
  props: Record<string, unknown>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  if (Array.isArray(options)) {
    return options.map((option) => _normalizeOption(option, null, componentName, props))
  } else if (Object.prototype.toString.call(options) === '[object Object]') {
    // eslint-disable-next-line no-console
    console.warn(
      `[BootstrapVue warn]: ${componentName} - Setting prop "options" to an object is deprecated. Use the array format instead.`
    )

    return Object.keys(options).map((key: string) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const el: any = options[key]
      switch (typeof el) {
        case 'object':
          return _normalizeOption(el.text, String(el.value), componentName, props)
        default:
          return _normalizeOption(el, String(key), componentName, props)
      }
    })
  }

  return []
}

export default normalizeOptions
