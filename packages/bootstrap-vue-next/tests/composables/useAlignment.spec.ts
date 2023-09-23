import {useAlignment} from '../../src/composables'
import {describe, expect, it} from 'vitest'
import {reactive} from 'vue'
import type {AlignmentJustifyContent} from '../../src/types'

describe('useAlignment blackbox test', () => {
  // To try to ensure it is ComputedRef
  it('value to contain property value', () => {
    const prop: {value: AlignmentJustifyContent} = {value: 'center'}
    const computedRef = useAlignment(() => prop.value)
    expect(computedRef).toHaveProperty('value')
  })

  it('value of center returns justify-content-center', () => {
    const prop: {value: AlignmentJustifyContent} = {value: 'center'}
    const computedRef = useAlignment(() => prop.value)
    expect(computedRef.value).toBe('justify-content-center')
  })

  it('value of end returns justify-content-end', () => {
    const prop: {value: AlignmentJustifyContent} = {value: 'end'}
    const computedRef = useAlignment(() => prop.value)
    expect(computedRef.value).toBe('justify-content-end')
  })

  it('value of start returns justify-content-start', () => {
    const prop: {value: AlignmentJustifyContent} = {value: 'start'}
    const computedRef = useAlignment(() => prop.value)
    expect(computedRef.value).toBe('justify-content-start')
  })

  it('value of fill returns justify-content-start', () => {
    const prop: {value: AlignmentJustifyContent} = {value: 'around'}
    const computedRef = useAlignment(() => prop.value)
    expect(computedRef.value).toBe('justify-content-around')
  })

  it('value of fill returns justify-content-start', () => {
    const prop: {value: AlignmentJustifyContent} = {value: 'evenly'}
    const computedRef = useAlignment(() => prop.value)
    expect(computedRef.value).toBe('justify-content-evenly')
  })

  it('return value to be reactive', () => {
    const prop: {value: AlignmentJustifyContent} = reactive({value: 'center'})
    const computedRef = useAlignment(() => prop.value)
    expect(computedRef.value).toBe('justify-content-center')
    prop.value = 'end'
    expect(computedRef.value).toBe('justify-content-end')
    prop.value = 'around'
    expect(computedRef.value).toBe('justify-content-around')
    prop.value = 'between'
    expect(computedRef.value).toBe('justify-content-between')
    prop.value = 'evenly'
    expect(computedRef.value).toBe('justify-content-evenly')
    prop.value = 'end'
    expect(computedRef.value).toBe('justify-content-end')
    prop.value = 'start'
    expect(computedRef.value).toBe('justify-content-start')
  })
})
