import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import {ref} from 'vue'
import BAvatar from './BAvatar.vue'
import BLink from '../BLink/BLink.vue'
import BBadge from '../BBadge/BBadge.vue'
import {avatarGroupInjectionKey} from '../../utils/keys'

describe('avatar', () => {
  enableAutoUnmount(afterEach)

  it('has static b-avatar class', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.classes()).toContain('b-avatar')
  })

  it('tag is button when prop button is true', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true},
    })
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('has attr type when prop button to be default button', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true},
    })
    expect(wrapper.attributes('type')).toBe('button')
  })

  it('has attr type when prop button to be prop buttonType', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true, buttonType: 'submit'},
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('does not have attr type when prop buttonType but not prop button', () => {
    const wrapper = mount(BAvatar, {
      props: {button: false, buttonType: 'submit'},
    })
    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('tag is default span', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has class `b-avatar-sm` when prop size is `sm`', () => {
    const wrapper = mount(BAvatar, {props: {size: 'sm'}})
    expect(wrapper.attributes('style')).toBeUndefined()
    expect(wrapper.classes()).toContain('b-avatar-sm')
  })

  it('does not include a b-avatar size class when size is undefined (default)', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.attributes('style')).toBeUndefined()
    expect(wrapper.classes()).not.toContain('b-avatar-md')
    expect(wrapper.classes()).not.toContain('b-avatar-sm')
    expect(wrapper.classes()).not.toContain('b-avatar-lg')
  })

  it('has class `b-avatar-lg` when prop size is `lg`', () => {
    const wrapper = mount(BAvatar, {props: {size: 'lg'}})
    expect(wrapper.attributes('style')).toBeUndefined()
    expect(wrapper.classes()).toContain('b-avatar-lg')
  })

  it('converts to `px` when prop size is a numeric value', async () => {
    const wrapper1 = mount(BAvatar, {props: {size: 20}})
    expect(wrapper1.attributes('style')).toEqual('width: 20px; height: 20px;')
    await wrapper1.setProps({size: '24.5'})
    expect(wrapper1.attributes('style')).toEqual('width: 24.5px; height: 24.5px;')
  })

  it('applies correct styles when prop size ends in `px`, `em` or `rem`', async () => {
    const wrapper1 = mount(BAvatar, {props: {size: '5px'}})
    expect(wrapper1.attributes('style')).toEqual('width: 5px; height: 5px;')
    await wrapper1.setProps({size: '5em'})
    expect(wrapper1.attributes('style')).toEqual('width: 5em; height: 5em;')
    await wrapper1.setProps({size: '5rem'})
    expect(wrapper1.attributes('style')).toEqual('width: 5rem; height: 5rem;')
  })

  it('does not apply styles when prop size is a non-decimal numeric value', () => {
    const wrapper = mount(BAvatar, {props: {size: '0x123'}})
    expect(wrapper.attributes('style')).toBeUndefined()
  })

  it('style does not have width: lg etc when prop size is a literal Size value', () => {
    const wrapper = mount(BAvatar, {props: {size: 'lg'}})
    expect(wrapper.attributes('style')).toBeUndefined()
  })

  // Default content rendering
  it('renders default SVG icon when no slot, src, or text', () => {
    const wrapper = mount(BAvatar)
    const $span = wrapper.find('.b-avatar-img')
    expect($span.exists()).toBe(true)
    const $svg = $span.find('svg')
    expect($svg.exists()).toBe(true)
    expect($svg.classes()).toContain('bi')
    expect($svg.classes()).toContain('bi-person-fill')
  })

  // Text rendering
  it('renders text when prop text is set', () => {
    const wrapper = mount(BAvatar, {props: {text: 'BV'}})
    const $span = wrapper.find('.b-avatar-text')
    expect($span.exists()).toBe(true)
    expect($span.text()).toBe('BV')
  })

  it('does not render SVG when text is set', () => {
    const wrapper = mount(BAvatar, {props: {text: 'AB'}})
    expect(wrapper.find('svg').exists()).toBe(false)
  })

  it('applies text font-size style for custom sizes', () => {
    const wrapper = mount(BAvatar, {props: {text: 'AB', size: '4em'}})
    const $span = wrapper.find('.b-avatar-text')
    expect($span.attributes('style')).toContain('font-size')
    expect($span.attributes('style')).toContain('calc(4em * 0.4)')
  })

  it('does not apply text font-size style for literal sizes', () => {
    const wrapper = mount(BAvatar, {props: {text: 'AB', size: 'lg'}})
    const $span = wrapper.find('.b-avatar-text')
    expect($span.attributes('style')).toBeUndefined()
  })

  // Image rendering
  it('renders img when prop src is set', () => {
    const wrapper = mount(BAvatar, {props: {src: 'https://example.com/avatar.png'}})
    const $span = wrapper.find('.b-avatar-img')
    expect($span.exists()).toBe(true)
    const $img = $span.find('img')
    expect($img.exists()).toBe(true)
    expect($img.attributes('src')).toBe('https://example.com/avatar.png')
  })

  it('has default alt attribute of avatar on img', () => {
    const wrapper = mount(BAvatar, {props: {src: 'https://example.com/avatar.png'}})
    const $img = wrapper.find('img')
    expect($img.attributes('alt')).toBe('avatar')
  })

  it('has custom alt attribute on img when prop alt is set', () => {
    const wrapper = mount(BAvatar, {
      props: {src: 'https://example.com/avatar.png', alt: 'User Photo'},
    })
    const $img = wrapper.find('img')
    expect($img.attributes('alt')).toBe('User Photo')
  })

  it('does not render SVG when src is set', () => {
    const wrapper = mount(BAvatar, {props: {src: 'https://example.com/avatar.png'}})
    expect(wrapper.find('svg').exists()).toBe(false)
  })

  it('does not render text span when src is set', () => {
    const wrapper = mount(BAvatar, {props: {src: 'https://example.com/avatar.png', text: 'AB'}})
    expect(wrapper.find('.b-avatar-text').exists()).toBe(false)
  })

  // Default slot rendering
  it('renders default slot content', () => {
    const wrapper = mount(BAvatar, {
      slots: {default: '<span class="custom-content">Hello</span>'},
    })
    const $span = wrapper.find('.b-avatar-custom')
    expect($span.exists()).toBe(true)
    expect($span.find('.custom-content').exists()).toBe(true)
    expect($span.text()).toBe('Hello')
  })

  it('default slot takes priority over src', () => {
    const wrapper = mount(BAvatar, {
      props: {src: 'https://example.com/avatar.png'},
      slots: {default: 'Custom'},
    })
    expect(wrapper.find('.b-avatar-custom').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('default slot takes priority over text', () => {
    const wrapper = mount(BAvatar, {
      props: {text: 'AB'},
      slots: {default: 'Custom'},
    })
    expect(wrapper.find('.b-avatar-custom').exists()).toBe(true)
    expect(wrapper.find('.b-avatar-text').exists()).toBe(false)
  })

  // Image error handling
  it('emits img-error on image error', async () => {
    const wrapper = mount(BAvatar, {props: {src: 'https://example.com/bad.png'}})
    const $img = wrapper.find('img')
    await $img.trigger('error')
    expect(wrapper.emitted('img-error')).toBeDefined()
    expect(wrapper.emitted('img-error')!.length).toBe(1)
  })

  it('falls back to SVG icon after image error', async () => {
    const wrapper = mount(BAvatar, {props: {src: 'https://example.com/bad.png'}})
    expect(wrapper.find('img').exists()).toBe(true)
    const $img = wrapper.find('img')
    await $img.trigger('error')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('updates img when src prop changes', async () => {
    const wrapper = mount(BAvatar, {props: {src: 'https://example.com/a.png'}})
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/a.png')
    await wrapper.setProps({src: 'https://example.com/b.png'})
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/b.png')
  })

  // Variant classes
  it('has text-bg-secondary class by default', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.classes()).toContain('text-bg-secondary')
  })

  it('has text-bg-{variant} class when prop variant is set', () => {
    const wrapper = mount(BAvatar, {props: {variant: 'primary'}})
    expect(wrapper.classes()).toContain('text-bg-primary')
  })

  it('has bg-{bgVariant} class when prop bgVariant is set', () => {
    const wrapper = mount(BAvatar, {props: {bgVariant: 'danger'}})
    expect(wrapper.classes()).toContain('bg-danger')
  })

  it('has text-{textVariant} class when prop textVariant is set', () => {
    const wrapper = mount(BAvatar, {props: {textVariant: 'white'}})
    expect(wrapper.classes()).toContain('text-white')
  })

  // Square prop
  it('has rounded-0 class when prop square is true', () => {
    const wrapper = mount(BAvatar, {props: {square: true}})
    expect(wrapper.classes()).toContain('rounded-0')
  })

  it('does not have rounded-circle class when prop square is true', () => {
    const wrapper = mount(BAvatar, {props: {square: true}})
    expect(wrapper.classes()).not.toContain('rounded-circle')
  })

  it('has rounded-circle class by default', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.classes()).toContain('rounded-circle')
  })

  // Button behavior
  it('has btn class when prop button is true', () => {
    const wrapper = mount(BAvatar, {props: {button: true}})
    expect(wrapper.classes()).toContain('btn')
  })

  it('has btn-{variant} class when prop button is true', () => {
    const wrapper = mount(BAvatar, {props: {button: true, variant: 'primary'}})
    expect(wrapper.classes()).toContain('btn-primary')
  })

  it('does not have btn class when prop button is false', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.classes()).not.toContain('btn')
  })

  // Click events
  it('emits click event when button is clicked', async () => {
    const wrapper = mount(BAvatar, {props: {button: true}})
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeDefined()
    expect(wrapper.emitted('click')!.length).toBe(1)
  })

  it('does not emit click when not a button or link', async () => {
    const wrapper = mount(BAvatar)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('does not emit click when disabled button', async () => {
    const wrapper = mount(BAvatar, {props: {button: true, disabled: true}})
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  // Disabled prop
  it('has disabled attribute when prop disabled is true', () => {
    const wrapper = mount(BAvatar, {props: {disabled: true}})
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('does not have disabled attribute when prop disabled is false', () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  // Link behavior
  it('renders as BLink when prop href is set', () => {
    const wrapper = mount(BAvatar, {props: {href: '/profile'}})
    const $link = wrapper.findComponent(BLink)
    expect($link.exists()).toBe(true)
  })

  it('does not have type attribute when rendered as link', () => {
    const wrapper = mount(BAvatar, {props: {href: '/profile'}})
    expect(wrapper.attributes('type')).toBeUndefined()
  })

  it('emits click event when link is clicked', async () => {
    const wrapper = mount(BAvatar, {props: {href: '/profile'}})
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeDefined()
  })

  it('does not emit click when disabled link', async () => {
    const wrapper = mount(BAvatar, {props: {href: '/profile', disabled: true}})
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  // Badge rendering
  it('does not show badge by default', () => {
    const wrapper = mount(BAvatar)
    const $badge = wrapper.findComponent(BBadge)
    expect($badge.exists()).toBe(false)
  })

  it('shows badge when prop badge is true', () => {
    const wrapper = mount(BAvatar, {props: {badge: true}})
    const $badge = wrapper.findComponent(BBadge)
    expect($badge.exists()).toBe(true)
  })

  it('shows badge when prop badge is empty string', () => {
    const wrapper = mount(BAvatar, {props: {badge: ''}})
    const $badge = wrapper.findComponent(BBadge)
    expect($badge.exists()).toBe(true)
  })

  it('shows badge with text when prop badge is a string', () => {
    const wrapper = mount(BAvatar, {props: {badge: '5'}})
    const $badge = wrapper.findComponent(BBadge)
    expect($badge.exists()).toBe(true)
    expect($badge.text()).toBe('5')
  })

  it('passes badgeVariant to BBadge variant prop', () => {
    const wrapper = mount(BAvatar, {props: {badge: true, badgeVariant: 'danger'}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.props('variant')).toBe('danger')
  })

  it('passes default badgeVariant of primary to BBadge', () => {
    const wrapper = mount(BAvatar, {props: {badge: true}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.props('variant')).toBe('primary')
  })

  it('passes badgePill to BBadge pill prop', () => {
    const wrapper = mount(BAvatar, {props: {badge: true, badgePill: true}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.props('pill')).toBe(true)
  })

  it('passes badgeDotIndicator to BBadge dotIndicator prop', () => {
    const wrapper = mount(BAvatar, {props: {badge: true, badgeDotIndicator: true}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.props('dotIndicator')).toBe(true)
  })

  it('badge is implicitly dot when badge is true and no badge text or slot', () => {
    const wrapper = mount(BAvatar, {props: {badge: true}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.props('dotIndicator')).toBe(true)
  })

  it('badge is not implicitly dot when badge has text', () => {
    const wrapper = mount(BAvatar, {props: {badge: 'N'}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.props('dotIndicator')).toBe(false)
  })

  it('passes badgePlacement to BBadge placement prop', () => {
    const wrapper = mount(BAvatar, {props: {badge: true, badgePlacement: 'top-start'}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.props('placement')).toBe('top-start')
  })

  it('passes default badgePlacement of bottom-end to BBadge', () => {
    const wrapper = mount(BAvatar, {props: {badge: true}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.props('placement')).toBe('bottom-end')
  })

  it('passes badgeBgVariant to BBadge bgVariant prop', () => {
    const wrapper = mount(BAvatar, {props: {badge: true, badgeBgVariant: 'success'}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.props('bgVariant')).toBe('success')
  })

  it('passes badgeTextVariant to BBadge textVariant prop', () => {
    const wrapper = mount(BAvatar, {props: {badge: true, badgeTextVariant: 'dark'}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.props('textVariant')).toBe('dark')
  })

  it('renders badge slot content', () => {
    const wrapper = mount(BAvatar, {
      slots: {badge: '<span class="custom-badge">!</span>'},
    })
    const $badge = wrapper.findComponent(BBadge)
    expect($badge.exists()).toBe(true)
    expect($badge.find('.custom-badge').exists()).toBe(true)
  })

  it('badge slot shows badge without badge prop', () => {
    const wrapper = mount(BAvatar, {
      slots: {badge: 'Badge Text'},
    })
    const $badge = wrapper.findComponent(BBadge)
    expect($badge.exists()).toBe(true)
    expect($badge.text()).toBe('Badge Text')
  })

  it('applies badge font-size style for custom sizes', () => {
    const wrapper = mount(BAvatar, {props: {badge: true, size: '4em'}})
    const $badge = wrapper.getComponent(BBadge)
    expect($badge.attributes('style')).toContain('font-size')
    expect($badge.attributes('style')).toContain('calc(4em * 0.27999999999999997)')
  })

  // badge class with default slot
  it('has badge class when variant is set and has default slot', () => {
    const wrapper = mount(BAvatar, {
      props: {variant: 'primary'},
      slots: {default: 'Custom'},
    })
    expect(wrapper.classes()).toContain('badge')
  })

  it('does not have badge class when button is true even with default slot', () => {
    const wrapper = mount(BAvatar, {
      props: {button: true, variant: 'primary'},
      slots: {default: 'Custom'},
    })
    expect(wrapper.classes()).not.toContain('badge')
  })

  // Group injection
  it('uses size from parent group', () => {
    const wrapper = mount(BAvatar, {
      global: {
        provide: {
          [avatarGroupInjectionKey as unknown as symbol]: {
            overlapScale: ref(0.15),
            size: ref('60px'),
            square: ref(false),
            rounded: ref('circle' as const),
            roundedTop: ref(undefined),
            roundedBottom: ref(undefined),
            roundedStart: ref(undefined),
            roundedEnd: ref(undefined),
            variant: ref(null),
            bgVariant: ref(null),
            textVariant: ref(null),
          },
        },
      },
    })
    expect(wrapper.attributes('style')).toContain('width: 60px')
    expect(wrapper.attributes('style')).toContain('height: 60px')
  })

  it('uses variant from parent group', () => {
    const wrapper = mount(BAvatar, {
      global: {
        provide: {
          [avatarGroupInjectionKey as unknown as symbol]: {
            overlapScale: ref(0.15),
            size: ref(undefined),
            square: ref(false),
            rounded: ref('circle' as const),
            roundedTop: ref(undefined),
            roundedBottom: ref(undefined),
            roundedStart: ref(undefined),
            roundedEnd: ref(undefined),
            variant: ref('danger'),
            bgVariant: ref(null),
            textVariant: ref(null),
          },
        },
      },
    })
    expect(wrapper.classes()).toContain('text-bg-danger')
  })

  it('uses square from parent group', () => {
    const wrapper = mount(BAvatar, {
      global: {
        provide: {
          [avatarGroupInjectionKey as unknown as symbol]: {
            overlapScale: ref(0.15),
            size: ref(undefined),
            square: ref(true),
            rounded: ref('circle' as const),
            roundedTop: ref(undefined),
            roundedBottom: ref(undefined),
            roundedStart: ref(undefined),
            roundedEnd: ref(undefined),
            variant: ref(null),
            bgVariant: ref(null),
            textVariant: ref(null),
          },
        },
      },
    })
    expect(wrapper.classes()).toContain('rounded-0')
  })

  it('applies margin styles from parent group overlapScale', () => {
    const wrapper = mount(BAvatar, {
      global: {
        provide: {
          [avatarGroupInjectionKey as unknown as symbol]: {
            overlapScale: ref(0.15),
            size: ref('40px'),
            square: ref(false),
            rounded: ref('circle' as const),
            roundedTop: ref(undefined),
            roundedBottom: ref(undefined),
            roundedStart: ref(undefined),
            roundedEnd: ref(undefined),
            variant: ref(null),
            bgVariant: ref(null),
            textVariant: ref(null),
          },
        },
      },
    })
    expect(wrapper.attributes('style')).toContain('margin-left: calc(40px * -0.15)')
    expect(wrapper.attributes('style')).toContain('margin-right: calc(40px * -0.15)')
  })

  it('uses bgVariant from parent group', () => {
    const wrapper = mount(BAvatar, {
      global: {
        provide: {
          [avatarGroupInjectionKey as unknown as symbol]: {
            overlapScale: ref(0.15),
            size: ref(undefined),
            square: ref(false),
            rounded: ref('circle' as const),
            roundedTop: ref(undefined),
            roundedBottom: ref(undefined),
            roundedStart: ref(undefined),
            roundedEnd: ref(undefined),
            variant: ref(null),
            bgVariant: ref('warning'),
            textVariant: ref(null),
          },
        },
      },
    })
    expect(wrapper.classes()).toContain('bg-warning')
  })

  it('uses textVariant from parent group', () => {
    const wrapper = mount(BAvatar, {
      global: {
        provide: {
          [avatarGroupInjectionKey as unknown as symbol]: {
            overlapScale: ref(0.15),
            size: ref(undefined),
            square: ref(false),
            rounded: ref('circle' as const),
            roundedTop: ref(undefined),
            roundedBottom: ref(undefined),
            roundedStart: ref(undefined),
            roundedEnd: ref(undefined),
            variant: ref(null),
            bgVariant: ref(null),
            textVariant: ref('dark'),
          },
        },
      },
    })
    expect(wrapper.classes()).toContain('text-dark')
  })
})
