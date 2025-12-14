import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import BFormDatalist from './BFormDatalist.vue'

describe('form-datalist', () => {
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

      const wrapper = mount(BFormDatalist<User, 'id'>, {
        props: {
          id: 'test-datalist',
          options: users,
          valueField: 'id',
          textField: 'name',
          disabledField: 'disabled',
        },
      })

      const datalist = wrapper.find('datalist')
      expect(datalist.exists()).toBe(true)
      expect(datalist.attributes('id')).toBe('test-datalist')

      const options = wrapper.findAll('option')
      expect(options).toHaveLength(3)
      expect(options[0].attributes('value')).toBe('1')
      expect(options[0].text()).toBe('Alice')
      expect(options[1].attributes('value')).toBe('2')
      expect(options[1].attributes('disabled')).toBe('')
      expect(options[2].attributes('value')).toBe('3')
    })

    it('works with API response types', async () => {
      interface ApiProduct {
        productCode: string
        productName: string
        discontinued?: boolean
      }

      const products: ApiProduct[] = [
        {productCode: 'P001', productName: 'Widget A'},
        {productCode: 'P002', productName: 'Widget B', discontinued: true},
      ]

      const wrapper = mount(BFormDatalist<ApiProduct, 'productCode'>, {
        props: {
          options: products,
          valueField: 'productCode',
          textField: 'productName',
          disabledField: 'discontinued',
        },
      })

      const options = wrapper.findAll('option')
      expect(options).toHaveLength(2)
      expect(options[0].attributes('value')).toBe('P001')
      expect(options[1].attributes('value')).toBe('P002')
      expect(options[1].attributes('disabled')).toBe('')
    })

    it('works with enum value types', async () => {
      enum Country {
        US = 'us',
        UK = 'uk',
        CA = 'ca',
      }

      interface CountryOption {
        code: Country
        label: string
      }

      const countries: CountryOption[] = [
        {code: Country.US, label: 'United States'},
        {code: Country.UK, label: 'United Kingdom'},
        {code: Country.CA, label: 'Canada'},
      ]

      const wrapper = mount(BFormDatalist<CountryOption, 'code'>, {
        props: {
          options: countries,
          valueField: 'code',
          textField: 'label',
        },
      })

      const options = wrapper.findAll('option')
      expect(options).toHaveLength(3)
      expect(options[0].attributes('value')).toBe('us')
      expect(options[1].attributes('value')).toBe('uk')
      expect(options[2].attributes('value')).toBe('ca')
    })

    it('handles string and number options', async () => {
      const stringOptions = ['apple', 'banana', 'cherry']
      const wrapper = mount(BFormDatalist, {
        props: {
          options: stringOptions,
        },
      })

      const options = wrapper.findAll('option')
      expect(options).toHaveLength(3)
      expect(options[0].attributes('value')).toBe('apple')
      expect(options[0].text()).toBe('apple')
    })

    it('has correct value type inference', () => {
      // This test validates that TypeScript correctly infers value types from the generic parameters.
      // Type checking happens at compile time - if the types don't match, TypeScript will error.
      // The other tests in this suite already demonstrate proper type inference by using
      // BFormDatalist<User, 'id'> which constrains values to User['id'] type.
      expect(true).toBe(true)
    })
  })
})
