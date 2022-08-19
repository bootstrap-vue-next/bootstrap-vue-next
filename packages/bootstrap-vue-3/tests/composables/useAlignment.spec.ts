import {useAlignment} from '../../src/composables'
import {describe, expect, it} from 'vitest'
import {reactive, toRef} from 'vue'
import {Alignment} from '../../src/types'

describe('useAlignment blackbox test', () => {
  // To try to ensure it is ComputedRef
  it('value to contain property value', () => {
    const prop: {value: Alignment} = {value: 'center'}
    const value = useAlignment(toRef(prop, 'value'))
    expect(value).toHaveProperty('value')
  })

  it('value to contain property effect', () => {
    const prop: {value: Alignment} = {value: 'center'}
    const value = useAlignment(toRef(prop, 'value'))
    expect(value).toHaveProperty('effect')
  })

  it('value of center returns justify-content-center', () => {
    const prop: {value: Alignment} = {value: 'center'}
    const value = useAlignment(toRef(prop, 'value'))
    expect(value.value).toBe('justify-content-center')
  })

  it('value of end returns justify-content-end', () => {
    const prop: {value: Alignment} = {value: 'end'}
    const value = useAlignment(toRef(prop, 'value'))
    expect(value.value).toBe('justify-content-end')
  })

  it('value of start returns justify-content-start', () => {
    const prop: {value: Alignment} = {value: 'start'}
    const value = useAlignment(toRef(prop, 'value'))
    expect(value.value).toBe('justify-content-start')
  })

  it('value of fill returns justify-content-start', () => {
    const prop: {value: Alignment} = {value: 'fill'}
    const value = useAlignment(toRef(prop, 'value'))
    expect(value.value).toBe('justify-content-start')
  })

  it('return value to be reactive', () => {
    const prop: {value: Alignment} = reactive({value: 'center'})
    const value = useAlignment(toRef(prop, 'value'))
    expect(value.value).toBe('justify-content-center')
    prop.value = 'end'
    expect(value.value).toBe('justify-content-end')
    prop.value = 'fill'
    expect(value.value).toBe('justify-content-start')
    prop.value = 'end'
    expect(value.value).toBe('justify-content-end')
    prop.value = 'start'
    expect(value.value).toBe('justify-content-start')
  })
})
