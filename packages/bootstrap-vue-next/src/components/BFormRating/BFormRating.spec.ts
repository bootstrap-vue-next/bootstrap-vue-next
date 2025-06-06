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

  it('applies sm custom size to star icons', () => {
    const wrapper = mount(BFormRating, {props: {size: 'sm'}})
    const starSvg = wrapper.find('.b-form-rating-star svg')
    expect(starSvg.attributes('width')).toBe('1rem')
    expect(starSvg.attributes('height')).toBe('1rem')
  })

  it('has custom color', () => {
    const wrapper = mount(BFormRating, {props: {color: 'pink'}})
    const starIcon = wrapper.find('.b-form-rating-star svg')
    expect(starIcon.attributes('style')).toContain('color: pink')
  })

  it('has default border', () => {
    const wrapper = mount(BFormRating)
    expect(wrapper.classes()).toContain('b-form-rating')
    expect(wrapper.classes()).not.toContain('no-border')
  })

  it('has no border when noBorder prop is true', () => {
    const wrapper = mount(BFormRating, {props: {noBorder: true}})
    expect(wrapper.classes()).toContain('b-form-rating')
    expect(wrapper.classes()).toContain('no-border')
  })

  it('maintains border with different sizes', () => {
    const sizes = ['sm', 'lg']
    sizes.forEach((size) => {
      const wrapper = mount(BFormRating, {props: {size}})
      expect(wrapper.classes()).toContain('b-form-rating')
      expect(wrapper.classes()).not.toContain('no-border')
    })
  })

  it('maintains border in readonly state', () => {
    const wrapper = mount(BFormRating, {props: {readonly: true}})
    expect(wrapper.classes()).toContain('b-form-rating')
    expect(wrapper.classes()).not.toContain('no-border')
    
  it('has clear button to reset rating to 0', async () => {
    const wrapper = mount(BFormRating, {
      props: {
        modelValue: 3,
        showClear: true,
      },
    })
    const clearBtn = wrapper.find('.clear-button')
    expect(clearBtn.exists()).toBe(true)

    await clearBtn.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([0])

  it('renders fallback icons for full, half, and empty stars', () => {
    const wrapper = mount(BFormRating, {
      props: {
        modelValue: 1.5,
        stars: 3,
        precision: 1,
      },
    })
    const svgs = wrapper.findAll('.b-form-rating-star svg path')
    expect(svgs[0].attributes('d')).toContain('M3.612 15.443') // Full star SVG path
    expect(svgs[1].attributes('d')).toContain('M5.354 5.119') // Half star SVG path
    expect(svgs[2].attributes('d')).toContain('M2.866 14.85') // Empty star SVG path
  })
})
