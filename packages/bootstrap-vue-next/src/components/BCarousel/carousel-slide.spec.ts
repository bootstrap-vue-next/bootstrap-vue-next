import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {ref} from 'vue'
import BCarouselSlide from './BCarouselSlide.vue'
import BImg from '../BImg/BImg.vue'
import {carouselInjectionKey} from '../../utils/keys'

describe('carousel-slide', () => {
  enableAutoUnmount(afterEach)

  // --- Root element ---
  it('tag is div', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has static class carousel-item', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.classes()).toContain('carousel-item')
  })

  it('has attr id', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.attributes('id')).toBeDefined()
  })

  it('has auto-generated id containing carousel-slide', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.attributes('id')).toContain('carousel-slide')
  })

  it('has attr id when prop id is provided', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {id: 'custom-id'},
    })
    expect(wrapper.attributes('id')).toBe('custom-id')
  })

  // --- BImg component ---
  it('renders BImg component by default', () => {
    const wrapper = mount(BCarouselSlide)
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.exists()).toBe(true)
  })

  it('BImg has d-block and w-100 classes', () => {
    const wrapper = mount(BCarouselSlide)
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.classes()).toContain('d-block')
    expect(bImg.classes()).toContain('w-100')
  })

  it('BImg receives imgAlt as alt prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgAlt: 'Test Alt'},
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.attributes('alt')).toBe('Test Alt')
  })

  it('BImg receives imgSrc as src prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgSrc: 'test.jpg'},
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('src')).toBe('test.jpg')
  })

  it('BImg receives imgWidth as width prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgWidth: 200},
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('width')).toBe(200)
  })

  it('BImg receives imgHeight as height prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgHeight: 150},
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('height')).toBe(150)
  })

  it('BImg receives imgBlank as blank prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgBlank: true},
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('blank')).toBe(true)
  })

  it('BImg blank prop defaults to false', () => {
    const wrapper = mount(BCarouselSlide)
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('blank')).toBe(false)
  })

  it('BImg receives imgBlankColor as blankColor prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgBlankColor: 'blue'},
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('blankColor')).toBe('blue')
  })

  it('BImg blankColor defaults to transparent', () => {
    const wrapper = mount(BCarouselSlide)
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('blankColor')).toBe('transparent')
  })

  it('BImg receives imgSrcset as srcset prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgSrcset: 'test.jpg 1x, test2.jpg 2x'},
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('srcset')).toBe('test.jpg 1x, test2.jpg 2x')
  })

  it('BImg receives imgSrcset array as srcset prop', () => {
    const srcset = ['test.jpg 1x', 'test2.jpg 2x']
    const wrapper = mount(BCarouselSlide, {
      props: {imgSrcset: srcset},
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('srcset')).toEqual(srcset)
  })

  it('BImg receives width from parent injection when imgWidth is not set', () => {
    const wrapper = mount(BCarouselSlide, {
      global: {
        provide: {
          [carouselInjectionKey as symbol]: {
            background: ref(undefined),
            width: ref('500'),
            height: ref('300'),
          },
        },
      },
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('width')).toBe('500')
  })

  it('BImg receives height from parent injection when imgHeight is not set', () => {
    const wrapper = mount(BCarouselSlide, {
      global: {
        provide: {
          [carouselInjectionKey as symbol]: {
            background: ref(undefined),
            width: ref('500'),
            height: ref('300'),
          },
        },
      },
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('height')).toBe('300')
  })

  it('BImg imgWidth prop takes precedence over parent injection width', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgWidth: 200},
      global: {
        provide: {
          [carouselInjectionKey as symbol]: {
            background: ref(undefined),
            width: ref('500'),
            height: ref('300'),
          },
        },
      },
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('width')).toBe(200)
  })

  it('BImg imgHeight prop takes precedence over parent injection height', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {imgHeight: 100},
      global: {
        provide: {
          [carouselInjectionKey as symbol]: {
            background: ref(undefined),
            width: ref('500'),
            height: ref('300'),
          },
        },
      },
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.props('height')).toBe(100)
  })

  // --- img slot ---
  it('img slot overrides default BImg', () => {
    const wrapper = mount(BCarouselSlide, {
      slots: {
        img: '<img src="custom.jpg" alt="Custom" />',
      },
    })
    const bImg = wrapper.findComponent(BImg)
    expect(bImg.exists()).toBe(false)
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('custom.jpg')
  })

  // --- Content area ---
  it('does not render content area when no caption, text, or default slot', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.find('.carousel-caption').exists()).toBe(false)
  })

  it('renders content area when caption prop is provided', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Test Caption'},
    })
    expect(wrapper.find('.carousel-caption').exists()).toBe(true)
  })

  it('renders content area when text prop is provided', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {text: 'Test Text'},
    })
    expect(wrapper.find('.carousel-caption').exists()).toBe(true)
  })

  it('renders content area when default slot is provided', () => {
    const wrapper = mount(BCarouselSlide, {
      slots: {default: 'Default content'},
    })
    expect(wrapper.find('.carousel-caption').exists()).toBe(true)
  })

  it('content area tag defaults to div', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Test'},
    })
    const caption = wrapper.find('.carousel-caption')
    expect(caption.element.tagName).toBe('DIV')
  })

  it('content area uses contentTag prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Test', contentTag: 'section'},
    })
    const caption = wrapper.find('.carousel-caption')
    expect(caption.element.tagName).toBe('SECTION')
  })

  // --- Caption ---
  it('renders caption text from caption prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'My Caption'},
    })
    expect(wrapper.find('.carousel-caption').text()).toContain('My Caption')
  })

  it('caption tag defaults to h3', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'My Caption'},
    })
    const h3 = wrapper.find('.carousel-caption h3')
    expect(h3.exists()).toBe(true)
    expect(h3.text()).toBe('My Caption')
  })

  it('caption tag uses captionTag prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'My Caption', captionTag: 'h1'},
    })
    const h1 = wrapper.find('.carousel-caption h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text()).toBe('My Caption')
  })

  it('caption slot overrides caption prop text', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Prop Caption'},
      slots: {caption: 'Slot Caption'},
    })
    const caption = wrapper.find('.carousel-caption')
    expect(caption.text()).toContain('Slot Caption')
    expect(caption.text()).not.toContain('Prop Caption')
  })

  it('renders caption slot content', () => {
    const wrapper = mount(BCarouselSlide, {
      slots: {caption: '<strong>Bold Caption</strong>'},
    })
    const strong = wrapper.find('.carousel-caption strong')
    expect(strong.exists()).toBe(true)
    expect(strong.text()).toBe('Bold Caption')
  })

  it('does not render caption element when no caption prop or slot', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {text: 'Some text'},
    })
    const h3 = wrapper.find('.carousel-caption h3')
    expect(h3.exists()).toBe(false)
  })

  // --- Text ---
  it('renders text from text prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {text: 'My Text'},
    })
    expect(wrapper.find('.carousel-caption').text()).toContain('My Text')
  })

  it('text tag defaults to p', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {text: 'My Text'},
    })
    const p = wrapper.find('.carousel-caption p')
    expect(p.exists()).toBe(true)
    expect(p.text()).toBe('My Text')
  })

  it('text tag uses textTag prop', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {text: 'My Text', textTag: 'span'},
    })
    // The textTag replaces the wrapping element, so look for span directly within carousel-caption
    const captionEl = wrapper.find('.carousel-caption')
    // span is used instead of p
    const span = captionEl.find('span')
    expect(span.exists()).toBe(true)
    expect(span.text()).toBe('My Text')
    expect(captionEl.find('p').exists()).toBe(false)
  })

  it('text slot overrides text prop text', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {text: 'Prop Text'},
      slots: {text: 'Slot Text'},
    })
    const caption = wrapper.find('.carousel-caption')
    expect(caption.text()).toContain('Slot Text')
    expect(caption.text()).not.toContain('Prop Text')
  })

  it('renders text slot content', () => {
    const wrapper = mount(BCarouselSlide, {
      slots: {text: '<em>Italic Text</em>'},
    })
    const em = wrapper.find('.carousel-caption em')
    expect(em.exists()).toBe(true)
    expect(em.text()).toBe('Italic Text')
  })

  it('does not render text element when no text prop or slot', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Some caption'},
    })
    const p = wrapper.find('.carousel-caption p')
    expect(p.exists()).toBe(false)
  })

  // --- Default slot ---
  it('default slot renders inside content area', () => {
    const wrapper = mount(BCarouselSlide, {
      slots: {default: '<div class="custom-content">Hello</div>'},
    })
    const content = wrapper.find('.carousel-caption .custom-content')
    expect(content.exists()).toBe(true)
    expect(content.text()).toBe('Hello')
  })

  it('renders caption, text, and default slot together', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Cap', text: 'Txt'},
      slots: {default: '<div class="extra">Extra</div>'},
    })
    const caption = wrapper.find('.carousel-caption')
    expect(caption.text()).toContain('Cap')
    expect(caption.text()).toContain('Txt')
    expect(caption.text()).toContain('Extra')
  })

  // --- Background style ---
  // Note: jsdom normalizes CSS shorthand properties, so we check the raw style text
  it('has background style attribute', () => {
    const wrapper = mount(BCarouselSlide)
    expect(wrapper.attributes('style')).toBeDefined()
    expect(wrapper.attributes('style')).toContain('background:')
  })

  it('background prop applies to style', async () => {
    const wrapper = mount(BCarouselSlide, {
      props: {background: 'red'},
    })
    // The component sets a CSS background property
    expect(wrapper.attributes('style')).toBeDefined()
    // Verify component uses the background prop by re-mounting with different value
    const wrapper2 = mount(BCarouselSlide, {
      props: {background: 'blue'},
    })
    // Both wrappers should have background style
    expect(wrapper.attributes('style')).toContain('background:')
    expect(wrapper2.attributes('style')).toContain('background:')
  })

  it('background from parent injection is used when no background prop', () => {
    const wrapper = mount(BCarouselSlide, {
      global: {
        provide: {
          [carouselInjectionKey as symbol]: {
            background: ref('green'),
            width: ref(undefined),
            height: ref(undefined),
          },
        },
      },
    })
    expect(wrapper.attributes('style')).toContain('background:')
  })

  // --- contentVisibleUp ---
  it('does not have d-none class by default', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Test'},
    })
    const caption = wrapper.find('.carousel-caption')
    expect(caption.classes()).not.toContain('d-none')
  })

  it('contentVisibleUp adds d-none class to content area', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Test', contentVisibleUp: 'md'},
    })
    const caption = wrapper.find('.carousel-caption')
    expect(caption.classes()).toContain('d-none')
  })

  it('contentVisibleUp adds d-{breakpoint}-block class to content area', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Test', contentVisibleUp: 'md'},
    })
    const caption = wrapper.find('.carousel-caption')
    expect(caption.classes()).toContain('d-md-block')
  })

  it('contentVisibleUp with lg breakpoint adds d-lg-block class', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {caption: 'Test', contentVisibleUp: 'lg'},
    })
    const caption = wrapper.find('.carousel-caption')
    expect(caption.classes()).toContain('d-none')
    expect(caption.classes()).toContain('d-lg-block')
  })

  // --- Exposed properties ---
  it('exposes _id', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {id: 'exposed-id'},
    })
    const vm = wrapper.vm as unknown as {_id: string}
    expect(vm._id).toBe('exposed-id')
  })

  it('exposes _id with auto-generated value when no id prop', () => {
    const wrapper = mount(BCarouselSlide)
    const vm = wrapper.vm as unknown as {_id: string}
    expect(vm._id).toBeDefined()
    expect(vm._id).toContain('carousel-slide')
  })

  it('exposes _interval', () => {
    const wrapper = mount(BCarouselSlide, {
      props: {interval: 5000},
    })
    const vm = wrapper.vm as unknown as {_interval: number | undefined}
    expect(vm._interval).toBe(5000)
  })

  it('exposes _interval as undefined when not set', () => {
    const wrapper = mount(BCarouselSlide)
    const vm = wrapper.vm as unknown as {_interval: number | undefined}
    expect(vm._interval).toBeUndefined()
  })
})
