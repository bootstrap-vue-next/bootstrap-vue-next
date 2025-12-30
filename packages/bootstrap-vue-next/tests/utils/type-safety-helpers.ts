/**
 * Shared test utilities for type-safe options components
 */
import {mount} from '@vue/test-utils'
import {expect} from 'vitest'
import type {Component} from 'vue'

/**
 * Standard test interface for typed options
 */
export interface TypedOption {
  name: string
  id: number
  disabled: boolean
}

/**
 * Standard test options array
 */
export const testOptions: TypedOption[] = [
  {name: 'Option 1', id: 1, disabled: false},
  {name: 'Option 2', id: 2, disabled: false},
  {name: 'Option 3', id: 3, disabled: true},
]

/**
 * Alternative test interface for API-style data
 */
export interface ApiOption {
  label: string
  value: string
  isDisabled: boolean
}

/**
 * API-style test options array
 */
export const apiTestOptions: ApiOption[] = [
  {label: 'Red', value: 'red', isDisabled: false},
  {label: 'Green', value: 'green', isDisabled: false},
  {label: 'Blue', value: 'blue', isDisabled: true},
]

/**
 * Enum for test values
 */
export enum TestEnum {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
}

/**
 * Enum-based test options
 */
export interface EnumOption {
  text: string
  value: TestEnum
  disabled: boolean
}

/**
 * Enum test options array
 */
export const enumTestOptions: EnumOption[] = [
  {text: 'First', value: TestEnum.FIRST, disabled: false},
  {text: 'Second', value: TestEnum.SECOND, disabled: false},
  {text: 'Third', value: TestEnum.THIRD, disabled: true},
]

/**
 * Helper to test that options are properly rendered with custom field mapping
 *
 * @param Component - The component to test
 * @param options - The options array to use
 * @param fieldMapping - Field name mappings
 * @param wrapperSelector - CSS selector to find the wrapper element
 * @param optionSelector - CSS selector to find option elements
 * @returns The mounted wrapper
 *
 * @example
 * ```typescript
 * const wrapper = testFieldMapping(
 *   BFormSelect,
 *   testOptions,
 *   { valueField: 'id', textField: 'name', disabledField: 'disabled' },
 *   '.form-select',
 *   'option'
 * )
 * expect(wrapper.findAll('option')).toHaveLength(3)
 * expect(wrapper.find('option[disabled]').text()).toBe('Option 3')
 * ```
 */
export const testFieldMapping = (
  Component: Component,
  options: unknown[],
  fieldMapping: {
    valueField?: string
    textField?: string
    disabledField?: string
  },
  wrapperSelector: string,
  optionSelector: string
) => {
  const wrapper = mount(Component, {
    props: {
      options,
      ...fieldMapping,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  })

  expect(wrapper.find(wrapperSelector).exists()).toBe(true)
  expect(wrapper.findAll(optionSelector).length).toBeGreaterThan(0)

  return wrapper
}
