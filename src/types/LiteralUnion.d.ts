type LiteralUnion<T, U = string> = T | (U & Record<never, never>)

export default LiteralUnion
