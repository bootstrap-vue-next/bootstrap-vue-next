import {afterEach, describe, expect, it} from 'vitest'
import {enableAutoUnmount, mount} from '@vue/test-utils'
import BFormCheckbox from './BFormCheckbox.vue'
import BFormCheckboxGroup from './BFormCheckboxGroup.vue'

describe('form-checkbox-group', () => {
  enableAutoUnmount(afterEach)

  describe('options prop', () => {
    it('renders strings', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: ['0', '1', '2'],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      checkboxes.forEach((element, index) => {
        expect(element.text()).toBe(index.toString())
      })
    })

    it('renders numbers', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [0, 1, 2],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      checkboxes.forEach((element, index) => {
        expect(element.text()).toBe(index.toString())
      })
    })

    it('renders objects', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [
            {
              text: '0',
            },
            {
              text: '1',
            },
            {
              text: '2',
            },
          ],
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      checkboxes.forEach((element, index) => {
        expect(element.text()).toBe(index.toString())
      })
    })

    it('renders objects that uses slots options()', async () => {
      const wrapper = mount(BFormCheckboxGroup, {
        props: {
          options: [
            {
              text: '0',
            },
            {
              text: '1',
            },
            {
              text: '2',
            },
          ],
        },
        slots: {
          'option()': 'foo',
          'option(0)': 'bar',
          'option(2)': 'buzz',
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes[0].text()).toBe('bar')
      expect(checkboxes[1].text()).toBe('foo')
      expect(checkboxes[2].text()).toBe('buzz')
    })
  })
})
