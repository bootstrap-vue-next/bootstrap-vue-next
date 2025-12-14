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
          option: 'foo',
        },
      })
      const checkboxes = wrapper.findAllComponents(BFormCheckbox)
      expect(checkboxes[0].text()).toBe('foo')
      expect(checkboxes[1].text()).toBe('foo')
      expect(checkboxes[2].text()).toBe('foo')
    })
  })

  describe('type safety with generics', () => {
    interface User {
      id: number
      name: string
      disabled?: boolean
    }

    it('works with basic typed options', async () => {
      const users: User[] = [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob', disabled: true},
        {id: 3, name: 'Charlie'},
      ]

      const wrapper = mount(BFormCheckboxGroup<User, 'id'>, {
        props: {
          options: users,
          valueField: 'id',
          textField: 'name',
          disabledField: 'disabled',
        },
      })

      const checkboxes = wrapper.findAll('input[type="checkbox"]')
      expect(checkboxes).toHaveLength(3)
      expect(checkboxes[0].element.value).toBe('1')
      expect(checkboxes[1].element.value).toBe('2')
      expect(checkboxes[1].element.disabled).toBe(true)
      expect(checkboxes[2].element.value).toBe('3')
    })

    it('works with API response types', async () => {
      interface ApiUser {
        userId: string
        username: string
        active: boolean
      }

      const apiUsers: ApiUser[] = [
        {userId: 'usr_001', username: 'alice@example.com', active: true},
        {userId: 'usr_002', username: 'bob@example.com', active: false},
      ]

      const wrapper = mount(BFormCheckboxGroup<ApiUser, 'userId'>, {
        props: {
          options: apiUsers,
          valueField: 'userId',
          textField: 'username',
        },
      })

      const checkboxes = wrapper.findAll('input[type="checkbox"]')
      expect(checkboxes).toHaveLength(2)
      expect(checkboxes[0].element.value).toBe('usr_001')
      expect(checkboxes[1].element.value).toBe('usr_002')
    })

    it('works with enum value types', async () => {
      enum UserRole {
        Admin = 'admin',
        Editor = 'editor',
        Viewer = 'viewer',
      }

      interface RoleOption {
        value: UserRole
        label: string
      }

      const roleOptions: RoleOption[] = [
        {value: UserRole.Admin, label: 'Administrator'},
        {value: UserRole.Editor, label: 'Editor'},
        {value: UserRole.Viewer, label: 'Viewer'},
      ]

      const wrapper = mount(BFormCheckboxGroup<RoleOption, 'value'>, {
        props: {
          options: roleOptions,
          valueField: 'value',
          textField: 'label',
        },
      })

      const checkboxes = wrapper.findAll('input[type="checkbox"]')
      expect(checkboxes).toHaveLength(3)
      expect(checkboxes[0].element.value).toBe('admin')
      expect(checkboxes[1].element.value).toBe('editor')
      expect(checkboxes[2].element.value).toBe('viewer')
    })

    it('properly handles v-model with typed values', async () => {
      const users: User[] = [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
      ]

      const wrapper = mount(BFormCheckboxGroup<User, 'id'>, {
        props: {
          options: users,
          valueField: 'id',
          textField: 'name',
          modelValue: [1, 3] as const,
        },
      })

      const checkboxes = wrapper.findAll('input[type="checkbox"]')
      expect(checkboxes[0].element.checked).toBe(true)
      expect(checkboxes[1].element.checked).toBe(false)
      expect(checkboxes[2].element.checked).toBe(true)

      await checkboxes[1].setValue(true)
      const emitted = wrapper.emitted('update:modelValue')
      expect(emitted).toBeTruthy()
      expect(emitted?.[0]).toEqual([[1, 3, 2]])
    })
  })
})
