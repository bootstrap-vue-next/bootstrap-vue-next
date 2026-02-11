import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BImg from './BImg.vue'
import {defineComponent, h} from 'vue'

describe('img', () => {
  enableAutoUnmount(afterEach)

  it('renders with default img tag', () => {
    const wrapper = mount(BImg, {
      props: {
        src: '/test.jpg',
      },
    })
    expect(wrapper.element.tagName).toBe('IMG')
    expect(wrapper.attributes('src')).toBe('/test.jpg')
  })

  it('accepts custom component for tag prop', () => {
    // Create a mock image component (like NuxtImg)
    const CustomImg = defineComponent({
      name: 'CustomImg',
      props: {
        src: {type: String, required: true},
        width: {type: [String, Number]},
        height: {type: [String, Number]},
      },
      setup(props) {
        return () =>
          h('img', {
            src: props.src,
            width: props.width,
            height: props.height,
            'data-custom-img': 'true',
          })
      },
    })

    const wrapper = mount(BImg, {
      props: {
        src: '/custom.jpg',
        tag: CustomImg,
        width: 100,
        height: 100,
      },
    })

    expect(wrapper.attributes('src')).toBe('/custom.jpg')
    expect(wrapper.attributes('data-custom-img')).toBe('true')
    expect(wrapper.attributes('width')).toBe('100')
    expect(wrapper.attributes('height')).toBe('100')
  })

  it('accepts string tag prop', () => {
    const wrapper = mount(BImg, {
      props: {
        src: '/test.jpg',
        tag: 'div',
      },
    })

    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.attributes('src')).toBe('/test.jpg')
  })
})
