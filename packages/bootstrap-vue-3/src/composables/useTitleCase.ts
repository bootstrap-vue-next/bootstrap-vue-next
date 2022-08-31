import {RX_LOWER_UPPER, RX_START_SPACE_WORD, RX_UNDERSCORE} from '../constants/regex'

export default (input: string): string => {
  return input
    .replace(RX_UNDERSCORE, ' ')
    .replace(RX_LOWER_UPPER, (str, $1, $2) => $1 + ' ' + $2)
    .replace(RX_START_SPACE_WORD, (str, $1, $2) => $1 + $2.toUpperCase())
}
