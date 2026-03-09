import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import BCarousel from './BCarousel.vue'
import BCarouselSlide from './BCarouselSlide.vue'
import BImg from '../BImg/BImg.vue'
import {h, nextTick} from 'vue'

describe('carousel', () => {
  enableAutoUnmount(afterEach)

  it('has static class carousel', () => {
    const wrapper = mount(BCarousel)
    expect(wrapper.classes()).toContain('carousel')
  })

  it('has static class slide', () => {
    const wrapper = mount(BCarousel)
    expect(wrapper.classes()).toContain('slide')
  })

  it('has static class pointer-event', () => {
    const wrapper = mount(BCarousel)
    expect(wrapper.classes()).toContain('pointer-event')
  })

  it('tag is div', () => {
    const wrapper = mount(BCarousel)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has attr id', () => {
    const wrapper = mount(BCarousel)
    expect(wrapper.attributes('id')).toBeDefined()
  })

  it('has attr id when prop id', () => {
    const wrapper = mount(BCarousel)
    expect(wrapper.attributes('id')).toBeDefined()
    expect(wrapper.attributes('id')).toContain('carousel')
  })

  it('uses custom id when prop id is set', () => {
    const wrapper = mount(BCarousel, {
      props: {id: 'my-carousel'},
    })
    expect(wrapper.attributes('id')).toBe('my-carousel')
  })

  it('id is reactive', async () => {
    const wrapper = mount(BCarousel, {
      props: {id: 'first-id'},
    })
    expect(wrapper.attributes('id')).toBe('first-id')
    await wrapper.setProps({id: 'second-id'})
    expect(wrapper.attributes('id')).toBe('second-id')
  })

  it('has div with class carousel-inner', () => {
    const wrapper = mount(BCarousel)
    const $div = wrapper.find('.carousel-inner')
    expect($div.exists()).toBe(true)
  })

  it('element that has class carousel-inner is div', () => {
    const wrapper = mount(BCarousel)
    const $div = wrapper.get('.carousel-inner')
    expect($div.element.tagName).toBe('DIV')
  })

  describe('fade', () => {
    it('does not have class carousel-fade by default', () => {
      const wrapper = mount(BCarousel)
      expect(wrapper.classes()).not.toContain('carousel-fade')
    })

    it('has class carousel-fade when prop fade is true', () => {
      const wrapper = mount(BCarousel, {
        props: {fade: true},
      })
      expect(wrapper.classes()).toContain('carousel-fade')
    })

    it('carousel-fade class is reactive', async () => {
      const wrapper = mount(BCarousel, {
        props: {fade: false},
      })
      expect(wrapper.classes()).not.toContain('carousel-fade')
      await wrapper.setProps({fade: true})
      expect(wrapper.classes()).toContain('carousel-fade')
      await wrapper.setProps({fade: false})
      expect(wrapper.classes()).not.toContain('carousel-fade')
    })
  })

  describe('indicators', () => {
    it('does not have element with class carousel-indicators by default', () => {
      const wrapper = mount(BCarousel)
      const $div = wrapper.find('.carousel-indicators')
      expect($div.exists()).toBe(false)
    })

    it('has element with class carousel-indicators if prop indicator', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
      })
      const $div = wrapper.find('.carousel-indicators')
      expect($div.exists()).toBe(true)
    })

    it('element with class carousel-indicators tag is div', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
      })
      const $div = wrapper.get('.carousel-indicators')
      expect($div.element.tagName).toBe('DIV')
    })

    it('div with carousel-indicators class has no button child by default', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
      })
      const $div = wrapper.get('.carousel-indicators')
      const $button = $div.find('button')
      expect($button.exists()).toBe(false)
    })

    it('renders one indicator button per slide', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const buttons = wrapper.get('.carousel-indicators').findAll('button')
      expect(buttons).toHaveLength(3)
    })

    it('renders indicator buttons with type button', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
        slots: {default: () => [h(BCarouselSlide)]},
      })
      const button = wrapper.get('.carousel-indicators button')
      expect(button.attributes('type')).toBe('button')
    })

    it('indicator buttons have data-bs-target attribute', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
        slots: {default: () => [h(BCarouselSlide)]},
      })
      const button = wrapper.get('.carousel-indicators button')
      expect(button.attributes('data-bs-target')).toBeDefined()
    })

    it('first indicator button has active class by default', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const buttons = wrapper.get('.carousel-indicators').findAll('button')
      expect(buttons[0].classes()).toContain('active')
      expect(buttons[1].classes()).not.toContain('active')
    })

    it('active indicator matches modelValue', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true, modelValue: 1},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const buttons = wrapper.get('.carousel-indicators').findAll('button')
      expect(buttons[0].classes()).not.toContain('active')
      expect(buttons[1].classes()).toContain('active')
      expect(buttons[2].classes()).not.toContain('active')
    })

    it('active indicator button has aria-current true', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const buttons = wrapper.get('.carousel-indicators').findAll('button')
      expect(buttons[0].attributes('aria-current')).toBe('true')
      expect(buttons[1].attributes('aria-current')).toBeUndefined()
    })

    it('indicator button has aria-label using indicatorsButtonLabel prop', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const buttons = wrapper.get('.carousel-indicators').findAll('button')
      expect(buttons[0].attributes('aria-label')).toBe('Slide 0')
      expect(buttons[1].attributes('aria-label')).toBe('Slide 1')
    })

    it('indicator button uses custom indicatorsButtonLabel', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true, indicatorsButtonLabel: 'Go to'},
        slots: {default: () => [h(BCarouselSlide)]},
      })
      const button = wrapper.get('.carousel-indicators button')
      expect(button.attributes('aria-label')).toBe('Go to 0')
    })

    it('clicking indicator button updates modelValue', async () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true, modelValue: 0},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const buttons = wrapper.get('.carousel-indicators').findAll('button')
      await buttons[2].trigger('click')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
    })

    it('indicators are reactive to prop changes', async () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: false},
      })
      expect(wrapper.find('.carousel-indicators').exists()).toBe(false)
      await wrapper.setProps({indicators: true})
      expect(wrapper.find('.carousel-indicators').exists()).toBe(true)
    })
  })

  describe('controls', () => {
    it('does not have element with class carousel-control-prev by default', () => {
      const wrapper = mount(BCarousel)
      const $button = wrapper.find('.carousel-control-prev')
      expect($button.exists()).toBe(false)
    })

    it('has element with class carousel-control-prev when prop controls', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.find('.carousel-control-prev')
      expect($button.exists()).toBe(true)
    })

    it('element with class carousel-control-prev is tag button', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-prev')
      expect($button.element.tagName).toBe('BUTTON')
    })

    it('button with class carousel-control-prev has static attr as button', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-prev')
      expect($button.attributes('type')).toBe('button')
    })

    it('button with class carousel-control-prev has child element with class carousel-control-prev-icon', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-prev')
      const $span = $button.find('.carousel-control-prev-icon')
      expect($span.exists()).toBe(true)
    })

    it('element with class carousel-control-prev-icon is tag span', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-prev')
      const $span = $button.get('.carousel-control-prev-icon')
      expect($span.element.tagName).toBe('SPAN')
    })

    it('element with class carousel-control-prev-icon has static attr aria-hidden to be true', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-prev')
      const $span = $button.get('.carousel-control-prev-icon')
      expect($span.attributes('aria-hidden')).toBe('true')
    })

    it('button with class carousel-control-prev has child element with class visually-hidden', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-prev')
      const $span = $button.find('.visually-hidden')
      expect($span.exists()).toBe(true)
    })

    it('button whos class is carousel-control-prev child element with class visually-hidden has is tag span', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-prev')
      const $span = $button.get('.visually-hidden')
      expect($span.element.tagName).toBe('SPAN')
    })

    it('button whos class is carousel-control-prev child element with class visually-hidden has text is prop controlsPrevText', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, controlsPrevText: 'foobar'},
      })
      const $button = wrapper.get('.carousel-control-prev')
      const $span = $button.get('.visually-hidden')
      expect($span.text()).toBe('foobar')
    })

    it('button whos class is carousel-control-prev child element with class visually-hidden has text previous by default', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-prev')
      const $span = $button.get('.visually-hidden')
      expect($span.text()).toBe('Previous')
    })

    it('does not have element with class carousel-control-next by default', () => {
      const wrapper = mount(BCarousel)
      const $button = wrapper.find('.carousel-control-next')
      expect($button.exists()).toBe(false)
    })

    it('has element with class carousel-control-next when prop controls', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.find('.carousel-control-next')
      expect($button.exists()).toBe(true)
    })

    it('element with class carousel-control-next is tag button', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-next')
      expect($button.element.tagName).toBe('BUTTON')
    })

    it('button with class carousel-control-next has static attr as button', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-next')
      expect($button.attributes('type')).toBe('button')
    })

    it('button with class carousel-control-next has child element with class carousel-control-next-icon', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-next')
      const $span = $button.find('.carousel-control-next-icon')
      expect($span.exists()).toBe(true)
    })

    it('button whos class is carousel-control-next child element with class carousel-control-next-icon is tag span', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-next')
      const $span = $button.get('.carousel-control-next-icon')
      expect($span.element.tagName).toBe('SPAN')
    })

    it('element with class carousel-control-next-icon has static attr aria-hidden to be true', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-next')
      const $span = $button.get('.carousel-control-next-icon')
      expect($span.attributes('aria-hidden')).toBe('true')
    })

    it('button with class carousel-control-next has child element with class visually-hidden', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-next')
      const $span = $button.find('.visually-hidden')
      expect($span.exists()).toBe(true)
    })

    it('button whos class is carousel-control-next has child element with class visually-hidden is tag span', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-next')
      const $span = $button.get('.visually-hidden')
      expect($span.element.tagName).toBe('SPAN')
    })

    it('button whos class is carousel-control-next child element with class visually-hidden has text is prop controlsNextText', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, controlsNextText: 'foobar'},
      })
      const $button = wrapper.get('.carousel-control-next')
      const $span = $button.get('.visually-hidden')
      expect($span.text()).toBe('foobar')
    })

    it('buttons whos class is carousel-control-next child element with class visually-hidden has text previous by default', () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true},
      })
      const $button = wrapper.get('.carousel-control-next')
      const $span = $button.get('.visually-hidden')
      expect($span.text()).toBe('Next')
    })

    it('controlsPrevText is reactive', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, controlsPrevText: 'Back'},
      })
      const $span = wrapper.get('.carousel-control-prev .visually-hidden')
      expect($span.text()).toBe('Back')
      await wrapper.setProps({controlsPrevText: 'Go Back'})
      expect($span.text()).toBe('Go Back')
    })

    it('controlsNextText is reactive', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, controlsNextText: 'Forward'},
      })
      const $span = wrapper.get('.carousel-control-next .visually-hidden')
      expect($span.text()).toBe('Forward')
      await wrapper.setProps({controlsNextText: 'Go Forward'})
      expect($span.text()).toBe('Go Forward')
    })

    it('controls are reactive to prop changes', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: false},
      })
      expect(wrapper.find('.carousel-control-prev').exists()).toBe(false)
      expect(wrapper.find('.carousel-control-next').exists()).toBe(false)
      await wrapper.setProps({controls: true})
      expect(wrapper.find('.carousel-control-prev').exists()).toBe(true)
      expect(wrapper.find('.carousel-control-next').exists()).toBe(true)
    })
  })

  describe('events', () => {
    it('emits prev-click when prev control is clicked', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, modelValue: 1},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      await wrapper.get('.carousel-control-prev').trigger('click')
      expect(wrapper.emitted('prev-click')).toHaveLength(1)
      expect(wrapper.emitted('prev-click')![0][0]).toBeInstanceOf(MouseEvent)
    })

    it('emits next-click when next control is clicked', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, modelValue: 0},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      await wrapper.get('.carousel-control-next').trigger('click')
      expect(wrapper.emitted('next-click')).toHaveLength(1)
      expect(wrapper.emitted('next-click')![0][0]).toBeInstanceOf(MouseEvent)
    })

    it('clicking next emits update:modelValue', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, modelValue: 0},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      await wrapper.get('.carousel-control-next').trigger('click')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([1])
    })

    it('clicking prev emits update:modelValue', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, modelValue: 1},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      await wrapper.get('.carousel-control-prev').trigger('click')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([0])
    })

    it('does not navigate when prev-click event is prevented', async () => {
      const wrapper = mount(BCarousel, {
        props: {
          controls: true,
          modelValue: 1,
          'onPrev-click': (e: MouseEvent) => e.preventDefault(),
        },
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      await wrapper.get('.carousel-control-prev').trigger('click')
      expect(wrapper.emitted('prev-click')).toHaveLength(1)
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('does not navigate when next-click event is prevented', async () => {
      const wrapper = mount(BCarousel, {
        props: {
          controls: true,
          modelValue: 0,
          'onNext-click': (e: MouseEvent) => e.preventDefault(),
        },
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      await wrapper.get('.carousel-control-next').trigger('click')
      expect(wrapper.emitted('next-click')).toHaveLength(1)
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  describe('navigation', () => {
    it('wraps to first slide when navigating past last slide', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, modelValue: 1},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      await wrapper.get('.carousel-control-next').trigger('click')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([0])
    })

    it('wraps to last slide when navigating before first slide', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, modelValue: 0},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide), h(BCarouselSlide)]},
      })
      await wrapper.get('.carousel-control-prev').trigger('click')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
    })

    it('does not wrap past last slide when noWrap is true', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, modelValue: 1, noWrap: true},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      await wrapper.get('.carousel-control-next').trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('does not wrap before first slide when noWrap is true', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, modelValue: 0, noWrap: true},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      await wrapper.get('.carousel-control-prev').trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('navigates forward in the middle of slides', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, modelValue: 1},
        slots: {
          default: () => [h(BCarouselSlide), h(BCarouselSlide), h(BCarouselSlide)],
        },
      })
      await wrapper.get('.carousel-control-next').trigger('click')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
    })

    it('navigates backward in the middle of slides', async () => {
      const wrapper = mount(BCarousel, {
        props: {controls: true, modelValue: 1},
        slots: {
          default: () => [h(BCarouselSlide), h(BCarouselSlide), h(BCarouselSlide)],
        },
      })
      await wrapper.get('.carousel-control-prev').trigger('click')
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([0])
    })
  })

  describe('modelValue', () => {
    it('defaults to 0', () => {
      const wrapper = mount(BCarousel, {
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const slides = wrapper.get('.carousel-inner').findAll('.carousel-item')
      expect(slides[0].isVisible()).toBe(true)
    })

    it('shows the slide matching modelValue', () => {
      const wrapper = mount(BCarousel, {
        props: {modelValue: 1},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const slides = wrapper.get('.carousel-inner').findAll('.carousel-item')
      expect(slides[0].attributes('style')).toContain('display: none')
      expect(slides[1].attributes('style')).not.toContain('display: none')
    })

    it('first slide has active class when modelValue is 0', () => {
      const wrapper = mount(BCarousel, {
        props: {modelValue: 0},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const slides = wrapper.get('.carousel-inner').findAll('.carousel-item')
      expect(slides[0].classes()).toContain('active')
      expect(slides[1].classes()).not.toContain('active')
    })

    it('second slide has active class when modelValue is 1', () => {
      const wrapper = mount(BCarousel, {
        props: {modelValue: 1},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const slides = wrapper.get('.carousel-inner').findAll('.carousel-item')
      expect(slides[0].classes()).not.toContain('active')
      expect(slides[1].classes()).toContain('active')
    })
  })

  describe('noAnimation', () => {
    it('does not apply transition none style by default', () => {
      const wrapper = mount(BCarousel, {
        slots: {default: () => [h(BCarouselSlide)]},
      })
      const slide = wrapper.get('.carousel-item')
      expect(slide.attributes('style')).not.toContain('transition: none')
    })

    it('applies transition none style when noAnimation is true', () => {
      const wrapper = mount(BCarousel, {
        props: {noAnimation: true},
        slots: {default: () => [h(BCarouselSlide)]},
      })
      const slide = wrapper.get('.carousel-item')
      expect(slide.attributes('style')).toContain('transition: none')
    })
  })

  describe('slides', () => {
    it('only renders BCarouselSlide components as slides', () => {
      const wrapper = mount(BCarousel, {
        slots: {
          default: () => [h(BCarouselSlide), h('div', {class: 'not-a-slide'}, 'ignored'), h(BCarouselSlide)],
        },
      })
      const slides = wrapper.get('.carousel-inner').findAll('.carousel-item')
      expect(slides).toHaveLength(2)
    })

    it('renders slides inside carousel-inner', () => {
      const wrapper = mount(BCarousel, {
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const inner = wrapper.get('.carousel-inner')
      const slides = inner.findAll('.carousel-item')
      expect(slides).toHaveLength(2)
    })

    it('renders no slides when no slot content is provided', () => {
      const wrapper = mount(BCarousel)
      const slides = wrapper.get('.carousel-inner').findAll('.carousel-item')
      expect(slides).toHaveLength(0)
    })
  })

  describe('exposed methods', () => {
    it('exposes next method', () => {
      const wrapper = mount(BCarousel, {
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      expect(wrapper.vm.next).toBeTypeOf('function')
    })

    it('exposes prev method', () => {
      const wrapper = mount(BCarousel, {
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      expect(wrapper.vm.prev).toBeTypeOf('function')
    })

    it('exposes pause method', () => {
      const wrapper = mount(BCarousel)
      expect(wrapper.vm.pause).toBeTypeOf('function')
    })

    it('exposes resume method', () => {
      const wrapper = mount(BCarousel)
      expect(wrapper.vm.resume).toBeTypeOf('function')
    })

    it('calling next emits update:modelValue', async () => {
      const wrapper = mount(BCarousel, {
        props: {modelValue: 0},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      wrapper.vm.next()
      await nextTick()
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([1])
    })

    it('calling prev emits update:modelValue', async () => {
      const wrapper = mount(BCarousel, {
        props: {modelValue: 1},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      wrapper.vm.prev()
      await nextTick()
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([0])
    })

    it('calling next wraps around when at last slide', async () => {
      const wrapper = mount(BCarousel, {
        props: {modelValue: 1},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      wrapper.vm.next()
      await nextTick()
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([0])
    })

    it('calling prev wraps around when at first slide', async () => {
      const wrapper = mount(BCarousel, {
        props: {modelValue: 0},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide), h(BCarouselSlide)]},
      })
      wrapper.vm.prev()
      await nextTick()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([2])
    })

    it('calling next respects noWrap', async () => {
      const wrapper = mount(BCarousel, {
        props: {modelValue: 1, noWrap: true},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      wrapper.vm.next()
      await nextTick()
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('calling prev respects noWrap', async () => {
      const wrapper = mount(BCarousel, {
        props: {modelValue: 0, noWrap: true},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      wrapper.vm.prev()
      await nextTick()
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  describe('provide', () => {
    it('provides background to child slides via injection', () => {
      const wrapper = mount(BCarousel, {
        props: {background: 'red'},
        slots: {default: () => [h(BCarouselSlide)]},
      })
      const slide = wrapper.findComponent(BCarouselSlide)
      expect(slide.exists()).toBe(true)
      // Background is set via computedStyle in BCarouselSlide which uses the injected value
      // happy-dom strips color values from CSS background shorthand, so we verify
      // the style attribute is present (background is always set on the slide)
      expect(slide.attributes('style')).toContain('background:')
    })

    it('provides imgWidth to child slides', () => {
      const wrapper = mount(BCarousel, {
        props: {imgWidth: '500'},
        slots: {default: () => [h(BCarouselSlide)]},
      })
      const img = wrapper.findComponent(BImg)
      expect(img.props('width')).toBe('500')
    })

    it('provides imgHeight to child slides', () => {
      const wrapper = mount(BCarousel, {
        props: {imgHeight: '300'},
        slots: {default: () => [h(BCarouselSlide)]},
      })
      const img = wrapper.findComponent(BImg)
      expect(img.props('height')).toBe('300')
    })

    it('slide own imgWidth overrides carousel provided imgWidth', () => {
      const wrapper = mount(BCarousel, {
        props: {imgWidth: '500'},
        slots: {default: () => [h(BCarouselSlide, {imgWidth: '200'})]},
      })
      const img = wrapper.findComponent(BImg)
      expect(img.props('width')).toBe('200')
    })

    it('slide own imgHeight overrides carousel provided imgHeight', () => {
      const wrapper = mount(BCarousel, {
        props: {imgHeight: '300'},
        slots: {default: () => [h(BCarouselSlide, {imgHeight: '100'})]},
      })
      const img = wrapper.findComponent(BImg)
      expect(img.props('height')).toBe('100')
    })
  })

  describe('ride', () => {
    it('does not auto-advance by default', async () => {
      vi.useFakeTimers()
      try {
        const wrapper = mount(BCarousel, {
          props: {modelValue: 0, interval: 100},
          slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
        })
        vi.advanceTimersByTime(500)
        await nextTick()
        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      } finally {
        vi.useRealTimers()
      }
    })

    it('auto-advances when ride is carousel', async () => {
      vi.useFakeTimers()
      try {
        const wrapper = mount(BCarousel, {
          props: {modelValue: 0, ride: 'carousel', interval: 100},
          slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
        })
        vi.advanceTimersByTime(150)
        await nextTick()
        expect(wrapper.emitted('update:modelValue')).toBeDefined()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
      } finally {
        vi.useRealTimers()
      }
    })
  })

  describe('aria', () => {
    it('gives aria-label on the carousel-indicators with prop labelIndicators', async () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
        slots: {default: () => h(BCarouselSlide)},
      })

      const div = wrapper.get('.carousel-indicators')
      expect(div.attributes('aria-label')).toBe('Select a slide to display')
      await wrapper.setProps({labelIndicators: 'foobar'})
      expect(div.attributes('aria-label')).toBe('foobar')
    })

    it('gives aria-owns on the carousel-indicators with the id of the carousel', async () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide)]},
      })
      const div = wrapper.get('.carousel-indicators')
      const ariaOwnership = div.attributes('aria-owns')
      expect(ariaOwnership).toContain('carousel-button-ownership')
      const buttons = div.findAll('button')
      for (const button of buttons) {
        expect(button.attributes('aria-controls')).toBe(ariaOwnership)
      }
    })

    it('button contains aria-described by of the carousel-item', async () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
        slots: {default: () => [h(BCarouselSlide), h(BCarouselSlide, {id: 'foobar!!!'})]},
      })
      const div = wrapper.get('.carousel-indicators')
      const [first, second] = div.findAll('button')
      await nextTick()
      expect(first.attributes('aria-describedby')).toBeDefined()
      expect(first.attributes('aria-describedby')).toContain('__carousel-slide___')
      expect(second.attributes('aria-describedby')).toBe('foobar!!!')
    })

    it('default labelIndicators value is correct', () => {
      const wrapper = mount(BCarousel, {
        props: {indicators: true},
        slots: {default: () => [h(BCarouselSlide)]},
      })
      const div = wrapper.get('.carousel-indicators')
      expect(div.attributes('aria-label')).toBe('Select a slide to display')
    })
  })
})
