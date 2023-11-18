type PropDefinition = {
  type: unknown[]
  default: unknown
}

export interface ComponentProps {
  [key: string]: PropDefinition
}

/**
 * @deprecated
 */
export default (
  prefix: string,
  breakpoints: string[],
  definition: PropDefinition
): ComponentProps =>
  breakpoints.concat(['sm', 'md', 'lg', 'xl', 'xxl']).reduce((props, breakpoint) => {
    props[
      !prefix ? breakpoint : `${prefix}${breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)}`
    ] = definition
    return props
  }, Object.create(null))
