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
  setup(props) {
    return {}
  },
  render() {
    const blink = resolveComponent('b-link')
    const $anchor = h(
      blink,
      {
        class: 'header-anchor',
        to: {hash: `#${this.id}`},
        // 'aria-labelledby': this.id || null,
        // 'aria-label': this.id ? null : 'Anchor',
      },
      '#'
    )

    const $content = h('span', {class: ['bd-content-title']}, [this.$slots.default(), $anchor])
    return h(
      `h${this.level}`,
      {
        id: this.id,
        tabindex: '-1',
      },
      $content
    )
  },
})
