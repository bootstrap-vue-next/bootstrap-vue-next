export const linkProps = {
  active: {
    type: 'boolean',
    default: undefined,
  },
  activeClass: {
    type: 'string',
    default: 'router-link-active',
  },
  disabled: {
    type: 'boolean',
    default: false,
  },
  exactActiveClass: {
    type: 'string',
    default: 'router-link-exact-active',
  },
  href: {
    type: 'string',
    default: undefined,
  },
  icon: {
    type: 'boolean',
    default: false,
  },
  opacity: {
    type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
    default: undefined,
  },
  opacityHover: {
    type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
    default: undefined,
  },
  rel: {
    type: 'string',
    default: undefined,
  },
  replace: {
    type: 'boolean',
    default: false,
  },
  routerComponentName: {
    type: 'string',
    default: 'router-link',
  },
  routerTag: {
    type: 'string',
    default: 'a',
  },
  stretched: {
    type: 'boolean',
    default: false,
  },
  target: {
    type: 'LinkTarget',
    default: undefined,
  },
  to: {
    type: 'RouteLocationRaw',
    default: undefined,
  },
  underlineOffset: {
    type: "1 | 2 | 3 | '1' | '2' | '3'",
    default: undefined,
  },
  underlineOffsetHover: {
    type: "1 | 2 | 3 | '1' | '2' | '3'",
    default: undefined,
  },
  underlineOpacity: {
    type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
    default: undefined,
  },
  underlineOpacityHover: {
    type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
    default: undefined,
  },
  underlineVariant: {
    type: 'ColorVariant | null',
    default: null,
  },
  variant: {
    type: 'ColorVariant | null',
    default: null,
  },
} as const
