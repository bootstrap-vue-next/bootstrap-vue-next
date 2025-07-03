import type {BvnComponentProps} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type PropertyReference,
} from '../../types'
import {linkedBLinkSection, linkProps} from '../../utils/linkProps'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BBadge: {
      sourcePath: '/BBadge/BBadge.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ...pick(
            buildCommonProps({
              variant: {
                default: 'secondary',
              },
            }),
            ['bgVariant', 'variant', 'textVariant']
          ),
          dotIndicator: {
            type: 'boolean',
            default: 'false', // TODO item not in string format
            description: 'Indication position and dot styling applied',
          },
          pill: {
            type: 'boolean',
            default: 'false', // TODO item not in string format
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
              'Placement of the badge relative to the its parent. One of the values of `CombinedPlacement`', // TODO grammar check (remove "the" before "its parent")
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BBadge'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': linkedBLinkSection,
      },
      emits: {},
      slots: {
        default: {
          description: '', // TODO missing description
          scope: {},
        },
      },
    },
  }),
}
