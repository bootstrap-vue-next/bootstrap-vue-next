type PropDefinition = {
  type: any[]
  default: any
}

export interface ComponentProps {
  [key: string]: PropDefinition
}

/**
 * @param prefix
 * @param breakpoints
 * @param definition
 * @returns
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
