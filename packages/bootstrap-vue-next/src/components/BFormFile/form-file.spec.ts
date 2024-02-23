import { enableAutoUnmount, mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import BFormFile from './BFormFile.vue'

describe('form-file', () => {
  enableAutoUnmount(afterEach)

  it('tag is default div', () => {
    const wrapper = mount(BFormFile)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has class form-control-{type} when prop size', () => {
    const wrapper = mount(BFormFile, {
      props: {size: 'lg'},
    })

    const $input = wrapper.find('input')
    expect($input.classes()).toContain('form-control-lg')
  })

  it('does not have class form-control-{type} when prop size undefined', () => {
    const wrapper = mount(BFormFile, {
      props: {size: undefined},
    })

    const $input = wrapper.find('input')
    expect($input.classes()).not.toContain('form-control-lg')
  })

  it('wrapper has class form-input-file', () => {
    const wrapper = mount(BFormFile)
    expect(wrapper.classes()).toContain('form-input-file')
  })

  describe('input attributes', () => {
    it('has input element', () => {
      const wrapper = mount(BFormFile)
      const $input = wrapper.find('input')
      expect($input.exists()).toBe(true)
    })

    it('input element has attr id', () => {
      const wrapper = mount(BFormFile)
      const $input = wrapper.get('input')
      expect($input.attributes('id')).toBeDefined()
    })

    it('input element attr id contains content from prop id', () => {
      const wrapper = mount(BFormFile, {
        props: {id: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('id')).toBe('foobar')
    })

    it('input element has attr type to be file', () => {
      const wrapper = mount(BFormFile)
      const $input = wrapper.get('input')
      expect($input.attributes('type')).toBe('file')
    })

    it('input element has attr disabled when prop disabled', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBe('')
    })

    it('input element does not have attr disabled when prop disabled is false', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBeUndefined()
    })

    it('input element does not have attr disabled when prop disabled is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {disabled: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('disabled')).toBeUndefined()
    })

    it('input element has attr required when prop name and prop required', () => {
      const wrapper = mount(BFormFile, {
        props: {required: true, name: 'foo'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBe('')
    })

    it('input element does not have attr required when prop name is empty string and prop required', () => {
      const wrapper = mount(BFormFile, {
        props: {required: true, name: ''},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('input element does not have attr required when prop name is undefined and prop required', () => {
      const wrapper = mount(BFormFile, {
        props: {required: true, name: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('input element does not have attr required when prop name and prop required false', () => {
      const wrapper = mount(BFormFile, {
        props: {required: false, name: 'foo'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('input element does not have attr required when prop name and prop required undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {required: undefined, name: 'foo'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('required')).toBeUndefined()
    })

    it('input element has attr name to be prop name', () => {
      const wrapper = mount(BFormFile, {
        props: {name: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBe('foobar')
    })

    it('input element has attr name is undefined when prop name undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {name: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('name')).toBeUndefined()
    })

    it('input element has attr form to be prop form', () => {
      const wrapper = mount(BFormFile, {
        props: {form: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('form')).toBe('foobar')
    })

    it('input element has attr form is undefined when prop form undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {form: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('form')).toBeUndefined()
    })

    it('input element has attr aria-label to be prop ariaLabel', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabel: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-label')).toBe('foobar')
    })

    it('input element has attr aria-label is undefined when prop ariaLabel undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabel: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-label')).toBeUndefined()
    })

    it('input element has attr aria-labelledby to be prop ariaLabelledby', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabelledby: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBe('foobar')
    })

    it('input element has attr aria-labelledby is undefined when prop ariaLabelledby undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabelledby: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBeUndefined()
    })

    it('input element has attr aria-labelledby is undefined when prop ariaLabelledby undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {ariaLabelledby: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-labelledby')).toBeUndefined()
    })

    it('input element has attr value to be prop value', () => {
      const wrapper = mount(BFormFile, {
        props: {value: 'foobar'},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('value')).toBe('foobar')
    })

    it('input element has attr value to be true when value is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {value: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('value')).toBe('true')
    })

    it('input element aria-required when prop name and prop required true', () => {
      const wrapper = mount(BFormFile, {
        props: {name: 'foo', required: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-required')).toBe('true')
    })

    it('input element does not have aria-required when prop name is empty string and prop required true', () => {
      const wrapper = mount(BFormFile, {
        props: {name: '', required: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-required')).toBeUndefined()
    })

    it('input element does not have aria-required when prop name and prop required false', () => {
      const wrapper = mount(BFormFile, {
        props: {name: 'foo', required: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('aria-required')).toBeUndefined()
    })

    it('input element has set attr multiple to true when prop multiple is true', () => {
      const wrapper = mount(BFormFile, {
        props: {multiple: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('multiple')).toBe('true')
    })

    it('input element has set attr multiple to false when prop multiple is false', () => {
      const wrapper = mount(BFormFile, {
        props: {multiple: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('multiple')).toBe('false')
    })

    it('input element has set attr multiple to false when prop multiple is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {multiple: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('multiple')).toBe('false')
    })

    it('input element has set attr capture to true when prop capture is true', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe('true')
    })

    it('input element has set attr capture to false when prop capture is false', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe('false')
    })

    it('input element has set attr capture to false when prop disabled is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {capture: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('capture')).toBe('false')
    })

    it('input element has set attr accept to true when prop accept is true', () => {
      const wrapper = mount(BFormFile, {
        props: {accept: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('accept')).toBe('true')
    })

    it('input element has set attr accept to false when prop accept is false', () => {
      const wrapper = mount(BFormFile, {
        props: {accept: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('accept')).toBe('false')
    })

    it('input element does not have attr accept when prop accept is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {accept: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('accept')).toBeUndefined()
    })

    it('input element has set attr directory to true when prop directory is true', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: true},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBe('true')
    })

    it('input element has set attr directory to false when prop directory is false', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: false},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBe('false')
    })

    it('input element has set attr directory to false when prop directory is undefined', () => {
      const wrapper = mount(BFormFile, {
        props: {directory: undefined},
      })
      const $input = wrapper.get('input')
      expect($input.attributes('directory')).toBe('false')
    })

    it('default has custom attributes transferred input element', async () => {
      const wrapper = mount(BFormFile, {
        propsData: {
          id: 'foo',
          foo: 'bar',
        },
      })

      const $input = wrapper.find('input')
      expect($input.attributes('foo')).toBeDefined()
      expect($input.attributes('foo')).toEqual('bar')
    })
  })

  describe('label attributes', () => {
    it('has label by default', () => {
      const wrapper = mount(BFormFile)
      const $label = wrapper.find('label')
      expect($label.exists()).toBe(true)
    })

    it('has label when has label slot defined', () => {
      const wrapper = mount(BFormFile, {
        props: {labelClass: 'labelClass'},
        slots: {label: 'foo'},
      })
      const $label = wrapper.findComponent('label')
      expect($label.exists()).toBeTruthy()
      expect($label.attributes('class')?.includes('labelClass'))
    })
    it('has label has attr for to be defined by default', () => {
      const wrapper = mount(BFormFile, {
        props: {id: 'fooFile'},
        slots: {default: 'foo'},
      })

      const $input = wrapper.findComponent('input')
      const $label = wrapper.findComponent('label')

      const $labelFor = $label.attributes('for')
      const $inputId = $input.attributes('id')

      expect($labelFor).toBe($inputId)
    })
  })

  describe('file button', () => {
    it('the button is placed on the start when prop placement is start', () => {})
    it('the button is placed on the end when prop placement is end', () => {})
    it('the button is placed on the start when prop placement is undefined', () => {})

    it('the button has value text when prop browser text is defined', () => {})
    it('the button has `Choose` when prop browser text is undefined', () => {})
  })

  describe('model behavior', () => {
    //   it('emits input event when file changed', async () => {
    //     const wrapper = mount(BFormFile, {
    //       propsData: {
    //         id: 'foo'
    //       }
    //     })
    //     const file = new File(['foo'], 'foo.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now()
    //     })
    //     // Emulate the files array
    //     wrapper.vm.setFiles([file])
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     expect(wrapper.emitted('input')[0][0]).toEqual(file)
    //     // Setting to same array of files should not emit event
    //     wrapper.vm.setFiles([file])
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     wrapper.destroy()
    //   })
    //   it('emits input event when files changed in multiple mode', async () => {
    //     const wrapper = mount(BFormFile, {
    //       propsData: {
    //         id: 'foo',
    //         multiple: true
    //       }
    //     })
    //     const file1 = new File(['foo'], 'foo.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now()
    //     })
    //     const file2 = new File(['foobar'], 'foobar.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now() - 1000
    //     })
    //     const files = [file1, file2]
    //     // Emulate the files array
    //     wrapper.vm.setFiles(files)
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     expect(wrapper.emitted('input')[0][0]).toEqual(files)
    //     // Setting to same array of files should not emit event
    //     wrapper.vm.setFiles(files)
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     // Setting to new array of same files should not emit event
    //     wrapper.vm.setFiles([file1, file2])
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     // Setting to array of new files should emit event
    //     wrapper.vm.setFiles(files.slice().reverse())
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input').length).toEqual(2)
    //     expect(wrapper.emitted('input')[1][0]).toEqual(files.slice().reverse())
    //     wrapper.destroy()
    //   })
    //   it('emits input event when files changed in directory mode', async () => {
    //     const wrapper = mount(BFormFile, {
    //       propsData: {
    //         id: 'foo',
    //         multiple: true,
    //         directory: true
    //       }
    //     })
    //     const file1 = new File(['foo'], 'foo.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now()
    //     })
    //     const file2 = new File(['bar'], 'bar.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now() - 1000
    //     })
    //     const file3 = new File(['baz'], 'baz.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now() - 2000
    //     })
    //     const files = [[file1, file2], file3]
    //     // Emulate the files array
    //     wrapper.vm.setFiles(files)
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     expect(wrapper.emitted('input')[0][0]).toEqual(files)
    //     // Setting to same array of files should not emit event
    //     wrapper.vm.setFiles(files)
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     // Setting to new array of same files should not emit event
    //     wrapper.vm.setFiles([[file1, file2], file3])
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     // Setting to array of new files should emit event
    //     wrapper.vm.setFiles(files.slice().reverse())
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input').length).toEqual(2)
    //     expect(wrapper.emitted('input')[1][0]).toEqual(files.slice().reverse())
    //     wrapper.destroy()
    //   })
    //   it('reset() method works in single mode', async () => {
    //     const wrapper = mount(BFormFile, {
    //       propsData: {
    //         id: 'foo',
    //         multiple: false
    //       }
    //     })
    //     const file1 = new File(['foo'], 'foo.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now()
    //     })
    //     const files = [file1]
    //     // Emulate the files array
    //     wrapper.vm.setFiles(files)
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     expect(wrapper.emitted('input')[0][0]).toEqual(file1)
    //     wrapper.vm.reset()
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input').length).toEqual(2)
    //     expect(wrapper.emitted('input')[1][0]).toEqual(null)
    //     wrapper.destroy()
    //   })
    //   it('reset() method works in multiple mode', async () => {
    //     const wrapper = mount(BFormFile, {
    //       propsData: {
    //         id: 'foo',
    //         multiple: true
    //       }
    //     })
    //     const file1 = new File(['foo'], 'foo.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now()
    //     })
    //     const file2 = new File(['<html><body></body></html>'], 'bar.html', {
    //       type: 'text/html',
    //       lastModified: Date.now() - 500
    //     })
    //     const files = [file1, file2]
    //     // Emulate the files array
    //     wrapper.vm.setFiles(files)
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     expect(wrapper.emitted('input')[0][0]).toEqual(files)
    //     wrapper.vm.reset()
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input').length).toEqual(2)
    //     expect(wrapper.emitted('input')[1][0]).toEqual([])
    //     wrapper.destroy()
    //   })
    //   it('reset works in single mode by setting value', async () => {
    //     const wrapper = mount(BFormFile, {
    //       propsData: {
    //         id: 'foo',
    //         value: null
    //       }
    //     })
    //     const file1 = new File(['foo'], 'foo.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now()
    //     })
    //     // Emulate the files array
    //     wrapper.vm.setFiles([file1])
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     expect(wrapper.emitted('input')[0][0]).toEqual(file1)
    //     await wrapper.setProps({ value: null })
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     wrapper.destroy()
    //   })
    //   it('reset works in multiple mode by setting value', async () => {
    //     const wrapper = mount(BFormFile, {
    //       propsData: {
    //         id: 'foo',
    //         value: [],
    //         multiple: true
    //       }
    //     })
    //     const file1 = new File(['foo'], 'foo.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now()
    //     })
    //     const file2 = new File(['foo bar'], 'foobar.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now()
    //     })
    //     const files = [file1, file2]
    //     // Emulate the files array
    //     wrapper.vm.setFiles(files)
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     expect(wrapper.emitted('input')[0][0]).toEqual(files)
    //     await wrapper.setProps({ value: null })
    //     expect(wrapper.emitted('input').length).toEqual(2)
    //     expect(wrapper.emitted('input')[1][0]).toEqual([])
    //     wrapper.vm.setFiles(files)
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input').length).toEqual(3)
    //     expect(wrapper.emitted('input')[2][0]).toEqual(files)
    //     await wrapper.setProps({ value: [] })
    //     expect(wrapper.emitted('input').length).toEqual(4)
    //     expect(wrapper.emitted('input')[3][0]).toEqual([])
    //     wrapper.destroy()
    //   })
    //   it('native reset event works', async () => {
    //     const wrapper = mount(BFormFile, {
    //       propsData: {
    //         id: 'foo',
    //         value: null
    //       }
    //     })
    //     const file1 = new File(['foo'], 'foo.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now()
    //     })
    //     // Emulate the files array
    //     wrapper.vm.setFiles([file1])
    //     await waitNT(wrapper.vm)
    //     expect(wrapper.emitted('input')).toBeDefined()
    //     expect(wrapper.emitted('input').length).toEqual(1)
    //     expect(wrapper.emitted('input')[0][0]).toEqual(file1)
    //     await wrapper.find('input').trigger('reset')
    //     expect(wrapper.emitted('input').length).toEqual(2)
    //     expect(wrapper.emitted('input')[1][0]).toEqual(null)
    //     wrapper.destroy()
    //   })
    //   it('form native reset event triggers BFormFile reset', async () => {
    //     const App = {
    //       render(h) {
    //         return h('form', {}, [h(BFormFile, { id: 'foo' })])
    //       }
    //     }
    //     const wrapper = mount(App, {
    //       attachTo: document.body
    //     })
    //     const file = new File(['foo'], 'foo.txt', {
    //       type: 'text/plain',
    //       lastModified: Date.now()
    //     })
    //     expect(wrapper.element.tagName).toBe('FORM')
    //     const formFile = wrapper.findComponent(BFormFile)
    //     expect(formFile.exists()).toBe(true)
    //     // Emulate the files array
    //     formFile.vm.setFiles([file])
    //     await waitNT(wrapper.vm)
    //     expect(formFile.emitted('input')).toBeDefined()
    //     expect(formFile.emitted('input').length).toEqual(1)
    //     expect(formFile.emitted('input')[0][0]).toEqual(file)
    //     // Trigger form's native reset event
    //     wrapper.find('form').trigger('reset')
    //     await waitNT(wrapper.vm)
    //     expect(formFile.emitted('input').length).toEqual(2)
    //     expect(formFile.emitted('input')[1][0]).toEqual(null)
    //     wrapper.destroy()
    //   })
  })
})
