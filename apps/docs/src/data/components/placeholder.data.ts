import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPlaceholder',
      props: {
        '': {
          tag: {
            type: 'string',
            default: 'span',
          },
          wrapperTag: {
            type: 'string',
            default: 'span',
          },
          width: {
            type: 'string | number',
            default: undefined,
          },
          cols: {
            type: 'string | number',
            default: 12,
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
          size: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
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
          noHeader: {
            type: 'boolean',
            default: false,
          },
          headerWidth: {
            type: 'string | number',
            default: 100,
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          headerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          headerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          noFooter: {
            type: 'boolean',
            default: false,
          },
          footerWidth: {
            type: 'string | number',
            default: 100,
          },
          footerVariant: {
            type: 'ColorVariant | null',
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
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          size: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          noButton: {
            type: 'boolean',
            default: false,
          },
          imgBottom: {
            type: 'boolean',
            default: false,
          },
          imgSrc: {
            type: 'string',
            default: undefined,
          },
          imgBlankColor: {
            type: 'string',
            default: '#868e96',
          },
          imgHeight: {
            type: 'string | number',
            default: 100,
          },
          noImg: {
            type: 'boolean',
            default: false,
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
          rows: {
            type: 'string | number',
            default: 3,
          },
          columns: {
            type: 'string | number',
            default: 5,
          },
          cellWidth: {
            type: 'string | number',
            default: 100,
          },
          size: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          headerColumns: {
            type: 'string | number',
            default: undefined,
          },
          hideHeader: {
            type: 'boolean',
            default: false,
          },
          headerCellWidth: {
            type: 'string | number',
            default: 100,
          },
          headerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          headerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          footerColumns: {
            type: 'string | number',
            default: undefined,
          },
          showFooter: {
            type: 'boolean',
            default: false,
          },
          footerCellWidth: {
            type: 'string | number',
            default: 100,
          },
          footerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          footerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          footerVariant: {
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
          tag: {
            type: 'string',
            default: 'div',
          },
          width: {
            type: 'string | number',
            default: undefined,
          },
          cols: {
            type: 'string | number',
            default: undefined,
          },
          variant: {
            type: 'ColorVariant | null',
            default: 'primary',
          },
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
        },
      },
    },
  ],
}
