import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import BCarouselSlide from './BCarouselSlide.vue'
import BImg from '../BImg/BImg.vue'

describe('BCarouselSlide.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders BImg component with correct props', () => {
    const imgProps = {
      imgAlt: 'Test Alt',
      imgSrc: 'test.jpg',
      imgWidth: 100,
      imgHeight: 100,
    }
    const wrapper = mount(BCarouselSlide, {
      props: imgProps,
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.exists()).toBe(true)
    expect(bImg.attributes('alt')).toBe(imgProps.imgAlt)
    expect(bImg.props('src')).toBe(imgProps.imgSrc)
    expect(bImg.props('width')).toBe(imgProps.imgWidth)
    expect(bImg.props('height')).toBe(imgProps.imgHeight)
  })

  it('computes computedId correctly', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {id: 'test-id'},
    })
    expect(wrapper.attributes('id')).toBe('test-id')
  })

  it('conditionally renders caption slot', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Test Caption'},
    })
    expect(wrapper.find('.carousel-caption').exists()).toBe(true)
    expect(wrapper.find('.carousel-caption').text()).toBe('Test Caption')
  })

  it('conditionally renders text slot', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {text: 'Test Text'},
    })
    expect(wrapper.find('.carousel-caption').exists()).toBe(true)
    expect(wrapper.find('.carousel-caption').text()).toBe('Test Text')
  })
})
