import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BFormRating from './BFormRating.vue'

describe('rating', () => {
  enableAutoUnmount(afterEach)

  it('exists', () => {
    const wrapper = mount(BFormRating)
    const $transition = wrapper.findComponent(BFormRating)
    expect($transition.exists()).toBe(true)
  })

  it('is read-only', () => {
    const wrapper = mount(BFormRating, {props: {readonly: true}})
    expect(wrapper.classes()).toContain('is-readonly')
  })

  it('renders default 5 stars', () => {
    const wrapper = mount(BFormRating)
    const stars = wrapper.findAll('.star')
    expect(stars.length).toBe(5)
  })

  it('renders custom number of stars', () => {
    const wrapper = mount(BFormRating, {props: {stars: 7}})
    const stars = wrapper.findAll('.star')
    expect(stars.length).toBe(7)
  })

  it('emits update:modelValue when a star is clicked', async () => {
    const wrapper = mount(BFormRating)
    const [firstStar] = wrapper.findAll('.star')
    await firstStar.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
  })

  it('sets hoverValue on mousemove and clears on mouseleave', async () => {
    const wrapper = mount(BFormRating)
    const [hoverStar] = wrapper.findAll('.star')

    await hoverStar.trigger('mousemove')
    expect(wrapper.vm.hoverValue).toBe(1)

    await wrapper.trigger('mouseleave')
    expect(wrapper.vm.hoverValue).toBe(null)
  })

  it('has sm custom size', () => {
    const wrapper = mount(BFormRating, {props: {size: 'sm'}})
    const starIcon = wrapper.find('i')
    expect(starIcon.attributes('style')).toContain('font-size: 1rem')
  })

  it('shows current value', () => {
    const wrapper = mount(BFormRating, {
      props: {
        modelValue: 3,
        showValue: true,
      },
    })
    const valueText = wrapper.find('.rating-value')
    expect(valueText.exists()).toBe(true)
    expect(valueText.text()).toBe('3')
  })

  it('shows the max value', () => {
    const wrapper = mount(BFormRating, {
      props: {
        modelValue: 3,
        stars: 8,
        showValueMax: true,
      },
    })
    const valueText = wrapper.find('.rating-value')
    expect(valueText.exists()).toBe(true)
    expect(valueText.text()).toBe('3/8')
  })

  it('has custom color', () => {
    const wrapper = mount(BFormRating, {props: {color: 'pink'}})
    const starIcon = wrapper.find('i')
    expect(starIcon.attributes('style')).toContain('color: pink')
  })
})
