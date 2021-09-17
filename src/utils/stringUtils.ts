import {RX_FIRST_START_SPACE_WORD, RX_LOWER_UPPER, RX_UNDERSCORE} from '../constants/regex'

export const startCase: (str: string) => string = (str) =>
  str
    .replace(RX_UNDERSCORE, ' ')
    .replace(RX_LOWER_UPPER, (str, $1, $2) => `${$1} ${$2}`)
    .replace(RX_FIRST_START_SPACE_WORD, (str, $1, $2) => $1 + $2.toUpperCase())
