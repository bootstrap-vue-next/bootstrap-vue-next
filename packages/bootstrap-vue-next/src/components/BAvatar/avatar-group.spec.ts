import {enableAutoUnmount, mount} from '@vue/test-utils'
import {afterEach, describe, expect, it} from 'vitest'
import BAvatarGroup from './BAvatarGroup.vue'
import BAvatar from './BAvatar.vue'
import {h} from 'vue'

describe('avatar-group', () => {
  enableAutoUnmount(afterEach)

  // Helper to get inner div
  const getInnerDiv = (wrapper: ReturnType<typeof mount>) => wrapper.find('.b-avatar-group-inner')

  describe('rendering', () => {
    it('has static class b-avatar-group', () => {
      const wrapper = mount(BAvatarGroup)
      expect(wrapper.classes()).toContain('b-avatar-group')
    })

    it('has role group attribute', () => {
      const wrapper = mount(BAvatarGroup)
      expect(wrapper.attributes('role')).toBe('group')
    })

    it('tag is div by default', () => {
      const wrapper = mount(BAvatarGroup)
      expect(wrapper.element.tagName).toBe('DIV')
    })

    it('tag changes with prop tag', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {tag: 'span'},
      })
      expect(wrapper.element.tagName).toBe('SPAN')
    })

    it('tag is reactive', async () => {
      const wrapper = mount(BAvatarGroup, {
        props: {tag: 'div'},
      })
      expect(wrapper.element.tagName).toBe('DIV')
      await wrapper.setProps({tag: 'section'})
      expect(wrapper.element.tagName).toBe('SECTION')
    })

    it('has inner div with class b-avatar-group-inner', () => {
      const wrapper = mount(BAvatarGroup)
      const inner = getInnerDiv(wrapper)
      expect(inner.exists()).toBe(true)
      expect(inner.element.tagName).toBe('DIV')
    })

    it('inner div persists when tag changes', async () => {
      const wrapper = mount(BAvatarGroup, {
        props: {tag: 'div'},
      })
      await wrapper.setProps({tag: 'span'})
      const inner = getInnerDiv(wrapper)
      expect(inner.exists()).toBe(true)
      expect(inner.classes()).toContain('b-avatar-group-inner')
    })
  })

  describe('slot', () => {
    it('renders default slot text', () => {
      const wrapper = mount(BAvatarGroup, {
        slots: {default: 'foobar'},
      })
      const inner = getInnerDiv(wrapper)
      expect(inner.text()).toBe('foobar')
    })

    it('renders default slot HTML', () => {
      const wrapper = mount(BAvatarGroup, {
        slots: {default: '<span class="custom">hello</span>'},
      })
      const inner = getInnerDiv(wrapper)
      const span = inner.find('.custom')
      expect(span.exists()).toBe(true)
      expect(span.text()).toBe('hello')
    })

    it('renders empty when no slot content', () => {
      const wrapper = mount(BAvatarGroup)
      const inner = getInnerDiv(wrapper)
      expect(inner.text()).toBe('')
    })

    it('renders multiple BAvatar children', () => {
      const wrapper = mount(BAvatarGroup, {
        slots: {
          default: () => [h(BAvatar), h(BAvatar), h(BAvatar)],
        },
      })
      const avatars = wrapper.findAllComponents(BAvatar)
      expect(avatars).toHaveLength(3)
    })
  })

  describe('overlap', () => {
    it('defaults to 0.3', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {size: '40px'},
      })
      const inner = getInnerDiv(wrapper)
      // overlapScale = 0.3 / 2 = 0.15
      expect(inner.attributes('style')).toContain('calc(40px * 0.15)')
    })

    it('applies custom overlap value', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {overlap: 0.5, size: '40px'},
      })
      const inner = getInnerDiv(wrapper)
      // overlapScale = 0.5 / 2 = 0.25
      expect(inner.attributes('style')).toContain('calc(40px * 0.25)')
    })

    it('clamps overlap to minimum 0', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {overlap: -0.5, size: '40px'},
      })
      const inner = getInnerDiv(wrapper)
      // overlapScale = Math.min(Math.max(-0.5, 0), 1) / 2 = 0
      expect(inner.attributes('style')).toContain('calc(40px * 0)')
    })

    it('clamps overlap to maximum 1', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {overlap: 2, size: '40px'},
      })
      const inner = getInnerDiv(wrapper)
      // overlapScale = Math.min(Math.max(2, 0), 1) / 2 = 0.5
      expect(inner.attributes('style')).toContain('calc(40px * 0.5)')
    })

    it('has no padding style when size is undefined', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {overlap: 0.5},
      })
      const inner = getInnerDiv(wrapper)
      expect(inner.attributes('style')).toBeUndefined()
    })

    it('overlap is reactive', async () => {
      const wrapper = mount(BAvatarGroup, {
        props: {overlap: 0.4, size: '40px'},
      })
      const inner = getInnerDiv(wrapper)
      // overlapScale = 0.4 / 2 = 0.2
      expect(inner.attributes('style')).toContain('calc(40px * 0.2)')
      await wrapper.setProps({overlap: 0.6})
      // overlapScale = 0.6 / 2 = 0.3
      expect(inner.attributes('style')).toContain('calc(40px * 0.3)')
    })

    it('applies paddingLeft and paddingRight', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {overlap: 0.4, size: '40px'},
      })
      const inner = getInnerDiv(wrapper)
      const style = inner.attributes('style')
      expect(style).toContain('padding-left')
      expect(style).toContain('padding-right')
    })

    it('accepts string overlap value', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {overlap: '0.6', size: '40px'},
      })
      const inner = getInnerDiv(wrapper)
      // overlapScale = 0.6 / 2 = 0.3
      expect(inner.attributes('style')).toContain('calc(40px * 0.3)')
    })
  })

  describe('size', () => {
    it('size is undefined by default', () => {
      const wrapper = mount(BAvatarGroup)
      const inner = getInnerDiv(wrapper)
      expect(inner.attributes('style')).toBeUndefined()
    })

    it('applies padding style with numeric size', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {size: 50},
      })
      const inner = getInnerDiv(wrapper)
      // Default overlap = 0.3, overlapScale = 0.15
      expect(inner.attributes('style')).toContain('calc(50px * 0.15)')
    })

    it('applies padding style with px size', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {size: '60px'},
      })
      const inner = getInnerDiv(wrapper)
      expect(inner.attributes('style')).toContain('calc(60px * 0.15)')
    })

    it('applies padding style with em size', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {size: '3em'},
      })
      const inner = getInnerDiv(wrapper)
      expect(inner.attributes('style')).toContain('calc(3em * 0.15)')
    })

    it('applies padding style with rem size', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {size: '3rem'},
      })
      const inner = getInnerDiv(wrapper)
      expect(inner.attributes('style')).toContain('calc(3rem * 0.15)')
    })

    it('size is reactive', async () => {
      const wrapper = mount(BAvatarGroup, {
        props: {size: '40px'},
      })
      const inner = getInnerDiv(wrapper)
      expect(inner.attributes('style')).toContain('calc(40px * 0.15)')
      await wrapper.setProps({size: '80px'})
      expect(inner.attributes('style')).toContain('calc(80px * 0.15)')
    })

    it('handles string numeric size', () => {
      const wrapper = mount(BAvatarGroup, {
        props: {size: '100'},
      })
      const inner = getInnerDiv(wrapper)
      expect(inner.attributes('style')).toContain('calc(100px * 0.15)')
    })
  })

  describe('provide/inject integration with BAvatar children', () => {
    describe('size', () => {
      it('child BAvatar inherits size from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {size: '60px'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.attributes('style')).toContain('width: 60px')
        expect(avatar.attributes('style')).toContain('height: 60px')
      })

      it('group size overrides child BAvatar size', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {size: '80px'},
          slots: {
            default: () => h(BAvatar, {size: '30px'}),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.attributes('style')).toContain('width: 80px')
        expect(avatar.attributes('style')).toContain('height: 80px')
      })

      it('child BAvatar uses named size from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {size: 'lg'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('b-avatar-lg')
      })

      it('child BAvatar uses sm size from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {size: 'sm'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('b-avatar-sm')
      })
    })

    describe('square', () => {
      it('child BAvatar inherits square from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {square: true},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('rounded-0')
      })

      it('child BAvatar is not square when group square is false', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {square: false},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).not.toContain('rounded-0')
      })
    })

    describe('variant', () => {
      it('child BAvatar inherits variant from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {variant: 'primary'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('text-bg-primary')
      })

      it('group variant overrides child BAvatar variant', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {variant: 'danger'},
          slots: {
            default: () => h(BAvatar, {variant: 'success'}),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('text-bg-danger')
        expect(avatar.classes()).not.toContain('text-bg-success')
      })
    })

    describe('bgVariant', () => {
      it('child BAvatar inherits bgVariant from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {bgVariant: 'primary', variant: null},
          slots: {
            default: () => h(BAvatar, {variant: null}),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('bg-primary')
      })
    })

    describe('textVariant', () => {
      it('child BAvatar inherits textVariant from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {textVariant: 'danger', variant: null},
          slots: {
            default: () => h(BAvatar, {variant: null}),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('text-danger')
      })
    })

    describe('rounded', () => {
      it('child BAvatar inherits rounded from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {rounded: 'pill'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('rounded-pill')
      })

      it('group rounded overrides child BAvatar rounded', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {rounded: 'pill'},
          slots: {
            default: () => h(BAvatar, {rounded: 'circle'}),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('rounded-pill')
        expect(avatar.classes()).not.toContain('rounded-circle')
      })

      it('child BAvatar inherits roundedTop from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {roundedTop: 'pill'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('rounded-top-pill')
      })

      it('child BAvatar inherits roundedBottom from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {roundedBottom: 'pill'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('rounded-bottom-pill')
      })

      it('child BAvatar inherits roundedStart from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {roundedStart: 'pill'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('rounded-start-pill')
      })

      it('child BAvatar inherits roundedEnd from group', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {roundedEnd: 'pill'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('rounded-end-pill')
      })
    })

    describe('overlap margin on children', () => {
      it('child BAvatar has negative margin styles from group overlap', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {size: '40px', overlap: 0.4},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        const style = avatar.attributes('style')
        // overlapScale = 0.4 / 2 = 0.2
        expect(style).toContain('calc(40px * -0.2)')
      })

      it('child BAvatar has no margin when overlap is 0', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {size: '40px', overlap: 0},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        const style = avatar.attributes('style')
        // overlapScale = 0 / 2 = 0, so no margin style
        expect(style).not.toContain('margin-left')
        expect(style).not.toContain('margin-right')
      })

      it('multiple BAvatar children all get overlap margins', () => {
        const wrapper = mount(BAvatarGroup, {
          props: {size: '40px', overlap: 0.4},
          slots: {
            default: () => [h(BAvatar), h(BAvatar), h(BAvatar)],
          },
        })
        const avatars = wrapper.findAllComponents(BAvatar)
        expect(avatars).toHaveLength(3)
        for (const avatar of avatars) {
          expect(avatar.attributes('style')).toContain('calc(40px * -0.2)')
        }
      })
    })

    describe('prop reactivity through injection', () => {
      it('child BAvatar updates when group size changes', async () => {
        const wrapper = mount(BAvatarGroup, {
          props: {size: '40px'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.attributes('style')).toContain('width: 40px')
        await wrapper.setProps({size: '80px'})
        expect(avatar.attributes('style')).toContain('width: 80px')
      })

      it('child BAvatar updates when group variant changes', async () => {
        const wrapper = mount(BAvatarGroup, {
          props: {variant: 'primary'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('text-bg-primary')
        await wrapper.setProps({variant: 'danger'})
        expect(avatar.classes()).toContain('text-bg-danger')
        expect(avatar.classes()).not.toContain('text-bg-primary')
      })

      it('child BAvatar updates when group square changes', async () => {
        const wrapper = mount(BAvatarGroup, {
          props: {square: false},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).not.toContain('rounded-0')
        await wrapper.setProps({square: true})
        expect(avatar.classes()).toContain('rounded-0')
      })

      it('child BAvatar updates when group rounded changes', async () => {
        const wrapper = mount(BAvatarGroup, {
          props: {rounded: 'circle'},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.classes()).toContain('rounded-circle')
        await wrapper.setProps({rounded: 'pill'})
        expect(avatar.classes()).toContain('rounded-pill')
        expect(avatar.classes()).not.toContain('rounded-circle')
      })

      it('child BAvatar overlap margin updates when group overlap changes', async () => {
        const wrapper = mount(BAvatarGroup, {
          props: {size: '40px', overlap: 0.4},
          slots: {
            default: () => h(BAvatar),
          },
        })
        const avatar = wrapper.findComponent(BAvatar)
        expect(avatar.attributes('style')).toContain('calc(40px * -0.2)')
        await wrapper.setProps({overlap: 0.8})
        // overlapScale = 0.8 / 2 = 0.4
        expect(avatar.attributes('style')).toContain('calc(40px * -0.4)')
      })
    })
  })
})
