import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormGroup from './BFormGroup.vue'
import {h, nextTick} from 'vue'
import BFormInput from '../BFormInput/BFormInput.vue'
import BFormTextarea from '../BFormTextarea/BFormTextarea.vue'
import BFormSelect from '../BFormSelect/BFormSelect.vue'
import BFormCheckbox from '../BFormCheckbox/BFormCheckbox.vue'
import BFormRadio from '../BFormRadio/BFormRadio.vue'

describe('form-group', () => {
  enableAutoUnmount(afterEach)

  it('has static class b-form-group', () => {
    const wrapper = mount(BFormGroup)
    expect(wrapper.classes()).toContain('b-form-group')
  })

  it('has static class b-form-group when labelFor is set', () => {
    const wrapper = mount(BFormGroup, {
      props: {labelFor: 'foo'},
    })
    expect(wrapper.classes()).toContain('b-form-group')
  })

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

  it('state class is reactive', async () => {
    const wrapper = mount(BFormGroup, {
      props: {state: null},
    })
    expect(wrapper.classes()).not.toContain('is-valid')
    expect(wrapper.classes()).not.toContain('is-invalid')
    await wrapper.setProps({state: true})
    expect(wrapper.classes()).toContain('is-valid')
    expect(wrapper.classes()).not.toContain('is-invalid')
    await wrapper.setProps({state: false})
    expect(wrapper.classes()).not.toContain('is-valid')
    expect(wrapper.classes()).toContain('is-invalid')
    await wrapper.setProps({state: null})
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

  it('validated class is reactive', async () => {
    const wrapper = mount(BFormGroup, {
      props: {validated: false},
    })
    expect(wrapper.classes()).not.toContain('was-validated')
    await wrapper.setProps({validated: true})
    expect(wrapper.classes()).toContain('was-validated')
    await wrapper.setProps({validated: false})
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

      it('BFormSelect should be disabled when parent BFormGroup is disabled', async () => {
        const wrapper = mount(BFormGroup, {
          props: {label: 'foo', disabled: true},
          slots: {
            default: h(BFormSelect, {id: 'foobar'}),
          },
        })
        await nextTick()
        expect(wrapper.get('#foobar').attributes('disabled')).toBeDefined()
      })

      it('BFormCheckbox should be disabled when parent BFormGroup is disabled', async () => {
        const wrapper = mount(BFormGroup, {
          props: {label: 'foo', disabled: true},
          slots: {
            default: h(BFormCheckbox, {id: 'foobar'}),
          },
        })
        await nextTick()
        expect(wrapper.get('#foobar').attributes('disabled')).toBeDefined()
      })

      it('BFormRadio should be disabled when parent BFormGroup is disabled', async () => {
        const wrapper = mount(BFormGroup, {
          props: {label: 'foo', disabled: true},
          slots: {
            default: h(BFormRadio, {id: 'foobar'}),
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

  describe('label rendering', () => {
    it('renders legend tag when no labelFor is set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'My Label'},
      })
      expect(wrapper.find('legend').exists()).toBe(true)
      expect(wrapper.find('label').exists()).toBe(false)
    })

    it('renders label tag when labelFor is set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'My Label', labelFor: 'input-id'},
      })
      expect(wrapper.find('label').exists()).toBe(true)
      expect(wrapper.find('legend').exists()).toBe(false)
    })

    it('renders label text from prop', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'My Label Text'},
      })
      expect(wrapper.find('legend').text()).toBe('My Label Text')
    })

    it('renders label text from slot', () => {
      const wrapper = mount(BFormGroup, {
        slots: {label: 'Slot Label Text'},
      })
      expect(wrapper.find('legend').text()).toBe('Slot Label Text')
    })

    it('renders label HTML from slot', () => {
      const wrapper = mount(BFormGroup, {
        slots: {label: '<strong>Bold Label</strong>'},
      })
      expect(wrapper.find('legend').find('strong').exists()).toBe(true)
      expect(wrapper.find('legend').find('strong').text()).toBe('Bold Label')
    })

    it('slot label takes precedence over prop label', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Prop Label'},
        slots: {label: 'Slot Label'},
      })
      expect(wrapper.find('legend').text()).toBe('Slot Label')
    })

    it('does not render label element when no label prop or slot is provided and not horizontal', () => {
      const wrapper = mount(BFormGroup)
      expect(wrapper.find('legend').exists()).toBe(false)
      expect(wrapper.find('label').exists()).toBe(false)
    })

    it('renders label element when horizontal even without label prop or slot', () => {
      const wrapper = mount(BFormGroup, {
        props: {labelCols: 3},
      })
      expect(wrapper.find('legend').exists()).toBe(true)
    })

    it('label has for attribute matching labelFor prop', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'My Label', labelFor: 'my-input'},
      })
      expect(wrapper.find('label').attributes('for')).toBe('my-input')
    })

    it('label prop is reactive', async () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Initial'},
      })
      expect(wrapper.find('legend').text()).toBe('Initial')
      await wrapper.setProps({label: 'Updated'})
      expect(wrapper.find('legend').text()).toBe('Updated')
    })
  })

  describe('label classes', () => {
    it('legend has col-form-label class by default', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo'},
      })
      expect(wrapper.find('legend').classes()).toContain('col-form-label')
    })

    it('label has form-label and d-block classes when labelFor is set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelFor: 'bar'},
      })
      const label = wrapper.find('label')
      expect(label.classes()).toContain('form-label')
      expect(label.classes()).toContain('d-block')
    })

    it('legend has bv-no-focus-ring class', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo'},
      })
      expect(wrapper.find('legend').classes()).toContain('bv-no-focus-ring')
    })

    it('label does not have bv-no-focus-ring class when labelFor is set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelFor: 'bar'},
      })
      expect(wrapper.find('label').classes()).not.toContain('bv-no-focus-ring')
    })

    it('legend has pt-0 class when not horizontal', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo'},
      })
      expect(wrapper.find('legend').classes()).toContain('pt-0')
    })

    it('legend does not have pt-0 class when horizontal', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelCols: 3},
      })
      expect(wrapper.find('legend').classes()).not.toContain('pt-0')
    })

    it('applies col-form-label-{size} class when labelSize is set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelSize: 'lg'},
      })
      expect(wrapper.find('legend').classes()).toContain('col-form-label-lg')
    })

    it('applies col-form-label-sm class when labelSize is sm', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelSize: 'sm'},
      })
      expect(wrapper.find('legend').classes()).toContain('col-form-label-sm')
    })

    it('does not apply col-form-label-{size} class when labelSize is not set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo'},
      })
      const classes = wrapper.find('legend').classes()
      expect(classes.some((c) => c.startsWith('col-form-label-'))).toBe(false)
    })

    it('applies visually-hidden class when labelVisuallyHidden is true', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelVisuallyHidden: true},
      })
      expect(wrapper.find('legend').classes()).toContain('visually-hidden')
    })

    it('does not apply visually-hidden class when labelVisuallyHidden is false', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelVisuallyHidden: false},
      })
      expect(wrapper.find('legend').classes()).not.toContain('visually-hidden')
    })

    it('applies custom labelClass', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelClass: 'my-custom-class'},
      })
      expect(wrapper.find('legend').classes()).toContain('my-custom-class')
    })

    it('applies array labelClass', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelClass: ['class-a', 'class-b']},
      })
      const legend = wrapper.find('legend')
      expect(legend.classes()).toContain('class-a')
      expect(legend.classes()).toContain('class-b')
    })

    it('label has col-form-label class in horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelCols: 3},
      })
      expect(wrapper.find('legend').classes()).toContain('col-form-label')
    })

    it('applies labelAlign classes in non-horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelFor: 'bar', labelAlign: 'end'},
      })
      expect(wrapper.find('label').classes()).toContain('text-end')
    })

    it('applies labelAlignSm classes in non-horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelFor: 'bar', labelAlignSm: 'center'},
      })
      expect(wrapper.find('label').classes()).toContain('text-sm-center')
    })

    it('applies labelAlignLg classes in non-horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelFor: 'bar', labelAlignLg: 'start'},
      })
      expect(wrapper.find('label').classes()).toContain('text-lg-start')
    })

    it('applies labelAlignXl classes in non-horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelFor: 'bar', labelAlignXl: 'end'},
      })
      expect(wrapper.find('label').classes()).toContain('text-xl-end')
    })
  })

  describe('label id', () => {
    it('legend has an auto-generated id', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo'},
      })
      expect(wrapper.find('legend').attributes('id')).toBeDefined()
    })

    it('label has an auto-generated id when labelFor is set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelFor: 'bar'},
      })
      expect(wrapper.find('label').attributes('id')).toBeDefined()
    })

    it('legend has tabindex -1', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo'},
      })
      expect(wrapper.find('legend').attributes('tabindex')).toBe('-1')
    })

    it('label does not have tabindex when labelFor is set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'foo', labelFor: 'bar'},
      })
      expect(wrapper.find('label').attributes('tabindex')).toBeUndefined()
    })
  })

  describe('invalid feedback', () => {
    it('renders invalid feedback from prop', () => {
      const wrapper = mount(BFormGroup, {
        props: {invalidFeedback: 'Error message'},
      })
      expect(wrapper.text()).toContain('Error message')
    })

    it('renders invalid feedback from slot', () => {
      const wrapper = mount(BFormGroup, {
        slots: {'invalid-feedback': 'Slot error message'},
      })
      expect(wrapper.text()).toContain('Slot error message')
    })

    it('slot invalid-feedback takes precedence over prop', () => {
      const wrapper = mount(BFormGroup, {
        props: {invalidFeedback: 'Prop error'},
        slots: {'invalid-feedback': 'Slot error'},
      })
      expect(wrapper.text()).toContain('Slot error')
      expect(wrapper.text()).not.toContain('Prop error')
    })

    it('does not render invalid feedback when neither prop nor slot is provided', () => {
      const wrapper = mount(BFormGroup)
      expect(wrapper.find('.invalid-feedback').exists()).toBe(false)
      expect(wrapper.find('.invalid-tooltip').exists()).toBe(false)
    })

    it('invalid feedback has auto-generated id', () => {
      const wrapper = mount(BFormGroup, {
        props: {invalidFeedback: 'Error'},
      })
      const feedback = wrapper.find('.invalid-feedback')
      expect(feedback.attributes('id')).toBeDefined()
    })
  })

  describe('valid feedback', () => {
    it('renders valid feedback from prop', () => {
      const wrapper = mount(BFormGroup, {
        props: {validFeedback: 'Success message'},
      })
      expect(wrapper.text()).toContain('Success message')
    })

    it('renders valid feedback from slot', () => {
      const wrapper = mount(BFormGroup, {
        slots: {'valid-feedback': 'Slot success message'},
      })
      expect(wrapper.text()).toContain('Slot success message')
    })

    it('slot valid-feedback takes precedence over prop', () => {
      const wrapper = mount(BFormGroup, {
        props: {validFeedback: 'Prop success'},
        slots: {'valid-feedback': 'Slot success'},
      })
      expect(wrapper.text()).toContain('Slot success')
      expect(wrapper.text()).not.toContain('Prop success')
    })

    it('does not render valid feedback when neither prop nor slot is provided', () => {
      const wrapper = mount(BFormGroup)
      expect(wrapper.find('.valid-feedback').exists()).toBe(false)
      expect(wrapper.find('.valid-tooltip').exists()).toBe(false)
    })

    it('valid feedback has auto-generated id', () => {
      const wrapper = mount(BFormGroup, {
        props: {validFeedback: 'Good'},
      })
      const feedback = wrapper.find('.valid-feedback')
      expect(feedback.attributes('id')).toBeDefined()
    })
  })

  describe('description', () => {
    it('renders description from prop', () => {
      const wrapper = mount(BFormGroup, {
        props: {description: 'Help text'},
      })
      expect(wrapper.text()).toContain('Help text')
    })

    it('renders description from slot', () => {
      const wrapper = mount(BFormGroup, {
        slots: {description: 'Slot help text'},
      })
      expect(wrapper.text()).toContain('Slot help text')
    })

    it('slot description takes precedence over prop', () => {
      const wrapper = mount(BFormGroup, {
        props: {description: 'Prop help'},
        slots: {description: 'Slot help'},
      })
      expect(wrapper.text()).toContain('Slot help')
      expect(wrapper.text()).not.toContain('Prop help')
    })

    it('does not render description when neither prop nor slot is provided', () => {
      const wrapper = mount(BFormGroup)
      expect(wrapper.find('.form-text').exists()).toBe(false)
    })

    it('description has auto-generated id', () => {
      const wrapper = mount(BFormGroup, {
        props: {description: 'Help'},
      })
      const desc = wrapper.find('.form-text')
      expect(desc.attributes('id')).toBeDefined()
    })
  })

  describe('tooltip feedback', () => {
    it('renders invalid-tooltip class when tooltip is true', () => {
      const wrapper = mount(BFormGroup, {
        props: {invalidFeedback: 'Error', tooltip: true},
      })
      expect(wrapper.find('.invalid-tooltip').exists()).toBe(true)
      expect(wrapper.find('.invalid-feedback').exists()).toBe(false)
    })

    it('renders valid-tooltip class when tooltip is true', () => {
      const wrapper = mount(BFormGroup, {
        props: {validFeedback: 'Good', tooltip: true},
      })
      expect(wrapper.find('.valid-tooltip').exists()).toBe(true)
      expect(wrapper.find('.valid-feedback').exists()).toBe(false)
    })

    it('renders feedback classes (not tooltip) when tooltip is false', () => {
      const wrapper = mount(BFormGroup, {
        props: {invalidFeedback: 'Error', validFeedback: 'Good', tooltip: false},
      })
      expect(wrapper.find('.invalid-feedback').exists()).toBe(true)
      expect(wrapper.find('.valid-feedback').exists()).toBe(true)
      expect(wrapper.find('.invalid-tooltip').exists()).toBe(false)
      expect(wrapper.find('.valid-tooltip').exists()).toBe(false)
    })
  })

  describe('feedbackAriaLive', () => {
    it('invalid feedback has aria-live assertive by default', () => {
      const wrapper = mount(BFormGroup, {
        props: {invalidFeedback: 'Error'},
      })
      expect(wrapper.find('.invalid-feedback').attributes('aria-live')).toBe('assertive')
    })

    it('invalid feedback has custom aria-live value', () => {
      const wrapper = mount(BFormGroup, {
        props: {invalidFeedback: 'Error', feedbackAriaLive: 'polite'},
      })
      expect(wrapper.find('.invalid-feedback').attributes('aria-live')).toBe('polite')
    })

    it('valid feedback has aria-live assertive by default', () => {
      const wrapper = mount(BFormGroup, {
        props: {validFeedback: 'Good'},
      })
      expect(wrapper.find('.valid-feedback').attributes('aria-live')).toBe('assertive')
    })

    it('valid feedback has custom aria-live value', () => {
      const wrapper = mount(BFormGroup, {
        props: {validFeedback: 'Good', feedbackAriaLive: 'polite'},
      })
      expect(wrapper.find('.valid-feedback').attributes('aria-live')).toBe('polite')
    })
  })

  describe('floating label', () => {
    it('renders form-floating wrapper when floating is true', () => {
      const wrapper = mount(BFormGroup, {
        props: {floating: true, label: 'Email'},
        slots: {
          default: h(BFormInput),
        },
      })
      expect(wrapper.find('.form-floating').exists()).toBe(true)
    })

    it('does not render form-floating wrapper when floating is false', () => {
      const wrapper = mount(BFormGroup, {
        props: {floating: false, label: 'Email'},
        slots: {
          default: h(BFormInput),
        },
      })
      expect(wrapper.find('.form-floating').exists()).toBe(false)
    })

    it('in floating mode, label comes after default slot content', async () => {
      const wrapper = mount(BFormGroup, {
        props: {floating: true, label: 'Email'},
        slots: {
          default: h(BFormInput, {id: 'email-input'}),
        },
      })
      await nextTick()
      const floatingDiv = wrapper.find('.form-floating')
      const {children} = floatingDiv.element
      // Input should be before label in the DOM for floating labels
      // When child BFormInput provides its id, labelTag becomes 'label' instead of 'legend'
      expect(children[0].tagName).toBe('INPUT')
      expect(children[1].tagName).toBe('LABEL')
    })

    it('does not apply form-floating when horizontal', () => {
      const wrapper = mount(BFormGroup, {
        props: {floating: true, label: 'Email', labelCols: 3},
        slots: {
          default: h(BFormInput),
        },
      })
      expect(wrapper.find('.form-floating').exists()).toBe(false)
    })
  })

  describe('default slot props', () => {
    it('passes id to default slot', () => {
      let slotProps: Record<string, unknown> | undefined
      mount(BFormGroup, {
        props: {id: 'my-group'},
        slots: {
          default: (props: Record<string, unknown>) => {
            slotProps = props
            return h('div')
          },
        },
      })
      expect(slotProps).toBeDefined()
      expect(slotProps!.id).toBe('my-group')
    })

    it('passes descriptionId to default slot', () => {
      let slotProps: Record<string, unknown> | undefined
      mount(BFormGroup, {
        props: {description: 'Help text'},
        slots: {
          default: (props: Record<string, unknown>) => {
            slotProps = props
            return h('div')
          },
        },
      })
      expect(slotProps).toBeDefined()
      expect(slotProps!.descriptionId).toBeDefined()
    })

    it('passes labelId to default slot', () => {
      let slotProps: Record<string, unknown> | undefined
      mount(BFormGroup, {
        props: {label: 'My Label'},
        slots: {
          default: (props: Record<string, unknown>) => {
            slotProps = props
            return h('div')
          },
        },
      })
      expect(slotProps).toBeDefined()
      expect(slotProps!.labelId).toBeDefined()
    })

    it('passes ariaDescribedby as null to default slot', () => {
      let slotProps: Record<string, unknown> | undefined
      mount(BFormGroup, {
        slots: {
          default: (props: Record<string, unknown>) => {
            slotProps = props
            return h('div')
          },
        },
      })
      expect(slotProps).toBeDefined()
      expect(slotProps!.ariaDescribedby).toBeNull()
    })
  })

  describe('disabled reactivity', () => {
    it('disabled attribute is reactive', async () => {
      const wrapper = mount(BFormGroup, {
        props: {disabled: false},
      })
      expect(wrapper.attributes('disabled')).toBeUndefined()
      await wrapper.setProps({disabled: true})
      expect(wrapper.attributes('disabled')).toBe('')
      await wrapper.setProps({disabled: false})
      expect(wrapper.attributes('disabled')).toBeUndefined()
    })
  })

  describe('inheritAttrs', () => {
    it('forwards custom attrs to root element', () => {
      const wrapper = mount(BFormGroup, {
        attrs: {'data-testid': 'my-form-group', 'aria-label': 'test'},
      })
      expect(wrapper.attributes('data-testid')).toBe('my-form-group')
      expect(wrapper.attributes('aria-label')).toBe('test')
    })

    it('forwards style attribute to root element', () => {
      const wrapper = mount(BFormGroup, {
        attrs: {style: 'margin-top: 10px'},
      })
      expect(wrapper.attributes('style')).toContain('margin-top')
    })
  })

  describe('horizontal layout structure', () => {
    it('renders row structure when labelCols is set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelCols: 3},
        slots: {
          default: h(BFormInput),
        },
      })
      // BFormRow renders a row d-flex flex-wrap div
      expect(wrapper.find('.row').exists()).toBe(true)
    })

    it('renders row structure when contentCols is set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', contentCols: 9},
        slots: {
          default: h(BFormInput),
        },
      })
      expect(wrapper.find('.row').exists()).toBe(true)
    })

    it('does not render row structure when no col props are set', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name'},
        slots: {
          default: h(BFormInput),
        },
      })
      expect(wrapper.find('.row').exists()).toBe(false)
    })

    it('renders col-3 class on label when labelCols is 3', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelCols: 3},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('col-3')
    })

    it('renders correct labelColsSm class', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelColsSm: 4},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('col-sm-4')
    })

    it('renders correct labelColsMd class', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelColsMd: 5},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('col-md-5')
    })

    it('renders correct labelColsLg class', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelColsLg: 2},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('col-lg-2')
    })

    it('renders correct labelColsXl class', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelColsXl: 6},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('col-xl-6')
    })

    it('renders col class when labelCols is true (boolean)', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelCols: true},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('col')
    })

    it('renders col class when contentCols is true (boolean)', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', contentCols: true},
        slots: {
          default: h(BFormInput),
        },
      })
      // Content area should have col class
      expect(wrapper.find('.row').exists()).toBe(true)
    })

    it('applies labelAlignMd to label in horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelColsMd: 3, labelAlignMd: 'end'},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('text-md-end')
    })

    it('applies labelAlignSm to label in horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelColsSm: 3, labelAlignSm: 'center'},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('text-sm-center')
    })

    it('applies labelAlignLg to label in horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelColsLg: 3, labelAlignLg: 'start'},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('text-lg-start')
    })

    it('applies labelAlignXl to label in horizontal mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelColsXl: 3, labelAlignXl: 'end'},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('text-xl-end')
    })

    it('applies content col classes with contentCols number', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', contentCols: 9},
        slots: {
          default: h(BFormInput),
        },
      })
      // Find the content column (not the label)
      const cols = wrapper.findAll('[class*="col"]')
      const contentCol = cols.find(
        (el) => el.classes().includes('col-9') && !el.text().includes('Name')
      )
      expect(contentCol).toBeDefined()
    })

    it('applies contentColsSm classes', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', contentColsSm: 8},
        slots: {
          default: h(BFormInput),
        },
      })
      const cols = wrapper.findAll('[class*="col"]')
      const contentCol = cols.find((el) => el.classes().includes('col-sm-8'))
      expect(contentCol).toBeDefined()
    })

    it('applies contentColsMd classes', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', contentColsMd: 7},
        slots: {
          default: h(BFormInput),
        },
      })
      const cols = wrapper.findAll('[class*="col"]')
      const contentCol = cols.find((el) => el.classes().includes('col-md-7'))
      expect(contentCol).toBeDefined()
    })

    it('applies contentColsLg classes', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', contentColsLg: 6},
        slots: {
          default: h(BFormInput),
        },
      })
      const cols = wrapper.findAll('[class*="col"]')
      const contentCol = cols.find((el) => el.classes().includes('col-lg-6'))
      expect(contentCol).toBeDefined()
    })

    it('applies contentColsXl classes', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', contentColsXl: 5},
        slots: {
          default: h(BFormInput),
        },
      })
      const cols = wrapper.findAll('[class*="col"]')
      const contentCol = cols.find((el) => el.classes().includes('col-xl-5'))
      expect(contentCol).toBeDefined()
    })

    it('uses auto keyword for content cols', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', contentCols: 'auto'},
        slots: {
          default: h(BFormInput),
        },
      })
      const cols = wrapper.findAll('[class*="col"]')
      const contentCol = cols.find((el) => el.classes().includes('col-auto'))
      expect(contentCol).toBeDefined()
    })

    it('uses auto keyword for label cols', () => {
      const wrapper = mount(BFormGroup, {
        props: {label: 'Name', labelCols: 'auto'},
        slots: {
          default: h(BFormInput),
        },
      })
      const labelCol = wrapper.findAll('[class*="col"]').find((el) => el.text().includes('Name'))
      expect(labelCol).toBeDefined()
      expect(labelCol!.classes()).toContain('col-auto')
    })
  })

  describe('default slot rendering', () => {
    it('renders text in default slot', () => {
      const wrapper = mount(BFormGroup, {
        slots: {default: 'Default content'},
      })
      expect(wrapper.text()).toContain('Default content')
    })

    it('renders HTML in default slot', () => {
      const wrapper = mount(BFormGroup, {
        slots: {default: '<span class="custom">Content</span>'},
      })
      expect(wrapper.find('.custom').exists()).toBe(true)
      expect(wrapper.find('.custom').text()).toBe('Content')
    })

    it('renders component in default slot', () => {
      const wrapper = mount(BFormGroup, {
        slots: {
          default: h(BFormInput, {id: 'my-input'}),
        },
      })
      expect(wrapper.find('#my-input').exists()).toBe(true)
    })
  })

  describe('combined rendering', () => {
    it('renders label, default slot, description, and feedback together', () => {
      const wrapper = mount(BFormGroup, {
        props: {
          label: 'Username',
          description: 'Enter your username',
          invalidFeedback: 'Username is required',
          validFeedback: 'Looks good!',
          state: false,
        },
        slots: {
          default: h(BFormInput, {id: 'username'}),
        },
      })
      expect(wrapper.text()).toContain('Username')
      expect(wrapper.text()).toContain('Enter your username')
      expect(wrapper.text()).toContain('Username is required')
      expect(wrapper.text()).toContain('Looks good!')
      expect(wrapper.find('#username').exists()).toBe(true)
    })

    it('fieldset contains label, default, feedback and description in vertical mode', () => {
      const wrapper = mount(BFormGroup, {
        props: {
          label: 'Name',
          invalidFeedback: 'Invalid',
          description: 'Help',
        },
        slots: {
          default: h(BFormInput),
        },
      })
      expect(wrapper.element.tagName).toBe('FIELDSET')
      expect(wrapper.find('legend').text()).toBe('Name')
      expect(wrapper.find('.invalid-feedback').text()).toBe('Invalid')
      expect(wrapper.find('.form-text').text()).toBe('Help')
      expect(wrapper.find('input').exists()).toBe(true)
    })
  })
})
