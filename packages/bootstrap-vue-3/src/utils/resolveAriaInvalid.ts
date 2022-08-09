import type {AriaInvalid} from '../types'

export default (
  ariaInvalid?: AriaInvalid,
  state?: boolean
): Exclude<AriaInvalid, ''> | undefined => {
  if (ariaInvalid === true || ariaInvalid === 'true' || ariaInvalid === '') {
    return 'true'
  }
  if (ariaInvalid === 'grammar' || ariaInvalid === 'spelling') {
    return ariaInvalid
  }

  const computedState = typeof state === 'boolean' ? state : null
  return computedState === false ? 'true' : ariaInvalid
}
