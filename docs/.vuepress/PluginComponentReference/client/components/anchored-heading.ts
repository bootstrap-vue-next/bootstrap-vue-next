import {computed, defineComponent, resolveComponent, h} from 'vue'
// import BLink from '@/components/BLink'
export default defineComponent({
  name: 'BVAnchoredHeading',
  functional: true,
  props: {
    id: {
      type: String,
      default: '',
    },
    level: {
      type: [Number, String],
      default: 2,
    },
  },
  setup(props, {slots}) {
    const blink = resolveComponent('b-link')
    const $anchor = h(
      blink,
      {
        class: 'header-anchor',
        to: {hash: `#${props.id}`},
        // 'aria-labelledby': this.id || null,
        // 'aria-label': this.id ? null : 'Anchor',
      },
      () => '#'
    )

    return () =>
      h(
        `h${props.level}`,
        {
          id: props.id,
          tabindex: '-1',
        },
        h('span', {class: ['bd-content-title']}, [slots.default(), $anchor])
      )
  },
})
