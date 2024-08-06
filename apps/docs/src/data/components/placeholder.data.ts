import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPlaceholder',
      props: {
        '': {
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          cols: {
            type: 'Numberish',
            default: 12,
          },
          size: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          tag: {
            type: 'string',
            default: 'span',
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
          width: {
            type: 'Numberish',
            default: undefined,
          },
          wrapperTag: {
            type: 'string',
            default: 'span',
          },
        },
      },
      emits: [],
      slots: [],
    },
    {
      component: 'BPlaceholderCard',
      emits: [],
      props: {
        '': {
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          footerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          footerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          footerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          footerWidth: {
            type: 'Numberish',
            default: 100,
          },
          headerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          headerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          headerWidth: {
            type: 'Numberish',
            default: 100,
          },
          imgBlankColor: {
            type: 'string',
            default: '#868e96',
          },
          imgPlacement: {
            type: "'top' | 'bottom'",
            default: 'top',
          },
          imgHeight: {
            type: 'Numberish',
            default: 100,
          },
          imgSrc: {
            type: 'string',
            default: undefined,
          },
          noButton: {
            type: 'boolean',
            default: false,
          },
          noFooter: {
            type: 'boolean',
            default: false,
          },
          noHeader: {
            type: 'boolean',
            default: false,
          },
          noImg: {
            type: 'boolean',
            default: false,
          },
          size: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
        },
      },
      slots: [
        {
          description: 'Overrides the img default',
          name: 'img',
          scope: [],
        },
        {
          description: 'Overrides the header default',
          name: 'header',
          scope: [],
        },
        {
          description: 'Overrides the default placeholders',
          name: 'default',
          scope: [],
        },
        {
          description: 'Overrides the footer default',
          name: 'footer',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderWrapper',
      emits: [],
      props: {
        '': {
          loading: {
            description: 'Determines whether the loading slot should be displayed',
            type: 'boolean',
            default: false,
          },
        },
      },
      slots: [
        {
          description: 'Content to show when the `loading` prop is `false`',
          name: 'default',
          scope: [],
        },
        {
          description: 'Content to show when the `loading` prop is `true`',
          name: 'loading',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderTable',
      emits: [],
      props: {
        '': {
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          cellWidth: {
            type: 'Numberish',
            default: 100,
          },
          columns: {
            type: 'Numberish',
            default: 5,
          },
          footerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          footerCellWidth: {
            type: 'Numberish',
            default: 100,
          },
          footerColumns: {
            type: 'Numberish',
            default: undefined,
          },
          footerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          footerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          headerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          headerCellWidth: {
            type: 'Numberish',
            default: 100,
          },
          headerColumns: {
            type: 'Numberish',
            default: undefined,
          },
          headerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          hideHeader: {
            type: 'boolean',
            default: false,
          },
          rows: {
            type: 'Numberish',
            default: 3,
          },
          showFooter: {
            type: 'boolean',
            default: false,
          },
          size: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
        },
      },
      slots: [
        {
          description: 'Overwrites the thead of the table',
          name: 'thead',
          scope: [],
        },
        {
          description: 'Overwrites the tfoot of the table',
          name: 'tfoot',
          scope: [],
        },
        {
          description: 'Overwrites the tbody of the table',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderButton',
      emits: [],
      slots: [],
      props: {
        '': {
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          cols: {
            type: 'Numberish',
            default: undefined,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          variant: {
            type: 'ColorVariant | null',
            default: 'primary',
          },
          width: {
            type: 'Numberish',
            default: undefined,
          },
        },
      },
    },
  ],
}
