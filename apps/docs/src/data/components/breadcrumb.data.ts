import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BBreadcrumb',
      sourcePath: '/BBreadcrumb/BBreadcrumb.vue',
      props: {
        '': {
          items: {
            type: 'BreadcrumbItemRaw[]',
            default: undefined,
            description: 'Array of `BreadCrumbItem`s or strings to render. See above for details.',
          },
        } satisfies Record<keyof BvnComponentProps['BBreadcrumb'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content (breadcrumb items) to place in the breadcrumb',
        },
        {
          name: 'append',
          description: 'Content to append to the breadcrumb',
        },
        {
          name: 'prepend',
          description: 'Content to prepend to the breadcrumb',
        },
      ],
    },
    {
      component: 'BBreadcrumbItem',
      sourcePath: '/BBreadcrumb/BBreadcrumbItem.vue',
      props: {
        '': {
          ariaCurrent: {
            type: 'string',
            default: 'location',
            description:
              "Sets the value of the 'aria-current' attribute (when the item is the active item). Supported string values are 'location', 'page', or 'true'",
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Text to render in the breadcrumb item',
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BBreadcrumbItem'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...linkProps,
        },
      },
      emits: [
        {
          event: 'click',
          description: 'Emitted when the breadcrumb item is clicked',
          args: [
            {
              type: 'MouseEvent',
              arg: 'click',
              description: 'Native click event object',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the breadcrumb item',
        },
      ],
    },
  ],
}
