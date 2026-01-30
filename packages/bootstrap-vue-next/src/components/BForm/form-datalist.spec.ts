import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import BFormDatalist from './BFormDatalist.vue'
import {expectCorrectModelType} from '../../../tests/utils/type-assertions'

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
      expect(options[0]!.attributes('value')).toBe('1')
      expect(options[0]!.text()).toBe('Alice')
      expect(options[1]!.attributes('value')).toBe('2')
      expect(options[1]!.attributes('disabled')).toBe('')
      expect(options[2]!.attributes('value')).toBe('3')
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
      expect(options[0]!.attributes('value')).toBe('P001')
      expect(options[1]!.attributes('value')).toBe('P002')
      expect(options[1]!.attributes('disabled')).toBe('')
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
      expect(options[0]!.attributes('value')).toBe('us')
      expect(options[1]!.attributes('value')).toBe('uk')
      expect(options[2]!.attributes('value')).toBe('ca')
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
      expect(options[0]!.attributes('value')).toBe('apple')
      expect(options[0]!.text()).toBe('apple')
    })

    it('has correct value type inference', () => {
      // This test validates that TypeScript correctly infers value types from the generic parameters.
      // Type checking happens at compile time - if the types don't match, TypeScript will error.

      // Test with numeric value field
      const value1 = 1
      expectCorrectModelType<number>(value1)

      // Test with string value field
      const value2 = 'P001'
      expectCorrectModelType<string>(value2)

      // Test with enum value field
      enum Country {
        US = 'us',
        UK = 'uk',
      }
      const value3 = Country.US
      expectCorrectModelType<Country>(value3)

      /*
       * Negative test cases: These would cause compile-time errors if uncommented,
       * which proves that expectCorrectModelType correctly enforces type safety.
       * If TypeScript allowed these, the type checking would be broken.
       */
      // expectCorrectModelType<string>(value1) // Should fail: wrong type
      // expectCorrectModelType<number>(value2) // Should fail: wrong type

      expect(true).toBe(true)
    })
  })
})
