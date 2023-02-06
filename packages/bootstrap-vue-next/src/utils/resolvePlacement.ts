import type {Placement} from '@floating-ui/vue'

export default ({
  up = false,
  start = false,
  down = false,
  end = false,
}: {
  up: boolean
  down: boolean
  start: boolean
  end: boolean
}): Placement => {
  if (up && start) {
    return 'top-start'
  }
  if (up && end) {
    return 'top-end'
  }
  if (down && start) {
    return 'bottom-start'
  }
  if (down && end) {
    return 'bottom-end'
  }
  if (up) {
    return 'top'
  }
  if (start) {
    return 'right'
  }
  return 'bottom'
}
