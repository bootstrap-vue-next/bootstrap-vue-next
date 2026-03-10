import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BImg from './BImg.vue'
import {defineComponent, h, markRaw} from 'vue'

describe('img', () => {
  enableAutoUnmount(afterEach)

  // --- Default rendering ---

  it('renders with default img tag', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.element.tagName).toBe('IMG')
  })

  it('has static class b-img', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.classes()).toContain('b-img')
  })

  it('does not have img-thumbnail class by default', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.classes()).not.toContain('img-thumbnail')
  })

  it('does not have img-fluid class by default', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.classes()).not.toContain('img-fluid')
  })

  it('does not have d-block class by default', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('does not have w-100 class by default', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.classes()).not.toContain('w-100')
  })

  it('has loading attribute eager by default', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.attributes('loading')).toBe('eager')
  })

  // --- src prop ---

  it('renders src attribute from src prop', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.attributes('src')).toBe('/test.jpg')
  })

  it('renders undefined src when no src prop provided', () => {
    const wrapper = mount(BImg)
    expect(wrapper.attributes('src')).toBeUndefined()
  })

  it('updates src reactively', async () => {
    const wrapper = mount(BImg, {
      props: {src: '/first.jpg'},
    })
    expect(wrapper.attributes('src')).toBe('/first.jpg')
    await wrapper.setProps({src: '/second.jpg'})
    expect(wrapper.attributes('src')).toBe('/second.jpg')
  })

  // --- tag prop ---

  it('accepts string tag prop', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', tag: 'div'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.attributes('src')).toBe('/test.jpg')
  })

  it('accepts custom component for tag prop', () => {
    const CustomImg = markRaw(
      defineComponent({
        name: 'CustomImg',
        props: {
          src: {type: String, required: true},
          width: {type: [String, Number], required: true},
          height: {required: true, type: [String, Number]},
        },
        setup(props) {
          return () =>
            h('img', {
              'src': props.src,
              'width': props.width,
              'height': props.height,
              'data-custom-img': 'true',
            })
        },
      })
    )

    const wrapper = mount(BImg, {
      props: {src: '/custom.jpg', tag: CustomImg, width: 100, height: 100},
    })

    expect(wrapper.attributes('src')).toBe('/custom.jpg')
    expect(wrapper.attributes('data-custom-img')).toBe('true')
    expect(wrapper.attributes('width')).toBe('100')
    expect(wrapper.attributes('height')).toBe('100')
  })

  // --- thumbnail prop ---

  it('has img-thumbnail class when thumbnail is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', thumbnail: true},
    })
    expect(wrapper.classes()).toContain('img-thumbnail')
  })

  it('does not have img-thumbnail class when thumbnail is false', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', thumbnail: false},
    })
    expect(wrapper.classes()).not.toContain('img-thumbnail')
  })

  it('updates img-thumbnail class reactively', async () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', thumbnail: false},
    })
    expect(wrapper.classes()).not.toContain('img-thumbnail')
    await wrapper.setProps({thumbnail: true})
    expect(wrapper.classes()).toContain('img-thumbnail')
  })

  // --- fluid prop ---

  it('has img-fluid class when fluid is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', fluid: true},
    })
    expect(wrapper.classes()).toContain('img-fluid')
  })

  it('does not have w-100 class when fluid is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', fluid: true},
    })
    expect(wrapper.classes()).not.toContain('w-100')
  })

  it('updates img-fluid class reactively', async () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', fluid: false},
    })
    expect(wrapper.classes()).not.toContain('img-fluid')
    await wrapper.setProps({fluid: true})
    expect(wrapper.classes()).toContain('img-fluid')
  })

  // --- fluidGrow prop ---

  it('has img-fluid and w-100 classes when fluidGrow is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', fluidGrow: true},
    })
    expect(wrapper.classes()).toContain('img-fluid')
    expect(wrapper.classes()).toContain('w-100')
  })

  it('updates fluidGrow classes reactively', async () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', fluidGrow: false},
    })
    expect(wrapper.classes()).not.toContain('w-100')
    await wrapper.setProps({fluidGrow: true})
    expect(wrapper.classes()).toContain('img-fluid')
    expect(wrapper.classes()).toContain('w-100')
  })

  // --- block prop ---

  it('has d-block class when block is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', block: true},
    })
    expect(wrapper.classes()).toContain('d-block')
  })

  it('does not have d-block class when block is false', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', block: false},
    })
    expect(wrapper.classes()).not.toContain('d-block')
  })

  it('updates d-block class reactively', async () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', block: false},
    })
    expect(wrapper.classes()).not.toContain('d-block')
    await wrapper.setProps({block: true})
    expect(wrapper.classes()).toContain('d-block')
  })

  // --- lazy prop ---

  it('has loading=lazy when lazy is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', lazy: true},
    })
    expect(wrapper.attributes('loading')).toBe('lazy')
  })

  it('has loading=eager when lazy is false', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', lazy: false},
    })
    expect(wrapper.attributes('loading')).toBe('eager')
  })

  it('updates loading attribute reactively', async () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', lazy: false},
    })
    expect(wrapper.attributes('loading')).toBe('eager')
    await wrapper.setProps({lazy: true})
    expect(wrapper.attributes('loading')).toBe('lazy')
  })

  // --- width and height props ---

  it('sets width attribute from width prop', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', width: 200},
    })
    expect(wrapper.attributes('width')).toBe('200')
  })

  it('sets height attribute from height prop', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', height: 150},
    })
    expect(wrapper.attributes('height')).toBe('150')
  })

  it('sets both width and height attributes', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', width: 200, height: 150},
    })
    expect(wrapper.attributes('width')).toBe('200')
    expect(wrapper.attributes('height')).toBe('150')
  })

  it('does not set width attribute when width is not provided', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.attributes('width')).toBeUndefined()
  })

  it('does not set height attribute when height is not provided', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.attributes('height')).toBeUndefined()
  })

  it('accepts string width and height', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', width: '300', height: '250'},
    })
    expect(wrapper.attributes('width')).toBe('300')
    expect(wrapper.attributes('height')).toBe('250')
  })

  it('updates width reactively', async () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', width: 100},
    })
    expect(wrapper.attributes('width')).toBe('100')
    await wrapper.setProps({width: 200})
    expect(wrapper.attributes('width')).toBe('200')
  })

  // --- placement prop ---

  it('has float-start class when placement is start', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', placement: 'start'},
    })
    expect(wrapper.classes()).toContain('float-start')
    expect(wrapper.classes()).not.toContain('float-end')
    expect(wrapper.classes()).not.toContain('mx-auto')
  })

  it('has float-end class when placement is end', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', placement: 'end'},
    })
    expect(wrapper.classes()).toContain('float-end')
    expect(wrapper.classes()).not.toContain('float-start')
    expect(wrapper.classes()).not.toContain('mx-auto')
  })

  it('has mx-auto and d-block classes when placement is center', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', placement: 'center'},
    })
    expect(wrapper.classes()).toContain('mx-auto')
    expect(wrapper.classes()).toContain('d-block')
    expect(wrapper.classes()).not.toContain('float-start')
    expect(wrapper.classes()).not.toContain('float-end')
  })

  it('does not have placement classes when placement is undefined', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.classes()).not.toContain('float-start')
    expect(wrapper.classes()).not.toContain('float-end')
    expect(wrapper.classes()).not.toContain('mx-auto')
  })

  it('updates placement classes reactively', async () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', placement: 'start'},
    })
    expect(wrapper.classes()).toContain('float-start')
    await wrapper.setProps({placement: 'end'})
    expect(wrapper.classes()).not.toContain('float-start')
    expect(wrapper.classes()).toContain('float-end')
  })

  // --- srcset prop ---

  it('sets srcset attribute from string prop', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', srcset: '/small.jpg 480w,/large.jpg 1024w'},
    })
    expect(wrapper.attributes('srcset')).toBe('/small.jpg 480w,/large.jpg 1024w')
  })

  it('sets srcset attribute from array prop', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', srcset: ['/small.jpg 480w', '/large.jpg 1024w']},
    })
    expect(wrapper.attributes('srcset')).toBe('/small.jpg 480w,/large.jpg 1024w')
  })

  it('filters empty strings from srcset string', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', srcset: '/small.jpg 480w,,/large.jpg 1024w'},
    })
    expect(wrapper.attributes('srcset')).toBe('/small.jpg 480w,/large.jpg 1024w')
  })

  it('filters empty strings from srcset array', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', srcset: ['/small.jpg 480w', '', '/large.jpg 1024w']},
    })
    expect(wrapper.attributes('srcset')).toBe('/small.jpg 480w,/large.jpg 1024w')
  })

  it('does not render srcset when not provided', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.attributes('srcset')).toBeUndefined()
  })

  it('does not render srcset when blank is true', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, srcset: '/small.jpg 480w'},
    })
    expect(wrapper.attributes('srcset')).toBeUndefined()
  })

  // --- sizes prop ---

  it('sets sizes attribute from string prop', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', sizes: '(max-width: 600px) 480px,800px'},
    })
    expect(wrapper.attributes('sizes')).toBe('(max-width: 600px) 480px,800px')
  })

  it('sets sizes attribute from array prop', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', sizes: ['(max-width: 600px) 480px', '800px']},
    })
    expect(wrapper.attributes('sizes')).toBe('(max-width: 600px) 480px,800px')
  })

  it('filters empty strings from sizes string', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', sizes: '(max-width: 600px) 480px,,800px'},
    })
    expect(wrapper.attributes('sizes')).toBe('(max-width: 600px) 480px,800px')
  })

  it('filters empty strings from sizes array', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', sizes: ['(max-width: 600px) 480px', '', '800px']},
    })
    expect(wrapper.attributes('sizes')).toBe('(max-width: 600px) 480px,800px')
  })

  it('does not render sizes when not provided', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg'},
    })
    expect(wrapper.attributes('sizes')).toBeUndefined()
  })

  it('does not render sizes when blank is true', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, sizes: '800px'},
    })
    expect(wrapper.attributes('sizes')).toBeUndefined()
  })

  // --- blank prop ---

  it('renders blank SVG data URI when blank is true', () => {
    const wrapper = mount(BImg, {
      props: {blank: true},
    })
    const src = wrapper.attributes('src')
    expect(src).toBeDefined()
    expect(src).toContain('data:image/svg+xml')
  })

  it('uses transparent as default blank color', () => {
    const wrapper = mount(BImg, {
      props: {blank: true},
    })
    const src = wrapper.attributes('src')!
    const decoded = decodeURIComponent(src)
    expect(decoded).toContain('fill:transparent')
  })

  it('uses custom blankColor in blank SVG', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, blankColor: 'red'},
    })
    const src = wrapper.attributes('src')!
    const decoded = decodeURIComponent(src)
    expect(decoded).toContain('fill:red')
  })

  it('defaults to 1x1 dimensions when blank with no width or height', () => {
    const wrapper = mount(BImg, {
      props: {blank: true},
    })
    expect(wrapper.attributes('width')).toBe('1')
    expect(wrapper.attributes('height')).toBe('1')
  })

  it('uses width for both dimensions when blank with only width', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, width: 200},
    })
    expect(wrapper.attributes('width')).toBe('200')
    expect(wrapper.attributes('height')).toBe('200')
  })

  it('uses height for both dimensions when blank with only height', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, height: 150},
    })
    expect(wrapper.attributes('width')).toBe('150')
    expect(wrapper.attributes('height')).toBe('150')
  })

  it('uses explicit width and height when blank with both provided', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, width: 200, height: 150},
    })
    expect(wrapper.attributes('width')).toBe('200')
    expect(wrapper.attributes('height')).toBe('150')
  })

  it('ignores src prop when blank is true', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, src: '/test.jpg'},
    })
    const src = wrapper.attributes('src')
    expect(src).toContain('data:image/svg+xml')
    expect(src).not.toBe('/test.jpg')
  })

  it('includes dimensions in blank SVG viewBox', () => {
    const wrapper = mount(BImg, {
      props: {blank: true, width: 300, height: 200},
    })
    const src = wrapper.attributes('src')!
    const decoded = decodeURIComponent(src)
    expect(decoded).toContain('viewBox="0 0 300 200"')
  })

  it('updates blankColor reactively', async () => {
    const wrapper = mount(BImg, {
      props: {blank: true, blankColor: 'red'},
    })
    let decoded = decodeURIComponent(wrapper.attributes('src')!)
    expect(decoded).toContain('fill:red')
    await wrapper.setProps({blankColor: 'blue'})
    decoded = decodeURIComponent(wrapper.attributes('src')!)
    expect(decoded).toContain('fill:blue')
  })

  it('switches from blank to src reactively', async () => {
    const wrapper = mount(BImg, {
      props: {blank: true, src: '/test.jpg'},
    })
    expect(wrapper.attributes('src')).toContain('data:image/svg+xml')
    await wrapper.setProps({blank: false})
    expect(wrapper.attributes('src')).toBe('/test.jpg')
  })

  // --- rounded props ---

  it('has rounded class when rounded is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', rounded: true},
    })
    expect(wrapper.classes()).toContain('rounded')
  })

  it('does not have rounded class when rounded is false', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', rounded: false},
    })
    expect(wrapper.classes()).not.toContain('rounded')
  })

  it('has rounded-circle class when rounded is circle', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', rounded: 'circle'},
    })
    expect(wrapper.classes()).toContain('rounded-circle')
  })

  it('has rounded-pill class when rounded is pill', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', rounded: 'pill'},
    })
    expect(wrapper.classes()).toContain('rounded-pill')
  })

  it('has rounded-0 class when rounded is none', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', rounded: 'none'},
    })
    expect(wrapper.classes()).toContain('rounded-0')
  })

  it('has rounded-top class when roundedTop is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', roundedTop: true},
    })
    expect(wrapper.classes()).toContain('rounded-top')
  })

  it('has rounded-bottom class when roundedBottom is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', roundedBottom: true},
    })
    expect(wrapper.classes()).toContain('rounded-bottom')
  })

  it('has rounded-start class when roundedStart is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', roundedStart: true},
    })
    expect(wrapper.classes()).toContain('rounded-start')
  })

  it('has rounded-end class when roundedEnd is true', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', roundedEnd: true},
    })
    expect(wrapper.classes()).toContain('rounded-end')
  })

  it('updates rounded class reactively', async () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', rounded: false},
    })
    expect(wrapper.classes()).not.toContain('rounded')
    await wrapper.setProps({rounded: true})
    expect(wrapper.classes()).toContain('rounded')
  })

  it('has rounded-1 class when rounded is sm', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', rounded: 'sm'},
    })
    expect(wrapper.classes()).toContain('rounded-1')
  })

  it('has rounded-5 class when rounded is lg', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', rounded: 'lg'},
    })
    expect(wrapper.classes()).toContain('rounded-5')
  })

  // --- combined prop behavior ---

  it('applies multiple classes simultaneously', () => {
    const wrapper = mount(BImg, {
      props: {
        src: '/test.jpg',
        fluid: true,
        thumbnail: true,
        block: true,
        rounded: true,
      },
    })
    expect(wrapper.classes()).toContain('b-img')
    expect(wrapper.classes()).toContain('img-fluid')
    expect(wrapper.classes()).toContain('img-thumbnail')
    expect(wrapper.classes()).toContain('d-block')
    expect(wrapper.classes()).toContain('rounded')
  })

  it('center placement also adds d-block', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', placement: 'center'},
    })
    expect(wrapper.classes()).toContain('d-block')
    expect(wrapper.classes()).toContain('mx-auto')
  })

  it('start placement does not add d-block', () => {
    const wrapper = mount(BImg, {
      props: {src: '/test.jpg', placement: 'start'},
    })
    expect(wrapper.classes()).not.toContain('d-block')
  })
})
