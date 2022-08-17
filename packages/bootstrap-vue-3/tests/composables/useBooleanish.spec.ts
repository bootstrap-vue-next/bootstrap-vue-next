import {useBooleanish} from '../../src/composables'
import {describe, expect, it} from 'vitest'
import {reactive, toRef} from 'vue'
import {Booleanish} from '../../src/types'

describe('useBooleanish blackbox test', () => {
  // To try to ensure it is ComputedRef
  it('value to contain property value', () => {
    const prop: {value: Booleanish} = {value: 'false'}
    const value = useBooleanish(toRef(prop, 'value'))
    expect(value).toHaveProperty('value')
  })

  it('value to contain property effect', () => {
    const prop: {value: Booleanish} = {value: 'false'}
    const value = useBooleanish(toRef(prop, 'value'))
    expect(value).toHaveProperty('effect')
  })

  it("value to return bool false, when 'false'", () => {
    const prop: {value: Booleanish} = {value: 'false'}
    const value = useBooleanish(toRef(prop, 'value'))
    expect(value.value).toBe(false)
  })

  it('value to return bool false, when false', () => {
    const prop: {value: Booleanish} = {value: false}
    const value = useBooleanish(toRef(prop, 'value'))
    expect(value.value).toBe(false)
  })

  it("value to return bool true, when 'true'", () => {
    const prop: {value: Booleanish} = {value: 'true'}
    const value = useBooleanish(toRef(prop, 'value'))
    expect(value.value).toBe(true)
  })

  it('value to return bool true, when true', () => {
    const prop: {value: Booleanish} = {value: 'false'}
    const value = useBooleanish(toRef(prop, 'value'))
    expect(value.value).toBe(false)
  })

  it('value to return bool true, when empty string', () => {
    const prop: {value: Booleanish} = {value: ''}
    const value = useBooleanish(toRef(prop, 'value'))
    expect(value.value).toBe(true)
  })

  it('return value to be reactive', () => {
    const prop: {value: Booleanish} = reactive({value: false})
    const value = useBooleanish(toRef(prop, 'value'))
    expect(value.value).toBe(false)
    prop.value = true
    expect(value.value).toBe(true)
    prop.value = 'false'
    expect(value.value).toBe(false)
    prop.value = ''
    expect(value.value).toBe(true)
    prop.value = false
    expect(value.value).toBe(false)
  })
})
