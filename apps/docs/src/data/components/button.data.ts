import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButton',
      props: [
        {
          prop: 'pill',
          type: 'Booleanish',
          default: false,
          description: `Renders the button with the pill style appearance when set to 'true'`,
        },
        {
          prop: 'pressed',
          type: 'Booleanish',
          default: undefined,
          description: `When set to 'true', gives the button the appearance of being pressed and adds attribute 'aria-pressed="true"'. When set to 'false' adds attribute 'aria-pressed="false"'. Syncable with the v-model:pressed`,
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
          description: `Set the size of the component's appearance`,
        },
        {
          prop: 'squared',
          type: 'Booleanish',
          default: false,
          description: `Renders the button with non-rounded corners when set to 'true'`,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'button',
          description: `Specify the HTML tag to render instead of the default tag`,
        },
        {
          prop: 'type',
          type: 'ButtonType',
          default: 'button',
          description: `The value to set the button's 'type' attribute`,
        },
        {
          prop: 'variant',
          type: 'ButtonVariant | null',
          default: 'secondary',
          description: `Applies one of the Bootstrap theme color variants to the component`,
        },
        {
          prop: 'loading',
          type: 'Booleanish',
          default: false,
          description: `Determine whether it's loading, render the loading text & spinner`,
        },
        {
          prop: 'loadingFill',
          type: 'Booleanish',
          default: false,
          description: `Only render spinner when loading`,
        },
        {
          prop: 'block',
          type: 'Booleanish',
          default: false,
          description: `Renders a 100% width button (expands to the width of its parent container)`,
        },
        {
          prop: 'loadingText',
          type: 'string',
          default: 'Loading...',
          description: `Loading text that displays to the left the spinner`,
        },
        {
          prop: 'active',
          type: 'Booleanish',
          default: undefined,
          description: `When set to 'true', places the component in the active state with active styling`,
        },
        {
          prop: 'activeClass',
          type: 'string',
          default: undefined,
          description: `<RouterLink> prop: Configure the active CSS class applied when the link is active`,
        },
        {
          prop: 'exactActiveClass',
          type: 'string',
          default: undefined,
          description: `<RouterLink> prop: Configure the active CSS class applied when the link is active with exact match`,
        },
        {
          prop: 'append',
          type: 'Booleanish',
          default: undefined,
          description: `<RouterLink> prop: Setting append prop always appends the relative path to the current path`,
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
          default: undefined,
          description: `When set to 'true', disables the component's functionality and places it in a disabled state`,
        },
        {
          prop: 'event',
          type: 'string | any[]',
          default: undefined,
          description: `<RouterLink> prop: Specify the event that triggers the link. In most cases you should leave this as the default`,
        },
        {
          prop: 'href',
          type: 'string',
          default: undefined,
          description: `Denotes the target URL of the link for standard a links`,
        },
        {
          prop: 'rel',
          type: 'string',
          default: undefined,
          description: `Sets the 'rel' attribute on the rendered link`,
        },
        {
          prop: 'replace',
          type: 'Booleanish',
          default: undefined,
          description: `<RouterLink> prop: Setting the replace prop will call 'router.replace()' instead of 'router.push()' when clicked, so the navigation will not leave a history record`,
        },
        {
          prop: 'routerComponentName',
          type: 'string',
          default: undefined,
          description: `<BLink> prop: Auto detects between '<RouterLink>' and '<NuxtLink>'. In cases where you want to use a 3rd party link component based on '<RouterLink>', set this prop to the component name. e.g. set it to 'g-link' if you are using Gridsome (note only <RouterLink>' specific props are passed to the component)`,
        },
        {
          prop: 'routerTag',
          type: 'string',
          default: undefined,
          description: `<RouterLink> prop: Specify which tag to render, and it will still listen to click events for navigation. 'router-tag' translates to the tag prop on the final rendered '<RouterLink>'. Typically you should use the default value`,
        },
        {
          prop: 'target',
          type: 'LinkTarget',
          default: undefined,
          description: `Sets the 'target' attribute on the rendered link`,
        },
        {
          prop: 'to',
          type: 'RouteLocationRaw',
          default: undefined,
          description: `<RouterLink> prop: Denotes the target route of the link. When clicked, the value of the to prop will be passed to 'router.push()' internally, so the value can be either a string or a Location descriptor object`,
        },
        {
          prop: 'opacity',
          type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
          default: undefined,
          description: `The opacity level`,
        },
        {
          prop: 'opacityHover',
          type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
          default: undefined,
          description: `The opacity level on hover`,
        },
        {
          prop: 'underlineVariant',
          type: 'ColorVariant | null',
          default: null,
          description: `The underline’s color independent of the link text color`,
        },
        {
          prop: 'underlineOffset',
          type: "1 | 2 | 3 | '1' | '2' | '3'",
          default: undefined,
          description: `The underline’s distance from your text. Offset is set in em units to automatically scale with the element’s current font-size.`,
        },
        {
          prop: 'underlineOffsetHover',
          type: "1 | 2 | 3 | '1' | '2' | '3'",
          default: undefined,
          description: `The underline’s distance from your text on hover`,
        },
        {
          prop: 'underlineOpacity',
          type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
          default: undefined,
          description: `The underline’s opacity`,
        },
        {
          prop: 'underlineOpacityHover',
          type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
          default: undefined,
          description: `The underline’s opacity on hover`,
        },
        {
          prop: 'icon',
          type: 'Booleanish',
          default: undefined,
          description: `Place and align icons alongside a textual link`,
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'value',
              description: 'Native click event object',
              type: 'MouseEvent',
            },
          ],
          description: 'On click event',
          event: 'click',
        },
        {
          args: [
            {
              arg: 'value',
              description: 'Value of the pressed',
              type: 'boolean',
            },
          ],
          description: 'Emitted to update the pressed',
          event: 'update:pressed',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the button',
          scope: [],
        },
        {
          name: 'loading',
          description: 'The content to replace the default loader',
          scope: [],
        },
      ],
    },
    {
      component: 'BCloseButton',
      props: [
        {
          prop: 'ariaLabel',
          type: 'string',
          default: 'Close',
          description: `Sets the value of 'aria-label' attribute on the rendered element`,
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
          default: false,
          description: `When set to 'true', disables the component's functionality and places it in a disabled state`,
        },
        {
          prop: 'type',
          default: 'button',
          type: 'ButtonType',
          description: `The value to set the button's 'type' attribute`,
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'value',
              description: 'Native click event object',
              type: 'MouseEvent',
            },
          ],
          description: 'On click event',
          event: 'click',
        },
      ],
      slots: [],
    },
  ],
}
