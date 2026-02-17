import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormGroup from './BFormGroup.vue'
import {h, nextTick} from 'vue'
import BFormInput from '../BFormInput/BFormInput.vue'
import BFormTextarea from '../BFormTextarea/BFormTextarea.vue'

describe('form-group', () => {
  enableAutoUnmount(afterEach)

  it('tag is default fieldset', () => {
    const wrapper = mount(BFormGroup)
    expect(wrapper.element.tagName).toBe('FIELDSET')
  })

  it('tag is default div', () => {
    const wrapper = mount(BFormGroup, {
      props: {labelFor: 'foobar'},
    })
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has class is-valid when prop state is true', () => {
    const wrapper = mount(BFormGroup, {
      props: {state: true},
    })
    expect(wrapper.classes()).toContain('is-valid')
  })

  it('has class is-invalid when prop state is false', () => {
    const wrapper = mount(BFormGroup, {
      props: {state: false},
    })
    expect(wrapper.classes()).toContain('is-invalid')
  })

  it('legend has class visually-hidden when prop label-visually-hidden is true', () => {
    const wrapper = mount(BFormGroup, {
      props: {label: 'foo', labelVisuallyHidden: true},
    })
    expect(wrapper.get('legend').classes()).toContain('visually-hidden')
  })

  it('does not contain a valid class when prop state is null', () => {
    const wrapper = mount(BFormGroup, {
      props: {state: null},
    })
    expect(wrapper.classes()).not.toContain('is-valid')
    expect(wrapper.classes()).not.toContain('is-invalid')
  })

  it('does not contain a valid class when prop state is undefined', () => {
    const wrapper = mount(BFormGroup, {
      props: {state: undefined},
    })
    expect(wrapper.classes()).not.toContain('is-valid')
    expect(wrapper.classes()).not.toContain('is-invalid')
  })

  it('has class was-validated when prop validated true', () => {
    const wrapper = mount(BFormGroup, {
      props: {validated: true},
    })
    expect(wrapper.classes()).toContain('was-validated')
  })

  it('does not have class was-validated when prop validated false', () => {
    const wrapper = mount(BFormGroup, {
      props: {validated: false},
    })
    expect(wrapper.classes()).not.toContain('was-validated')
  })

  it('attr id is defined by default', () => {
    const wrapper = mount(BFormGroup)
    expect(wrapper.attributes('id')).toBeDefined()
  })

  it('attr id is prop id', () => {
    const wrapper = mount(BFormGroup, {
      props: {id: 'foobar'},
    })
    expect(wrapper.attributes('id')).toBe('foobar')
  })

  it('attr disabled is false by default', () => {
    const wrapper = mount(BFormGroup)
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('attr disabled is true when prop disabled', () => {
    const wrapper = mount(BFormGroup, {
      props: {disabled: true},
    })
    expect(wrapper.attributes('disabled')).toBe('')
  })

  it('attr disabled is undefined when disabled true but prop labelFor exists', () => {
    const wrapper = mount(BFormGroup, {
      props: {disabled: true, labelFor: 'foo'},
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('attr disabled is undefined when disabled false but prop labelFor exists', () => {
    const wrapper = mount(BFormGroup, {
      props: {disabled: false, labelFor: 'foo'},
    })
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('attr role is undefined by default', () => {
    const wrapper = mount(BFormGroup)
    expect(wrapper.attributes('role')).toBeUndefined()
  })

  it('attr role is group when prop labelFor', () => {
    const wrapper = mount(BFormGroup, {
      props: {labelFor: 'foo'},
    })
    expect(wrapper.attributes('role')).toBe('group')
  })

  it('attr aria-invalid is undefined by default', () => {
    const wrapper = mount(BFormGroup)
    expect(wrapper.attributes('aria-invalid')).toBeUndefined()
  })

  it('attr aria-invalid is true when prop ariaInvalid is true', () => {
    const wrapper = mount(BFormGroup, {
      props: {ariaInvalid: true},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('attr aria-invalid is false when prop ariaInvalid is false', () => {
    const wrapper = mount(BFormGroup, {
      props: {ariaInvalid: false},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('false')
  })

  it('attr aria-invalid is grammar when prop ariaInvalid is grammar', () => {
    const wrapper = mount(BFormGroup, {
      props: {ariaInvalid: 'grammar'},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('grammar')
  })

  it('attr aria-invalid is spelling when prop ariaInvalid is spelling', () => {
    const wrapper = mount(BFormGroup, {
      props: {ariaInvalid: 'spelling'},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('spelling')
  })

  it('attr aria-invalid is true when prop state is false', () => {
    const wrapper = mount(BFormGroup, {
      props: {state: false},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('attr aria-invalid is true when prop state is false and prop ariaInvalid is false', () => {
    const wrapper = mount(BFormGroup, {
      props: {state: false, ariaInvalid: false},
    })
    expect(wrapper.attributes('aria-invalid')).toBe('true')
  })

  it('attr aria-labelledby is undefined by default', () => {
    const wrapper = mount(BFormGroup)
    expect(wrapper.attributes('aria-labelledby')).toBeUndefined()
  })

  it('attr aria-labelledby is undefined when prop labelFor', () => {
    const wrapper = mount(BFormGroup, {
      props: {labelFor: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeUndefined()
  })

  it('attr aria-labelledby is defined when has labelCols props but also slot label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        labelCols: 3,
      },
      slots: {label: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has labelColsLg props but also slot label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        labelColsLg: 3,
      },
      slots: {label: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has labelColsMd props but also slot label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        labelColsMd: 3,
      },
      slots: {label: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has labelColsSm props but also slot label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        labelColsSm: 3,
      },
      slots: {label: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has labelColsXl props but also slot label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        labelColsXl: 3,
      },
      slots: {label: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has labelCols props but also prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        labelCols: 3,
        label: 'foo',
      },
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has labelColsLg props but also prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        labelColsLg: 3,
        label: 'foo',
      },
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has labelColsMd props but also prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        labelColsMd: 3,
        label: 'foo',
      },
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has labelColsSm props but also prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        labelColsSm: 3,
        label: 'foo',
      },
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has labelColsXl props but also prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        labelColsXl: 3,
        label: 'foo',
      },
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  // Start contentCols branches

  it('attr aria-labelledby is defined when has contentCols props but also slot label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        contentCols: 3,
      },
      slots: {label: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has contentColsLg props but also slot label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        contentColsLg: 3,
      },
      slots: {label: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has contentColsMd props but also slot label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        contentColsMd: 3,
      },
      slots: {label: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has contentColsSm props but also slot label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        contentColsSm: 3,
      },
      slots: {label: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has contentColsXl props but also slot label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        contentColsXl: 3,
      },
      slots: {label: 'foo'},
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  // End example

  it('attr aria-labelledby is defined when has contentCols props but also prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        contentCols: 3,
        label: 'foo',
      },
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has contentColsLg props but also prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        contentColsLg: 3,
        label: 'foo',
      },
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has contentColsMd props but also prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        contentColsMd: 3,
        label: 'foo',
      },
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has contentColsSm props but also prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        contentColsSm: 3,
        label: 'foo',
      },
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  it('attr aria-labelledby is defined when has contentColsXl props but also prop label', () => {
    const wrapper = mount(BFormGroup, {
      props: {
        contentColsXl: 3,
        label: 'foo',
      },
    })
    expect(wrapper.attributes('aria-labelledby')).toBeDefined()
  })

  describe('provide functionality', () => {
    it('label should automatically inherit input id', async () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo'},
        slots: {
          default: h(BFormInput, {id: 'foobar'}),
        },
      })
      await nextTick()
      expect(wrapper.get('label').attributes('for')).toBe('foobar')
      const textArea = mount(BFormGroup, {
        props: {label: 'foo'},
        slots: {
          default: h(BFormTextarea, {id: 'foobar'}),
        },
      })
      await nextTick()
      expect(textArea.get('label').attributes('for')).toBe('foobar')
    })
    it('uses prop labelFor over input id', async () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelFor: 'spam and eggs'},
        slots: {
          default: h(BFormInput, {id: 'foobar'}),
        },
      })
      await nextTick()
      expect(wrapper.get('label').attributes('for')).toBe('spam and eggs')
    })

    describe('sub input to receive state of parent', () => {
      it('sub input should receive state of parent', async () => {
        const wrapper = mount(BFormGroup, {
          props: {label: 'foo', labelFor: 'spam and eggs', state: true},
          slots: {
            default: h(BFormInput, {id: 'foobar', state: undefined}),
          },
        })
        await nextTick()
        expect(wrapper.get('#foobar').classes()).toContain('is-valid')
      })

      it('sub input explicit prop state should override parent state', async () => {
        const wrapper = mount(BFormGroup, {
          props: {label: 'foo', labelFor: 'spam and eggs', state: true},
          slots: {
            default: h(BFormInput, {id: 'foobar', state: null}),
          },
        })
        await nextTick()
        expect(wrapper.get('#foobar').classes()).not.toContain('is-valid')
      })
    })

    describe('sub input to receive disabled of parent', () => {
      it('BFormInput should be disabled when parent BFormGroup is disabled', async () => {
        const wrapper = mount(BFormGroup, {
          props: {label: 'foo', disabled: true},
          slots: {
            default: h(BFormInput, {id: 'foobar'}),
          },
        })
        await nextTick()
        expect(wrapper.get('#foobar').attributes('disabled')).toBeDefined()
      })

      it('BFormInput should not be disabled when parent BFormGroup is not disabled', async () => {
        const wrapper = mount(BFormGroup, {
          props: {label: 'foo', disabled: false},
          slots: {
            default: h(BFormInput, {id: 'foobar'}),
          },
        })
        await nextTick()
        expect(wrapper.get('#foobar').attributes('disabled')).toBeUndefined()
      })

      it('BFormTextarea should be disabled when parent BFormGroup is disabled', async () => {
        const wrapper = mount(BFormGroup, {
          props: {label: 'foo', disabled: true},
          slots: {
            default: h(BFormTextarea, {id: 'foobar'}),
          },
        })
        await nextTick()
        expect(wrapper.get('#foobar').attributes('disabled')).toBeDefined()
      })

      it('BFormInput own disabled prop should also disable the input', async () => {
        const wrapper = mount(BFormGroup, {
          props: {label: 'foo', disabled: false},
          slots: {
            default: h(BFormInput, {id: 'foobar', disabled: true}),
          },
        })
        await nextTick()
        expect(wrapper.get('#foobar').attributes('disabled')).toBeDefined()
      })
    })
  })

  describe('horizontal layout', () => {
    it('applies labelAlignMd classes to BCol wrapper in horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {
          label: 'Login:',
          labelFor: 'loginname',
          labelAlignMd: 'end',
          labelColsMd: 5,
          labelColsLg: 3,
        },
        slots: {
          default: h(BFormInput, {id: 'loginname'}),
        },
      })
      // Find the BCol component that wraps the label
      const [labelCol] = wrapper
        .findAll('[class*="col-"]')
        .filter((el) => el.html().includes('Login:'))
      expect(labelCol?.classes()).toContain('text-md-end')
    })

    it('applies user classes to root element in both horizontal and non-horizontal mode', () => {
      // Test horizontal mode
      const wrapperHorizontal = mount(BFormGroup, {
        attrs: {
          class: 'align-items-center custom-class',
        },
        props: {
          label: 'Login:',
          labelFor: 'loginname',
          labelColsMd: 5,
        },
        slots: {
          default: h(BFormInput, {id: 'loginname'}),
        },
      })
      // In horizontal mode, classes should be on root element
      expect(wrapperHorizontal.classes()).toContain('align-items-center')
      expect(wrapperHorizontal.classes()).toContain('custom-class')

      // Test non-horizontal mode
      const wrapper = mount(BFormGroup, {
        attrs: {
          class: 'custom-class',
        },
        props: {
          label: 'Login:',
          labelFor: 'loginname',
        },
        slots: {
          default: h(BFormInput, {id: 'loginname'}),
        },
      })
      // In non-horizontal mode, classes should also be on root
      expect(wrapper.classes()).toContain('custom-class')
    })

    it('applies labelAlign classes to label in non-horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {
          label: 'Login:',
          labelFor: 'loginname',
          labelAlign: 'center',
        },
        slots: {
          default: h(BFormInput, {id: 'loginname'}),
        },
      })
      const label = wrapper.find('label')
      expect(label.classes()).toContain('text-center')
    })
  })

  describe('legend click focus behavior', () => {
    it('does not throw error when legend is clicked in vertical fieldset mode', async () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Username'},
        slots: {
          default: () => h('input', {type: 'text', class: 'form-control'}),
        },
        attachTo: document.body,
      })

      const legend = wrapper.find('legend')
      const input = wrapper.find('input')

      expect(legend.exists()).toBe(true)
      expect(wrapper.element.tagName).toBe('FIELDSET')
      expect(input.exists()).toBe(true)

      // Should not throw - this tests the fix for querySelectorAll on component ref
      await expect(legend.trigger('click')).resolves.not.toThrow()
      wrapper.unmount()
    })

    it('does not throw error when legend is clicked in horizontal fieldset mode', async () => {
      const wrapper = mount(BFormGroup, {
        props: {
          label: 'Username',
          labelColsMd: 3,
        },
        slots: {
          default: () => h('input', {type: 'text', class: 'form-control'}),
        },
        attachTo: document.body,
      })

      const legend = wrapper.find('legend')
      const input = wrapper.find('input')

      expect(legend.exists()).toBe(true)
      expect(wrapper.element.tagName).toBe('FIELDSET')
      expect(input.exists()).toBe(true)

      // This test verifies the fix for accessing $el from BCol component ref
      // Previously would throw: TypeError: content.value.querySelectorAll is not a function
      await expect(legend.trigger('click')).resolves.not.toThrow()
      wrapper.unmount()
    })

    it('does not throw error when legend is clicked with textarea in horizontal fieldset mode', async () => {
      const wrapper = mount(BFormGroup, {
        props: {
          label: 'Comments',
          labelColsMd: 4,
        },
        slots: {
          default: () => h('textarea', {class: 'form-control', rows: 2}),
        },
        attachTo: document.body,
      })

      const legend = wrapper.find('legend')
      const textarea = wrapper.find('textarea')

      expect(legend.exists()).toBe(true)
      expect(wrapper.element.tagName).toBe('FIELDSET')
      expect(textarea.exists()).toBe(true)

      await expect(legend.trigger('click')).resolves.not.toThrow()
      wrapper.unmount()
    })

    it('does not focus when label (not legend) is used with labelFor', async () => {
      const wrapper = mount(BFormGroup, {
        props: {
          label: 'Username',
          labelFor: 'username-input',
          labelColsMd: 3,
        },
        slots: {
          default: h(BFormInput, {id: 'username-input'}),
        },
        attachTo: document.body,
      })

      const label = wrapper.find('label')

      // Should be a label, not a legend
      expect(label.exists()).toBe(true)
      expect(wrapper.find('legend').exists()).toBe(false)

      // Should be a div with role="group", not a fieldset
      expect(wrapper.element.tagName).toBe('DIV')
      expect(wrapper.attributes('role')).toBe('group')

      wrapper.unmount()
    })

    it('does not throw error when clicking legend with no input', async () => {
      const wrapper = mount(BFormGroup, {
        props: {
          label: 'Empty Group',
          labelColsMd: 3,
        },
        attachTo: document.body,
      })

      const legend = wrapper.find('legend')

      // Should not throw
      await expect(legend.trigger('click')).resolves.not.toThrow()
      wrapper.unmount()
    })

    it('does not focus disabled input when legend is clicked', async () => {
      const wrapper = mount(BFormGroup, {
        props: {
          label: 'Username',
          labelColsMd: 3,
        },
        slots: {
          default: h(BFormInput, {disabled: true}),
        },
        attachTo: document.body,
      })

      const legend = wrapper.find('legend')

      await legend.trigger('click')
      await nextTick()

      // Disabled input should not receive focus
      expect(document.activeElement).not.toBe(wrapper.find('input').element)
      wrapper.unmount()
    })

    it('does not focus when clicking on button inside legend', async () => {
      const wrapper = mount(BFormGroup, {
        props: {
          label: 'Username',
          labelColsMd: 3,
        },
        slots: {
          label: h('span', ['Username ', h('button', {type: 'button'}, 'Info')]),
          default: h(BFormInput),
        },
        attachTo: document.body,
      })

      const button = wrapper.find('button')
      const input = wrapper.find('input')

      // Clear focus
      document.body.focus()

      await button.trigger('click')
      await nextTick()

      // Button click should not focus the input
      expect(document.activeElement).not.toBe(input.element)
      wrapper.unmount()
    })
  })
})
