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

  it('is disabled', () => {
    const wrapper = mount(BFormRating, {props: {disabled: true}})
    expect(wrapper.classes()).toContain('is-disabled')
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

  it('shows current value', () => {
    const wrapper = mount(BFormRating, {
      props: {
        modelValue: 3,
        showValue: true,
      },
    })
    const valueText = wrapper.find('.rating-value-text')
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
    const valueText = wrapper.find('.rating-value-text')
    expect(valueText.exists()).toBe(true)
    expect(valueText.text()).toBe('3/8')
  })

  it('applies sm custom size to star icons', () => {
    const wrapper = mount(BFormRating, {props: {size: 'sm'}})
    const starSvg = wrapper.find('.b-form-rating-star svg')
    expect(starSvg.attributes('width')).toBe('.875rem')
    expect(starSvg.attributes('height')).toBe('.875rem')
  })
  it('applies lg custom size to star icons', () => {
    const wrapper = mount(BFormRating, {props: {size: 'lg'}})
    const starSvg = wrapper.find('.b-form-rating-star svg')
    expect(starSvg.attributes('width')).toBe('1.25rem')
    expect(starSvg.attributes('height')).toBe('1.25rem')
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
  })

  it('has clear button to reset rating to 0', async () => {
    const wrapper = mount(BFormRating, {
      props: {
        modelValue: 3,
        showClear: true,
        readonly: false,
      },
    })
    const clearBtn = wrapper.find('.clear-button-spacing')
    expect(clearBtn.exists()).toBe(true)

    await clearBtn.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([0])
  })

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

  // Keyboard Navigation Tests
  it('handles keyboard navigation - ArrowRight increases value', async () => {
    const wrapper = mount(BFormRating, {props: {modelValue: 2}})
    await wrapper.trigger('keydown', {key: 'ArrowRight'})
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([3])
  })

  it('handles keyboard navigation - ArrowLeft decreases value', async () => {
    const wrapper = mount(BFormRating, {props: {modelValue: 2}})
    await wrapper.trigger('keydown', {key: 'ArrowLeft'})
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
  })

  it('keyboard navigation does not work in readonly mode', async () => {
    const wrapper = mount(BFormRating, {props: {modelValue: 2, readonly: true}})
    await wrapper.trigger('keydown', {key: 'ArrowRight'})
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  // Precision Tests
  it('shows value with precision', () => {
    const wrapper = mount(BFormRating, {
      props: {
        modelValue: 3.567,
        showValue: true,
        precision: 2,
      },
    })
    const valueText = wrapper.find('.rating-value-text')
    expect(valueText.text()).toBe('3.57')
  })

  // Variant Tests
  it('applies variant class', () => {
    const wrapper = mount(BFormRating, {props: {variant: 'danger'}})
    const starIcon = wrapper.find('.b-form-rating-star svg')
    expect(starIcon.classes()).toContain('text-danger')
  })

  // Minimum Stars Test
  it('renders minimum 3 stars even if stars prop is less', () => {
    const wrapper = mount(BFormRating, {props: {stars: 2}})
    const stars = wrapper.findAll('.star')
    expect(stars.length).toBe(3)
  })

  // ARIA Tests
  it('has proper ARIA attributes', () => {
    const wrapper = mount(BFormRating, {props: {modelValue: 3, stars: 5}})
    expect(wrapper.attributes('role')).toBe('slider')
    expect(wrapper.attributes('aria-valuemin')).toBe('0')
    expect(wrapper.attributes('aria-valuemax')).toBe('5')
    expect(wrapper.attributes('aria-valuenow')).toBe('3')
  })

  it('applies correct classes when inline prop is used', () => {
    // Test when inline is true
    const inlineWrapper = mount(BFormRating, {
      props: {
        modelValue: 3,
        stars: 5,
        inline: true,
      },
    })

    expect(inlineWrapper.classes()).toContain('d-inline-block')
    expect(inlineWrapper.classes()).not.toContain('w-100')
  })
  // Test when inline is false (default)
  const blockWrapper = mount(BFormRating, {
    props: {
      modelValue: 3,
      stars: 5,
      inline: false,
    },
  })

  expect(blockWrapper.classes()).not.toContain('d-inline-block')
  expect(blockWrapper.classes()).toContain('w-100')
})

it('renders fallback clear icon when showClear is true (no slot provided)', async () => {
  const wrapper = mount(BFormRating, {
    props: {modelValue: 3, showClear: true, readonly: false},
  })
  const clearArea = wrapper.find('.clear-button-spacing')
  expect(clearArea.exists()).toBe(true)

  await clearArea.trigger('click')
  expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([0])
})

it('uses #icon-clear slot content when provided', async () => {
  const wrapper = mount(BFormRating, {
    props: {modelValue: 4, showClear: true},
    slots: {
      'icon-clear': '<button id="custom-clear" type="button">Clear</button>',
    },
  })
  const clearArea = wrapper.find('.clear-button-spacing')
  expect(clearArea.exists()).toBe(true)
  expect(wrapper.find('#custom-clear').exists()).toBe(true)

  await clearArea.trigger('click')
  expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([0])
})

it('does not render clear when readonly is true', () => {
  const wrapper = mount(BFormRating, {
    props: {showClear: true, readonly: true},
    slots: {'icon-clear': '<span id="slot-should-not-render">X</span>'},
  })
  expect(wrapper.find('.clear-button-spacing').exists()).toBe(false)
  expect(wrapper.find('#slot-should-not-render').exists()).toBe(false)
})
