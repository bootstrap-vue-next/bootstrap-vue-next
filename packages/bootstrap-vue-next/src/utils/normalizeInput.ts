import type {Numberish} from 'src/types'

export default (
  v: Numberish | null,
  modelModifiers: Record<'number' | 'lazy' | 'trim', true | undefined>
) => {
  if (v === null) return
  let update = v
  if (modelModifiers.trim) update = update.toString().trim()
  if (modelModifiers.number && typeof update === 'string' && update !== '') {
    const parsed = Number.parseFloat(update)
    update = Number.isNaN(parsed) ? update : parsed
  }
  return update
}
