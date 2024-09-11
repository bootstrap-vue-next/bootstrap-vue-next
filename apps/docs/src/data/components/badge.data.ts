import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {linkProps, linkTo} from '../../utils/link-props'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BBadge',
      sourcePath: '/BBadge/BBadge.vue',
      props: {
        '': {
          dotIndicator: {
            type: 'boolean',
            default: false,
            description: 'Indication position and dot styling applied',
          },
          pill: {
            type: 'boolean',
            default: false,
            description: "When set to 'true', renders the badge in pill style",
          },
          tag: {
            type: 'string',
            default: 'span',
            description: 'Specify the HTML tag to render instead of the default tag',
          },
          placement: {
            type: 'CombinedPlacement',
            default: undefined,
            description:
              'Placement of the badge relative to the its parent. One of the values of `CombinedPlacement`',
          },
          ...pick(
            buildCommonProps({
              variant: {
                default: 'secondary',
              },
            }),
            ['bgVariant', 'variant', 'textVariant']
          ),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BBadge'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...linkProps,
        },
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
      ],
    },
  ],
}
