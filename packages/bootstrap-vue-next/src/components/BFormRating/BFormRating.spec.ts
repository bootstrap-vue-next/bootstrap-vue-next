import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {h} from 'vue'
import BFormRating from './BFormRating.vue'

describe('form-rating', () => {
  enableAutoUnmount(afterEach)

  describe('rendering', () => {
    it('renders as an output element', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.element.tagName).toBe('OUTPUT')
    })

    it('has auto-generated id attribute', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.attributes('id')).toBeDefined()
    })

    it('uses custom id when prop id is set', () => {
      const wrapper = mount(BFormRating, {props: {id: 'my-rating'}})
      expect(wrapper.attributes('id')).toBe('my-rating')
    })

    it('updates id reactively', async () => {
      const wrapper = mount(BFormRating, {props: {id: 'first'}})
      expect(wrapper.attributes('id')).toBe('first')
      await wrapper.setProps({id: 'second'})
      expect(wrapper.attributes('id')).toBe('second')
    })

    it('has dir="ltr" by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.attributes('dir')).toBe('ltr')
    })

    it('sets form attribute when form prop is provided', () => {
      const wrapper = mount(BFormRating, {props: {form: 'my-form'}})
      expect(wrapper.attributes('form')).toBe('my-form')
    })

    it('does not set form attribute when form prop is not provided', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.attributes('form')).toBeUndefined()
    })

    it('has role="slider"', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.attributes('role')).toBe('slider')
    })

    it('has tabindex="0" by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.attributes('tabindex')).toBe('0')
    })

    it('does not have tabindex when disabled', () => {
      const wrapper = mount(BFormRating, {props: {disabled: true}})
      expect(wrapper.attributes('tabindex')).toBeUndefined()
    })

    it('updates tabindex reactively', async () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.attributes('tabindex')).toBe('0')
      await wrapper.setProps({disabled: true})
      expect(wrapper.attributes('tabindex')).toBeUndefined()
      await wrapper.setProps({disabled: false})
      expect(wrapper.attributes('tabindex')).toBe('0')
    })
  })

  describe('CSS classes', () => {
    it('has form-control class', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.classes()).toContain('form-control')
    })

    it('has b-form-rating class', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.classes()).toContain('b-form-rating')
    })

    it('does not have is-readonly class by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.classes()).not.toContain('is-readonly')
    })

    it('has is-readonly class when readonly prop is true', () => {
      const wrapper = mount(BFormRating, {props: {readonly: true}})
      expect(wrapper.classes()).toContain('is-readonly')
    })

    it('updates is-readonly class reactively', async () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.classes()).not.toContain('is-readonly')
      await wrapper.setProps({readonly: true})
      expect(wrapper.classes()).toContain('is-readonly')
      await wrapper.setProps({readonly: false})
      expect(wrapper.classes()).not.toContain('is-readonly')
    })

    it('does not have is-disabled class by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.classes()).not.toContain('is-disabled')
    })

    it('has is-disabled class when disabled prop is true', () => {
      const wrapper = mount(BFormRating, {props: {disabled: true}})
      expect(wrapper.classes()).toContain('is-disabled')
    })

    it('updates is-disabled class reactively', async () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.classes()).not.toContain('is-disabled')
      await wrapper.setProps({disabled: true})
      expect(wrapper.classes()).toContain('is-disabled')
      await wrapper.setProps({disabled: false})
      expect(wrapper.classes()).not.toContain('is-disabled')
    })

    it('does not have no-border class by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.classes()).not.toContain('no-border')
    })

    it('has no-border class when noBorder prop is true', () => {
      const wrapper = mount(BFormRating, {props: {noBorder: true}})
      expect(wrapper.classes()).toContain('no-border')
    })

    it('updates no-border class reactively', async () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.classes()).not.toContain('no-border')
      await wrapper.setProps({noBorder: true})
      expect(wrapper.classes()).toContain('no-border')
      await wrapper.setProps({noBorder: false})
      expect(wrapper.classes()).not.toContain('no-border')
    })

    it('does not have d-inline-flex class by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.classes()).not.toContain('d-inline-flex')
    })

    it('has d-inline-flex class when inline prop is true', () => {
      const wrapper = mount(BFormRating, {props: {inline: true}})
      expect(wrapper.classes()).toContain('d-inline-flex')
    })

    it('updates d-inline-flex class reactively', async () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.classes()).not.toContain('d-inline-flex')
      await wrapper.setProps({inline: true})
      expect(wrapper.classes()).toContain('d-inline-flex')
      await wrapper.setProps({inline: false})
      expect(wrapper.classes()).not.toContain('d-inline-flex')
    })
  })

  describe('stars', () => {
    it('renders 5 stars by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.findAll('.star').length).toBe(5)
    })

    it('renders custom number of stars', () => {
      const wrapper = mount(BFormRating, {props: {stars: 7}})
      expect(wrapper.findAll('.star').length).toBe(7)
    })

    it('renders minimum 3 stars when stars prop is less than 3', () => {
      const wrapper = mount(BFormRating, {props: {stars: 2}})
      expect(wrapper.findAll('.star').length).toBe(3)
    })

    it('renders exactly 3 stars when stars prop is 3', () => {
      const wrapper = mount(BFormRating, {props: {stars: 3}})
      expect(wrapper.findAll('.star').length).toBe(3)
    })

    it('updates star count reactively', async () => {
      const wrapper = mount(BFormRating, {props: {stars: 5}})
      expect(wrapper.findAll('.star').length).toBe(5)
      await wrapper.setProps({stars: 8})
      expect(wrapper.findAll('.star').length).toBe(8)
    })
  })

  describe('size prop', () => {
    it('uses "1rem" as default size for SVG icons', () => {
      const wrapper = mount(BFormRating)
      const svg = wrapper.find('.b-form-rating-star svg')
      expect(svg.attributes('width')).toBe('1rem')
      expect(svg.attributes('height')).toBe('1rem')
    })

    it('maps size="sm" to ".875rem" for SVG icons', () => {
      const wrapper = mount(BFormRating, {props: {size: 'sm'}})
      const svg = wrapper.find('.b-form-rating-star svg')
      expect(svg.attributes('width')).toBe('.875rem')
      expect(svg.attributes('height')).toBe('.875rem')
    })

    it('maps size="lg" to "1.25rem" for SVG icons', () => {
      const wrapper = mount(BFormRating, {props: {size: 'lg'}})
      const svg = wrapper.find('.b-form-rating-star svg')
      expect(svg.attributes('width')).toBe('1.25rem')
      expect(svg.attributes('height')).toBe('1.25rem')
    })

    it('uses arbitrary size string directly for SVG icons', () => {
      const wrapper = mount(BFormRating, {props: {size: '2.5rem'}})
      const svg = wrapper.find('.b-form-rating-star svg')
      expect(svg.attributes('width')).toBe('2.5rem')
      expect(svg.attributes('height')).toBe('2.5rem')
    })

    it('updates SVG size reactively', async () => {
      const wrapper = mount(BFormRating, {props: {size: 'sm'}})
      expect(wrapper.find('.b-form-rating-star svg').attributes('width')).toBe('.875rem')
      await wrapper.setProps({size: 'lg'})
      expect(wrapper.find('.b-form-rating-star svg').attributes('width')).toBe('1.25rem')
    })

    it('sets font-size of value text span to computed size', () => {
      const wrapper = mount(BFormRating, {props: {size: '2rem', showValue: true, modelValue: 3}})
      const valueSpan = wrapper.find('.rating-value-text')
      expect(valueSpan.attributes('style')).toContain('font-size: 2rem')
    })
  })

  describe('star icons', () => {
    it('renders full star path for filled stars', () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 3, stars: 3}})
      const paths = wrapper.findAll('.star:first-child .b-form-rating-star svg path')
      expect(paths[0].attributes('d')).toContain('M3.612 15.443')
    })

    it('renders half star path for half-filled stars', () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 1.5, stars: 3, precision: 1}})
      const paths = wrapper.findAll('.star')[1].findAll('.b-form-rating-star svg path')
      expect(paths[0].attributes('d')).toContain('M5.354 5.119')
    })

    it('renders empty star path for unfilled stars', () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 0, stars: 3}})
      const paths = wrapper.findAll('.star:first-child .b-form-rating-star svg path')
      expect(paths[0].attributes('d')).toContain('M2.866 14.85')
    })

    it('renders full, half, and empty star paths correctly', () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 1.5, stars: 3, precision: 1}})
      const svgPaths = wrapper.findAll('.b-form-rating-star svg path')
      expect(svgPaths[0].attributes('d')).toContain('M3.612 15.443')
      expect(svgPaths[1].attributes('d')).toContain('M5.354 5.119')
      expect(svgPaths[2].attributes('d')).toContain('M2.866 14.85')
    })
  })

  describe('color and variant', () => {
    it('applies color as inline style when color prop is set', () => {
      const wrapper = mount(BFormRating, {props: {color: 'pink'}})
      const svg = wrapper.find('.b-form-rating-star svg')
      expect(svg.attributes('style')).toContain('color: pink')
    })

    it('updates color reactively', async () => {
      const wrapper = mount(BFormRating, {props: {color: 'pink'}})
      expect(wrapper.find('.b-form-rating-star svg').attributes('style')).toContain('color: pink')
      await wrapper.setProps({color: 'blue'})
      expect(wrapper.find('.b-form-rating-star svg').attributes('style')).toContain('color: blue')
    })

    it('applies text-{variant} class when variant prop is set', () => {
      const wrapper = mount(BFormRating, {props: {variant: 'danger'}})
      expect(wrapper.find('.b-form-rating-star svg').classes()).toContain('text-danger')
    })

    it('updates variant class reactively', async () => {
      const wrapper = mount(BFormRating, {props: {variant: 'danger'}})
      expect(wrapper.find('.b-form-rating-star svg').classes()).toContain('text-danger')
      await wrapper.setProps({variant: 'success'})
      expect(wrapper.find('.b-form-rating-star svg').classes()).toContain('text-success')
      expect(wrapper.find('.b-form-rating-star svg').classes()).not.toContain('text-danger')
    })

    it('applies is-disabled class to SVG icons when disabled', () => {
      const wrapper = mount(BFormRating, {props: {disabled: true}})
      expect(wrapper.find('.b-form-rating-star svg').classes()).toContain('is-disabled')
    })

    it('does not apply color style when disabled', () => {
      const wrapper = mount(BFormRating, {props: {disabled: true, color: 'pink'}})
      const svg = wrapper.find('.b-form-rating-star svg')
      expect(svg.classes()).toContain('is-disabled')
      expect(svg.attributes('style') ?? '').not.toContain('color: pink')
    })

    it('does not apply variant class when disabled', () => {
      const wrapper = mount(BFormRating, {props: {disabled: true, variant: 'danger'}})
      const svg = wrapper.find('.b-form-rating-star svg')
      expect(svg.classes()).toContain('is-disabled')
      expect(svg.classes()).not.toContain('text-danger')
    })
  })

  describe('value display', () => {
    it('does not render value text span by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.find('.rating-value-text').exists()).toBe(false)
    })

    it('renders value text span when showValue is true', () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 3, showValue: true}})
      expect(wrapper.find('.rating-value-text').exists()).toBe(true)
    })

    it('displays current modelValue when showValue is true', () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 3, showValue: true}})
      expect(wrapper.find('.rating-value-text').text()).toBe('3')
    })

    it('displays "0" for default modelValue when showValue is true', () => {
      const wrapper = mount(BFormRating, {props: {showValue: true}})
      expect(wrapper.find('.rating-value-text').text()).toBe('0')
    })

    it('renders value text span when showValueMax is true', () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 3, showValueMax: true}})
      expect(wrapper.find('.rating-value-text').exists()).toBe(true)
    })

    it('displays "value/max" when showValueMax is true', () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 3, stars: 8, showValueMax: true}})
      expect(wrapper.find('.rating-value-text').text()).toBe('3/8')
    })

    it('displays value with precision when precision prop is set', () => {
      const wrapper = mount(BFormRating, {
        props: {modelValue: 3.567, showValue: true, precision: 2},
      })
      expect(wrapper.find('.rating-value-text').text()).toBe('3.57')
    })

    it('updates displayed value reactively when modelValue changes', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 2, showValue: true}})
      expect(wrapper.find('.rating-value-text').text()).toBe('2')
      await wrapper.setProps({modelValue: 4})
      expect(wrapper.find('.rating-value-text').text()).toBe('4')
    })

    it('formats displayed value using locale when showValue is true', () => {
      const wrapper = mount(BFormRating, {
        props: {modelValue: 3, showValue: true, locale: 'ar-EG'},
      })
      const formatted = new Intl.NumberFormat('ar-EG').format(3)
      expect(wrapper.find('.rating-value-text').text()).toBe(formatted)
    })

    it('formats displayed value with precision using locale', () => {
      const wrapper = mount(BFormRating, {
        props: {modelValue: 3.567, showValue: true, precision: 2, locale: 'de-DE'},
      })
      const formatted = new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(3.57)
      expect(wrapper.find('.rating-value-text').text()).toBe(formatted)
    })

    it('formats showValueMax using locale', () => {
      const wrapper = mount(BFormRating, {
        props: {modelValue: 3, stars: 5, showValueMax: true, locale: 'ar-EG'},
      })
      const formattedValue = new Intl.NumberFormat('ar-EG').format(3)
      const formattedMax = new Intl.NumberFormat('ar-EG').format(5)
      expect(wrapper.find('.rating-value-text').text()).toBe(`${formattedValue}/${formattedMax}`)
    })
  })

  describe('click interaction', () => {
    it('emits update:modelValue with star index when a star is clicked', async () => {
      const wrapper = mount(BFormRating)
      await wrapper.findAll('.star')[0].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
    })

    it('emits the correct star index for each star', async () => {
      const wrapper = mount(BFormRating, {props: {stars: 5}})
      const stars = wrapper.findAll('.star')
      await stars[2].trigger('click')
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([3])
    })

    it('does not emit update:modelValue when readonly', async () => {
      const wrapper = mount(BFormRating, {props: {readonly: true}})
      await wrapper.findAll('.star')[0].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('does not emit update:modelValue when disabled', async () => {
      const wrapper = mount(BFormRating, {props: {disabled: true}})
      await wrapper.findAll('.star')[0].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  describe('clear button', () => {
    it('does not render clear button by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.find('.clear-button-spacing').exists()).toBe(false)
    })

    it('renders clear button when showClear is true', () => {
      const wrapper = mount(BFormRating, {props: {showClear: true}})
      expect(wrapper.find('.clear-button-spacing').exists()).toBe(true)
    })

    it('does not render clear button when showClear is true but readonly is true', () => {
      const wrapper = mount(BFormRating, {props: {showClear: true, readonly: true}})
      expect(wrapper.find('.clear-button-spacing').exists()).toBe(false)
    })

    it('does not render clear button when showClear is true but disabled is true', () => {
      const wrapper = mount(BFormRating, {props: {showClear: true, disabled: true}})
      expect(wrapper.find('.clear-button-spacing').exists()).toBe(false)
    })

    it('emits update:modelValue with 0 when clear button is clicked', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 3, showClear: true}})
      await wrapper.find('.clear-button-spacing').trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeDefined()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([0])
    })

    it('renders default SVG clear icon when no icon-clear slot is provided', () => {
      const wrapper = mount(BFormRating, {props: {showClear: true}})
      expect(wrapper.find('.clear-button-spacing .clear-icon').exists()).toBe(true)
    })

    it('renders icon-clear slot content instead of default icon', () => {
      const wrapper = mount(BFormRating, {
        props: {showClear: true},
        slots: {'icon-clear': '<span id="custom-clear">X</span>'},
      })
      expect(wrapper.find('#custom-clear').exists()).toBe(true)
      expect(wrapper.find('.clear-icon').exists()).toBe(false)
    })
  })

  describe('keyboard navigation', () => {
    it('increments value by 1 on ArrowRight', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 2}})
      await wrapper.trigger('keydown', {key: 'ArrowRight'})
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([3])
    })

    it('decrements value by 1 on ArrowLeft', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 2}})
      await wrapper.trigger('keydown', {key: 'ArrowLeft'})
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
    })

    it('increments value by 1 on ArrowUp', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 2}})
      await wrapper.trigger('keydown', {key: 'ArrowUp'})
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([3])
    })

    it('decrements value by 1 on ArrowDown', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 2}})
      await wrapper.trigger('keydown', {key: 'ArrowDown'})
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
    })

    it('does not emit when already at max value on ArrowRight', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 5, stars: 5}})
      await wrapper.trigger('keydown', {key: 'ArrowRight'})
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('does not emit when already at 0 on ArrowLeft', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 0}})
      await wrapper.trigger('keydown', {key: 'ArrowLeft'})
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('does not emit when already at max value on ArrowUp', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 5, stars: 5}})
      await wrapper.trigger('keydown', {key: 'ArrowUp'})
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('does not emit when already at 0 on ArrowDown', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 0}})
      await wrapper.trigger('keydown', {key: 'ArrowDown'})
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('does not emit update:modelValue on unrecognized key', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 2}})
      await wrapper.trigger('keydown', {key: 'Enter'})
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('does not respond to keyboard when readonly', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 2, readonly: true}})
      await wrapper.trigger('keydown', {key: 'ArrowRight'})
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('does not respond to keyboard when disabled', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 2, disabled: true}})
      await wrapper.trigger('keydown', {key: 'ArrowRight'})
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  describe('hidden input', () => {
    it('does not render hidden input when name prop is not set', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.find('input[type="hidden"]').exists()).toBe(false)
    })

    it('renders hidden input when name prop is set', () => {
      const wrapper = mount(BFormRating, {props: {name: 'rating'}})
      expect(wrapper.find('input[type="hidden"]').exists()).toBe(true)
    })

    it('sets name attribute on hidden input', () => {
      const wrapper = mount(BFormRating, {props: {name: 'my-rating'}})
      expect(wrapper.find('input[type="hidden"]').attributes('name')).toBe('my-rating')
    })

    it('sets value attribute on hidden input to current modelValue', () => {
      const wrapper = mount(BFormRating, {props: {name: 'rating', modelValue: 3}})
      expect(wrapper.find('input[type="hidden"]').attributes('value')).toBe('3')
    })

    it('sets form attribute on hidden input when form prop is set', () => {
      const wrapper = mount(BFormRating, {props: {name: 'rating', form: 'my-form'}})
      expect(wrapper.find('input[type="hidden"]').attributes('form')).toBe('my-form')
    })

    it('does not render hidden input when disabled even if name is set', () => {
      const wrapper = mount(BFormRating, {props: {name: 'rating', disabled: true}})
      expect(wrapper.find('input[type="hidden"]').exists()).toBe(false)
    })

    it('updates hidden input value when star is clicked', async () => {
      const wrapper = mount(BFormRating, {props: {name: 'rating', modelValue: 3}})
      await wrapper.findAll('.star')[0].trigger('click')
      expect(wrapper.find('input[type="hidden"]').attributes('value')).toBe('1')
    })

    it('updates hidden input value to 0 after clear', async () => {
      const wrapper = mount(BFormRating, {
        props: {name: 'rating', modelValue: 3, showClear: true},
      })
      await wrapper.find('.clear-button-spacing').trigger('click')
      expect(wrapper.find('input[type="hidden"]').attributes('value')).toBe('0')
    })
  })

  describe('ARIA attributes', () => {
    it('has aria-valuemin="0"', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.attributes('aria-valuemin')).toBe('0')
    })

    it('has aria-valuemax equal to stars count', () => {
      const wrapper = mount(BFormRating, {props: {stars: 5}})
      expect(wrapper.attributes('aria-valuemax')).toBe('5')
    })

    it('has aria-valuenow equal to modelValue', () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 3}})
      expect(wrapper.attributes('aria-valuenow')).toBe('3')
    })

    it('has aria-valuenow of "0" by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.attributes('aria-valuenow')).toBe('0')
    })

    it('has aria-valuetext showing "value of max"', () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 3, stars: 5}})
      expect(wrapper.attributes('aria-valuetext')).toBe('3 of 5')
    })

    it('updates aria-valuenow reactively', async () => {
      const wrapper = mount(BFormRating, {props: {modelValue: 2}})
      expect(wrapper.attributes('aria-valuenow')).toBe('2')
      await wrapper.setProps({modelValue: 4})
      expect(wrapper.attributes('aria-valuenow')).toBe('4')
    })

    it('sets aria-disabled="true" when disabled', () => {
      const wrapper = mount(BFormRating, {props: {disabled: true}})
      expect(wrapper.attributes('aria-disabled')).toBe('true')
    })

    it('does not set aria-disabled when not disabled', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.attributes('aria-disabled')).toBeUndefined()
    })

    it('sets aria-readonly="true" when readonly', () => {
      const wrapper = mount(BFormRating, {props: {readonly: true}})
      expect(wrapper.attributes('aria-readonly')).toBe('true')
    })

    it('does not set aria-readonly when not readonly', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.attributes('aria-readonly')).toBeUndefined()
    })
  })

  describe('default slot', () => {
    it('renders default slot content instead of built-in stars', () => {
      const wrapper = mount(BFormRating, {
        props: {stars: 3},
        slots: {
          default: ({starIndex}: {starIndex: number}) =>
            h('span', {'class': 'custom-star', 'data-star': starIndex}, `Star ${starIndex}`),
        },
      })
      expect(wrapper.find('.b-form-rating-star').exists()).toBe(false)
      const customStars = wrapper.findAll('.custom-star')
      expect(customStars.length).toBe(3)
    })

    it('passes starIndex to default slot', () => {
      const wrapper = mount(BFormRating, {
        props: {stars: 3},
        slots: {
          default: ({starIndex}: {starIndex: number}) =>
            h('span', {'data-index': starIndex}, String(starIndex)),
        },
      })
      const spans = wrapper.findAll('[data-index]')
      expect(spans[0].attributes('data-index')).toBe('1')
      expect(spans[1].attributes('data-index')).toBe('2')
      expect(spans[2].attributes('data-index')).toBe('3')
    })

    it('passes isFilled=true to default slot for filled stars', () => {
      const wrapper = mount(BFormRating, {
        props: {modelValue: 3, stars: 3},
        slots: {
          default: ({isFilled}: {isFilled: boolean}) =>
            h('span', {'data-filled': String(isFilled)}),
        },
      })
      const spans = wrapper.findAll('[data-filled]')
      expect(spans[0].attributes('data-filled')).toBe('true')
      expect(spans[1].attributes('data-filled')).toBe('true')
      expect(spans[2].attributes('data-filled')).toBe('true')
    })

    it('passes isFilled=false and isHalf=false to default slot for empty stars', () => {
      const wrapper = mount(BFormRating, {
        props: {modelValue: 0, stars: 3},
        slots: {
          default: ({isFilled, isHalf}: {isFilled: boolean; isHalf: boolean}) =>
            h('span', {'data-filled': String(isFilled), 'data-half': String(isHalf)}),
        },
      })
      const spans = wrapper.findAll('[data-filled]')
      expect(spans[0].attributes('data-filled')).toBe('false')
      expect(spans[0].attributes('data-half')).toBe('false')
    })

    it('passes isHalf=true to default slot for half-filled stars', () => {
      const wrapper = mount(BFormRating, {
        props: {modelValue: 1.5, stars: 3, precision: 1},
        slots: {
          default: ({isHalf}: {isHalf: boolean}) => h('span', {'data-half': String(isHalf)}),
        },
      })
      const spans = wrapper.findAll('[data-half]')
      expect(spans[1].attributes('data-half')).toBe('true')
    })
  })

  describe('expose', () => {
    it('exposes hoverValue ref', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.vm.hoverValue).toBeDefined()
    })

    it('exposes hoverValue as null by default', () => {
      const wrapper = mount(BFormRating)
      expect(wrapper.vm.hoverValue).toBeNull()
    })
  })
})
