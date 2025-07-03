import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {PropertyReference} from '../types'
import {buildCommonProps} from './commonProps'
import {pick} from './objectUtils'

export const linkTo = '/docs/components/image'

export const imageProps = {
  blank: {
    type: 'boolean',
    default: false,
    description: 'Creates a blank/transparent image via an SVG data URI',
  },
  blankColor: {
    type: 'string',
    default: 'transparent',
    description: 'Sets the color of the blank image to the CSS color value specified',
  },
  block: {
    type: 'boolean',
    default: false,
    description:
      'Forces the image to display as a block element rather than the browser default of inline-block element',
  },
  fluid: {
    type: 'boolean',
    default: false,
    description:
      "Makes the image responsive. The image will shrink as needed or grow up the the image's native width",
  },
  fluidGrow: {
    type: 'boolean',
    default: false,
    description:
      "Similar to the 'fluid' prop, but allows the image to scale up past its native width",
  },
  height: {
    type: 'Numberish',
    default: undefined,
    description: "The value to set on the image's 'height' attribute",
  },
  lazy: {
    type: 'boolean',
    default: false,
    description:
      'Enables lazy loading of the image via the `loading` attribute on the underlying image.',
  },
  placement: {
    type: "Extract<Placement, 'start' | 'end'> | 'center'",
    default: undefined,
    description:
      'Sets the alignment of the image to the start, end, or center, see above for details',
  },
  sizes: {
    type: 'string | string[]',
    default: undefined,
    description:
      'One or more strings separated by commas (or an array of strings), indicating a set of source sizes. Optionally used in combination with the srcset prop',
  },
  srcset: {
    type: 'string | string[]',
    default: undefined,
    description:
      'One or more strings separated by commas (or an array of strings), indicating possible image sources for the user agent to use',
  },
  thumbnail: {
    type: 'boolean',
    default: false,
    description: 'Adds a thumbnail border around the image',
  },
  width: {
    type: 'Numberish',
    default: undefined,
    description: "The value to set on the image's 'width' attribute",
  },
  ...pick(
    buildCommonProps({
      tag: {
        default: 'img',
      },
    }),
    ['alt', 'rounded', 'roundedBottom', 'roundedEnd', 'roundedStart', 'roundedTop', 'src', 'tag']
  ),
} as const satisfies Record<keyof BvnComponentProps['BImg'], PropertyReference>
