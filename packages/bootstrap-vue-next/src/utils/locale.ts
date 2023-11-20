import {RX_STRIP_LOCALE_MODS} from '../constants/regex'
import {toString} from './stringUtils'

// Languages that are RTL
const RTL_LANGS = [
  'ar',
  'az',
  'ckb',
  'fa',
  'he',
  'ks',
  'lrc',
  'mzn',
  'ps',
  'sd',
  'te',
  'ug',
  'ur',
  'yi',
].map((locale) => locale.toLowerCase())

// Returns true if the locale is RTL
/**
 * @deprecated -- there's probably a better way to do this, but I also don't know what its for
 */
export const isLocaleRTL = (locale: string) => {
  // Determines if the locale is RTL (only single locale supported)
  const parts = toString(locale).toLowerCase().replace(RX_STRIP_LOCALE_MODS, '').split('-')
  const locale1 = parts.slice(0, 2).join('-')
  const [locale2] = parts
  return RTL_LANGS.includes(locale1) || RTL_LANGS.includes(locale2)
}
