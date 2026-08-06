import {describe, expect, it} from 'vitest'
import {ref} from 'vue'
import {useAlignment} from './useAlignment'

describe('useAlignment', () => {
  it('returns empty string when align is undefined', () => {
    const result = useAlignment(undefined)
    expect(result.value).toBe('')
  })

  it('returns justify-content class for start', () => {
    const result = useAlignment('start')
    expect(result.value).toBe('justify-content-start')
  })

  it('returns justify-content class for center', () => {
    const result = useAlignment('center')
    expect(result.value).toBe('justify-content-center')
  })

  it('returns justify-content class for end', () => {
    const result = useAlignment('end')
    expect(result.value).toBe('justify-content-end')
  })

  it('returns justify-content class for between', () => {
    const result = useAlignment('between')
    expect(result.value).toBe('justify-content-between')
  })

  it('returns justify-content class for around', () => {
    const result = useAlignment('around')
    expect(result.value).toBe('justify-content-around')
  })

  it('returns justify-content class for evenly', () => {
    const result = useAlignment('evenly')
    expect(result.value).toBe('justify-content-evenly')
  })

  it('is reactive to ref changes', () => {
    const align = ref<'start' | 'center' | undefined>('start')
    const result = useAlignment(align)

    expect(result.value).toBe('justify-content-start')

    align.value = 'center'
    expect(result.value).toBe('justify-content-center')

    align.value = undefined
    expect(result.value).toBe('')
  })
})
