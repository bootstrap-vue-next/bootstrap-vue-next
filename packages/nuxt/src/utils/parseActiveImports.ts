import type {addImports} from '@nuxt/kit'

type Import = Exclude<Parameters<typeof addImports>[0], unknown[]>

export default <Base extends Record<string, boolean> & {all: boolean}>
(values: Omit<Base, "all">, options: Base, from = 'bootstrap-vue-next'): Import[] => {
	const {all, ...others} = options
  const valuesCopy: Record<string, boolean> = {...values}
  Object.keys(valuesCopy).forEach((el) => (valuesCopy[el] = all))
  const merge: Record<string, boolean> = {...valuesCopy, ...others}
  return Object.entries(merge).filter(([, value]) => value === true).map(([name]) => ({
    name,
    from
  })) as Import[]
}
