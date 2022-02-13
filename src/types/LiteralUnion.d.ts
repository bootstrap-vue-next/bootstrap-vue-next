type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>)

export default LiteralUnion
