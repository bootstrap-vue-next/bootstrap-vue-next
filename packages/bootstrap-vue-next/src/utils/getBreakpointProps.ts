import type {ComponentProps, PropDefinition} from '../types'

export default (
  prefix: string,
  breakpoints: readonly string[],
  definition: Readonly<PropDefinition>
): ComponentProps =>
  breakpoints.concat(['sm', 'md', 'lg', 'xl', 'xxl']).reduce((props, breakpoint) => {
    props[
      !prefix ? breakpoint : `${prefix}${breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)}`
    ] = definition
    return props
  }, {} as ComponentProps)
